
import { Check } from "lucide-react";

interface StepIndicatorProps {
  currentStep: number;
}

export const StepIndicator = ({ currentStep }: StepIndicatorProps) => {
  const steps = [
    { id: 1, name: "Business" },
    { id: 2, name: "Contact" },
    { id: 3, name: "Account" },
    { id: 4, name: "Complete" }
  ];

  return (
    <div className="max-w-3xl mx-auto">
      <div className="flex items-center justify-between">
        {steps.map((step, index) => (
          <div key={step.id} className="flex flex-col items-center relative">
            {/* Step indicator */}
            <div 
              className={`
                flex items-center justify-center w-12 h-12 rounded-full z-10
                ${currentStep > step.id 
                  ? 'bg-[#D4AF37] text-black' 
                  : currentStep === step.id 
                    ? 'bg-[#D4AF37] text-black' 
                    : 'bg-zinc-700 text-white'
                }
                border-4 ${currentStep >= step.id ? 'border-[#F2D675]/20' : 'border-zinc-800'}
                transition-all duration-300
              `}
            >
              {currentStep > step.id ? (
                <Check className="h-5 w-5" />
              ) : (
                <span>{step.id}</span>
              )}
            </div>
            
            {/* Step name */}
            <div className="mt-2 text-sm text-center">
              <p 
                className={`
                  font-medium
                  ${currentStep === step.id ? 'text-[#D4AF37]' : 'text-gray-400'}
                `}
              >
                {step.name}
              </p>
            </div>
            
            {/* Connector line */}
            {index < steps.length - 1 && (
              <div 
                className={`
                  absolute top-6 left-12 w-full h-0.5 
                  ${currentStep > step.id ? 'bg-[#D4AF37]' : 'bg-zinc-700'}
                  transition-all duration-500
                `}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
