
import React from "react";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

const ContactFormSection = () => {
  return (
    <div className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <ContactForm />
              <ContactInfo />
            </div>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg border border-zinc-800">
            <img 
              src="https://nubosync.com/wp-content/uploads/2025/04/Screenshot-2025-04-02-101424.png" 
              alt="Contact support visualization" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactFormSection;
