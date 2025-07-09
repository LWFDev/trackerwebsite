import React from 'react';
import { ScrollReveal } from '@/components/ui/scroll-reveal';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, Phone, Clock } from 'lucide-react';
const SupportContact = () => {
  return <section className="py-20 bg-zinc-900/30">
      <div className="container mx-auto px-6">
        <ScrollReveal direction="up" distance="30px" duration={600}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Other Ways to{' '}
              <span className="text-gold-gradient">
                Get Help
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Choose the support method that works best for you
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" distance="30px" duration={600} delay={200}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="bg-zinc-800/30 border-zinc-700/50 hover:bg-zinc-800/50 transition-colors duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gold-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Email Support</h3>
                <p className="text-gray-400 text-sm mb-4">Get detailed help via email</p>
                <p className="text-gold font-medium">support@tracker.us</p>
              </CardContent>
            </Card>

            <Card className="bg-zinc-800/30 border-zinc-700/50 hover:bg-zinc-800/50 transition-colors duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gold-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Phone Support</h3>
                <p className="text-gray-400 text-sm mb-4">Speak directly with our team</p>
                <p className="text-gold font-medium">+1 (817) 764-0200</p>
              </CardContent>
            </Card>

            <Card className="bg-zinc-800/30 border-zinc-700/50 hover:bg-zinc-800/50 transition-colors duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gold-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Support Hours</h3>
                <p className="text-gray-400 text-sm mb-4">We're here when you need us</p>
                <p className="text-gold font-medium">9am - 5pm CST</p>
              </CardContent>
            </Card>
          </div>
        </ScrollReveal>

      </div>
    </section>;
};
export default SupportContact;