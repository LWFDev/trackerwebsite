import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Building2, CheckCircle, TrendingUp, Clock, Users, BarChart3, Shield, FileCheck } from "lucide-react";
import PageSEO from "@/components/seo/PageSEO";


const CorporateApparel = () => {
  const challenges = [
    "Managing complex customized orders for multiple clients",
    "Tracking specific requirements for each corporate account",
    "Ensuring precise fulfillment across diverse order types",
    "Maintaining brand consistency for corporate clients"
  ];

  const solutions = [
    {
      icon: <BarChart3 className="w-6 h-6 text-gold" />,
      title: "Complex Order Management",
      description: "Handle intricate customized orders with detailed tracking for each corporate client"
    },
    {
      icon: <Clock className="w-6 h-6 text-emerald" />,
      title: "Client-Specific Tracking",
      description: "Monitor unique requirements and specifications for each corporate account"
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-gold" />,
      title: "Precise Fulfillment",
      description: "Ensure accurate order completion with detailed quality control checkpoints"
    }
  ];

  const features = [
    {
      icon: <Shield className="w-8 h-8 text-gold" />,
      title: "Brand Consistency Controls",
      description: "Maintain strict brand standards across all corporate client orders with automated checks."
    },
    {
      icon: <FileCheck className="w-8 h-8 text-emerald" />,
      title: "Compliance Tracking",
      description: "Track compliance with corporate guidelines and specifications for each client account."
    }
  ];

  return (
    <div className="min-h-screen theme-background theme-text transition-colors duration-300">
      <PageSEO seo={{
        title: "Corporate Apparel Suppliers Software",
        description: "Manage complex customized orders and maintain brand consistency for corporate clients.",
        keywords: "corporate apparel software, order management",
        canonical: "https://tracker-systems.com/industries/corporate-apparel"
      }} />
      {/* Hero Section */}
      <section className="relative pt-32 md:pt-36 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-500/5 via-transparent to-slate-500/5"></div>
        <div className="container mx-auto px-4 relative z-10 py-[64px]">
          <motion.div 
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <Building2 className="w-12 h-12 text-gold" />
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-gold to-emerald bg-clip-text text-transparent">
                Corporate Apparel Suppliers
              </h1>
            </div>
            <p className="text-xl theme-text-secondary mb-8 leading-relaxed">
              Allow suppliers of corporate wear to closely monitor complex, customized orders for various corporate clients, ensuring precise fulfillment and brand consistency.
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
              Corporate Apparel Challenges
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
            Corporate Solutions with Tracker
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
            Corporate Apparel Specialization
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
                    <Shield className="w-6 h-6 text-gold" />
                    <CardTitle className="text-xl">Brand Consistency Controls</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="theme-text-secondary mb-4">
                    Maintain strict brand standards across all corporate client orders with automated quality checks and compliance monitoring.
                  </CardDescription>
                  <ul className="space-y-2 theme-text-secondary">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-emerald rounded-full mt-2 flex-shrink-0"></div>
                      Automated brand standard checks
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-emerald rounded-full mt-2 flex-shrink-0"></div>
                      Client-specific guidelines tracking
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-emerald rounded-full mt-2 flex-shrink-0"></div>
                      Quality compliance reporting
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
                    <FileCheck className="w-6 h-6 text-emerald" />
                    <CardTitle className="text-xl">Complex Order Management</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="theme-text-secondary mb-4">
                    Handle intricate customized orders with detailed tracking for each corporate client and their unique requirements.
                  </CardDescription>
                  <ul className="space-y-2 theme-text-secondary">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0"></div>
                      Multi-client order coordination
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0"></div>
                      Customization requirement tracking
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0"></div>
                      Precision fulfillment monitoring
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
              Solving Corporate Apparel Challenges
            </h2>
            <div className="space-y-8">
              <motion.div 
                className="border-l-4 border-gold pl-6"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold mb-3">Multi-Client Complexity</h3>
                <p className="theme-text-secondary mb-3">
                  Managing customized orders for multiple corporate clients, each with unique brand guidelines, 
                  specifications, and delivery requirements creates operational complexity and risk of errors.
                </p>
                <p className="theme-text-secondary">
                  <strong className="text-emerald">Tracker Solution:</strong> Client-specific tracking systems and 
                  automated brand compliance checks ensure every order meets exact corporate standards.
                </p>
              </motion.div>

              <motion.div 
                className="border-l-4 border-emerald pl-6"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold mb-3">Brand Consistency</h3>
                <p className="theme-text-secondary mb-3">
                  Corporate clients demand strict adherence to brand guidelines across all apparel items, 
                  requiring continuous monitoring and quality control throughout the production process.
                </p>
                <p className="theme-text-secondary">
                  <strong className="text-gold">Tracker Solution:</strong> Automated brand standard verification 
                  and real-time quality monitoring ensure consistent results for every corporate client.
                </p>
              </motion.div>

              <motion.div 
                className="border-l-4 border-gold pl-6"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold mb-3">Customization Precision</h3>
                <p className="theme-text-secondary mb-3">
                  Complex customization requirements for corporate apparel demand precise execution and 
                  detailed tracking to ensure accurate fulfillment of each specification.
                </p>
                <p className="theme-text-secondary">
                  <strong className="text-emerald">Tracker Solution:</strong> Detailed requirement tracking and 
                  precision fulfillment monitoring ensure accurate completion of complex customizations.
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
                <div className="text-4xl font-bold text-gold mb-2">55%</div>
                <p className="theme-text-secondary">Better Order Accuracy</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-emerald mb-2">70%</div>
                <p className="theme-text-secondary">Improved Client Satisfaction</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-gold mb-2">40%</div>
                <p className="theme-text-secondary">Faster Customization Process</p>
              </div>
            </div>
            <Button asChild size="lg" variant="gold">
              <Link to="/get-started" onClick={() => window.scrollTo(0, 0)}>Elevate Corporate Service Today</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CorporateApparel;