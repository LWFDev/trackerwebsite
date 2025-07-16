
import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { toast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const ContactForm = () => {
  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: ""
    }
  });

  const onSubmit = async (data) => {
    try {
      console.log(data);
      
      // Send email with form data
      const { data: emailData, error } = await supabase.functions.invoke('send-form-emails', {
        body: {
          type: 'contact',
          ...data
        }
      });

      if (error) {
        console.error('Error sending email:', error);
        toast({
          title: "Error sending message",
          description: "There was an issue sending your message. Please try again.",
          variant: "destructive",
        });
      } else {
        toast({
          title: "Message sent",
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
          <Button type="submit" variant="gold" className="w-full md:w-auto">
            Send Message
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default ContactForm;
