
import { useState } from "react";
import { OnboardingData } from "@/types/onboarding";
import { Checkbox } from "@/components/ui/checkbox";
import { motion } from "framer-motion";

interface DecorationMethodsQuestionProps {
  formData: Partial<OnboardingData>;
  updateFormData: (data: Partial<OnboardingData>) => void;
}

export const DecorationMethodsQuestion = ({ formData, updateFormData }: DecorationMethodsQuestionProps) => {
  const decorationMethodOptions = [
    "Embroidery",
    "Screen Printing",
    "DTF (Direct to Film)",
    "DTG (Direct to Garment)",
    "Vinyl/Heat Transfer",
    "Sublimation",
    "Other"
  ];

  const handleToggleMethod = (method: string) => {
    const currentMethods = formData.decorationMethods || [];
    const isChecked = currentMethods.includes(method);
    const updatedMethods = isChecked
      ? currentMethods.filter(item => item !== method)
      : [...currentMethods, method];
    
    updateFormData({ decorationMethods: updatedMethods });
  };

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-white">What decoration methods do you offer?</h2>
      <p className="text-gray-400">Select all that apply to your business.</p>
      
      <div className="space-y-3 mt-4">
        {decorationMethodOptions.map((method) => {
          const isChecked = formData.decorationMethods?.includes(method) || false;
          
          return (
            <motion.div
              key={method}
              whileHover={{ scale: 1.01, backgroundColor: "hsl(var(--muted) / 0.05)" }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              className={`
                flex items-center space-x-4 rounded-md p-4 cursor-pointer
                ${isChecked ? 'bg-gold-opacity-10 border-gold-opacity-50' : 'border-zinc-800'}
                border hover:border-gold-opacity-50 transition-colors
              `}
              onClick={() => handleToggleMethod(method)}
            >
              <Checkbox
                id={method}
                checked={isChecked}
                className="h-5 w-5 border-zinc-600 data-[state=checked]:bg-gold data-[state=checked]:text-gold-foreground pointer-events-none"
              />
              <label htmlFor={method} className="font-medium cursor-pointer flex-1 text-gray-300 pointer-events-none">
                {method}
              </label>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
