import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Gift, CheckCircle, TrendingUp, Clock, Users, BarChart3 } from "lucide-react";

const PromotionalProducts = () => {
  const challenges = [
    "Tracking promotional items through complex decoration processes",
    "Managing diverse product types and decoration methods",
    "Coordinating from order placement to final shipment",
    "Maintaining quality across varied promotional items"
  ];

  const solutions = [
    {
      icon: <BarChart3 className="w-6 h-6 text-[#D4AF37]" />,
      title: "End-to-End Tracking",
      description: "Monitor promotional items from order placement through decoration to shipment"
    },
    {
      icon: <Clock className="w-6 h-6 text-[#D4AF37]" />,
      title: "Multi-Product Management",
      description: "Handle diverse promotional products with different decoration requirements"
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-[#D4AF37]" />,
      title: "Customer Satisfaction",
      description: "Enhance satisfaction with transparent tracking and timely delivery"
    }
  ];

  return (
    <div className="min-h-screen theme-background theme-text transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-red-500/5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <Gift className="w-12 h-12 text-[#D4AF37]" />
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-[#D4AF37] to-[#F2D675] bg-clip-text text-transparent">
                Promotional Product Distributors
              </h1>
            </div>
            <p className="text-xl theme-text-secondary mb-8 leading-relaxed">
              Efficiently track promotional items from order placement through final decoration and shipment. Enhance customer satisfaction with transparent processes and reliable delivery.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-gradient-to-r from-[#D4AF37] to-[#F2D675] text-black hover:opacity-90 font-semibold">
                <Link to="/get-started">Start Free Trial</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black">
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
              Promotional Product Distribution Challenges
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
                  <div className="w-2 h-2 bg-[#D4AF37] rounded-full mt-3 flex-shrink-0"></div>
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
            Promotional Excellence with Tracker
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
                <Card className="h-full theme-surface theme-border hover:border-[#D4AF37]/50 transition-all duration-300">
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

      {/* Results Section */}
      <section className="py-16 theme-surface theme-border border-t">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">
              Promotional Product Success Metrics
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div>
                <div className="text-4xl font-bold text-[#D4AF37] mb-2">35%</div>
                <p className="theme-text-secondary">Faster Order Processing</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-[#D4AF37] mb-2">50%</div>
                <p className="theme-text-secondary">Improvement in Delivery Accuracy</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-[#D4AF37] mb-2">90%</div>
                <p className="theme-text-secondary">Customer Satisfaction Score</p>
              </div>
            </div>
            <Button asChild size="lg" className="bg-gradient-to-r from-[#D4AF37] to-[#F2D675] text-black hover:opacity-90 font-semibold">
              <Link to="/get-started">Boost Promotional Success</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PromotionalProducts;