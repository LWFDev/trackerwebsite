import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Trophy, CheckCircle, TrendingUp, Clock, Users, BarChart3 } from "lucide-react";

const SportsAndUniforms = () => {
  const challenges = [
    "Managing seasonal demand spikes efficiently",
    "Customizing team uniforms with precision",
    "Coordinating complex sportswear production schedules",
    "Meeting tight deadlines for sporting events"
  ];

  const solutions = [
    {
      icon: <BarChart3 className="w-6 h-6 text-gold-DEFAULT" />,
      title: "Seasonal Demand Management",
      description: "Handle demand spikes smoothly with intelligent capacity planning and scheduling"
    },
    {
      icon: <Clock className="w-6 h-6 text-emerald-DEFAULT" />,
      title: "Custom Uniform Production",
      description: "Streamline team uniform customization with detailed specification tracking"
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-gold-DEFAULT" />,
      title: "Event Deadline Management",
      description: "Ensure timely delivery for sporting events with priority scheduling"
    }
  ];

  return (
    <div className="min-h-screen theme-background theme-text transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 via-transparent to-amber-500/5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <Trophy className="w-12 h-12 text-gold-DEFAULT" />
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-gold-DEFAULT to-emerald-DEFAULT bg-clip-text text-transparent">
                Sportswear & Team Uniforms
              </h1>
            </div>
            <p className="text-xl theme-text-secondary mb-8 leading-relaxed">
              Streamline production and delivery of team uniforms and customized sportswear. Manage seasonal demand spikes smoothly while maintaining quality and meeting event deadlines.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" variant="gold">
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
              Sportswear Industry Challenges
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
                  <div className="w-2 h-2 bg-gold-DEFAULT rounded-full mt-3 flex-shrink-0"></div>
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
            Winning Solutions with Tracker
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
                <Card className="h-full theme-surface theme-border hover:border-gold-DEFAULT/50 transition-all duration-300">
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
            Sports Industry Specialization
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
                    <Users className="w-6 h-6 text-gold-DEFAULT" />
                    <CardTitle className="text-xl">Team Roster Management</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="theme-text-secondary mb-4">
                    Track individual player measurements, positions, and uniform requirements across entire teams and leagues.
                  </CardDescription>
                  <ul className="space-y-2 theme-text-secondary">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-emerald-DEFAULT rounded-full mt-2 flex-shrink-0"></div>
                      Player-specific sizing and customization
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-emerald-DEFAULT rounded-full mt-2 flex-shrink-0"></div>
                      Bulk order management for teams
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-emerald-DEFAULT rounded-full mt-2 flex-shrink-0"></div>
                      Season-long uniform planning
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
                    <CheckCircle className="w-6 h-6 text-emerald-DEFAULT" />
                    <CardTitle className="text-xl">Event-Based Production</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="theme-text-secondary mb-4">
                    Coordinate production schedules around critical sporting events, tournaments, and season starts.
                  </CardDescription>
                  <ul className="space-y-2 theme-text-secondary">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-gold-DEFAULT rounded-full mt-2 flex-shrink-0"></div>
                      Championship rush order handling
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-gold-DEFAULT rounded-full mt-2 flex-shrink-0"></div>
                      Season timeline integration
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-gold-DEFAULT rounded-full mt-2 flex-shrink-0"></div>
                      Tournament delivery coordination
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
              Why Sports Apparel Companies Choose Tracker
            </h2>
            <div className="space-y-8">
              <motion.div 
                className="border-l-4 border-gold-DEFAULT pl-6"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold mb-3">Peak Season Overload</h3>
                <p className="theme-text-secondary mb-3">
                  During peak sports seasons, orders can increase by 300-500%. Traditional systems buckle under this pressure, 
                  leading to missed deadlines and unhappy coaches.
                </p>
                <p className="theme-text-secondary">
                  <strong className="text-emerald-DEFAULT">Tracker Solution:</strong> Dynamic capacity planning automatically adjusts 
                  production schedules and resource allocation during peak periods.
                </p>
              </motion.div>

              <motion.div 
                className="border-l-4 border-emerald-DEFAULT pl-6"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold mb-3">Complex Customization Requirements</h3>
                <p className="theme-text-secondary mb-3">
                  Each team needs unique color combinations, player names, numbers, logos, and sponsor placements. 
                  Managing these specifications manually leads to costly errors.
                </p>
                <p className="theme-text-secondary">
                  <strong className="text-gold-DEFAULT">Tracker Solution:</strong> Digital design templates and automated 
                  specification tracking ensure every uniform meets exact team requirements.
                </p>
              </motion.div>

              <motion.div 
                className="border-l-4 border-gold-DEFAULT pl-6"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold mb-3">Last-Minute Championship Orders</h3>
                <p className="theme-text-secondary mb-3">
                  Championship teams need special uniforms, awards, and merchandise with extremely tight deadlines. 
                  Standard production workflows can\'t accommodate these urgent requests.
                </p>
                <p className="theme-text-secondary">
                  <strong className="text-emerald-DEFAULT">Tracker Solution:</strong> Priority queue system and express 
                  production workflows ensure championship orders are delivered on time.
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
              Championship-Level Results
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div>
                <div className="text-4xl font-bold text-gold-DEFAULT mb-2">60%</div>
                <p className="theme-text-secondary">Better Seasonal Planning</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-emerald-DEFAULT mb-2">45%</div>
                <p className="theme-text-secondary">Faster Custom Production</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-gold-DEFAULT mb-2">98%</div>
                <p className="theme-text-secondary">On-Time Event Delivery</p>
              </div>
            </div>
            <Button asChild size="lg" variant="gold">
              <Link to="/get-started">Score Big with Tracker</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SportsAndUniforms;