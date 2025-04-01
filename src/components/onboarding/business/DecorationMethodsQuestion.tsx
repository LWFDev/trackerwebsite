
import { OnboardingData } from "@/pages/GetStarted";
import { Checkbox } from "@/components/ui/checkbox";
import { motion } from "framer-motion";

interface DecorationMethodsQuestionProps {
  formData: OnboardingData;
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
    const isChecked = formData.decorationMethods.includes(method);
    const updatedMethods = isChecked
      ? formData.decorationMethods.filter(item => item !== method)
      : [...formData.decorationMethods, method];
    
    updateFormData({ decorationMethods: updatedMethods });
  };

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-white">What decoration methods do you offer?</h2>
      <p className="text-gray-400">Select all that apply to your business.</p>
      
      <div className="space-y-3 mt-4">
        {decorationMethodOptions.map((method) => {
          const isChecked = formData.decorationMethods.includes(method);
          
          return (
            <motion.div
              key={method}
              whileHover={{ scale: 1.01, backgroundColor: "rgba(255, 255, 255, 0.05)" }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => handleToggleMethod(method)}
              className="cursor-pointer"
            >
              <div
                className={`
                  flex items-center space-x-3 space-y-0 rounded-md p-4
                  ${isChecked ? 'bg-[#D4AF37]/10 border-[#D4AF37]/50' : 'border-zinc-800'}
                  border hover:border-[#D4AF37]/50 transition-colors
                `}
              >
                <Checkbox
                  id={method}
                  checked={isChecked}
                  onCheckedChange={() => handleToggleMethod(method)}
                  className="border-zinc-600 data-[state=checked]:bg-[#D4AF37] data-[state=checked]:text-black"
                />
                <label htmlFor={method} className="font-medium cursor-pointer flex-1 text-gray-300">
                  {method}
                </label>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
