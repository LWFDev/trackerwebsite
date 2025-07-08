import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Shirt, CheckCircle, TrendingUp, Clock, Users, BarChart3, Layers, AlertTriangle } from "lucide-react";

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

  const features = [
    {
      icon: <Layers className="w-8 h-8 text-gold" />,
      title: "Multi-Line Coordination",
      description: "Coordinate production across multiple manufacturing lines with centralized oversight."
    },
    {
      icon: <AlertTriangle className="w-8 h-8 text-emerald" />,
      title: "Early Warning System",
      description: "Receive alerts for potential issues before they become costly production problems."
    }
  ];

  return (
    <div className="min-h-screen theme-background theme-text transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-transparent to-emerald-500/5"></div>
        <div className="container mx-auto px-4 relative z-10 py-[64px]">
          <motion.div 
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <Shirt className="w-12 h-12 text-emerald-DEFAULT" />
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-emerald-DEFAULT to-emerald-light bg-clip-text text-transparent">
                Apparel Manufacturing
              </h1>
            </div>
            <p className="text-xl theme-text-secondary mb-8 leading-relaxed">
              Provide apparel manufacturers real-time insight into production statuses, reducing bottlenecks and ensuring consistent output quality across all manufacturing lines.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" variant="emerald">
                <Link to="/get-started">Start Free Trial</Link>
              </Button>
              <Button asChild variant="emerald-outline" size="lg">
                <Link to="/contact">Schedule Demo</Link>
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
                  <div className="w-2 h-2 bg-emerald-DEFAULT rounded-full mt-3 flex-shrink-0"></div>
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
                <Card className="h-full theme-surface theme-border hover:border-emerald-DEFAULT/50 transition-all duration-300">
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

      {/* Features Section */}
      <section className="py-16 theme-surface theme-border border-y">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Advanced Manufacturing Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="flex-shrink-0">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="theme-text-secondary">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">
              Manufacturing Performance Results
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div>
                <div className="text-4xl font-bold text-emerald-DEFAULT mb-2">45%</div>
                <p className="theme-text-secondary">Reduction in Bottlenecks</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-emerald-DEFAULT mb-2">60%</div>
                <p className="theme-text-secondary">Better Production Visibility</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-emerald-DEFAULT mb-2">30%</div>
                <p className="theme-text-secondary">Quality Improvement</p>
              </div>
            </div>
            <Button asChild size="lg" variant="emerald">
              <Link to="/get-started">Transform Your Manufacturing</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ApparelManufacturing;