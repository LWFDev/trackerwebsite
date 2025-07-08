import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Monitor, CheckCircle, TrendingUp, Clock, Users, BarChart3 } from "lucide-react";

const PrintOnDemand = () => {
  const challenges = [
    "Integrating seamlessly with online store platforms",
    "Providing transparent order tracking to customers",
    "Managing high-volume automated order processing",
    "Maintaining quality across diverse print products"
  ];

  const solutions = [
    {
      icon: <BarChart3 className="w-6 h-6 text-gold-DEFAULT" />,
      title: "Seamless Store Integration",
      description: "Connect directly with online stores for automated order import and processing"
    },
    {
      icon: <Clock className="w-6 h-6 text-emerald-DEFAULT" />,
      title: "Transparent Customer Tracking",
      description: "Provide real-time order progress tracking directly to your end customers"
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-gold-DEFAULT" />,
      title: "Automated Order Processing",
      description: "Handle high-volume orders with automated workflows and quality checks"
    }
  ];

  return (
    <div className="min-h-screen theme-background theme-text transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-cyan-500/5"></div>
        <div className="container mx-auto px-4 relative z-10 py-[64px]">
          <motion.div 
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <Monitor className="w-12 h-12 text-gold-DEFAULT" />
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-gold-DEFAULT to-emerald-DEFAULT bg-clip-text text-transparent">
                Online Print-on-Demand
              </h1>
            </div>
            <p className="text-xl theme-text-secondary mb-8 leading-relaxed">
              Enable seamless integration with online stores to provide transparent order progress tracking directly to end customers. Automate your print-on-demand workflow for maximum efficiency.
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
              Print-on-Demand Challenges
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
            Digital Excellence with Tracker
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
            Advanced Print-on-Demand Features
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
                <Users className="w-8 h-8 text-gold-DEFAULT" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Customer Portal Integration</h3>
                <p className="theme-text-secondary">Direct customer access to order status with real-time tracking and notifications.</p>
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
                <CheckCircle className="w-8 h-8 text-emerald-DEFAULT" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Quality Automation</h3>
                <p className="theme-text-secondary">Automated quality checks and print verification for consistent output across all orders.</p>
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
              Why Print-on-Demand Businesses Choose Tracker
            </h2>
            <div className="space-y-8">
              <motion.div
                className="border-l-4 border-gold-DEFAULT pl-6"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold mb-3">Order Volume Overwhelm</h3>
                <p className="theme-text-secondary mb-3">
                  Print-on-demand businesses can receive hundreds of orders daily during peak periods. Manual tracking 
                  becomes impossible, leading to lost orders and frustrated customers.
                </p>
                <p className="theme-text-secondary">
                  <strong className="text-emerald-DEFAULT">Tracker Solution:</strong> Automated order processing with 
                  intelligent batching and priority queuing handles any volume seamlessly.
                </p>
              </motion.div>

              <motion.div
                className="border-l-4 border-emerald-DEFAULT pl-6"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold mb-3">Customer Communication Gap</h3>
                <p className="theme-text-secondary mb-3">
                  Customers expect transparency in their order status. Without real-time updates, you get flooded 
                  with "where's my order?" inquiries that drain your support resources.
                </p>
                <p className="theme-text-secondary">
                  <strong className="text-gold-DEFAULT">Tracker Solution:</strong> Automatic customer notifications 
                  and self-service tracking portal eliminates 80% of support inquiries.
                </p>
              </motion.div>

              <motion.div
                className="border-l-4 border-gold-DEFAULT pl-6"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold mb-3">Platform Integration Complexity</h3>
                <p className="theme-text-secondary mb-3">
                  Managing orders from multiple platforms (Shopify, Etsy, Amazon) creates data silos and 
                  increases the risk of errors and missed orders.
                </p>
                <p className="theme-text-secondary">
                  <strong className="text-emerald-DEFAULT">Tracker Solution:</strong> Universal API integration 
                  consolidates all orders into one unified dashboard with automatic sync.
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
              Digital Success Metrics
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div>
                <div className="text-4xl font-bold text-emerald-DEFAULT mb-2">75%</div>
                <p className="theme-text-secondary">Reduction in Manual Processing</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-emerald-DEFAULT mb-2">90%</div>
                <p className="theme-text-secondary">Customer Satisfaction Rate</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-emerald-DEFAULT mb-2">50%</div>
                <p className="theme-text-secondary">Faster Order Fulfillment</p>
              </div>
            </div>
            <Button asChild size="lg" variant="emerald">
              <Link to="/get-started">Scale Your Business</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrintOnDemand;