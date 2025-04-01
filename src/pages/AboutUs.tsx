
import React from "react";
import { Users, Star, ArrowUpRight, Target, Award, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AboutUs = () => {
  // Team members data
  const teamMembers = [
    { id: 1, name: "Team Member 1", position: "Founder" },
    { id: 2, name: "Team Member 2", position: "Co-Founder" },
    { id: 3, name: "Team Member 3", position: "CTO" },
    { id: 4, name: "Team Member 4", position: "Product Lead" },
    { id: 5, name: "Team Member 5", position: "Design Lead" },
    { id: 6, name: "Team Member 6", position: "Marketing Director" },
    { id: 7, name: "Team Member 7", position: "Customer Success" },
    { id: 8, name: "Team Member 8", position: "Senior Developer" },
  ];

  // Testimonials data
  const testimonials = [
    {
      id: 1,
      rating: 5,
      text: "Tracker has completely transformed how we manage our design workflow. The approval system has saved us hours each day. Highly recommend!",
      author: "Jane Smith",
      position: "Production Manager, XYZ"
    },
    {
      id: 2,
      rating: 5,
      text: "The order management system allows high levels of visibility while reducing admin workload. Our accuracy rate has dramatically increased.",
      author: "Michael Johnson",
      position: "Operations Manager, ABC"
    },
    {
      id: 3,
      rating: 5,
      text: "Customer service is exceptional. Any time we've had questions, the team has been responsive and helpful. The platform is intuitive and powerful.",
      author: "Sarah Williams",
      position: "Owner, Fresh Threads"
    }
  ];

  // Values data
  const values = [
    {
      icon: <Users className="h-10 w-10 text-gold-DEFAULT" />,
      title: "Customer First",
      description: "We always view our customer interactions through the lens of how to solve real problems."
    },
    {
      icon: <Award className="h-10 w-10 text-gold-DEFAULT" />,
      title: "Excellence",
      description: "We strive for excellence in everything we do, from product quality to customer service."
    },
    {
      icon: <RefreshCw className="h-10 w-10 text-gold-DEFAULT" />,
      title: "Innovation",
      description: "We're constantly innovating and improving our software to make it as powerful as possible."
    },
    {
      icon: <Target className="h-10 w-10 text-gold-DEFAULT" />,
      title: "Integrity",
      description: "We act with integrity and transparency in all our interactions."
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="pt-24 pb-16 bg-black text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute w-[600px] h-[600px] rounded-full bg-gold-DEFAULT/10 blur-[120px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 gold-gradient-text">
            Our mission is to empower <br />businesses to work smarter
          </h1>
          <p className="text-xl max-w-3xl mx-auto mb-8 text-gray-300">
            We're building the tools that help businesses streamline their workflows, reduce manual work, and focus on what matters most.
          </p>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="py-16 bg-zinc-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1">
              <h3 className="text-lg text-gold-DEFAULT mb-4">Our Story</h3>
              <h2 className="text-3xl font-bold mb-6 gold-gradient-text">From frustration to innovation</h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  Tracker was born out of frustration. Our founders, who had spent years in the apparel decoration industry, were tired of the inefficient processes and manual work that dominated the space.
                </p>
                <p>
                  They saw firsthand how businesses were wasting countless hours searching for files, manually tracking approvals, and chasing clients for approvals. They knew there had to be a better way.
                </p>
                <p>
                  In 2020, they set out to build the solution they wished they had, a platform that would streamline the entire workflow from design to delivery. Today, Tracker is used by thousands of businesses worldwide, saving them time and helping them grow.
                </p>
              </div>
            </div>
            <div className="flex-1 flex justify-center">
              <div className="w-full max-w-md aspect-square bg-zinc-800/50 rounded-lg border border-zinc-700 flex items-center justify-center">
                <img 
                  src="/lovable-uploads/1550609f-a25b-430c-8544-7a89b9def04f.png" 
                  alt="About Tracker" 
                  className="w-16 h-16 opacity-30"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Values Section */}
      <div className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-lg text-gold-DEFAULT mb-4">Our Values</h3>
            <h2 className="text-3xl font-bold mb-6 gold-gradient-text">What drives us every day</h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Our core values guide everything we do. Every product detail and feature is created to embody these values.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-zinc-900 p-6 rounded-lg border border-zinc-800 hover:border-gold-DEFAULT/40 transition-all duration-300 group">
                <div className="mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-gold-DEFAULT transition-colors">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-16 bg-zinc-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-lg text-gold-DEFAULT mb-4">Our Team</h3>
            <h2 className="text-3xl font-bold mb-6 gold-gradient-text">Meet the people behind Tracker</h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              We're a diverse team of designers, developers, and industry experts passionate about creating the best workflow tools.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {teamMembers.map((member) => (
              <div key={member.id} className="bg-zinc-800/20 rounded-lg overflow-hidden group hover:border hover:border-gold-DEFAULT transition-all">
                <div className="aspect-square bg-zinc-800/50 flex items-center justify-center">
                  <Users className="w-16 h-16 text-zinc-600 group-hover:text-gold-DEFAULT transition-colors" />
                </div>
                <div className="p-4">
                  <h3 className="font-medium group-hover:text-gold-DEFAULT transition-colors">{member.name}</h3>
                  <p className="text-sm text-gray-400">{member.position}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Button variant="outline" className="border-zinc-700 hover:border-gold-DEFAULT group">
              Join our team 
              <ArrowUpRight className="ml-2 h-4 w-4 text-gray-400 group-hover:text-gold-DEFAULT transition-colors" />
            </Button>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-lg text-gold-DEFAULT mb-4">Testimonials</h3>
            <h2 className="text-3xl font-bold mb-6 gold-gradient-text">What our customers say</h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our customers have to say about Tracker.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-zinc-900 p-6 rounded-lg border border-zinc-800 hover:border-gold-DEFAULT/40 transition-all">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-gold-DEFAULT fill-gold-DEFAULT" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-zinc-700 flex items-center justify-center mr-3">
                    <Users className="h-5 w-5 text-zinc-400" />
                  </div>
                  <div>
                    <p className="font-medium text-white">{testimonial.author}</p>
                    <p className="text-sm text-gray-400">{testimonial.position}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-zinc-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 gold-gradient-text">Join the Tracker community</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-gray-300">
            Start your free 14-day trial today and see how Tracker can transform your workflow.
          </p>
          <Link to="/get-started">
            <Button variant="gold">Get Started Free</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
