import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, Clock, TrendingUp, Users, CheckCircle, BarChart3 } from 'lucide-react';
import { ScrollReveal } from '@/components/ui/scroll-reveal';
import { motion } from 'framer-motion';

const WoolCool = () => {
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
                Wool<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-emerald-600">Cool</span>
              </h1>
              <p className="text-xl text-slate-600 dark:text-slate-300 mb-8">
                How Tracker made complex systems simple and freed up resources for growth
              </p>
              <div className="w-full max-w-2xl mx-auto h-64 overflow-hidden rounded-xl shadow-2xl">
                <img 
                  src="/lovable-uploads/15708762-8e9c-4abe-a4ef-33787e8d761b.png" 
                  alt="WoolCool facility"
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
                <div className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-2">Minutes</div>
                <div className="text-slate-600 dark:text-slate-400">vs Hours for Reports</div>
              </Card>
              <Card className="text-center p-6 border-emerald-200 dark:border-emerald-700">
                <TrendingUp className="w-12 h-12 mx-auto mb-4 text-emerald-600" />
                <div className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-2">8+</div>
                <div className="text-slate-600 dark:text-slate-400">Years of Growth</div>
              </Card>
              <Card className="text-center p-6 border-emerald-200 dark:border-emerald-700">
                <BarChart3 className="w-12 h-12 mx-auto mb-4 text-emerald-600" />
                <div className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-2">All-in-One</div>
                <div className="text-slate-600 dark:text-slate-400">Integrated System</div>
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
                  Before finding Tracker, WoolCool was reliant on complex spreadsheets and manual processes. 
                  This was costing them time and energy, especially from a stock-take point of view.
                </p>
                <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                  They wanted to move the business forward, but their existing processes weren't sustainable. 
                  The team knew something had to change and started looking for a solution.
                </p>
                <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                  The challenge was finding software that could understand their bespoke product and the various elements 
                  in their production line. Typical plug-and-play software wasn't going to work for their unique needs.
                </p>
              </Card>
            </ScrollReveal>

            <ScrollReveal>
              <Card className="p-8">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">The Solution</h2>
                <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                  In 2016, WoolCool found Tracker. Will, the owner, spent time listening and understanding their business 
                  to offer the best solution to their challenges.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-emerald-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-slate-900 dark:text-slate-100">Flexible & Modular</h4>
                        <p className="text-slate-600 dark:text-slate-400">Only paid for elements they needed</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-emerald-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-slate-900 dark:text-slate-100">Stock Management Revolution</h4>
                        <p className="text-slate-600 dark:text-slate-400">Transformed complex spreadsheet systems</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-emerald-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-slate-900 dark:text-slate-100">Process Automation</h4>
                        <p className="text-slate-600 dark:text-slate-400">Automated paper-based workflows</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-emerald-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-slate-900 dark:text-slate-100">Integrated CRM</h4>
                        <p className="text-slate-600 dark:text-slate-400">Enhanced customer team capabilities</p>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mt-6">
                  The support received was hugely helpful throughout the entire journey - from enquiry through to aftercare, 
                  and they're still there now when needed.
                </p>
              </Card>
            </ScrollReveal>

            <ScrollReveal>
              <Card className="p-8">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">The Results</h2>
                <div className="space-y-6">
                  <div className="bg-emerald-50 dark:bg-emerald-950/30 p-6 rounded-lg border border-emerald-200 dark:border-emerald-800">
                    <h4 className="font-semibold text-emerald-800 dark:text-emerald-200 mb-3">"Made our systems simple - like they should be"</h4>
                    <p className="text-emerald-700 dark:text-emerald-300 italic text-lg leading-relaxed">
                      "Tracker has transformed our internal systems completely, allowing us the freedom to concentrate on development and growth. 
                      Allocating our freed-up human resources has helped us achieve that focus together."
                    </p>
                    <p className="text-emerald-600 dark:text-emerald-400 font-medium mt-4">
                      - Adrian, AGAME
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-3">Operational Transformation</h4>
                      <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                        <li>• Business finally able to scale effectively</li>
                        <li>• Moved from manual processes to automation</li>
                        <li>• Team freed up for strategic growth work</li>
                        <li>• Everything consolidated in one place</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-3">Business Impact</h4>
                      <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                        <li>• Quick overview of stock, materials, customers, money</li>
                        <li>• Faster and more informed decision making</li>
                        <li>• Increased profits and energy</li>
                        <li>• Growing CRM capabilities</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-purple-50 dark:bg-purple-950/30 p-6 rounded-lg border border-purple-200 dark:border-purple-800">
                    <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-3">Bottom Line Results</h4>
                    <p className="text-purple-700 dark:text-purple-300 text-lg leading-relaxed">
                      "In a nutshell, we have more time, more energy and our profits are up. Our CRM is really building too."
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
              Ready to Simplify Your Systems Like WoolCool?
            </h2>
            <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
              Discover how Tracker can transform your complex processes into simple, scalable solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/get-started" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                <Button size="lg" className="bg-white text-emerald-600 hover:bg-emerald-50 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  Start Your Transformation
                </Button>
              </Link>
              <Link to="/contact" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
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

export default WoolCool;