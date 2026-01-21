import React from "react";
import TestimonialCard from "./TestimonialCard";
import { useLocalization } from "@/contexts/LocalizationContext";

const TestimonialsGrid = () => {
  const { t } = useLocalization();

  const testimonials = [
    {
      quote: "Tracker has transformed how we manage our production workflow. The visibility we now have is incredible.",
      author: "Sarah Johnson",
      role: "Operations Director, PrintCo"
    },
    {
      quote: "The integration with our existing systems was seamless. This has been a game changer for our business.",
      author: "Michael Chen",
      role: "CEO, Stitch Masters"
    },
    {
      quote: "Customer support is exceptional. Any questions we had were answered immediately and professionally.",
      author: "Emma Williams",
      role: "Production Manager, ThreadWorks"
    },
    {
      quote: "We've seen a significant improvement in order accuracy since implementing Tracker. Highly recommended!",
      author: "David Brown",
      role: "Founder, Embroidery Plus"
    }
  ];

  return (
    <div className="mb-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            quote={testimonial.quote}
            author={testimonial.author}
            role={testimonial.role}
            delay={index * 100}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialsGrid;
