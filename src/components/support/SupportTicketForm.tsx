
import React from 'react';
import { ScrollReveal } from '@/components/ui/scroll-reveal';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Send, Upload } from 'lucide-react';

const SupportTicketForm = () => {
  const modules = [
    'Sales Orders', 'Warehouse', 'Customer Database', 'Base Garments', 
    'Logos', 'Product Designer', 'Inventory', 'Production', 
    'Suppliers', 'Purchase Orders', 'Artworkers', 'Customer Portal'
  ];

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <ScrollReveal direction="up" distance="30px" duration={600}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Submit a{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-gold-light">
                Support Ticket
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Can't find what you're looking for? Submit a support ticket and our team will get back to you quickly.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" distance="30px" duration={600} delay={200}>
          <div className="max-w-4xl mx-auto">
            <Card className="bg-zinc-900/50 border-zinc-700/50">
              <CardHeader>
                <CardTitle className="text-2xl text-white">Support Request Form</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-white">Full Name *</Label>
                    <Input 
                      id="name"
                      placeholder="Enter your full name"
                      className="bg-zinc-800/50 border-zinc-700 text-white placeholder:text-gray-400"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-white">Email Address *</Label>
                    <Input 
                      id="email"
                      type="email"
                      placeholder="Enter your email address"
                      className="bg-zinc-800/50 border-zinc-700 text-white placeholder:text-gray-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-white">Company (Optional)</Label>
                    <Input 
                      id="company"
                      placeholder="Enter your company name"
                      className="bg-zinc-800/50 border-zinc-700 text-white placeholder:text-gray-400"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="priority" className="text-white">Priority Level *</Label>
                    <Select>
                      <SelectTrigger className="bg-zinc-800/50 border-zinc-700 text-white">
                        <SelectValue placeholder="Select priority level" />
                      </SelectTrigger>
                      <SelectContent className="bg-zinc-800 border-zinc-700">
                        <SelectItem value="low" className="text-white hover:bg-zinc-700">Low</SelectItem>
                        <SelectItem value="medium" className="text-white hover:bg-zinc-700">Medium</SelectItem>
                        <SelectItem value="high" className="text-white hover:bg-zinc-700">High</SelectItem>
                        <SelectItem value="urgent" className="text-white hover:bg-zinc-700">Urgent</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="category" className="text-white">Category *</Label>
                    <Select>
                      <SelectTrigger className="bg-zinc-800/50 border-zinc-700 text-white">
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent className="bg-zinc-800 border-zinc-700">
                        <SelectItem value="technical" className="text-white hover:bg-zinc-700">Technical Issue</SelectItem>
                        <SelectItem value="billing" className="text-white hover:bg-zinc-700">Billing</SelectItem>
                        <SelectItem value="feature" className="text-white hover:bg-zinc-700">Feature Request</SelectItem>
                        <SelectItem value="general" className="text-white hover:bg-zinc-700">General Inquiry</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="module" className="text-white">Module Affected (Optional)</Label>
                    <Select>
                      <SelectTrigger className="bg-zinc-800/50 border-zinc-700 text-white">
                        <SelectValue placeholder="Select module" />
                      </SelectTrigger>
                      <SelectContent className="bg-zinc-800 border-zinc-700">
                        {modules.map((module) => (
                          <SelectItem 
                            key={module} 
                            value={module.toLowerCase().replace(' ', '-')}
                            className="text-white hover:bg-zinc-700"
                          >
                            {module}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-white">Subject *</Label>
                  <Input 
                    id="subject"
                    placeholder="Brief description of your issue"
                    className="bg-zinc-800/50 border-zinc-700 text-white placeholder:text-gray-400"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description" className="text-white">Detailed Description *</Label>
                  <Textarea 
                    id="description"
                    placeholder="Please provide a detailed description of your issue or question"
                    rows={6}
                    className="bg-zinc-800/50 border-zinc-700 text-white placeholder:text-gray-400"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="steps" className="text-white">Steps to Reproduce (Optional)</Label>
                  <Textarea 
                    id="steps"
                    placeholder="If this is a technical issue, please list the steps to reproduce the problem"
                    rows={4}
                    className="bg-zinc-800/50 border-zinc-700 text-white placeholder:text-gray-400"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="error" className="text-white">Error Message (Optional)</Label>
                  <Textarea 
                    id="error"
                    placeholder="If you received an error message, please paste it here"
                    rows={3}
                    className="bg-zinc-800/50 border-zinc-700 text-white placeholder:text-gray-400"
                  />
                </div>

                <div className="space-y-2">
                  <Label className="text-white">File Attachment (Optional)</Label>
                  <div className="border-2 border-dashed border-zinc-700 rounded-lg p-8 text-center">
                    <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-400 mb-2">Drag and drop files here, or click to browse</p>
                    <p className="text-sm text-gray-500">Maximum file size: 10MB. Supported formats: PNG, JPG, PDF, TXT</p>
                  </div>
                </div>

                <div className="pt-6">
                  <Button 
                    size="lg" 
                    className="w-full group bg-gradient-to-r from-gold to-gold-light hover:from-gold-dark hover:to-gold text-gold-foreground px-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 border-0"
                  >
                    <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                    Submit Support Ticket
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default SupportTicketForm;
