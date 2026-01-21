import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Shirt, CheckCircle, TrendingUp, Clock, Users, BarChart3, Layers, AlertTriangle } from "lucide-react";
import { scrollToTop } from "@/utils/navigation";
import PageSEO from "@/components/seo/PageSEO";

const ApparelManufacturing = () => {
  const challenges = [
    "Monitoring production status across multiple lines",
    "Identifying and eliminating bottlenecks quickly",
    "Maintaining consistent quality at scale",
    "Coordinating complex supply chain operations"
  ];

  const solutions = [
    {
      icon: <BarChart3 className="w-6 h-6 text-gold" />,
      title: "Real-Time Production Insights",
      description: "Get instant visibility into production status across all manufacturing lines"
    },
    {
      icon: <Clock className="w-6 h-6 text-emerald" />,
      title: "Bottleneck Identification",
      description: "Quickly identify and resolve production bottlenecks before they impact delivery"
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-gold" />,
      title: "Quality Assurance",
      description: "Ensure consistent output quality with automated tracking and alerts"
    }
  ];

      return (
        <div className="min-h-screen theme-background theme-text transition-colors duration-300">
          <PageSEO seo={{
            title: "Apparel Manufacturing Software Solutions",
            description: "Real-time production insight, bottleneck identification, and quality assurance for apparel manufacturers.",
            keywords: "apparel manufacturing software, production management",
            canonical: "https://tracker-systems.com/industries/apparel-manufacturing"
          }} />
      {/* Hero Section */}
      <section className="relative pt-32 md:pt-36 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-transparent to-emerald-500/5"></div>
        <div className="container mx-auto px-4 relative z-10 py-[64px]">
          <motion.div 
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <Shirt className="w-12 h-12 text-gold" />
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-gold to-emerald bg-clip-text text-transparent">
                Apparel Manufacturing
              </h1>
            </div>
            <p className="text-xl theme-text-secondary mb-8 leading-relaxed">
              Provide apparel manufacturers real-time insight into production statuses, reducing bottlenecks and ensuring consistent output quality across all manufacturing lines.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" variant="gold">
                <Link to="/get-started" onClick={scrollToTop}>Get Started</Link>
              </Button>
              <Button asChild variant="emerald-outline" size="lg">
                <Link to="/contact" onClick={scrollToTop}>Schedule Demo</Link>
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
              Manufacturing Challenges
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
            Manufacturing Excellence with Tracker
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
            Apparel Manufacturing Specialization
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
                    <Layers className="w-6 h-6 text-gold" />
                    <CardTitle className="text-xl">Multi-Line Coordination</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="theme-text-secondary mb-4">
                    Coordinate production across multiple manufacturing lines with centralized oversight and real-time visibility.
                  </CardDescription>
                  <ul className="space-y-2 theme-text-secondary">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-emerald rounded-full mt-2 flex-shrink-0"></div>
                      Real-time line status monitoring
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-emerald rounded-full mt-2 flex-shrink-0"></div>
                      Automated workflow optimization
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-emerald rounded-full mt-2 flex-shrink-0"></div>
                      Production bottleneck alerts
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
                    <AlertTriangle className="w-6 h-6 text-emerald" />
                    <CardTitle className="text-xl">Quality Control System</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="theme-text-secondary mb-4">
                    Maintain consistent quality standards with automated tracking and early warning systems for potential issues.
                  </CardDescription>
                  <ul className="space-y-2 theme-text-secondary">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0"></div>
                      Automated quality checkpoints
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0"></div>
                      Real-time defect tracking
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0"></div>
                      Predictive issue detection
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
              Solving Apparel Manufacturing Challenges
            </h2>
            <div className="space-y-8">
              <motion.div 
                className="border-l-4 border-gold pl-6"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold mb-3">Production Line Visibility</h3>
                <p className="theme-text-secondary mb-3">
                  Without real-time visibility across manufacturing lines, bottlenecks go unnoticed until they impact 
                  delivery schedules, causing costly delays and customer dissatisfaction.
                </p>
                <p className="theme-text-secondary">
                  <strong className="text-emerald">Tracker Solution:</strong> Real-time dashboard provides instant visibility 
                  into all production lines, enabling proactive bottleneck resolution.
                </p>
              </motion.div>

              <motion.div 
                className="border-l-4 border-emerald pl-6"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold mb-3">Quality Control at Scale</h3>
                <p className="theme-text-secondary mb-3">
                  Maintaining consistent quality across high-volume production runs while meeting tight deadlines 
                  requires continuous monitoring and rapid response to quality issues.
                </p>
                <p className="theme-text-secondary">
                  <strong className="text-gold">Tracker Solution:</strong> Automated quality checkpoints and predictive 
                  analytics ensure consistent output quality without slowing production.
                </p>
              </motion.div>

              <motion.div 
                className="border-l-4 border-gold pl-6"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold mb-3">Supply Chain Coordination</h3>
                <p className="theme-text-secondary mb-3">
                  Complex supply chain operations require precise coordination between multiple vendors, materials, 
                  and production schedules to avoid disruptions.
                </p>
                <p className="theme-text-secondary">
                  <strong className="text-emerald">Tracker Solution:</strong> Integrated supply chain tracking provides 
                  end-to-end visibility and automated alerts for potential disruptions.
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
                <div className="text-4xl font-bold text-gold mb-2">45%</div>
                <p className="theme-text-secondary">Reduction in Bottlenecks</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-emerald mb-2">60%</div>
                <p className="theme-text-secondary">Better Production Visibility</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-gold mb-2">30%</div>
                <p className="theme-text-secondary">Quality Improvement</p>
              </div>
            </div>
            <Button asChild size="lg" variant="gold">
              <Link to="/get-started" onClick={scrollToTop}>Transform Your Manufacturing Today</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ApparelManufacturing;