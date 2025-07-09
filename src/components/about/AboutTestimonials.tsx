
import React from "react";
import { Users, Star } from "lucide-react";

const AboutTestimonials = () => {
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

  return (
    <div className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-lg text-gold mb-4">Testimonials</h3>
          <h2 className="text-3xl font-bold mb-6 text-gold-gradient">What our customers say</h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our customers have to say about Tracker.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-zinc-900 p-6 rounded-lg border border-zinc-800 hover:border-gold-opacity-40 transition-all">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-gold fill-current" />
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
  );
};

export default AboutTestimonials;
