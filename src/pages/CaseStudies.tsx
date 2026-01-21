import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Users, TrendingUp, Clock } from 'lucide-react';
import { ScrollReveal } from '@/components/ui/scroll-reveal';
import { motion } from 'framer-motion';
import { scrollToTop } from '@/utils/navigation';
import PageSEO from "@/components/seo/PageSEO";
import { caseStudiesSEO, caseStudiesBreadcrumb } from "@/data/seoData";
const CaseStudies = () => {
  const caseStudies = [{
    id: 'pure-optical',
    company: 'Pure Optical',
    industry: 'E-Commerce & Optical Retail',
    challenge: 'Slow manual fulfillment processes limiting growth',
    solution: 'Complete Tracker automation platform',
    results: '233% productivity increase, 10x faster processing',
    image: '/lovable-uploads/4c72cfff-437a-4e17-93f7-0c5dff15b378.png',
    stats: [{
      icon: TrendingUp,
      value: '233%',
      label: 'Productivity Boost'
    }, {
      icon: Clock,
      value: '10x',
      label: 'Faster Processing'
    }, {
      icon: Users,
      value: '50',
      label: 'Orders/Hour/Person'
    }]
  }, {
    id: 'woolcool',
    company: 'WoolCool',
    industry: 'Manufacturing & Production',
    challenge: 'Complex spreadsheets and manual processes limiting growth',
    solution: 'Flexible Tracker platform with integrated automation',
    results: 'Complete system transformation, increased profits, freed resources',
    image: '/lovable-uploads/15708762-8e9c-4abe-a4ef-33787e8d761b.png',
    stats: [{
      icon: Clock,
      value: 'Minutes',
      label: 'vs Hours Reports'
    }, {
      icon: TrendingUp,
      value: '8+',
      label: 'Years Growth'
    }, {
      icon: Users,
      value: '100%',
      label: 'Resource Freedom'
    }]
  }, {
    id: 'agame',
    company: 'AGAME',
    industry: 'Embroidery & Print Production',
    challenge: 'Manual processes limiting business scaling',
    solution: 'Tracker ERP with Shopify integration',
    results: 'Saved 2 days per week, enabled single-person COVID operations',
    image: '/lovable-uploads/0021201f-5a7d-49ff-ac53-43f77b1ea513.png',
    stats: [{
      icon: Clock,
      value: '2 Days',
      label: 'Weekly Time Saved'
    }, {
      icon: TrendingUp,
      value: '60%+',
      label: 'Processing Reduction'
    }, {
      icon: Users,
      value: '1 Person',
      label: 'COVID Operations'
    }]
  }];
  return <div className="min-h-screen bg-gradient-to-br from-white via-slate-50/30 to-emerald-50/20 dark:from-black dark:via-slate-950/30 dark:to-emerald-950/20">
      <PageSEO seo={caseStudiesSEO} breadcrumbs={caseStudiesBreadcrumb} />
      {/* Hero Section */}
      <section className="pt-32 md:pt-36 pb-16">
        <div className="container mx-auto px-4">
          <motion.div className="text-center max-w-4xl mx-auto" initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }}>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Success <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-emerald-600">Stories</span>
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
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {caseStudies.map((study, index) => <ScrollReveal key={study.id} delay={index * 100}>
                <Card className="h-full flex flex-col group hover:shadow-xl transition-all duration-300 border-slate-200 dark:border-slate-700 hover:border-emerald-300 dark:hover:border-emerald-600">
                  <CardHeader className="pb-4">
                    <div className="w-full h-48 mb-4 overflow-hidden rounded-lg">
                      <img src={study.image} alt={study.company} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                    </div>
                    <CardTitle className="text-xl font-bold text-slate-900 dark:text-slate-100">
                      {study.company}
                    </CardTitle>
                    <CardDescription className="text-emerald-600 dark:text-emerald-400 font-medium">
                      {study.industry}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="flex flex-col flex-1 space-y-6">
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
                      {study.stats.map((stat, statIndex) => <div key={statIndex} className="text-center">
                          <stat.icon className="w-5 h-5 mx-auto mb-1 text-emerald-600 dark:text-emerald-400" />
                          <div className="text-lg font-bold text-slate-900 dark:text-slate-100">{stat.value}</div>
                          <div className="text-xs text-slate-600 dark:text-slate-400">{stat.label}</div>
                        </div>)}
                    </div>
                    
                    <div className="bg-emerald-50 dark:bg-emerald-950/30 p-4 rounded-lg border border-emerald-200 dark:border-emerald-800">
                      <h4 className="font-semibold text-emerald-800 dark:text-emerald-200 mb-2">Results</h4>
                      <p className="text-sm text-emerald-700 dark:text-emerald-300 font-medium">{study.results}</p>
                    </div>
                    
                    <div className="mt-auto pt-4">
                      <Link to={`/case-studies/${study.id}`} className="block">
                        <Button className="w-full group bg-gradient-to-r from-emerald-600 to-green-500 hover:from-emerald-700 hover:to-green-600 text-white" onClick={scrollToTop}>
                          Read Full Story
                          <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>)}
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
            <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">Less mess. More results. That’s Tracker.

          </p>
            <Link to="/get-started" onClick={scrollToTop}>
              <Button size="lg" className="bg-white text-emerald-600 hover:bg-emerald-50 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                Get Started Today
              </Button>
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>;
};
export default CaseStudies;