import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, Clock, TrendingUp, Users, CheckCircle, BarChart3, ShoppingCart, Smartphone } from 'lucide-react';
import { ScrollReveal } from '@/components/ui/scroll-reveal';
import { motion } from 'framer-motion';
import { scrollToTop } from '@/utils/navigation';

const AGAME = () => {
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
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600">AGAME</span>
              </h1>
              <p className="text-xl text-slate-600 dark:text-slate-300 mb-8">
                How Tracker saved Adrian two days a week and enabled single-person COVID operations
              </p>
              <div className="w-full max-w-2xl mx-auto h-64 overflow-hidden rounded-xl shadow-2xl">
                <img 
                  src="/lovable-uploads/c78cb5cd-6b30-4b76-ab3d-95defabc532a.png" 
                  alt="AGAME embroidery facility"
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
                <div className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-2">2 Days</div>
                <div className="text-slate-600 dark:text-slate-400">Weekly Time Saved</div>
              </Card>
              <Card className="text-center p-6 border-emerald-200 dark:border-emerald-700">
                <TrendingUp className="w-12 h-12 mx-auto mb-4 text-emerald-600" />
                <div className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-2">60%+</div>
                <div className="text-slate-600 dark:text-slate-400">Processing Reduction</div>
              </Card>
              <Card className="text-center p-6 border-emerald-200 dark:border-emerald-700">
                <Users className="w-12 h-12 mx-auto mb-4 text-emerald-600" />
                <div className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-2">1 Person</div>
                <div className="text-slate-600 dark:text-slate-400">COVID Operations</div>
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
                <div className="bg-blue-50 dark:bg-blue-950/30 p-6 rounded-lg border border-blue-200 dark:border-blue-800 mb-6">
                  <p className="text-blue-700 dark:text-blue-300 italic text-lg leading-relaxed">
                    "I got in touch with Tracker because I was frustrated. I wanted to scale the business, but I didn't want to pay for more manual labour, especially when our current system was inefficient."
                  </p>
                  <p className="text-blue-600 dark:text-blue-400 font-medium mt-4">
                    - Adrian, AGAME
                  </p>
                </div>
                <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                  Adrian's teams were spending excessive time on administration and managing orders. Their process relied on 
                  lists and complex spreadsheets to get everything done, which was both time-consuming and inefficient.
                </p>
                <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                  Additionally, Adrian wanted to bring all embroidery and print production in-house rather than outsourcing 
                  to external companies. This presented multiple challenges that needed solving simultaneously.
                </p>
              </Card>
            </ScrollReveal>

            <ScrollReveal>
              <Card className="p-8">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">The Solution</h2>
                <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                  After searching for an ERP solution without success, speaking to Will at Tracker was "like a breath of fresh air." 
                  Will understood the business immediately and provided a solution that fitted perfectly.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-emerald-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-slate-900 dark:text-slate-100">Central Order Management</h4>
                        <p className="text-slate-600 dark:text-slate-400">All orders input into one central location</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <ShoppingCart className="w-6 h-6 text-emerald-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-slate-900 dark:text-slate-100">Webstore Integration</h4>
                        <p className="text-slate-600 dark:text-slate-400">Orders automatically flow from webstore to Tracker</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <Smartphone className="w-6 h-6 text-emerald-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-slate-900 dark:text-slate-100">Shopify Migration</h4>
                        <p className="text-slate-600 dark:text-slate-400">Website moved to Shopify for better integration</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <BarChart3 className="w-6 h-6 text-emerald-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-slate-900 dark:text-slate-100">In-House Production</h4>
                        <p className="text-slate-600 dark:text-slate-400">Brought embroidery and print production in-house</p>
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
                    <h4 className="font-semibold text-emerald-800 dark:text-emerald-200 mb-3">Dramatic Time Savings</h4>
                    <p className="text-emerald-700 dark:text-emerald-300 text-lg leading-relaxed mb-4">
                      "To put Tracker's impact into simple figures, we used to spend 2.5 days a week on manual processing. 
                      Now we spend less than a day."
                    </p>
                    <p className="text-emerald-600 dark:text-emerald-400 font-medium">
                      That's a reduction from 2.5 days to less than 1 day per week - saving over 2 days of human time weekly.
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-3">Operational Benefits</h4>
                      <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                        <li>• Custom items published directly to webstore from Tracker</li>
                        <li>• Shopify Point of Sale for walk-in customers</li>
                        <li>• Streamlined customer collections and sale days</li>
                        <li>• All sales data flows back into Tracker automatically</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-3">Business Impact</h4>
                      <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                        <li>• Better stock management capabilities</li>
                        <li>• Eliminated time-wasting spreadsheets</li>
                        <li>• Cut out manual entry jobs</li>
                        <li>• Significantly reduced errors</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-blue-50 dark:bg-blue-950/30 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
                    <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-3">COVID Resilience</h4>
                    <p className="text-blue-700 dark:text-blue-300 text-lg leading-relaxed">
                      "During 2020, with COVID affecting in-person sales and with my staff on furlough, having Tracker meant 
                      I could pretty much run the business myself. I was dealing with online orders and enquiries from home, 
                      and arranging customer collections once a week in a safe manner."
                    </p>
                  </div>

                  <div className="bg-purple-50 dark:bg-purple-950/30 p-6 rounded-lg border border-purple-200 dark:border-purple-800">
                    <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-3">The Bottom Line</h4>
                    <p className="text-purple-700 dark:text-purple-300 text-lg leading-relaxed italic mb-4">
                      "Without Tracker, we would simply be exhausted now. It revolutionised our operations, got rid of 
                      time-wasting spreadsheets and cut out manual entry jobs."
                    </p>
                    <p className="text-purple-600 dark:text-purple-400 font-medium">
                      "One more benefit of Tracker is getting Will as part of the deal. He brings independent thinking, 
                      clarity and a solid understanding of the market we work in. Our wisest investment."
                    </p>
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
              Ready to Save 2 Days a Week Like AGAME?
            </h2>
            <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
              Discover how Tracker can revolutionize your operations and eliminate time-wasting manual processes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/get-started" onClick={scrollToTop}>
                <Button size="lg" className="bg-white text-emerald-600 hover:bg-emerald-50 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  Start Your Transformation
                </Button>
              </Link>
              <Link to="/contact" onClick={scrollToTop}>
                <Button size="lg" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-emerald-600 transition-all duration-300">
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

export default AGAME;