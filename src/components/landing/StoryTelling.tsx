
import React, { useState } from 'react';
import { ChevronRight, CheckCircle, XCircle, Users, TrendingUp, Clock, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollReveal } from '@/components/ui/scroll-reveal';

const StoryTelling = () => {
  const [activeTab, setActiveTab] = useState('challenge');

  return (
    <section className="py-24 bg-gray-900 dark:bg-gray-900 light:bg-white text-white dark:text-white light:text-gray-900 relative overflow-hidden transition-colors duration-300">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[800px] h-[800px] rounded-full bg-[#D4AF37]/5 blur-[150px] top-1/2 left-0 transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute w-[600px] h-[600px] rounded-full bg-zinc-800/30 dark:bg-zinc-800/30 light:bg-gray-200/30 blur-[100px] bottom-0 right-0"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <div className="inline-block px-6 py-2 bg-gray-800/90 dark:bg-gray-800/90 light:bg-gray-100/90 backdrop-blur-md rounded-full border border-[#D4AF37]/30 mb-8 transition-colors duration-300">
              <span className="text-sm text-[#D4AF37] uppercase font-semibold tracking-wider">SUCCESS STORY</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white dark:text-white light:text-gray-900 transition-colors duration-300">
              How <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F2D675]">ABC Apparel</span> Transformed Their Business
            </h2>
            <p className="text-xl text-gray-300 dark:text-gray-300 light:text-gray-600 transition-colors duration-300">
              Follow their journey from challenge to success
            </p>
          </div>
        </ScrollReveal>

        {/* Tab Navigation */}
        <ScrollReveal delay={0.2}>
          <div className="flex justify-center mb-12">
            <div className="bg-gray-800/50 dark:bg-gray-800/50 light:bg-white/80 backdrop-blur-sm rounded-lg p-1 border border-gray-700 dark:border-gray-700 light:border-gray-200 transition-colors duration-300">
              {[
                { id: 'challenge', label: 'Challenge' },
                { id: 'solution', label: 'Solution' },
                { id: 'results', label: 'Results' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-3 rounded-md font-medium transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-[#D4AF37] text-black'
                      : 'text-gray-300 dark:text-gray-300 light:text-gray-600 hover:text-[#D4AF37]'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Challenge Tab */}
          {activeTab === 'challenge' && (
            <>
              <ScrollReveal delay={0.3}>
                <div className="bg-gray-800/60 dark:bg-gray-800/60 light:bg-white/80 backdrop-blur-sm rounded-xl p-8 border border-gray-700 dark:border-gray-700 light:border-gray-200 transition-colors duration-300">
                  <div className="mb-6">
                    <span className="inline-block px-3 py-1 bg-red-500/20 text-red-400 dark:text-red-400 light:text-red-600 rounded-full text-sm font-medium mb-4 transition-colors duration-300">
                      Before
                    </span>
                    <h3 className="text-2xl font-bold mb-4 text-white dark:text-white light:text-gray-900 transition-colors duration-300">Manual Order Processing</h3>
                  </div>
                  
                  <div className="space-y-4">
                    {[
                      'Processing 50+ orders daily through spreadsheets',
                      'Tracking artwork approvals through email chains',
                      'Manual inventory counts and production schedules',
                      '12+ hours per week spent on administrative tasks'
                    ].map((item, index) => (
                      <div key={index} className="flex items-start">
                        <XCircle className="w-5 h-5 text-red-400 dark:text-red-400 light:text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                        <p className="text-gray-300 dark:text-gray-300 light:text-gray-600 transition-colors duration-300">{item}</p>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-8 p-4 bg-gray-700/50 dark:bg-gray-700/50 light:bg-gray-100/80 rounded-lg border-l-4 border-red-400 transition-colors duration-300">
                    <p className="text-gray-300 dark:text-gray-300 light:text-gray-600 italic transition-colors duration-300">
                      "We were drowning in paperwork and missing deadlines."
                    </p>
                  </div>
                </div>
              </ScrollReveal>
              
              <ScrollReveal delay={0.4}>
                <div className="flex justify-center">
                  <div className="relative">
                    <div className="w-48 h-48 rounded-full bg-gray-700 dark:bg-gray-700 light:bg-gray-300 flex items-center justify-center text-6xl font-bold text-gray-500 dark:text-gray-500 light:text-gray-600 transition-colors duration-300">
                      3-5
                    </div>
                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-center">
                      <p className="text-gray-400 dark:text-gray-400 light:text-gray-600 transition-colors duration-300">Days to process</p>
                      <p className="text-gray-400 dark:text-gray-400 light:text-gray-600 transition-colors duration-300">a single order</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </>
          )}

          {/* Solution Tab */}
          {activeTab === 'solution' && (
            <>
              <ScrollReveal delay={0.3}>
                <div className="bg-gray-800/60 dark:bg-gray-800/60 light:bg-white/80 backdrop-blur-sm rounded-xl p-8 border border-[#D4AF37]/30 transition-colors duration-300">
                  <div className="mb-6">
                    <span className="inline-block px-3 py-1 bg-[#D4AF37]/20 text-[#D4AF37] rounded-full text-sm font-medium mb-4">
                      Implementation
                    </span>
                    <h3 className="text-2xl font-bold mb-4 text-white dark:text-white light:text-gray-900 transition-colors duration-300">Tracker Solution</h3>
                  </div>
                  
                  <div className="space-y-4">
                    {[
                      'Automated order processing and workflow management',
                      'Digital proof approval system with real-time notifications',
                      'Integrated inventory tracking and production scheduling',
                      'Streamlined communication between teams and clients'
                    ].map((item, index) => (
                      <div key={index} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-[#D4AF37] mr-3 mt-0.5 flex-shrink-0" />
                        <p className="text-gray-300 dark:text-gray-300 light:text-gray-600 transition-colors duration-300">{item}</p>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-8">
                    <Button className="bg-[#D4AF37] hover:bg-[#F2D675] text-black">
                      Learn More About Implementation
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </ScrollReveal>
              
              <ScrollReveal delay={0.4}>
                <div className="space-y-6">
                  {[
                    { icon: Users, title: 'Team Training', desc: '2-week onboarding process' },
                    { icon: TrendingUp, title: 'Gradual Rollout', desc: 'Module-by-module implementation' },
                    { icon: Award, title: 'Full Integration', desc: 'Complete workflow automation' }
                  ].map((step, index) => (
                    <div key={index} className="flex items-center p-4 bg-gray-800/40 dark:bg-gray-800/40 light:bg-white/60 rounded-lg border border-gray-700 dark:border-gray-700 light:border-gray-200 backdrop-blur-sm transition-colors duration-300">
                      <div className="w-12 h-12 rounded-full bg-[#D4AF37]/20 flex items-center justify-center mr-4">
                        <step.icon className="w-6 h-6 text-[#D4AF37]" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white dark:text-white light:text-gray-900 transition-colors duration-300">{step.title}</h4>
                        <p className="text-gray-400 dark:text-gray-400 light:text-gray-600 transition-colors duration-300">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </>
          )}

          {/* Results Tab */}
          {activeTab === 'results' && (
            <>
              <ScrollReveal delay={0.3}>
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { metric: '75%', label: 'Faster Order Processing', icon: Clock },
                    { metric: '90%', label: 'Reduced Errors', icon: CheckCircle },
                    { metric: '3x', label: 'Increased Capacity', icon: TrendingUp },
                    { metric: '15hrs', label: 'Weekly Time Saved', icon: Award }
                  ].map((stat, index) => (
                    <div key={index} className="bg-gray-800/60 dark:bg-gray-800/60 light:bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-[#D4AF37]/30 text-center transition-colors duration-300">
                      <stat.icon className="w-8 h-8 text-[#D4AF37] mx-auto mb-3" />
                      <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F2D675] mb-2">
                        {stat.metric}
                      </div>
                      <p className="text-gray-400 dark:text-gray-400 light:text-gray-600 text-sm transition-colors duration-300">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
              
              <ScrollReveal delay={0.4}>
                <div className="bg-gray-800/60 dark:bg-gray-800/60 light:bg-white/80 backdrop-blur-sm rounded-xl p-8 border border-green-500/30 transition-colors duration-300">
                  <div className="mb-6">
                    <span className="inline-block px-3 py-1 bg-green-500/20 text-green-400 dark:text-green-400 light:text-green-600 rounded-full text-sm font-medium mb-4 transition-colors duration-300">
                      After
                    </span>
                    <h3 className="text-2xl font-bold mb-4 text-white dark:text-white light:text-gray-900 transition-colors duration-300">Transformed Operations</h3>
                  </div>
                  
                  <div className="space-y-4 mb-6">
                    {[
                      'Orders processed in hours instead of days',
                      'Real-time visibility across all operations',
                      'Automated reporting and analytics',
                      'Scalable system supporting 3x growth'
                    ].map((item, index) => (
                      <div key={index} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-400 dark:text-green-400 light:text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <p className="text-gray-300 dark:text-gray-300 light:text-gray-600 transition-colors duration-300">{item}</p>
                      </div>
                    ))}
                  </div>
                  
                  <div className="p-4 bg-green-500/10 rounded-lg border-l-4 border-green-400 dark:border-green-400 light:border-green-500 transition-colors duration-300">
                    <p className="text-gray-300 dark:text-gray-300 light:text-gray-600 italic transition-colors duration-300">
                      "Tracker transformed our business. We now focus on growth instead of administration."
                    </p>
                    <p className="text-[#D4AF37] text-sm mt-2">- Sarah Johnson, CEO ABC Apparel</p>
                  </div>
                </div>
              </ScrollReveal>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default StoryTelling;
