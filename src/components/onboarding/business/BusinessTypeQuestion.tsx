
import { useState } from "react";
import { OnboardingData } from "@/types/onboarding";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { motion } from "framer-motion";

interface BusinessTypeQuestionProps {
  formData: Partial<OnboardingData>;
  updateFormData: (data: Partial<OnboardingData>) => void;
}

export const BusinessTypeQuestion = ({ formData, updateFormData }: BusinessTypeQuestionProps) => {
  const businessTypes = [
    "Embroidery Shop",
    "Screen Printing Shop", 
    "Full-Service Decoration Shop",
    "Promotional Products Company",
    "Other"
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-white">What type of business do you operate?</h2>
      <p className="text-gray-400">Select the option that best describes your business.</p>
      
      <RadioGroup
        value={formData.businessType}
        onValueChange={(value) => updateFormData({ businessType: value })}
        className="flex flex-col space-y-3 mt-4"
      >
        {businessTypes.map((type) => (
          <motion.div
            key={type}
            whileHover={{ scale: 1.01, backgroundColor: "rgba(255, 255, 255, 0.05)" }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div
              className={`
                flex items-center space-x-3 space-y-0 rounded-md p-4 cursor-pointer
                ${formData.businessType === type ? 'bg-[#D4AF37]/10 border-[#D4AF37]/50' : 'border-zinc-800'}
                border hover:border-[#D4AF37]/50 transition-colors
              `}
              onClick={() => updateFormData({ businessType: type })}
            >
              <RadioGroupItem value={type} id={type} className="border-zinc-600 text-[#D4AF37]" />
              <label htmlFor={type} className="font-medium cursor-pointer flex-1 text-gray-300">
                {type}
              </label>
            </div>
          </motion.div>
        ))}
      </RadioGroup>
    </div>
  );
};
