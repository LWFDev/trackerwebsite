import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { MessageSquare, Trophy, HeadphonesIcon, Sparkles, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
const ContactCTA = () => {
  const glowRef = useRef<HTMLDivElement>(null);

  // Mouse-follow effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!glowRef.current) return;
      const {
        clientX,
        clientY
      } = e;
      const rect = glowRef.current.getBoundingClientRect();

      // Calculate mouse position relative to the element
      const x = clientX - rect.left;
      const y = clientY - rect.top;
      glowRef.current.style.setProperty('--x', `${x}px`);
      glowRef.current.style.setProperty('--y', `${y}px`);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Animation variants
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 300
      }
    }
  };
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };
  return <div className="py-24 bg-gradient-to-t from-zinc-900 to-black relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div ref={glowRef} className="absolute w-[800px] h-[800px] rounded-full bg-gold-opacity-5 blur-[100px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2] pointer-events-none" style={{
        background: 'radial-gradient(circle 400px at var(--x) var(--y), hsl(var(--gold) / 0.1), transparent)',
        '--x': '50%',
        '--y': '50%'
      } as React.CSSProperties}></div>
        <div className="absolute inset-0 bg-dot-pattern opacity-5"></div>
        
        {/* Animated floating elements */}
        {[...Array(10)].map((_, i) => <motion.div key={i} className="absolute rounded-full border border-gold-opacity-20" initial={{
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        scale: Math.random() * 0.5 + 0.5,
        opacity: Math.random() * 0.7 + 0.1
      }} animate={{
        y: [null, `${Math.random() * 100 - 50}px`],
        x: [null, `${Math.random() * 100 - 50}px`],
        opacity: [null, Math.random() * 0.5 + 0.1]
      }} transition={{
        duration: Math.random() * 10 + 10,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }} style={{
        width: `${Math.random() * 40 + 10}px`,
        height: `${Math.random() * 40 + 10}px`,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`
      }} />)}
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal threshold={0.1} delay={100} className="max-w-4xl mx-auto">
          <motion.div className="bg-zinc-900/70 backdrop-blur-md border border-zinc-800 rounded-xl p-8 md:p-12 shadow-xl" initial={{
          opacity: 0,
          y: 40
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          type: "spring",
          stiffness: 300,
          damping: 15
        }}>
            <div className="text-center mb-10">
              <motion.div initial={{
              opacity: 0,
              scale: 0.8
            }} whileInView={{
              opacity: 1,
              scale: 1
            }} viewport={{
              once: true
            }} transition={{
              delay: 0.2
            }}>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-zinc-800/80 backdrop-blur-sm rounded-full border border-zinc-700 mb-6">
                  <Sparkles size={16} className="text-gold" />
                  <span className="text-sm text-gold uppercase font-medium tracking-wider">Custom Solutions</span>
                </div>
              </motion.div>
              
              <motion.h2 className="text-3xl md:text-4xl font-bold mb-6" initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              delay: 0.3
            }}>
                Need a <span className="text-gold-gradient relative">
                  Custom Solution
                  <motion.div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gold-gradient" initial={{
                  width: 0
                }} whileInView={{
                  width: "100%"
                }} viewport={{
                  once: true
                }} transition={{
                  delay: 0.7,
                  duration: 0.5
                }}></motion.div>
                </span>?
              </motion.h2>
              
              <motion.p className="text-gray-300 mb-8 max-w-2xl mx-auto" initial={{
              opacity: 0
            }} whileInView={{
              opacity: 1
            }} viewport={{
              once: true
            }} transition={{
              delay: 0.4
            }}>
                Our team is ready to help you find the perfect plan for your business needs. Let us know what your requirements are, and we'll create a tailored solution.
              </motion.p>
            </div>
            
            <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{
            once: true
          }}>
              <motion.div className="bg-zinc-800/50 rounded-lg p-6 text-center" variants={cardVariants} whileHover={{
              y: -5,
              boxShadow: '0 15px 30px -10px rgba(0, 0, 0, 0.3)'
            }}>
                <div className="bg-gold-opacity-10 p-3 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 relative overflow-hidden group">
                  <motion.div className="absolute inset-0 bg-gradient-to-r from-gold-opacity-0 via-gold-opacity-30 to-gold-opacity-0" animate={{
                  x: ['-100%', '100%']
                }} transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatDelay: 3
                }} />
                  <MessageSquare className="text-gold h-6 w-6 relative z-10" />
                </div>
                <h3 className="font-medium mb-2">Priority Support</h3>
                <p className="text-sm text-gray-400">Get help whenever you need it from our dedicated support team</p>
              </motion.div>
              
              <motion.div className="bg-zinc-800/50 rounded-lg p-6 text-center" variants={cardVariants} whileHover={{
              y: -5,
              boxShadow: '0 15px 30px -10px rgba(0, 0, 0, 0.3)'
            }}>
                <div className="bg-gold-opacity-10 p-3 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 relative overflow-hidden group">
                  <motion.div className="absolute inset-0 bg-gradient-to-r from-gold-opacity-0 via-gold-opacity-30 to-gold-opacity-0" animate={{
                  x: ['-100%', '100%']
                }} transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatDelay: 3.5
                }} />
                  <Trophy className="text-gold h-6 w-6 relative z-10" />
                </div>
                <h3 className="font-medium mb-2">Premium Features</h3>
                <p className="text-sm text-gray-400">Access to exclusive features tailored to your business needs</p>
              </motion.div>
              
              <motion.div className="bg-zinc-800/50 rounded-lg p-6 text-center" variants={cardVariants} whileHover={{
              y: -5,
              boxShadow: '0 15px 30px -10px rgba(0, 0, 0, 0.3)'
            }}>
                <div className="bg-gold-opacity-10 p-3 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 relative overflow-hidden group">
                  <motion.div className="absolute inset-0 bg-gradient-to-r from-gold-opacity-0 via-gold-opacity-30 to-gold-opacity-0" animate={{
                  x: ['-100%', '100%']
                }} transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatDelay: 4
                }} />
                  <HeadphonesIcon className="text-gold h-6 w-6 relative z-10" />
                </div>
                <h3 className="font-medium mb-2">Dedicated Manager</h3>
                <p className="text-sm text-gray-400">Your personal account manager to ensure your success</p>
              </motion.div>
            </motion.div>
            
            <motion.div className="text-center" initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: 0.6
          }}>
              <Link to="/contact">
                <Button size="lg" className="font-medium px-8 py-6 text-base bg-gold-gradient text-gold-foreground hover:bg-gold-dark-gradient group relative overflow-hidden">
                  <span className="absolute inset-0 w-full h-full bg-white/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
                  <span className="relative z-10 flex items-center">
                    Contact Sales <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </ScrollReveal>
      </div>
    </div>;
};
export default ContactCTA;