import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { HardHat, CheckCircle, TrendingUp, Clock, Users, BarChart3, RefreshCw, Truck } from "lucide-react";
import PageSEO from "@/components/seo/PageSEO";


const WorkwearUniforms = () => {
  const challenges = [
    "Managing continuous high-volume order flow",
    "Ensuring timely production for urgent requests",
    "Maintaining accurate fulfillment across large orders",
    "Controlling inventory for diverse workwear requirements"
  ];

  const solutions = [
    {
      icon: <BarChart3 className="w-6 h-6 text-gold" />,
      title: "Continuous Flow Management",
      description: "Handle high-volume, continuous order flow with automated workflow optimization"
    },
    {
      icon: <Clock className="w-6 h-6 text-emerald" />,
      title: "Timely Production Control",
      description: "Ensure on-time delivery with priority scheduling and real-time production tracking"
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-gold" />,
      title: "Improved Inventory Control",
      description: "Optimize inventory management for diverse workwear and uniform requirements"
    }
  ];

  const features = [
    {
      icon: <RefreshCw className="w-8 h-8 text-gold" />,
      title: "Continuous Order Processing",
      description: "Automate high-volume order processing with intelligent workflow management."
    },
    {
      icon: <Truck className="w-8 h-8 text-emerald" />,
      title: "Urgent Request Handling",
      description: "Priority scheduling system for urgent uniform and workwear requests."
    }
  ];

  return (
    <div className="min-h-screen theme-background theme-text transition-colors duration-300">
      <PageSEO seo={{
        title: "Workwear & Uniform Services Software",
        description: "Automate high-volume order processing with priority scheduling and inventory control.",
        keywords: "workwear software, uniform services management",
        canonical: "https://tracker-systems.com/industries/workwear-uniforms"
      }} />
      {/* Hero Section */}
      <section className="relative pt-32 md:pt-36 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-teal-500/5"></div>
        <div className="container mx-auto px-4 relative z-10 py-[64px]">
          <motion.div 
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <HardHat className="w-12 h-12 text-gold" />
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-gold to-emerald bg-clip-text text-transparent">
                Workwear & Uniform Services
              </h1>
            </div>
            <p className="text-xl theme-text-secondary mb-8 leading-relaxed">
              Ideal for uniform service companies managing continuous order flow, ensuring timely production, accurate fulfillment, and improved inventory control.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" variant="gold">
                <Link to="/get-started" onClick={() => window.scrollTo(0, 0)}>Get Started</Link>
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
              Workwear Industry Challenges
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {challenges.map((challenge, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-2 h-2 bg-gold rounded-full mt-3 flex-shrink-0"></div>
                  <p className="theme-text-secondary">{challenge}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Workwear Solutions with Tracker
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full theme-surface theme-border hover:border-gold-opacity-50 transition-all duration-300">
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
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry-Specific Features Section */}
      <section className="py-16 theme-surface theme-border border-y">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Workwear & Uniform Specialization
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="h-full theme-surface theme-border">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <RefreshCw className="w-6 h-6 text-gold" />
                    <CardTitle className="text-xl">Continuous Order Processing</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="theme-text-secondary mb-4">
                    Automate high-volume order processing with intelligent workflow management for seamless continuous operations.
                  </CardDescription>
                  <ul className="space-y-2 theme-text-secondary">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-emerald rounded-full mt-2 flex-shrink-0"></div>
                      Automated workflow optimization
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-emerald rounded-full mt-2 flex-shrink-0"></div>
                      High-volume order handling
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-emerald rounded-full mt-2 flex-shrink-0"></div>
                      Continuous flow monitoring
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full theme-surface theme-border">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <Truck className="w-6 h-6 text-emerald" />
                    <CardTitle className="text-xl">Priority Request Management</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="theme-text-secondary mb-4">
                    Handle urgent uniform and workwear requests with priority scheduling system and expedited processing.
                  </CardDescription>
                  <ul className="space-y-2 theme-text-secondary">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0"></div>
                      Urgent request prioritization
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0"></div>
                      Expedited processing workflows
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0"></div>
                      Real-time delivery tracking
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pain Points Deep Dive */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Solving Workwear Industry Challenges
            </h2>
            <div className="space-y-8">
              <motion.div 
                className="border-l-4 border-gold pl-6"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold mb-3">High-Volume Order Flow</h3>
                <p className="theme-text-secondary mb-3">
                  Managing continuous, high-volume order flow for workwear and uniforms requires sophisticated 
                  automation and workflow optimization to maintain efficiency and meet delivery commitments.
                </p>
                <p className="theme-text-secondary">
                  <strong className="text-emerald">Tracker Solution:</strong> Automated workflow management 
                  handles continuous order processing with intelligent optimization and real-time monitoring.
                </p>
              </motion.div>

              <motion.div 
                className="border-l-4 border-emerald pl-6"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold mb-3">Urgent Request Handling</h3>
                <p className="theme-text-secondary mb-3">
                  Workwear businesses often face urgent requests that require immediate prioritization and 
                  expedited processing without disrupting regular production schedules.
                </p>
                <p className="theme-text-secondary">
                  <strong className="text-gold">Tracker Solution:</strong> Priority scheduling system automatically 
                  identifies and fast-tracks urgent requests while maintaining overall production efficiency.
                </p>
              </motion.div>

              <motion.div 
                className="border-l-4 border-gold pl-6"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold mb-3">Inventory Coordination</h3>
                <p className="theme-text-secondary mb-3">
                  Coordinating inventory for diverse workwear requirements while maintaining optimal stock levels 
                  and avoiding shortages requires sophisticated inventory management and forecasting.
                </p>
                <p className="theme-text-secondary">
                  <strong className="text-emerald">Tracker Solution:</strong> Intelligent inventory management 
                  optimizes stock levels and provides predictive insights for better planning and control.
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
                <div className="text-4xl font-bold text-gold mb-2">65%</div>
                <p className="theme-text-secondary">Faster Order Processing</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-emerald mb-2">55%</div>
                <p className="theme-text-secondary">Better Inventory Control</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-gold mb-2">40%</div>
                <p className="theme-text-secondary">Improved On-Time Delivery</p>
              </div>
            </div>
            <Button asChild size="lg" variant="gold">
              <Link to="/get-started" onClick={() => window.scrollTo(0, 0)}>Streamline Your Service Today</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WorkwearUniforms;