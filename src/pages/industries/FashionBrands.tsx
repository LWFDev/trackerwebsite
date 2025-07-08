import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Sparkles, CheckCircle, TrendingUp, Clock, Users, BarChart3 } from "lucide-react";

const FashionBrands = () => {
  const challenges = [
    "Monitoring quality across complex production runs",
    "Adhering to strict customization specifications",
    "Managing production timelines for fashion cycles",
    "Maintaining brand standards across all products"
  ];

  const solutions = [
    {
      icon: <BarChart3 className="w-6 h-6 text-gold-DEFAULT" />,
      title: "Quality Monitoring",
      description: "Closely monitor quality standards throughout production with detailed checkpoints"
    },
    {
      icon: <Clock className="w-6 h-6 text-emerald-DEFAULT" />,
      title: "Production Timeline Control",
      description: "Track production timelines to meet fashion cycle demands and market windows"
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-gold-DEFAULT" />,
      title: "Customization Compliance",
      description: "Ensure adherence to customization specs with automated compliance tracking"
    }
  ];

  return (
    <div className="min-h-screen theme-background theme-text transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 via-transparent to-purple-500/5"></div>
        <div className="container mx-auto px-4 relative z-10 py-[64px]">
          <motion.div 
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <Sparkles className="w-12 h-12 text-gold-DEFAULT" />
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-gold-DEFAULT to-emerald-DEFAULT bg-clip-text text-transparent">
                Fashion Brands & Private Labels
              </h1>
            </div>
            <p className="text-xl theme-text-secondary mb-8 leading-relaxed">
              Support private-label and fashion brands in closely monitoring quality, production timelines, and adherence to customization specifications across all manufacturing processes.
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
              Fashion Industry Challenges
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
            Fashion Excellence with Tracker
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
            Advanced Fashion Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              className="flex items-start gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="flex-shrink-0">
                <CheckCircle className="w-8 h-8 text-gold-DEFAULT" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Quality Checkpoints</h3>
                <p className="theme-text-secondary">Automated quality control checkpoints throughout the production process to maintain brand standards.</p>
              </div>
            </motion.div>
            <motion.div
              className="flex items-start gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex-shrink-0">
                <Users className="w-8 h-8 text-emerald-DEFAULT" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Brand Compliance Tracking</h3>
                <p className="theme-text-secondary">Monitor adherence to brand guidelines and customization specifications across all production runs.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Industry Pain Points */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Why Fashion Brands Choose Tracker
            </h2>
            <div className="space-y-8">
              <motion.div
                className="border-l-4 border-gold-DEFAULT pl-6"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold mb-3">Seasonal Deadline Pressure</h3>
                <p className="theme-text-secondary mb-3">
                  Fashion brands face intense pressure to meet seasonal launch dates. Even a week delay can mean 
                  missing crucial selling windows and losing market share to competitors.
                </p>
                <p className="theme-text-secondary">
                  <strong className="text-emerald-DEFAULT">Tracker Solution:</strong> Real-time production timeline 
                  tracking with automated alerts ensures you never miss critical fashion cycle deadlines.
                </p>
              </motion.div>

              <motion.div
                className="border-l-4 border-emerald-DEFAULT pl-6"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold mb-3">Quality Inconsistencies</h3>
                <p className="theme-text-secondary mb-3">
                  Private label manufacturers often struggle with maintaining consistent quality across different 
                  production runs, leading to brand reputation damage and costly returns.
                </p>
                <p className="theme-text-secondary">
                  <strong className="text-gold-DEFAULT">Tracker Solution:</strong> Detailed quality monitoring with 
                  photo documentation ensures every piece meets your exact brand standards.
                </p>
              </motion.div>

              <motion.div
                className="border-l-4 border-gold-DEFAULT pl-6"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold mb-3">Customization Complexity</h3>
                <p className="theme-text-secondary mb-3">
                  Managing complex customization requirements across multiple styles, sizes, and specifications 
                  becomes overwhelming without proper tracking systems.
                </p>
                <p className="theme-text-secondary">
                  <strong className="text-emerald-DEFAULT">Tracker Solution:</strong> Comprehensive spec tracking 
                  with automated compliance checks ensures perfect execution of every customization detail.
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
              Fashion-Forward Results
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div>
                <div className="text-4xl font-bold text-emerald-DEFAULT mb-2">50%</div>
                <p className="theme-text-secondary">Improvement in Quality Control</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-emerald-DEFAULT mb-2">35%</div>
                <p className="theme-text-secondary">Faster Time-to-Market</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-emerald-DEFAULT mb-2">95%</div>
                <p className="theme-text-secondary">Spec Compliance Rate</p>
              </div>
            </div>
            <Button asChild size="lg" variant="emerald">
              <Link to="/get-started">Elevate Your Brand</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FashionBrands;