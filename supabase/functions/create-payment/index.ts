import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import Stripe from "https://esm.sh/stripe@14.21.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { planName, billingCycle } = await req.json();
    
    if (!planName || !billingCycle) {
      throw new Error("Missing required parameters: planName or billingCycle");
    }

    const stripe = new Stripe(Deno.env.get("STRIPE_SECRET_KEY") || "", {
      apiVersion: "2023-10-16",
    });

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

    if (!pricing[planName as keyof typeof pricing]) {
      throw new Error("Invalid plan name");
    }

    const plan = pricing[planName as keyof typeof pricing];
    let totalAmount: number;
    let description: string;

    if (billingCycle === "monthly") {
      // Monthly payment includes first month + onboarding fee
      totalAmount = (plan.monthly + plan.onboarding) * 100; // Convert to cents
      description = `${planName} Plan - Onboarding Fee + First Month`;
    } else {
      // Annual payment includes 10 months + onboarding fee
      totalAmount = (plan.monthly * 10 + plan.onboarding) * 100; // Convert to cents
      description = `${planName} Plan - Onboarding Fee + Annual (10 months)`;
    }

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
      success_url: `${req.headers.get("origin")}/payment-success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.get("origin")}/pricing`,
      metadata: {
        plan_name: planName,
        billing_cycle: billingCycle,
      },
    });

    return new Response(JSON.stringify({ url: session.url }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error) {
    console.error("Error creating payment session:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 500,
    });
  }
});