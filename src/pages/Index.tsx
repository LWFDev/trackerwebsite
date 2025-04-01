
import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Features from "@/components/landing/Features";
import Testimonials from "@/components/landing/Testimonials";
import Pricing from "@/components/landing/Pricing";
import CTA from "@/components/landing/CTA";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <Hero />
        <Features />
        <Testimonials />
        <Pricing />
        
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
        
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
