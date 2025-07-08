import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Users, TrendingUp, Clock } from 'lucide-react';
import { ScrollReveal } from '@/components/ui/scroll-reveal';
import { motion } from 'framer-motion';

const CaseStudies = () => {
  const caseStudies = [
    {
      id: 'abc-apparel',
      company: 'ABC Apparel',
      industry: 'Custom Apparel Manufacturing',
      challenge: 'Manual order processing taking days',
      solution: 'Automated workflow with Tracker',
      results: '85% reduction in processing time',
      image: '/lovable-uploads/a7a106f9-9817-4302-a992-e1b4320c19cd.png',
      stats: [
        { icon: Clock, value: '85%', label: 'Time Reduction' },
        { icon: TrendingUp, value: '40%', label: 'Revenue Increase' },
        { icon: Users, value: '200+', label: 'Happy Customers' }
      ]
    },
    {
      id: 'xyz-embroidery',
      company: 'XYZ Embroidery',
      industry: 'Custom Embroidery Services',
      challenge: 'Slow design approval process',
      solution: 'Product Designer module implementation',
      results: '70% faster client approvals',
      image: '/lovable-uploads/b967fa34-27f3-4bde-8864-dd74e1e5fea9.png',
      stats: [
        { icon: Clock, value: '70%', label: 'Faster Approvals' },
        { icon: TrendingUp, value: '60%', label: 'Design Efficiency' },
        { icon: Users, value: '95%', label: 'Client Satisfaction' }
      ]
    },
    {
      id: 'fashion-forward',
      company: 'Fashion Forward Co.',
      industry: 'Fashion Retail',
      challenge: 'Inventory management chaos',
      solution: 'Complete Tracker integration',
      results: '50% reduction in stock issues',
      image: '/lovable-uploads/c78cb5cd-6b30-4b76-ab3d-95defabc532a.png',
      stats: [
        { icon: TrendingUp, value: '50%', label: 'Stock Accuracy' },
        { icon: Clock, value: '35%', label: 'Order Processing' },
        { icon: Users, value: '300+', label: 'SKUs Managed' }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-slate-50/30 to-emerald-50/20 dark:from-black dark:via-slate-950/30 dark:to-emerald-950/20">
      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Success <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-emerald-600">Stories</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
              Discover how businesses like yours have transformed their operations with Tracker's powerful automation platform.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <ScrollReveal key={study.id} delay={index * 100}>
                <Card className="h-full group hover:shadow-xl transition-all duration-300 border-slate-200 dark:border-slate-700 hover:border-emerald-300 dark:hover:border-emerald-600">
                  <CardHeader className="pb-4">
                    <div className="w-full h-48 mb-4 overflow-hidden rounded-lg">
                      <img 
                        src={study.image} 
                        alt={study.company}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardTitle className="text-xl font-bold text-slate-900 dark:text-slate-100">
                      {study.company}
                    </CardTitle>
                    <CardDescription className="text-emerald-600 dark:text-emerald-400 font-medium">
                      {study.industry}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">Challenge</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">{study.challenge}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">Solution</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">{study.solution}</p>
                    </div>
                    
                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-3 py-4 border-t border-slate-200 dark:border-slate-700">
                      {study.stats.map((stat, statIndex) => (
                        <div key={statIndex} className="text-center">
                          <stat.icon className="w-5 h-5 mx-auto mb-1 text-emerald-600 dark:text-emerald-400" />
                          <div className="text-lg font-bold text-slate-900 dark:text-slate-100">{stat.value}</div>
                          <div className="text-xs text-slate-600 dark:text-slate-400">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="bg-emerald-50 dark:bg-emerald-950/30 p-4 rounded-lg border border-emerald-200 dark:border-emerald-800">
                      <h4 className="font-semibold text-emerald-800 dark:text-emerald-200 mb-2">Results</h4>
                      <p className="text-sm text-emerald-700 dark:text-emerald-300 font-medium">{study.results}</p>
                    </div>
                    
                    <Link to={`/case-studies/${study.id}`} className="block">
                      <Button 
                        className="w-full group bg-gradient-to-r from-emerald-600 to-green-500 hover:from-emerald-700 hover:to-green-600 text-white"
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                      >
                        Read Full Story
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-emerald-600 to-green-500">
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
              Join hundreds of businesses that have transformed their operations with Tracker.
            </p>
            <Link to="/get-started" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <Button size="lg" className="bg-white text-emerald-600 hover:bg-emerald-50 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                Get Started Today
              </Button>
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;