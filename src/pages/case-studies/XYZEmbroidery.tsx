import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, Clock, TrendingUp, Users, CheckCircle, Palette } from 'lucide-react';
import { ScrollReveal } from '@/components/ui/scroll-reveal';
import { motion } from 'framer-motion';

const XYZEmbroidery = () => {
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
                XYZ <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-emerald-600">Embroidery</span>
              </h1>
              <p className="text-xl text-slate-600 dark:text-slate-300 mb-8">
                Revolutionizing design approval process with 70% faster client approvals
              </p>
              <div className="w-full max-w-2xl mx-auto h-64 overflow-hidden rounded-xl shadow-2xl">
                <img 
                  src="/lovable-uploads/b967fa34-27f3-4bde-8864-dd74e1e5fea9.png" 
                  alt="XYZ Embroidery design studio"
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
                <div className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-2">70%</div>
                <div className="text-slate-600 dark:text-slate-400">Faster Approvals</div>
              </Card>
              <Card className="text-center p-6 border-emerald-200 dark:border-emerald-700">
                <Palette className="w-12 h-12 mx-auto mb-4 text-emerald-600" />
                <div className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-2">60%</div>
                <div className="text-slate-600 dark:text-slate-400">Design Efficiency</div>
              </Card>
              <Card className="text-center p-6 border-emerald-200 dark:border-emerald-700">
                <Users className="w-12 h-12 mx-auto mb-4 text-emerald-600" />
                <div className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-2">95%</div>
                <div className="text-slate-600 dark:text-slate-400">Client Satisfaction</div>
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
                  XYZ Embroidery, a premium custom embroidery service, was facing a bottleneck in their design approval process. 
                  Clients were waiting weeks to see their designs, causing project delays and customer frustration.
                </p>
                <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                  The manual back-and-forth between designers, production, and clients through email and phone calls was 
                  inefficient and error-prone, leading to miscommunications and costly revisions.
                </p>
              </Card>
            </ScrollReveal>

            <ScrollReveal>
              <Card className="p-8">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">The Solution</h2>
                <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                  XYZ Embroidery implemented Tracker's Product Designer module and Customer Portal, creating a seamless 
                  digital workflow:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-emerald-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-slate-900 dark:text-slate-100">Real-time Design Visualization</h4>
                        <p className="text-slate-600 dark:text-slate-400">Instant mockups and previews</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-emerald-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-slate-900 dark:text-slate-100">Client Portal Access</h4>
                        <p className="text-slate-600 dark:text-slate-400">Direct design approval system</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-emerald-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-slate-900 dark:text-slate-100">Automated Notifications</h4>
                        <p className="text-slate-600 dark:text-slate-400">Instant alerts for all stakeholders</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-emerald-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-slate-900 dark:text-slate-100">Version Control</h4>
                        <p className="text-slate-600 dark:text-slate-400">Complete revision history tracking</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </ScrollReveal>

            <ScrollReveal>
              <Card className="p-8">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">The Implementation</h2>
                <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                  The transition was smooth and well-planned. Tracker's team worked closely with XYZ Embroidery to:
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-emerald-100 dark:bg-emerald-900 rounded-full flex items-center justify-center">
                      <span className="text-emerald-600 dark:text-emerald-400 font-bold text-sm">1</span>
                    </div>
                    <p className="text-slate-600 dark:text-slate-400">Migrate existing design files and client data</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-emerald-100 dark:bg-emerald-900 rounded-full flex items-center justify-center">
                      <span className="text-emerald-600 dark:text-emerald-400 font-bold text-sm">2</span>
                    </div>
                    <p className="text-slate-600 dark:text-slate-400">Train design team on the new digital workflow</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-emerald-100 dark:bg-emerald-900 rounded-full flex items-center justify-center">
                      <span className="text-emerald-600 dark:text-emerald-400 font-bold text-sm">3</span>
                    </div>
                    <p className="text-slate-600 dark:text-slate-400">Onboard key clients to the new portal system</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-emerald-100 dark:bg-emerald-900 rounded-full flex items-center justify-center">
                      <span className="text-emerald-600 dark:text-emerald-400 font-bold text-sm">4</span>
                    </div>
                    <p className="text-slate-600 dark:text-slate-400">Establish automated quality control checkpoints</p>
                  </div>
                </div>
              </Card>
            </ScrollReveal>

            <ScrollReveal>
              <Card className="p-8">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">The Results</h2>
                <div className="space-y-6">
                  <div className="bg-emerald-50 dark:bg-emerald-950/30 p-6 rounded-lg border border-emerald-200 dark:border-emerald-800">
                    <h4 className="font-semibold text-emerald-800 dark:text-emerald-200 mb-3">"A Complete Game Changer"</h4>
                    <p className="text-emerald-700 dark:text-emerald-300 italic text-lg leading-relaxed">
                      "The Product Designer module has cut our design approval time by 70%. Our clients love being able to see 
                      their designs instantly and provide feedback in real-time. It's transformed how we work with our customers."
                    </p>
                    <p className="text-emerald-600 dark:text-emerald-400 font-medium mt-4">
                      - Mark Rodriguez, Creative Director
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-3">Operational Improvements</h4>
                      <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                        <li>• Design approval time reduced from weeks to days</li>
                        <li>• 85% reduction in email communication</li>
                        <li>• Zero lost files or design versions</li>
                        <li>• 60% faster production start times</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-3">Business Impact</h4>
                      <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                        <li>• Increased project capacity by 45%</li>
                        <li>• Client satisfaction scores improved to 95%</li>
                        <li>• 30% increase in repeat business</li>
                        <li>• Reduced operational costs by 25%</li>
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
              Transform Your Design Process Like XYZ Embroidery
            </h2>
            <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
              Discover how Tracker's Product Designer can revolutionize your client collaboration.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/get-started" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                <Button size="lg" className="bg-white text-emerald-600 hover:bg-emerald-50 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  Start Your Revolution
                </Button>
              </Link>
              <Link to="/modules/product-designer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                <Button size="lg" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-emerald-600 transition-all duration-300">
                  Learn About Product Designer
                </Button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default XYZEmbroidery;