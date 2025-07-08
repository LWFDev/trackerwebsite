import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Palette, CheckCircle, TrendingUp, Clock, Users, BarChart3, Target, Zap } from "lucide-react";
const ScreenPrinting = () => {
  const challenges = ["Managing multiple simultaneous orders efficiently", "Optimizing workflow between setup and production", "Coordinating color matching and quality control", "Meeting tight delivery deadlines consistently"];
  const solutions = [{
    icon: <BarChart3 className="w-6 h-6 text-gold" />,
    title: "Multi-Order Management",
    description: "Track and coordinate multiple orders simultaneously without confusion or delays"
  }, {
    icon: <Clock className="w-6 h-6 text-emerald" />,
    title: "Workflow Optimization",
    description: "Streamline setup, printing, and finishing processes for maximum efficiency"
  }, {
    icon: <TrendingUp className="w-6 h-6 text-gold" />,
    title: "Delivery Time Improvement",
    description: "Reduce delivery times through better planning and resource allocation"
  }];
  const features = [{
    icon: <Target className="w-8 h-8 text-gold" />,
    title: "Color Matching System",
    description: "Advanced color tracking and matching system to ensure consistency across all print runs."
  }, {
    icon: <Zap className="w-8 h-8 text-emerald" />,
    title: "Setup Time Optimization",
    description: "Minimize setup times between jobs with intelligent job sequencing and preparation."
  }];
  
  return (
    <div className="min-h-screen theme-background theme-text transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-pink-500/5 py-0 my-0"></div>
        <div className="container mx-auto px-4 relative z-10 py-[64px]">
          <motion.div className="max-w-4xl mx-auto" initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6
        }}>
            <div className="flex items-center gap-4 mb-6">
              <Palette className="w-12 h-12 text-gold" />
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-gold to-emerald bg-clip-text text-transparent">
                Screen Printing Facilities
              </h1>
            </div>
            <p className="text-xl theme-text-secondary mb-8 leading-relaxed">
              Help screen printing companies optimize workflow, improve delivery times, and manage multiple simultaneous orders without confusion. Perfect for high-volume operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" variant="gold">
                <Link to="/get-started" onClick={() => window.scrollTo(0, 0)}>Start Free Trial</Link>
              </Button>
              <Button asChild variant="emerald-outline" size="lg">
                <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>Schedule Demo</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="py-16 theme-surface theme-border border-y">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Screen Printing Challenges
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {challenges.map((challenge, index) => <motion.div key={index} className="flex items-start gap-3" initial={{
              opacity: 0,
              x: -20
            }} whileInView={{
              opacity: 1,
              x: 0
            }} transition={{
              duration: 0.5,
              delay: index * 0.1
            }} viewport={{
              once: true
            }}>
                  <div className="w-2 h-2 bg-gold rounded-full mt-3 flex-shrink-0"></div>
                  <p className="theme-text-secondary">{challenge}</p>
                </motion.div>)}
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Screen Printing Solutions with Tracker
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {solutions.map((solution, index) => <motion.div key={index} initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5,
            delay: index * 0.1
          }} viewport={{
            once: true
          }}>
                <Card className="h-full theme-surface theme-border hover:border-gold/50 transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      {solution.icon}
                      <CardTitle className="text-xl">{solution.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="theme-text-secondary">
                      {solution.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>)}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 theme-surface theme-border border-y">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Advanced Features for Screen Printers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {features.map((feature, index) => <motion.div key={index} className="flex items-start gap-4" initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5,
            delay: index * 0.2
          }} viewport={{
            once: true
          }}>
                <div className="flex-shrink-0">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="theme-text-secondary">{feature.description}</p>
                </div>
              </motion.div>)}
          </div>
        </div>
      </section>

      {/* Industry Pain Points */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Why Screen Printers Choose Tracker
            </h2>
            <div className="space-y-8">
              <motion.div className="border-l-4 border-gold pl-6" initial={{
              opacity: 0,
              x: -20
            }} whileInView={{
              opacity: 1,
              x: 0
            }} transition={{
              duration: 0.5
            }} viewport={{
              once: true
            }}>
                <h3 className="text-xl font-semibold mb-3">Setup Time Bottlenecks</h3>
                <p className="theme-text-secondary mb-3">
                  Screen printing setup can take 30-60 minutes per job. With multiple daily jobs, setup time becomes 
                  the biggest productivity killer, especially for smaller run orders.
                </p>
                <p className="theme-text-secondary">
                  <strong className="text-emerald">Tracker Solution:</strong> Intelligent job sequencing minimizes 
                  setup changes by grouping similar colors and designs, reducing setup time by up to 40%.
                </p>
              </motion.div>

              <motion.div className="border-l-4 border-emerald pl-6" initial={{
              opacity: 0,
              x: -20
            }} whileInView={{
              opacity: 1,
              x: 0
            }} transition={{
              duration: 0.5,
              delay: 0.1
            }} viewport={{
              once: true
            }}>
                <h3 className="text-xl font-semibold mb-3">Color Matching Inconsistencies</h3>
                <p className="theme-text-secondary mb-3">
                  Achieving consistent color reproduction across different print runs and reorders is challenging, 
                  leading to customer complaints and reprints.
                </p>
                <p className="theme-text-secondary">
                  <strong className="text-gold">Tracker Solution:</strong> Digital color database with mixing formulas 
                  and photo documentation ensures perfect color matching every time.
                </p>
              </motion.div>

              <motion.div className="border-l-4 border-gold pl-6" initial={{
              opacity: 0,
              x: -20
            }} whileInView={{
              opacity: 1,
              x: 0
            }} transition={{
              duration: 0.5,
              delay: 0.2
            }} viewport={{
              once: true
            }}>
                <h3 className="text-xl font-semibold mb-3">Rush Order Chaos</h3>
                <p className="theme-text-secondary mb-3">
                  Last-minute rush orders disrupt planned production schedules, causing delays across all jobs 
                  and stressed production teams.
                </p>
                <p className="theme-text-secondary">
                  <strong className="text-emerald">Tracker Solution:</strong> Dynamic scheduling algorithm can 
                  instantly reorganize production to accommodate rush orders while minimizing overall disruption.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16 theme-surface theme-border border-t">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">
              Results You Can Expect
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div>
                <div className="text-4xl font-bold text-gold mb-2">40%</div>
                <p className="theme-text-secondary">Faster Setup Times</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-emerald mb-2">65%</div>
                <p className="theme-text-secondary">Better Order Coordination</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-gold mb-2">30%</div>
                <p className="theme-text-secondary">Improved Delivery Times</p>
              </div>
            </div>
            <Button asChild size="lg" variant="gold">
              <Link to="/get-started" onClick={() => window.scrollTo(0, 0)}>Optimize Your Print Shop Today</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ScreenPrinting;