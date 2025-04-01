import { useState } from "react";
import { OnboardingData } from "@/types/onboarding";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { motion } from "framer-motion";

interface EmployeeCountQuestionProps {
  formData: OnboardingData;
  updateFormData: (data: Partial<OnboardingData>) => void;
}

export const EmployeeCountQuestion = ({ formData, updateFormData }: EmployeeCountQuestionProps) => {
  const employeeCounts = [
    "1-10 employees",
    "11-50 employees",
    "51-200 employees",
    "201+ employees"
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-white">How many employees do you have?</h2>
      <p className="text-gray-400">This helps us tailor our features to your company size.</p>
      
      <RadioGroup
        value={formData.employeeCount}
        onValueChange={(value) => updateFormData({ employeeCount: value })}
        className="flex flex-col space-y-3 mt-4"
      >
        {employeeCounts.map((count) => (
          <motion.div
            key={count}
            whileHover={{ scale: 1.01, backgroundColor: "rgba(255, 255, 255, 0.05)" }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div
              className={`
                flex items-center space-x-3 space-y-0 rounded-md p-4 cursor-pointer
                ${formData.employeeCount === count ? 'bg-[#D4AF37]/10 border-[#D4AF37]/50' : 'border-zinc-800'}
                border hover:border-[#D4AF37]/50 transition-colors
              `}
              onClick={() => updateFormData({ employeeCount: count })}
            >
              <RadioGroupItem value={count} id={count} className="border-zinc-600 text-[#D4AF37]" />
              <label htmlFor={count} className="font-medium cursor-pointer flex-1 text-gray-300">
                {count}
              </label>
            </div>
          </motion.div>
        ))}
      </RadioGroup>
    </div>
  );
};
