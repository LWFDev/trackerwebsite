
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Badge } from "@/components/ui/badge";
import { Check, ArrowRight } from "lucide-react";

const StoryTelling = () => {
  const [activeTab, setActiveTab] = useState("challenge");
  
  return (
    <section className="py-20 bg-gray-900 dark:bg-zinc-950 light:bg-gray-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute w-[700px] h-[700px] rounded-full bg-[#D4AF37]/3 blur-[120px] top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute w-[500px] h-[500px] rounded-full bg-gray-800/20 dark:bg-zinc-800/20 light:bg-gray-800/20 blur-[100px] top-0 left-0 transform -translate-x-1/4 -translate-y-1/4"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1.5 bg-gray-800/80 dark:bg-zinc-900/80 light:bg-gray-800/80 backdrop-blur-sm rounded-full border border-gray-700 dark:border-zinc-800 light:border-gray-700 mb-6">
              <span className="text-sm text-[#D4AF37] uppercase font-medium tracking-wider">Success Story</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              How <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F2D675]">ABC Apparel</span> Transformed Their Business
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Follow their journey from challenge to success
            </p>
          </div>
        </ScrollReveal>
        
        <div className="max-w-5xl mx-auto">
          <Tabs defaultValue="challenge" className="w-full" onValueChange={setActiveTab}>
            <div className="flex justify-center mb-10">
              <TabsList className="bg-gray-800/70 dark:bg-zinc-900/70 light:bg-gray-800/70 backdrop-blur-sm border border-gray-700 dark:border-zinc-800 light:border-gray-700 p-1">
                <TabsTrigger
                  value="challenge"
                  className={`px-5 py-2.5 ${activeTab === "challenge" ? "bg-[#D4AF37] text-white" : "text-gray-400"}`}
                >
                  Challenge
                </TabsTrigger>
                <TabsTrigger
                  value="solution" 
                  className={`px-5 py-2.5 ${activeTab === "solution" ? "bg-[#D4AF37] text-white" : "text-gray-400"}`}
                >
                  Solution
                </TabsTrigger>
                <TabsTrigger
                  value="results"
                  className={`px-5 py-2.5 ${activeTab === "results" ? "bg-[#D4AF37] text-white" : "text-gray-400"}`}
                >
                  Results
                </TabsTrigger>
              </TabsList>
            </div>
            
            <div className="relative">
              <div className="absolute top-0 left-1/2 h-full w-px bg-gradient-to-b from-transparent via-[#D4AF37]/30 to-transparent transform -translate-x-1/2 z-0"></div>
              
              <TabsContent value="challenge" className="mt-0">
                <Card className="bg-transparent border-0 shadow-none">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <ScrollReveal direction="left" className="bg-gray-800/60 dark:bg-zinc-900/60 light:bg-gray-800/60 backdrop-blur-sm rounded-xl p-8 border border-gray-700 dark:border-zinc-800 light:border-gray-700">
                      <Badge className="bg-gray-700 dark:bg-zinc-800 light:bg-gray-700 text-[#D4AF37] mb-4">Before</Badge>
                      <h3 className="text-2xl font-bold mb-4 text-white">Manual Order Processing</h3>
                      <ul className="space-y-3 text-gray-300">
                        <li className="flex items-start">
                          <div className="mr-3 mt-1 text-red-500">✖</div>
                          <p>Processing 50+ orders daily through spreadsheets</p>
                        </li>
                        <li className="flex items-start">
                          <div className="mr-3 mt-1 text-red-500">✖</div>
                          <p>Tracking artwork approvals through email chains</p>
                        </li>
                        <li className="flex items-start">
                          <div className="mr-3 mt-1 text-red-500">✖</div>
                          <p>Manual inventory counts and production schedules</p>
                        </li>
                        <li className="flex items-start">
                          <div className="mr-3 mt-1 text-red-500">✖</div>
                          <p>12+ hours per week spent on administrative tasks</p>
                        </li>
                      </ul>
                      <div className="mt-8 text-lg font-medium text-gray-400">
                        "We were drowning in paperwork and missing deadlines."
                      </div>
                    </ScrollReveal>
                    
                    <ScrollReveal direction="right" className="flex items-center justify-center">
                      <div className="w-64 h-64 bg-gradient-to-br from-gray-700 to-gray-800 dark:from-zinc-800 dark:to-zinc-900 light:from-gray-700 light:to-gray-800 rounded-full flex items-center justify-center shadow-lg">
                        <div className="text-center">
                          <div className="text-4xl font-bold text-[#D4AF37] mb-2">3-5</div>
                          <div className="text-gray-300">Days to process<br />a single order</div>
                        </div>
                      </div>
                    </ScrollReveal>
                  </div>
                </Card>
              </TabsContent>
              
              <TabsContent value="solution" className="mt-0">
                <Card className="bg-transparent border-0 shadow-none">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <ScrollReveal direction="left" className="flex items-center justify-center">
                      <div className="relative">
                        <div className="w-64 h-64 bg-gradient-to-br from-[#D4AF37]/10 to-gray-800 dark:to-zinc-900 light:to-gray-800 rounded-full flex items-center justify-center shadow-lg">
                          <div className="text-center">
                            <div className="text-4xl font-bold text-[#D4AF37] mb-2">Tracker</div>
                            <div className="text-gray-300">All-in-one<br />solution</div>
                          </div>
                        </div>
                        <div className="absolute top-0 left-0 w-full h-full bg-[url('/placeholder.svg')] bg-cover opacity-20 rounded-full mix-blend-overlay"></div>
                      </div>
                    </ScrollReveal>
                    
                    <ScrollReveal direction="right" className="bg-gray-800/60 dark:bg-zinc-900/60 light:bg-gray-800/60 backdrop-blur-sm rounded-xl p-8 border border-gray-700 dark:border-zinc-800 light:border-gray-700">
                      <Badge className="bg-[#D4AF37]/20 text-[#D4AF37] mb-4">Implementation</Badge>
                      <h3 className="text-2xl font-bold mb-4 text-white">Integrated Workflow System</h3>
                      <ul className="space-y-3 text-gray-300">
                        <li className="flex items-start">
                          <Check className="mr-3 mt-1 text-[#D4AF37] h-5 w-5" />
                          <p>Digital order processing with customer portal</p>
                        </li>
                        <li className="flex items-start">
                          <Check className="mr-3 mt-1 text-[#D4AF37] h-5 w-5" />
                          <p>Artwork approval system with revision tracking</p>
                        </li>
                        <li className="flex items-start">
                          <Check className="mr-3 mt-1 text-[#D4AF37] h-5 w-5" />
                          <p>Real-time inventory management</p>
                        </li>
                        <li className="flex items-start">
                          <Check className="mr-3 mt-1 text-[#D4AF37] h-5 w-5" />
                          <p>Automated production scheduling</p>
                        </li>
                      </ul>
                      <div className="mt-8 text-lg font-medium text-gray-300">
                        <p>
                          Implementation time: <span className="text-[#D4AF37]">2 weeks</span>
                        </p>
                        <p className="text-sm text-gray-400 mt-2">
                          Full staff training included
                        </p>
                      </div>
                    </ScrollReveal>
                  </div>
                </Card>
              </TabsContent>
              
              <TabsContent value="results" className="mt-0">
                <Card className="bg-transparent border-0 shadow-none">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <ScrollReveal direction="left" className="bg-gray-800/60 dark:bg-zinc-900/60 light:bg-gray-800/60 backdrop-blur-sm rounded-xl p-8 border border-gray-700 dark:border-zinc-800 light:border-gray-700">
                      <Badge className="bg-[#D4AF37]/20 text-[#D4AF37] mb-4">Results</Badge>
                      <h3 className="text-2xl font-bold mb-4 text-white">Business Transformation</h3>
                      <ul className="space-y-3 text-gray-300">
                        <li className="flex items-start">
                          <Check className="mr-3 mt-1 text-[#D4AF37] h-5 w-5" />
                          <p>Order processing time reduced by 70%</p>
                        </li>
                        <li className="flex items-start">
                          <Check className="mr-3 mt-1 text-[#D4AF37] h-5 w-5" />
                          <p>Customer satisfaction increased by 65%</p>
                        </li>
                        <li className="flex items-start">
                          <Check className="mr-3 mt-1 text-[#D4AF37] h-5 w-5" />
                          <p>20 hours per week saved on administrative tasks</p>
                        </li>
                        <li className="flex items-start">
                          <Check className="mr-3 mt-1 text-[#D4AF37] h-5 w-5" />
                          <p>Business able to handle 40% more orders</p>
                        </li>
                      </ul>
                      <div className="mt-8 flex items-center">
                        <div className="text-4xl font-bold mr-3 text-[#D4AF37]">$120K+</div>
                        <div className="text-gray-300">
                          Annual savings<br />in labor costs
                        </div>
                      </div>
                    </ScrollReveal>
                    
                    <ScrollReveal direction="right" className="flex items-center justify-center">
                      <div className="text-center max-w-md">
                        <div className="mb-6">
                          <div className="w-20 h-20 mx-auto bg-[#D4AF37]/10 rounded-full flex items-center justify-center mb-3">
                            <ArrowRight className="h-8 w-8 text-[#D4AF37]" />
                          </div>
                        </div>
                        <blockquote className="text-xl text-gray-300 mb-6">
                          "With Tracker, we can now focus on growing our business instead of managing paperwork. It's been a complete game-changer for us."
                        </blockquote>
                        <div className="font-medium text-white">Jane Smith, CEO</div>
                        <div className="text-sm text-[#D4AF37]">ABC Apparel</div>
                      </div>
                    </ScrollReveal>
                  </div>
                </Card>
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default StoryTelling;
