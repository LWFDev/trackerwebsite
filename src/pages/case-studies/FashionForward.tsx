import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, Clock, TrendingUp, Package, CheckCircle, BarChart3 } from 'lucide-react';
import { ScrollReveal } from '@/components/ui/scroll-reveal';
import { motion } from 'framer-motion';

const FashionForward = () => {
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
                Fashion <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-emerald-600">Forward Co.</span>
              </h1>
              <p className="text-xl text-slate-600 dark:text-slate-300 mb-8">
                Eliminating inventory chaos with 50% reduction in stock issues
              </p>
              <div className="w-full max-w-2xl mx-auto h-64 overflow-hidden rounded-xl shadow-2xl">
                <img 
                  src="/lovable-uploads/c78cb5cd-6b30-4b76-ab3d-95defabc532a.png" 
                  alt="Fashion Forward warehouse"
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
                <BarChart3 className="w-12 h-12 mx-auto mb-4 text-emerald-600" />
                <div className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-2">50%</div>
                <div className="text-slate-600 dark:text-slate-400">Stock Accuracy</div>
              </Card>
              <Card className="text-center p-6 border-emerald-200 dark:border-emerald-700">
                <Clock className="w-12 h-12 mx-auto mb-4 text-emerald-600" />
                <div className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-2">35%</div>
                <div className="text-slate-600 dark:text-slate-400">Order Processing</div>
              </Card>
              <Card className="text-center p-6 border-emerald-200 dark:border-emerald-700">
                <Package className="w-12 h-12 mx-auto mb-4 text-emerald-600" />
                <div className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-2">300+</div>
                <div className="text-slate-600 dark:text-slate-400">SKUs Managed</div>
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
                  Fashion Forward Co., a rapidly growing fashion retailer, was drowning in inventory management chaos. 
                  With over 300 SKUs across multiple channels, they were constantly dealing with stockouts, overstocking, 
                  and inaccurate inventory data.
                </p>
                <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                  Manual spreadsheet tracking led to frequent errors, disappointed customers, and significant financial losses 
                  from dead stock and missed sales opportunities. The team was spending more time firefighting inventory 
                  issues than focusing on growth.
                </p>
              </Card>
            </ScrollReveal>

            <ScrollReveal>
              <Card className="p-8">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">The Solution</h2>
                <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                  Fashion Forward Co. implemented Tracker's complete inventory and warehouse management system:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-emerald-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-slate-900 dark:text-slate-100">Real-time Inventory Tracking</h4>
                        <p className="text-slate-600 dark:text-slate-400">Live stock levels across all channels</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-emerald-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-slate-900 dark:text-slate-100">Automated Reorder Points</h4>
                        <p className="text-slate-600 dark:text-slate-400">Smart restocking alerts and suggestions</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-emerald-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-slate-900 dark:text-slate-100">Multi-channel Sync</h4>
                        <p className="text-slate-600 dark:text-slate-400">Unified inventory across all platforms</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-emerald-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-slate-900 dark:text-slate-100">Demand Forecasting</h4>
                        <p className="text-slate-600 dark:text-slate-400">AI-powered purchasing predictions</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-emerald-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-slate-900 dark:text-slate-100">Warehouse Optimization</h4>
                        <p className="text-slate-600 dark:text-slate-400">Efficient picking and packing workflows</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-emerald-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-slate-900 dark:text-slate-100">Advanced Analytics</h4>
                        <p className="text-slate-600 dark:text-slate-400">Comprehensive inventory insights</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </ScrollReveal>

            <ScrollReveal>
              <Card className="p-8">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">The Transformation Process</h2>
                <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                  The migration from chaotic spreadsheets to a unified system was carefully orchestrated:
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-emerald-600 dark:text-emerald-400 font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">Inventory Audit & Data Migration</h4>
                      <p className="text-slate-600 dark:text-slate-400">Complete physical inventory count and data cleanup</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-emerald-600 dark:text-emerald-400 font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">System Integration</h4>
                      <p className="text-slate-600 dark:text-slate-400">Connected all sales channels and warehouse systems</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-emerald-600 dark:text-emerald-400 font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">Staff Training & Rollout</h4>
                      <p className="text-slate-600 dark:text-slate-400">Comprehensive training for warehouse and management teams</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-emerald-600 dark:text-emerald-400 font-bold">4</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">Optimization & Fine-tuning</h4>
                      <p className="text-slate-600 dark:text-slate-400">Continuous improvement based on performance data</p>
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
                    <h4 className="font-semibold text-emerald-800 dark:text-emerald-200 mb-3">"From Chaos to Control"</h4>
                    <p className="text-emerald-700 dark:text-emerald-300 italic text-lg leading-relaxed">
                      "Tracker transformed our entire operation. We went from constant inventory crises to having complete 
                      visibility and control. Our customers are happier, our costs are down, and we can finally focus on 
                      growing the business instead of putting out fires."
                    </p>
                    <p className="text-emerald-600 dark:text-emerald-400 font-medium mt-4">
                      - Lisa Chen, COO
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-3">Inventory Management</h4>
                      <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                        <li>• Stock accuracy improved to 99.2%</li>
                        <li>• 50% reduction in stockouts</li>
                        <li>• 40% decrease in excess inventory</li>
                        <li>• Automated reordering saved 15 hours/week</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-3">Business Impact</h4>
                      <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                        <li>• 35% faster order fulfillment</li>
                        <li>• Customer satisfaction up 45%</li>
                        <li>• Working capital efficiency improved 30%</li>
                        <li>• Warehouse productivity increased 25%</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-slate-50 dark:bg-slate-900/50 p-6 rounded-lg">
                    <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-3">Key Success Metrics</h4>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-emerald-600">99.2%</div>
                        <div className="text-sm text-slate-600 dark:text-slate-400">Inventory Accuracy</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-emerald-600">300+</div>
                        <div className="text-sm text-slate-600 dark:text-slate-400">SKUs Managed</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-emerald-600">50%</div>
                        <div className="text-sm text-slate-600 dark:text-slate-400">Fewer Stockouts</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-emerald-600">35%</div>
                        <div className="text-sm text-slate-600 dark:text-slate-400">Faster Fulfillment</div>
                      </div>
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
              Take Control of Your Inventory Like Fashion Forward
            </h2>
            <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
              Transform your inventory chaos into organized efficiency with Tracker's advanced system.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/get-started">
                <Button size="lg" variant="outline" className="bg-white text-emerald-600 hover:bg-slate-50 border-0">
                  Take Control Today
                </Button>
              </Link>
              <Link to="/modules/inventory">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Explore Inventory Module
                </Button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default FashionForward;