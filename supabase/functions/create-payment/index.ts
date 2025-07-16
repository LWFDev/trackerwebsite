
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import Stripe from "https://esm.sh/stripe@14.21.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

// Helper function for detailed logging
const logStep = (step: string, details?: any) => {
  const detailsStr = details ? ` - ${JSON.stringify(details)}` : '';
  console.log(`[CREATE-PAYMENT] ${step}${detailsStr}`);
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    logStep("Function started");
    
    const stripeKey = Deno.env.get("STRIPE_SECRET_KEY");
    if (!stripeKey) {
      logStep("ERROR: STRIPE_SECRET_KEY not found in environment");
      throw new Error("STRIPE_SECRET_KEY is not configured in Supabase secrets");
    }
    logStep("Stripe key found", { keyLength: stripeKey.length });

    const requestBody = await req.json();
    logStep("Request body received", requestBody);
    
    const { planName, billingCycle } = requestBody;
    
    // Validate required parameters
    if (!planName || !billingCycle) {
      logStep("ERROR: Missing required parameters", { planName, billingCycle });
      throw new Error("Missing required parameters: planName or billingCycle");
    }
    logStep("Parameters validated", { planName, billingCycle });

    // Normalize plan name for case-insensitive matching
    const normalizedPlanName = planName.charAt(0).toUpperCase() + planName.slice(1).toLowerCase();
    logStep("Plan name normalized", { original: planName, normalized: normalizedPlanName });

    const stripe = new Stripe(stripeKey, {
      apiVersion: "2023-10-16",
    });
    logStep("Stripe client initialized");

    // Pricing configuration
    const pricing = {
      Starter: {
        monthly: 799,
        onboarding: 2500
      },
      Decorator: {
        monthly: 1999,
        onboarding: 4500
      }
    };
    logStep("Pricing configuration loaded", pricing);

    if (!pricing[normalizedPlanName as keyof typeof pricing]) {
      logStep("ERROR: Invalid plan name", { 
        planName: normalizedPlanName, 
        availablePlans: Object.keys(pricing) 
      });
      throw new Error(`Invalid plan name: ${normalizedPlanName}. Available plans: ${Object.keys(pricing).join(', ')}`);
    }

    const plan = pricing[normalizedPlanName as keyof typeof pricing];
    logStep("Plan found", { planName: normalizedPlanName, plan });
    
    let totalAmount: number;
    let description: string;

    // Calculate pricing based on billing cycle
    if (billingCycle === "monthly") {
      // Monthly payment includes first month + onboarding fee
      totalAmount = (plan.monthly + plan.onboarding) * 100; // Convert to cents
      description = `${normalizedPlanName} Plan - Onboarding Fee + First Month`;
    } else if (billingCycle === "annually") {
      // Annual payment includes 12 months + onboarding fee
      totalAmount = (plan.monthly * 12 + plan.onboarding) * 100; // Convert to cents
      description = `${normalizedPlanName} Plan - Onboarding Fee + Annual (12 months)`;
    } else {
      logStep("ERROR: Invalid billing cycle", { billingCycle });
      throw new Error(`Invalid billing cycle: ${billingCycle}. Must be 'monthly' or 'annually'`);
    }
    
    logStep("Pricing calculated", { totalAmount, description, billingCycle });

    try {
      logStep("Creating Stripe checkout session", {
        totalAmount,
        description,
        origin: req.headers.get("origin")
      });

      const session = await stripe.checkout.sessions.create({
        customer_creation: 'always',
        line_items: [
          {
            price_data: {
              currency: "usd",
              product_data: {
                name: description,
              },
              unit_amount: totalAmount,
            },
            quantity: 1,
          },
        ],
        mode: "payment",
        success_url: `${req.headers.get("origin")}/`,
        cancel_url: `${req.headers.get("origin")}/pricing`,
        metadata: {
          plan_name: normalizedPlanName,
          billing_cycle: billingCycle,
        },
      });

      logStep("Stripe session created successfully", { 
        sessionId: session.id, 
        url: session.url 
      });

      return new Response(JSON.stringify({ url: session.url }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 200,
      });
    } catch (stripeError) {
      logStep("ERROR: Stripe API error", { 
        error: stripeError.message, 
        type: stripeError.type,
        code: stripeError.code 
      });
      throw new Error(`Stripe API error: ${stripeError.message}`);
    }
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    logStep("ERROR in create-payment function", { message: errorMessage });
    console.error("Error creating payment session:", error);
    
    return new Response(JSON.stringify({ 
      error: errorMessage,
      timestamp: new Date().toISOString()
    }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 500,
    });
  }
});
