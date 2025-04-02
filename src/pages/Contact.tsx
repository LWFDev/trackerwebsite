import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const ContactPage = () => {
  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: ""
    }
  });

  const onSubmit = data => {
    console.log(data);
    toast({
      title: "Message sent",
      description: "We'll get back to you as soon as possible."
    });
    form.reset();
  };

  return <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <div className="pt-24 pb-16 bg-zinc-900 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute w-[600px] h-[600px] rounded-full bg-[#D4AF37]/5 blur-[120px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F2D675]">Touch</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
            We're here to help with any questions about our platform
          </p>
        </div>
      </div>

      {/* Contact Form and Info Section */}
      <div className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
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

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-zinc-800 p-3 rounded-md mr-4">
                      <Mail className="h-5 w-5 text-[#D4AF37]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-1">Email</h3>
                      <p className="text-gray-400">support@trackmybusiness.us</p>
                      <p className="text-gray-400">sales@trackmybusiness.us</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-zinc-800 p-3 rounded-md mr-4">
                      <Phone className="h-5 w-5 text-[#D4AF37]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-1">Phone</h3>
                      <p className="text-gray-400">+1 (817) 764-0200</p>
                      <p className="text-gray-400">+1 (555) 987-6543</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-zinc-800 p-3 rounded-md mr-4">
                      <MapPin className="h-5 w-5 text-[#D4AF37]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-1">Office</h3>
                      <p className="text-gray-400">
                        1908 Lone Star Rd. <br />
                        Suite B <br />
                        Mansfield, TX 76063
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-zinc-800 p-3 rounded-md mr-4">
                      <Clock className="h-5 w-5 text-[#D4AF37]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-1">Business Hours</h3>
                      <p className="text-gray-400">Monday - Friday: 9am - 5pm PST</p>
                      <p className="text-gray-400">Saturday - Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Map */}
              <div className="h-[300px] bg-zinc-800 rounded-lg overflow-hidden border border-zinc-700 relative">
                <div className="w-full h-full bg-zinc-800 opacity-80"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <MapPin className="h-12 w-12 text-[#D4AF37] mb-2" />
                  <p className="text-center text-gray-400 max-w-xs">
                    Interactive map would be displayed here <br />
                    (Google Maps or similar integration)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-16 bg-zinc-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F2D675]">Questions</span>
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-zinc-800/50 border border-zinc-700 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">How quickly can I expect a response?</h3>
                <p className="text-gray-400">We typically respond to all inquiries within 24 hours during business days. For urgent matters, please call our support line.</p>
              </div>
              <div className="bg-zinc-800/50 border border-zinc-700 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Do you offer on-site technical support?</h3>
                <p className="text-gray-400">Yes, we provide on-site technical support for enterprise customers. Contact our sales team to learn more about our support packages.</p>
              </div>
              <div className="bg-zinc-800/50 border border-zinc-700 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Can I schedule a demo?</h3>
                <p className="text-gray-400">Absolutely! You can schedule a demo by contacting our sales team or filling out the form on this page with "Demo Request" in the subject line.</p>
              </div>
              <div className="bg-zinc-800/50 border border-zinc-700 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">What information should I provide when reporting an issue?</h3>
                <p className="text-gray-400">Please include your account details, a description of the issue, steps to reproduce it, and any error messages you received for faster resolution.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-black relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute w-[500px] h-[500px] rounded-full bg-[#D4AF37]/5 blur-[100px] top-1/2 -left-1/4 transform -translate-y-1/2"></div>
          <div className="absolute w-[500px] h-[500px] rounded-full bg-[#D4AF37]/5 blur-[100px] bottom-0 -right-1/4"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Need <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F2D675]">Custom Solutions</span>?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Our team is ready to help you find the perfect solution for your business needs. Let's schedule a call to discuss your requirements.
            </p>
            <Button variant="gold" size="lg" className="font-medium">
              Schedule a Call
            </Button>
          </div>
        </div>
      </div>
    </div>;
};

export default ContactPage;
