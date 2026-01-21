import React from "react";
import TestimonialCard from "./TestimonialCard";
import { useLocalization } from "@/contexts/LocalizationContext";

const TestimonialsGrid = () => {
  const { t } = useLocalization();

  const testimonials = [
    {
      quote: "Tracker has transformed our internal systems completely, allowing us the freedom to concentrate on development and growth.",
      author: "Josie Morris",
      role: "Woolcool"
    },
    {
      quote: "Without Tracker, we would simply be exhausted now. It revolutionised our operations, got rid of time-wasting spreadsheets and cut out manual entry jobs.",
      author: "Adrian",
      role: "AGAME"
    },
    {
      quote: "It's a fast and accurate solution, ensuring brilliant customer service by preventing any errors in the dispatch process.",
      author: "Richard",
      role: "Founder, Pure Optical"
    },
    {
      quote: "We used to spend 2.5 days a week on manual processing. Now we spend less than a day.",
      author: "Adrian",
      role: "AGAME"
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
