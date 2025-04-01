
import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Features from "@/components/landing/Features";
import Integration from "@/components/landing/Integration";
import Workflow from "@/components/landing/Workflow";
import Results from "@/components/landing/Results";
import CTA from "@/components/landing/CTA";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <Hero />
        <div className="py-12 bg-gray-100 text-center">
          <div className="container mx-auto px-4">
            <h3 className="text-lg text-gray-500 mb-8">TRUSTED BY INDUSTRY LEADERS</h3>
            <div className="grid grid-cols-5 gap-8">
              <div className="bg-gray-200 h-8 rounded"></div>
              <div className="bg-gray-200 h-8 rounded"></div>
              <div className="bg-gray-200 h-8 rounded"></div>
              <div className="bg-gray-200 h-8 rounded"></div>
              <div className="bg-gray-200 h-8 rounded"></div>
            </div>
          </div>
        </div>
        <Features />
        <Integration />
        <Workflow />
        <Results />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
