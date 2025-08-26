import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Factory, CheckCircle, TrendingUp, Clock, Users, BarChart3 } from "lucide-react";
import PageSEO from "@/components/seo/PageSEO";


const HighVolumeEmbroidery = () => {
  const challenges = [
    "Managing 150+ embroidery machines simultaneously",
    "Coordinating complex production schedules",
    "Tracking thousands of orders in real-time",
    "Maintaining quality across high-volume runs"
  ];

  const solutions = [
    {
      icon: <BarChart3 className="w-6 h-6 text-gold" />,
      title: "Real-Time Machine Monitoring",
      description: "Track the status and performance of all 150+ machines from a single dashboard"
    },
    {
      icon: <Clock className="w-6 h-6 text-emerald" />,
      title: "Advanced Production Scheduling",
      description: "Optimize machine allocation and minimize downtime with intelligent scheduling"
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-gold" />,
      title: "Operational Efficiency Analytics",
      description: "Identify bottlenecks and optimize workflows for maximum throughput"
    }
  ];

  return (
    <div className="min-h-screen theme-background theme-text transition-colors duration-300">
      <PageSEO seo={{
        title: "High-Volume Embroidery Operations Software",
        description: "Monitor 150+ machines, optimize scheduling, and boost efficiency with real-time analytics.",
        keywords: "embroidery operations software, production analytics",
        canonical: "https://tracker-systems.com/industries/high-volume-embroidery"
      }} />
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-indigo-500/5"></div>
        <div className="container mx-auto px-4 relative z-10 py-[64px]">
          <motion.div 
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <Factory className="w-12 h-12 text-gold" />
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-gold to-emerald bg-clip-text text-transparent">
                High-Volume Embroidery Operations
              </h1>
            </div>
            <p className="text-xl theme-text-secondary mb-8 leading-relaxed">
              Scale your embroidery operations with precision. Manage 150+ machines, streamline production scheduling, and boost operational efficiency with real-time tracking and analytics.
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
              Challenges in High-Volume Embroidery
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
            How Tracker Transforms Your Operations
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
            High-Volume Embroidery Specialization
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
                    <Factory className="w-6 h-6 text-gold" />
                    <CardTitle className="text-xl">Multi-Machine Coordination</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="theme-text-secondary mb-4">
                    Orchestrate 150+ embroidery machines simultaneously with real-time status monitoring and intelligent job allocation.
                  </CardDescription>
                  <ul className="space-y-2 theme-text-secondary">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-emerald rounded-full mt-2 flex-shrink-0"></div>
                      Real-time machine status dashboard
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-emerald rounded-full mt-2 flex-shrink-0"></div>
                      Automatic job queue optimization
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-emerald rounded-full mt-2 flex-shrink-0"></div>
                      Machine downtime alerts and tracking
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
                    <TrendingUp className="w-6 h-6 text-emerald" />
                    <CardTitle className="text-xl">Production Analytics</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="theme-text-secondary mb-4">
                    Advanced analytics to identify bottlenecks, optimize machine utilization, and predict maintenance needs.
                  </CardDescription>
                  <ul className="space-y-2 theme-text-secondary">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0"></div>
                      Machine efficiency reporting
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0"></div>
                      Throughput optimization insights
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0"></div>
                      Predictive maintenance scheduling
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
              Solving High-Volume Embroidery Challenges
            </h2>
            <div className="space-y-8">
              <motion.div 
                className="border-l-4 border-gold pl-6"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold mb-3">Machine Downtime Chaos</h3>
                <p className="theme-text-secondary mb-3">
                  When one of 150+ machines goes down unexpectedly, it creates a domino effect that can delay thousands 
                  of orders and cost thousands in lost productivity.
                </p>
                <p className="theme-text-secondary">
                  <strong className="text-emerald">Tracker Solution:</strong> Automatic job redistribution and real-time 
                  machine monitoring prevent bottlenecks and minimize downtime impact.
                </p>
              </motion.div>

              <motion.div 
                className="border-l-4 border-emerald pl-6"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold mb-3">Complex Job Scheduling</h3>
                <p className="theme-text-secondary mb-3">
                  Manually scheduling thousands of jobs across 150+ machines with different capabilities, thread colors, 
                  and design complexities is virtually impossible to optimize.
                </p>
                <p className="theme-text-secondary">
                  <strong className="text-gold">Tracker Solution:</strong> AI-powered scheduling algorithm considers machine 
                  capabilities, job requirements, and deadlines to optimize production flow.
                </p>
              </motion.div>

              <motion.div 
                className="border-l-4 border-gold pl-6"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold mb-3">Quality Control at Scale</h3>
                <p className="theme-text-secondary mb-3">
                  Maintaining consistent quality across massive production runs while meeting tight deadlines requires 
                  continuous monitoring and rapid response to quality issues.
                </p>
                <p className="theme-text-secondary">
                  <strong className="text-emerald">Tracker Solution:</strong> Automated quality checkpoints and real-time 
                  alerts ensure consistent output while maintaining production speed.
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
                <div className="text-4xl font-bold text-gold mb-2">35%</div>
                <p className="theme-text-secondary">Increase in Production Efficiency</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-emerald mb-2">50%</div>
                <p className="theme-text-secondary">Reduction in Machine Downtime</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-gold mb-2">25%</div>
                <p className="theme-text-secondary">Faster Order Turnaround</p>
              </div>
            </div>
            <Button asChild size="lg" variant="gold">
              <Link to="/get-started" onClick={() => window.scrollTo(0, 0)}>Transform Your Operations Today</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HighVolumeEmbroidery;