
import { useEffect } from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { OnboardingData } from "@/pages/GetStarted";
import { motion } from "framer-motion";

interface BusinessFormProps {
  formData: OnboardingData;
  updateFormData: (data: Partial<OnboardingData>) => void;
  questionType: "businessType" | "employeeCount" | "yearsInBusiness" | "decorationMethods";
}

export function BusinessForm({ formData, updateFormData, questionType }: BusinessFormProps) {
  const businessTypes = [
    "Embroidery Shop",
    "Screen Printing Shop",
    "Full-Service Decoration Shop",
    "Promotional Products Company",
    "Other"
  ];

  const employeeCounts = [
    "1-10 employees",
    "11-50 employees",
    "51-200 employees",
    "201+ employees"
  ];

  const yearsInBusinessOptions = [
    "Less than 1 year",
    "1-3 years",
    "4-10 years",
    "10+ years"
  ];

  const decorationMethodOptions = [
    "Embroidery",
    "Screen Printing",
    "DTF (Direct to Film)",
    "DTG (Direct to Garment)",
    "Vinyl/Heat Transfer",
    "Sublimation",
    "Other"
  ];

  useEffect(() => {
    // Ensure validity is updated when the component mounts
    const data: Partial<OnboardingData> = {};
    
    if (questionType === "businessType" && formData.businessType) {
      data.businessType = formData.businessType;
    } else if (questionType === "employeeCount" && formData.employeeCount) {
      data.employeeCount = formData.employeeCount;
    } else if (questionType === "yearsInBusiness" && formData.yearsInBusiness) {
      data.yearsInBusiness = formData.yearsInBusiness;
    } else if (questionType === "decorationMethods" && formData.decorationMethods.length > 0) {
      data.decorationMethods = formData.decorationMethods;
    }
    
    if (Object.keys(data).length > 0) {
      updateFormData(data);
    }
  }, [questionType, formData, updateFormData]);

  const renderBusinessTypeQuestion = () => (
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

  const renderEmployeeCountQuestion = () => (
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

  const renderYearsInBusinessQuestion = () => (
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

  const renderDecorationMethodsQuestion = () => (
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
            >
              <div
                className={`
                  flex items-center space-x-3 space-y-0 rounded-md p-4 cursor-pointer
                  ${isChecked ? 'bg-[#D4AF37]/10 border-[#D4AF37]/50' : 'border-zinc-800'}
                  border hover:border-[#D4AF37]/50 transition-colors
                `}
                onClick={() => {
                  const updatedMethods = isChecked
                    ? formData.decorationMethods.filter(item => item !== method)
                    : [...formData.decorationMethods, method];
                  
                  updateFormData({ decorationMethods: updatedMethods });
                }}
              >
                <Checkbox
                  id={method}
                  checked={isChecked}
                  onCheckedChange={(checked) => {
                    const updatedMethods = checked
                      ? [...formData.decorationMethods, method]
                      : formData.decorationMethods.filter(item => item !== method);
                    
                    updateFormData({ decorationMethods: updatedMethods });
                  }}
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

  // Render specific question based on questionType
  switch (questionType) {
    case "businessType":
      return renderBusinessTypeQuestion();
    case "employeeCount":
      return renderEmployeeCountQuestion();
    case "yearsInBusiness":
      return renderYearsInBusinessQuestion();
    case "decorationMethods":
      return renderDecorationMethodsQuestion();
    default:
      return null;
  }
}
