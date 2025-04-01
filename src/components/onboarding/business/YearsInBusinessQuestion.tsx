
import { OnboardingData } from "@/pages/GetStarted";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { motion } from "framer-motion";

interface YearsInBusinessQuestionProps {
  formData: OnboardingData;
  updateFormData: (data: Partial<OnboardingData>) => void;
}

export const YearsInBusinessQuestion = ({ formData, updateFormData }: YearsInBusinessQuestionProps) => {
  const yearsInBusinessOptions = [
    "Less than 1 year",
    "1-3 years",
    "4-10 years",
    "10+ years"
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-white">How long have you been in business?</h2>
      <p className="text-gray-400">We'll adapt our recommendations based on your experience.</p>
      
      <RadioGroup
        value={formData.yearsInBusiness}
        onValueChange={(value) => updateFormData({ yearsInBusiness: value })}
        className="flex flex-col space-y-3 mt-4"
      >
        {yearsInBusinessOptions.map((option) => (
          <motion.div
            key={option}
            whileHover={{ scale: 1.01, backgroundColor: "rgba(255, 255, 255, 0.05)" }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div
              className={`
                flex items-center space-x-3 space-y-0 rounded-md p-4 cursor-pointer
                ${formData.yearsInBusiness === option ? 'bg-[#D4AF37]/10 border-[#D4AF37]/50' : 'border-zinc-800'}
                border hover:border-[#D4AF37]/50 transition-colors
              `}
              onClick={() => updateFormData({ yearsInBusiness: option })}
            >
              <RadioGroupItem value={option} id={option} className="border-zinc-600 text-[#D4AF37]" />
              <label htmlFor={option} className="font-medium cursor-pointer flex-1 text-gray-300">
                {option}
              </label>
            </div>
          </motion.div>
        ))}
      </RadioGroup>
    </div>
  );
};
