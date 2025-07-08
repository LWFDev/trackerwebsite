import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, Clock, TrendingUp, Users, CheckCircle } from 'lucide-react';
import { ScrollReveal } from '@/components/ui/scroll-reveal';
import { motion } from 'framer-motion';

const ABCApparel = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-slate-50/30 to-emerald-50/20 dark:from-black dark:via-slate-950/30 dark:to-emerald-950/20">
      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <Link to="/case-studies" className="inline-flex items-center text-emerald-600 hover:text-emerald-700 mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Case Studies
          </Link>
          
          <motion.div 
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                ABC <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-emerald-600">Apparel</span>
              </h1>
              <p className="text-xl text-slate-600 dark:text-slate-300 mb-8">
                How a custom apparel manufacturer reduced order processing time by 85%
              </p>
              <div className="w-full max-w-2xl mx-auto h-64 overflow-hidden rounded-xl shadow-2xl">
                <img 
                  src="/lovable-uploads/a7a106f9-9817-4302-a992-e1b4320c19cd.png" 
                  alt="ABC Apparel facility"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Overview */}
      <section className="pb-16">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <Card className="text-center p-6 border-emerald-200 dark:border-emerald-700">
                <Clock className="w-12 h-12 mx-auto mb-4 text-emerald-600" />
                <div className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-2">85%</div>
                <div className="text-slate-600 dark:text-slate-400">Time Reduction</div>
              </Card>
              <Card className="text-center p-6 border-emerald-200 dark:border-emerald-700">
                <TrendingUp className="w-12 h-12 mx-auto mb-4 text-emerald-600" />
                <div className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-2">40%</div>
                <div className="text-slate-600 dark:text-slate-400">Revenue Increase</div>
              </Card>
              <Card className="text-center p-6 border-emerald-200 dark:border-emerald-700">
                <Users className="w-12 h-12 mx-auto mb-4 text-emerald-600" />
                <div className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-2">200+</div>
                <div className="text-slate-600 dark:text-slate-400">Happy Customers</div>
              </Card>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Story Content */}
      <section className="pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            
            <ScrollReveal>
              <Card className="p-8">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">The Challenge</h2>
                <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                  ABC Apparel, a growing custom apparel manufacturer, was struggling with their manual order processing system. 
                  What should have taken hours was taking days, leading to frustrated customers and lost revenue opportunities.
                </p>
                <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                  With orders coming in through multiple channels - email, phone, and their website - the team was drowning 
                  in paperwork and spending more time on administration than actual production.
                </p>
              </Card>
            </ScrollReveal>

            <ScrollReveal>
              <Card className="p-8">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">The Solution</h2>
                <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                  ABC Apparel implemented Tracker's comprehensive automation platform, focusing on:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-emerald-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-slate-900 dark:text-slate-100">Automated Order Processing</h4>
                        <p className="text-slate-600 dark:text-slate-400">Streamlined order intake from all channels</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-emerald-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-slate-900 dark:text-slate-100">Inventory Management</h4>
                        <p className="text-slate-600 dark:text-slate-400">Real-time stock tracking and alerts</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-emerald-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-slate-900 dark:text-slate-100">Production Scheduling</h4>
                        <p className="text-slate-600 dark:text-slate-400">Optimized workflow management</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-emerald-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-slate-900 dark:text-slate-100">Customer Portal</h4>
                        <p className="text-slate-600 dark:text-slate-400">Self-service order tracking</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </ScrollReveal>

            <ScrollReveal>
              <Card className="p-8">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">The Results</h2>
                <div className="space-y-6">
                  <div className="bg-emerald-50 dark:bg-emerald-950/30 p-6 rounded-lg border border-emerald-200 dark:border-emerald-800">
                    <h4 className="font-semibold text-emerald-800 dark:text-emerald-200 mb-3">"Game-Changing Transformation"</h4>
                    <p className="text-emerald-700 dark:text-emerald-300 italic text-lg leading-relaxed">
                      "Tracker has completely transformed our workflow. We've gone from taking days to process orders to just a few hours. 
                      Our customers are happier, our team is less stressed, and our revenue has increased by 40%."
                    </p>
                    <p className="text-emerald-600 dark:text-emerald-400 font-medium mt-4">
                      - Sarah Johnson, Operations Manager
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-3">Immediate Impact</h4>
                      <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                        <li>• Order processing time reduced from days to hours</li>
                        <li>• Customer satisfaction scores increased by 65%</li>
                        <li>• Staff productivity improved by 75%</li>
                        <li>• Inventory accuracy reached 99.5%</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-3">Long-term Benefits</h4>
                      <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                        <li>• Scaled operations without hiring more staff</li>
                        <li>• Reduced operational costs by 30%</li>
                        <li>• Improved cash flow through faster processing</li>
                        <li>• Enhanced data visibility and reporting</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-emerald-600 to-green-500">
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business Like ABC Apparel?
            </h2>
            <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
              Discover how Tracker can streamline your operations and boost your revenue.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/get-started">
                <Button size="lg" variant="outline" className="bg-white text-emerald-600 hover:bg-slate-50 border-0">
                  Start Your Transformation
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Contact Sales
                </Button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default ABCApparel;