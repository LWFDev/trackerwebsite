import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactFormRequest {
  type: "contact";
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface OnboardingFormRequest {
  type: "onboarding";
  businessType: string[];
  employeeCount: string;
  yearsInBusiness: string;
  decorationMethods: string[];
  fullName: string;
  email: string;
  phone: string;
  companyName: string;
  username: string;
  receiveUpdates: boolean;
}

type FormRequest = ContactFormRequest | OnboardingFormRequest;

const handler = async (req: Request): Promise<Response> => {
  console.log('Send-form-emails function called:', req.method);
  
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    console.log('Handling CORS preflight request');
    return new Response(null, { headers: corsHeaders });
  }

  try {
    console.log('Processing form submission...');
    const formData: FormRequest = await req.json();
    console.log('Received form data:', JSON.stringify(formData, null, 2));

    // Check if RESEND_API_KEY is available
    const resendKey = Deno.env.get('RESEND_API_KEY');
    if (!resendKey) {
      console.error('RESEND_API_KEY is not configured');
      return new Response(
        JSON.stringify({ error: 'Email service not configured' }),
        { 
          status: 500, 
          headers: { 'Content-Type': 'application/json', ...corsHeaders } 
        }
      );
    }

    let emailResponse;

    if (formData.type === "contact") {
      // Handle contact form submission
      emailResponse = await resend.emails.send({
        from: "TrackerZone Contact <onboarding@resend.dev>",
        to: ["info@mebuis.com"],
        subject: `New Contact Form Submission: ${formData.subject}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${formData.name}</p>
          <p><strong>Email:</strong> ${formData.email}</p>
          <p><strong>Subject:</strong> ${formData.subject}</p>
          <p><strong>Message:</strong></p>
          <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin: 10px 0;">
            ${formData.message.replace(/\n/g, '<br>')}
          </div>
          <hr>
          <p style="font-size: 12px; color: #666;">
            Submitted at: ${new Date().toLocaleString()}
          </p>
        `,
      });
    } else if (formData.type === "onboarding") {
      // Handle onboarding form submission
      emailResponse = await resend.emails.send({
        from: "TrackerZone Onboarding <onboarding@resend.dev>",
        to: ["info@mebuis.com"],
        subject: `New User Registration: ${formData.fullName} - ${formData.companyName}`,
        html: `
          <h2>New User Registration</h2>
          
          <h3>Contact Information</h3>
          <p><strong>Full Name:</strong> ${formData.fullName}</p>
          <p><strong>Email:</strong> ${formData.email}</p>
          <p><strong>Phone:</strong> ${formData.phone}</p>
          <p><strong>Company:</strong> ${formData.companyName}</p>
          <p><strong>Username:</strong> ${formData.username}</p>
          
          <h3>Business Information</h3>
          <p><strong>Business Type:</strong> ${formData.businessType.join(', ')}</p>
          <p><strong>Employee Count:</strong> ${formData.employeeCount}</p>
          <p><strong>Years in Business:</strong> ${formData.yearsInBusiness}</p>
          <p><strong>Decoration Methods:</strong> ${formData.decorationMethods.join(', ')}</p>
          
          <h3>Preferences</h3>
          <p><strong>Receive Updates:</strong> ${formData.receiveUpdates ? 'Yes' : 'No'}</p>
          
          <hr>
          <p style="font-size: 12px; color: #666;">
            Registration completed at: ${new Date().toLocaleString()}
          </p>
        `,
      });
    }

    console.log("Preparing to send email...");
    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true, id: emailResponse?.data?.id }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-form-emails function:", error);
    console.error("Error stack:", error.stack);
    return new Response(
      JSON.stringify({ 
        error: error.message,
        details: error.toString()
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);