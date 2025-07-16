
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { toast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Loader2 } from "lucide-react";

const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required").min(2, "Name must be at least 2 characters"),
  email: z.string().min(1, "Email is required").email("Please enter a valid email address"),
  subject: z.string().min(1, "Subject is required").min(3, "Subject must be at least 3 characters"),
  message: z.string().min(1, "Message is required").min(10, "Message must be at least 10 characters")
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [lastSubmissionTime, setLastSubmissionTime] = useState<number>(0);
  const [cooldownRemaining, setCooldownRemaining] = useState(0);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: ""
    }
  });

  const onSubmit = async (data: ContactFormData) => {
    // Check rate limiting
    const now = Date.now();
    const timeSinceLastSubmission = now - lastSubmissionTime;
    const cooldownPeriod = 10000; // 10 seconds

    if (timeSinceLastSubmission < cooldownPeriod) {
      const remaining = Math.ceil((cooldownPeriod - timeSinceLastSubmission) / 1000);
      setCooldownRemaining(remaining);
      toast({
        title: "Please wait",
        description: `You can submit another message in ${remaining} seconds.`,
        variant: "destructive",
      });
      
      // Start countdown
      const countdown = setInterval(() => {
        setCooldownRemaining(prev => {
          if (prev <= 1) {
            clearInterval(countdown);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      
      return;
    }

    setIsSubmitting(true);
    
    try {
      console.log('Contact form submission:', data);
      
      // Send email with form data
      console.log('Calling send-form-emails function...');
      const { data: emailData, error } = await supabase.functions.invoke('send-form-emails', {
        body: {
          type: 'contact',
          ...data
        }
      });

      console.log('Function response:', { emailData, error });

      if (error) {
        console.error('Error sending email:', error);
        toast({
          title: "Error sending message",
          description: `There was an issue sending your message: ${error.message}`,
          variant: "destructive",
        });
      } else {
        console.log('Email sent successfully:', emailData);
        setLastSubmissionTime(now);
        toast({
          title: "Message sent successfully!",
          description: "We'll get back to you as soon as possible."
        });
        form.reset();
      }
    } catch (error) {
      console.error('Error in onSubmit:', error);
      toast({
        title: "Error sending message",
        description: "There was an issue sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-zinc-900 p-8 rounded-lg border border-zinc-800 shadow-md">
      <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField control={form.control} name="name" render={({
            field
          }) => <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Your name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>} />
            <FormField control={form.control} name="email" render={({
            field
          }) => <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Your email" type="email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>} />
          </div>
          <FormField control={form.control} name="subject" render={({
          field
        }) => <FormItem>
                <FormLabel>Subject</FormLabel>
                <FormControl>
                  <Input placeholder="Subject" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>} />
          <FormField control={form.control} name="message" render={({
          field
        }) => <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea placeholder="Your message" className="min-h-[150px]" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>} />
          <Button 
            type="submit" 
            variant="gold" 
            className="w-full md:w-auto" 
            disabled={isSubmitting || cooldownRemaining > 0}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Sending...
              </>
            ) : cooldownRemaining > 0 ? (
              `Wait ${cooldownRemaining}s`
            ) : (
              "Send Message"
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default ContactForm;
