import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, Clock, TrendingUp, Users, CheckCircle, Package } from 'lucide-react';
import { ScrollReveal } from '@/components/ui/scroll-reveal';
import { motion } from 'framer-motion';
import { scrollToTop } from '@/utils/navigation';

const PureOptical = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-slate-50/30 to-emerald-50/20 dark:from-black dark:via-slate-950/30 dark:to-emerald-950/20">
      {/* Hero Section */}
      <section className="pt-32 md:pt-36 pb-16">
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
                Pure <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600">Optical</span>
              </h1>
              <p className="text-xl text-slate-600 dark:text-slate-300 mb-8">
                How an e-commerce business achieved 233% productivity increase and 10x faster processing
              </p>
              <div className="w-full max-w-2xl mx-auto h-64 overflow-hidden rounded-xl shadow-2xl">
                <img 
                  src="/lovable-uploads/4c72cfff-437a-4e17-93f7-0c5dff15b378.png" 
                  alt="Pure Optical team"
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
                <TrendingUp className="w-12 h-12 mx-auto mb-4 text-emerald-600" />
                <div className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-2">233%</div>
                <div className="text-slate-600 dark:text-slate-400">Productivity Increase</div>
              </Card>
              <Card className="text-center p-6 border-emerald-200 dark:border-emerald-700">
                <Clock className="w-12 h-12 mx-auto mb-4 text-emerald-600" />
                <div className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-2">10x</div>
                <div className="text-slate-600 dark:text-slate-400">Faster Processing</div>
              </Card>
              <Card className="text-center p-6 border-emerald-200 dark:border-emerald-700">
                <Package className="w-12 h-12 mx-auto mb-4 text-emerald-600" />
                <div className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-2">50</div>
                <div className="text-slate-600 dark:text-slate-400">Orders/Hour/Person</div>
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
                  Before Tracker, Pure Optical's day-to-day processes were time-consuming and inefficient. 
                  Staff would spend hours picking and packing, creating labels and printing off orders.
                </p>
                <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                  The business was growing rapidly, putting everyone under pressure to get things done as quickly as possible. 
                  This led to more human errors and a lack of accuracy in their fulfillment process.
                </p>
                <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                  As sales grew, they quickly realized that the slow speed and high labor costs of ordering, receiving, 
                  packing and dispatching was fundamentally preventing their business from growing any further.
                </p>
              </Card>
            </ScrollReveal>

            <ScrollReveal>
              <Card className="p-8">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">The Solution</h2>
                <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                  Pure Optical implemented Tracker's comprehensive automation platform, introducing a seamless process 
                  that works for them today and will continue to grow with them going forward.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-emerald-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-slate-900 dark:text-slate-100">Automated Pick & Pack</h4>
                        <p className="text-slate-600 dark:text-slate-400">Streamlined fulfillment process</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-emerald-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-slate-900 dark:text-slate-100">Label Generation</h4>
                        <p className="text-slate-600 dark:text-slate-400">Automatic shipping label creation</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-emerald-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-slate-900 dark:text-slate-100">Order Processing</h4>
                        <p className="text-slate-600 dark:text-slate-400">Complete order automation</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-emerald-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-slate-900 dark:text-slate-100">Scalable Infrastructure</h4>
                        <p className="text-slate-600 dark:text-slate-400">Easy expansion with dispatch stations</p>
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
                    <h4 className="font-semibold text-emerald-800 dark:text-emerald-200 mb-3">"Now we're meeting demand, and scaling up"</h4>
                    <p className="text-emerald-700 dark:text-emerald-300 italic text-lg leading-relaxed">
                      "We can pick and pack 50 orders per hour per person, we calculate Tracker is a minimum of 10 times faster than our old manual process."
                    </p>
                    <p className="text-emerald-600 dark:text-emerald-400 font-medium mt-4">
                      - Adrian, AGAME
                    </p>
                  </div>

                  <div className="bg-blue-50 dark:bg-blue-950/30 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
                    <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-3">"Essential system for any E-Commerce business"</h4>
                    <p className="text-blue-700 dark:text-blue-300 italic text-lg leading-relaxed">
                      "It's a fast and accurate solution, ensuring brilliant customer service by preventing any errors in the dispatch process. 
                      It is also easily scalable by simply adding dispatch stations."
                    </p>
                    <p className="text-blue-600 dark:text-blue-400 font-medium mt-4">
                      - Richard, Founder, Pure Optical
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-3">Performance Metrics</h4>
                      <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                        <li>• 50 orders per hour per person (vs 15 orders per person before)</li>
                        <li>• 233% increase in packing productivity</li>
                        <li>• 6x faster pick and pack process</li>
                        <li>• 10x faster overall processing time</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-3">Business Benefits</h4>
                      <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                        <li>• Total accuracy in dispatch process</li>
                        <li>• Eliminated human errors in fulfillment</li>
                        <li>• Brilliant customer service delivery</li>
                        <li>• Easily scalable infrastructure</li>
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
              Ready to Transform Your Business Like Pure Optical?
            </h2>
            <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
              Discover how Tracker can streamline your operations and multiply your productivity.
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

export default PureOptical;