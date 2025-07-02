
import { OnboardingData } from "@/types/onboarding";
import { Checkbox } from "@/components/ui/checkbox";
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

  const handleToggleType = (type: string) => {
    const currentTypes = formData.businessType || [];
    const isChecked = currentTypes.includes(type);
    const updatedTypes = isChecked
      ? currentTypes.filter(item => item !== type)
      : [...currentTypes, type];
    
    updateFormData({ businessType: updatedTypes });
  };

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-white">What type of business do you operate?</h2>
      <p className="text-gray-400">Select all that apply to your business.</p>
      
      <div className="space-y-3 mt-4">
        {businessTypes.map((type) => {
          const isChecked = formData.businessType?.includes(type) || false;
          
          return (
            <motion.div
              key={type}
              whileHover={{ scale: 1.01, backgroundColor: "rgba(255, 255, 255, 0.05)" }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              className={`
                flex items-center space-x-4 rounded-md p-4 cursor-pointer
                ${isChecked ? 'bg-[#D4AF37]/10 border-[#D4AF37]/50' : 'border-zinc-800'}
                border hover:border-[#D4AF37]/50 transition-colors
              `}
              onClick={() => handleToggleType(type)}
            >
              <Checkbox
                id={type}
                checked={isChecked}
                readOnly
                className="h-5 w-5 border-zinc-600 data-[state=checked]:bg-[#D4AF37] data-[state=checked]:text-black pointer-events-none"
              />
              <label htmlFor={type} className="font-medium cursor-pointer flex-1 text-gray-300 pointer-events-none">
                {type}
              </label>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
