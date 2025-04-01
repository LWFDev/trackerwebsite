
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="fixed w-full z-50 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 bg-[#7C3AED] rounded-lg"></div>
            <span className="font-bold text-xl">Acme Inc</span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-[#7C3AED] transition">Features</a>
            <a href="#testimonials" className="text-gray-600 hover:text-[#7C3AED] transition">Testimonials</a>
            <a href="#pricing" className="text-gray-600 hover:text-[#7C3AED] transition">Pricing</a>
            <a href="#faq" className="text-gray-600 hover:text-[#7C3AED] transition">FAQ</a>
          </nav>

          <div className="flex items-center gap-4">
            <Button variant="outline" className="hidden md:inline-flex">
              Log in
            </Button>
            <Button className="bg-[#7C3AED] hover:bg-[#6D28D9]">
              Sign up
            </Button>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Modern SaaS for growing your business
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Our platform helps you build, scale, and optimize your SaaS application. Get started today.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
                <Button size="lg" className="bg-[#7C3AED] hover:bg-[#6D28D9]">
                  Get started
                </Button>
                <Button size="lg" variant="outline">
                  Learn more
                </Button>
              </div>
              <div className="relative">
                <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-purple-600 to-blue-500 opacity-30 blur-xl"></div>
                <div className="relative bg-white rounded-lg border border-gray-200 shadow-xl overflow-hidden">
                  <div className="h-[350px] sm:h-[450px] bg-gray-100 flex items-center justify-center">
                    <img 
                      src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
                      alt="Application screenshot" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Powerful features for your business
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Everything you need to build, scale, and grow your SaaS application
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Easy Integration",
                  description: "Integrate with your favorite tools and services with just a few clicks.",
                  icon: "🔄"
                },
                {
                  title: "Advanced Analytics",
                  description: "Get detailed insights into your application's performance and user behavior.",
                  icon: "📊"
                },
                {
                  title: "Scalable Infrastructure",
                  description: "Our platform automatically scales with your business needs.",
                  icon: "🚀"
                },
                {
                  title: "Team Collaboration",
                  description: "Work together with your team in real-time with our collaborative tools.",
                  icon: "👥"
                },
                {
                  title: "Security First",
                  description: "Enterprise-grade security to protect your data and your customers.",
                  icon: "🔒"
                },
                {
                  title: "24/7 Support",
                  description: "Our dedicated support team is available around the clock to help you.",
                  icon: "🛠️"
                }
              ].map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                  <div className="text-3xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                What our customers say
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Trusted by thousands of businesses worldwide
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  quote: "Acme Inc has completely transformed how we manage our SaaS application. The integration was seamless and the results were immediate.",
                  author: "Sarah Johnson",
                  role: "CEO, TechCorp"
                },
                {
                  quote: "The analytics platform is incredibly powerful. We've gained insights that have helped us improve our product and grow our user base.",
                  author: "Michael Chen",
                  role: "CTO, StartupX"
                },
                {
                  quote: "The scalability of Acme Inc's platform has been crucial for our growing business. We've never had to worry about infrastructure.",
                  author: "Emily Rodriguez",
                  role: "Product Manager, ScaleUp"
                }
              ].map((testimonial, index) => (
                <div key={index} className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                  <div className="mb-4 text-[#7C3AED]">
                    ★★★★★
                  </div>
                  <p className="text-gray-700 mb-6">"{testimonial.quote}"</p>
                  <div>
                    <p className="font-medium">{testimonial.author}</p>
                    <p className="text-gray-500 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Simple, transparent pricing
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                No hidden fees, no surprise charges
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                {
                  title: "Starter",
                  price: "$29",
                  features: [
                    "Up to 5 team members",
                    "10GB storage",
                    "Basic analytics",
                    "24/7 support"
                  ],
                  cta: "Get started",
                  popular: false
                },
                {
                  title: "Professional",
                  price: "$79",
                  features: [
                    "Up to 20 team members",
                    "50GB storage",
                    "Advanced analytics",
                    "Priority support",
                    "Custom integrations"
                  ],
                  cta: "Get started",
                  popular: true
                },
                {
                  title: "Enterprise",
                  price: "$149",
                  features: [
                    "Unlimited team members",
                    "Unlimited storage",
                    "Custom reporting",
                    "Dedicated support",
                    "Advanced security",
                    "Custom branding"
                  ],
                  cta: "Contact sales",
                  popular: false
                }
              ].map((plan, index) => (
                <div key={index} className={`bg-white rounded-lg border ${plan.popular ? 'border-[#7C3AED] ring-2 ring-[#7C3AED] ring-opacity-20' : 'border-gray-200'} shadow-sm p-6 relative`}>
                  {plan.popular && (
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <span className="bg-[#7C3AED] text-white text-xs font-semibold px-4 py-1 rounded-full">
                        Most popular
                      </span>
                    </div>
                  )}
                  <div className="text-center">
                    <h3 className="text-lg font-semibold mb-2">{plan.title}</h3>
                    <div className="flex justify-center items-baseline mb-4">
                      <span className="text-4xl font-bold">{plan.price}</span>
                      <span className="text-gray-500 ml-1">/month</span>
                    </div>
                    <Button className={`w-full mb-6 ${plan.popular ? 'bg-[#7C3AED] hover:bg-[#6D28D9]' : 'bg-gray-800 hover:bg-gray-700'}`}>
                      {plan.cta}
                    </Button>
                  </div>
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <svg className="h-5 w-5 text-green-500 shrink-0 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Frequently asked questions
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Got questions? We've got answers
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              {[
                {
                  question: "How does the 14-day trial work?",
                  answer: "Our 14-day trial gives you full access to all features of the platform with no credit card required. At the end of the trial, you can choose to subscribe to one of our plans or your account will be automatically downgraded to the free tier."
                },
                {
                  question: "Can I change my plan later?",
                  answer: "Yes, you can upgrade or downgrade your plan at any time. When you upgrade, you'll be charged the prorated difference for the remainder of your billing cycle. When you downgrade, the changes will take effect on your next billing date."
                },
                {
                  question: "What payment methods do you accept?",
                  answer: "We accept all major credit cards, including Visa, Mastercard, American Express, and Discover. We also support payment via PayPal and bank transfers for annual plans."
                },
                {
                  question: "Is there a setup fee?",
                  answer: "No, there are no setup fees for any of our plans. You only pay the advertised price for the plan you choose."
                },
                {
                  question: "Do you offer discounts for non-profits or educational institutions?",
                  answer: "Yes, we offer special pricing for qualified non-profit organizations and educational institutions. Please contact our sales team for more information."
                }
              ].map((faq, index) => (
                <div key={index} className="mb-6 border-b border-gray-200 pb-6 last:border-0 last:pb-0">
                  <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-[#7C3AED]">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Ready to grow your business?
              </h2>
              <p className="text-xl text-white/80 mb-8">
                Join thousands of companies that trust Acme Inc to power their business
              </p>
              <Button size="lg" className="bg-white text-[#7C3AED] hover:bg-gray-100">
                Get started for free
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition">Features</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Pricing</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Integrations</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Changelog</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition">Documentation</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Guides</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Support</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">API</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition">About</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition">Privacy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Terms</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Cookie Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Licenses</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <div className="h-8 w-8 bg-[#7C3AED] rounded-lg"></div>
              <span className="font-bold text-xl">Acme Inc</span>
            </div>
            <div className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Acme Inc. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
