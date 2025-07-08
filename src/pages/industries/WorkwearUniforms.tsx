import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { HardHat, CheckCircle, TrendingUp, Clock, Users, BarChart3, RefreshCw, Truck } from "lucide-react";

const WorkwearUniforms = () => {
  const challenges = [
    "Managing continuous high-volume order flow",
    "Ensuring timely production for urgent requests",
    "Maintaining accurate fulfillment across large orders",
    "Controlling inventory for diverse workwear requirements"
  ];

  const solutions = [
    {
      icon: <BarChart3 className="w-6 h-6 text-gold-DEFAULT" />,
      title: "Continuous Flow Management",
      description: "Handle high-volume, continuous order flow with automated workflow optimization"
    },
    {
      icon: <Clock className="w-6 h-6 text-emerald-DEFAULT" />,
      title: "Timely Production Control",
      description: "Ensure on-time delivery with priority scheduling and real-time production tracking"
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-gold-DEFAULT" />,
      title: "Improved Inventory Control",
      description: "Optimize inventory management for diverse workwear and uniform requirements"
    }
  ];

  const features = [
    {
      icon: <RefreshCw className="w-8 h-8 text-gold-DEFAULT" />,
      title: "Continuous Order Processing",
      description: "Automate high-volume order processing with intelligent workflow management."
    },
    {
      icon: <Truck className="w-8 h-8 text-emerald-DEFAULT" />,
      title: "Urgent Request Handling",
      description: "Priority scheduling system for urgent uniform and workwear requests."
    }
  ];

  return (
    <div className="min-h-screen theme-background theme-text transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-teal-500/5"></div>
        <div className="container mx-auto px-4 relative z-10 py-[64px]">
          <motion.div 
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <HardHat className="w-12 h-12 text-gold-DEFAULT" />
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-gold-DEFAULT to-emerald-DEFAULT bg-clip-text text-transparent">
                Workwear & Uniform Services
              </h1>
            </div>
            <p className="text-xl theme-text-secondary mb-8 leading-relaxed">
              Ideal for uniform service companies managing continuous order flow, ensuring timely production, accurate fulfillment, and improved inventory control.
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
            Specialized Workwear Features
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
              Workwear Performance Results
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div>
                <div className="text-4xl font-bold text-emerald-DEFAULT mb-2">65%</div>
                <p className="theme-text-secondary">Faster Order Processing</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-emerald-DEFAULT mb-2">55%</div>
                <p className="theme-text-secondary">Better Inventory Control</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-emerald-DEFAULT mb-2">40%</div>
                <p className="theme-text-secondary">Improved On-Time Delivery</p>
              </div>
            </div>
            <Button asChild size="lg" variant="emerald">
              <Link to="/get-started">Streamline Your Service</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WorkwearUniforms;