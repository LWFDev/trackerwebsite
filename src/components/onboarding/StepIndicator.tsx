
import { Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface StepIndicatorProps {
  currentStep: number;
  totalSteps: number;
  currentQuestionIndex: number;
  totalQuestions: number;
  questionTitle: string;
}

export const StepIndicator = ({ 
  currentStep, 
  totalSteps, 
  currentQuestionIndex, 
  totalQuestions, 
  questionTitle 
}: StepIndicatorProps) => {
  const steps = [
    { id: 1, name: "Business" },
    { id: 2, name: "Contact" },
    { id: 3, name: "Account" },
    { id: 4, name: "Complete" }
  ];

  // Calculate progress percentage for the current section
  const sectionProgress = ((currentQuestionIndex + 1) / totalQuestions) * 100;
  
  // Calculate overall progress
  const previousSectionsQuestions = currentStep > 1 ? (currentStep - 1) * (totalQuestions / totalSteps) : 0;
  const overallProgress = ((previousSectionsQuestions + currentQuestionIndex + 1) / (totalQuestions * (totalSteps / totalSteps))) * 100;

  return (
    <div className="max-w-3xl mx-auto">
      {/* Section title with animation */}
      <AnimatePresence mode="wait">
        <motion.div
          key={questionTitle}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="mb-4 text-center"
        >
          <h3 className="text-lg font-medium text-[#D4AF37]">{questionTitle}</h3>
        </motion.div>
      </AnimatePresence>

      {/* Step indicators */}
      <div className="flex items-center justify-between mb-1">
        {steps.map((step, index) => (
          <div key={step.id} className="flex flex-col items-center relative">
            {/* Step indicator */}
            <div 
              className={`
                flex items-center justify-center w-10 h-10 rounded-full z-10
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
                <Check className="h-4 w-4" />
              ) : (
                <span className="text-sm">{step.id}</span>
              )}
            </div>
            
            {/* Step name */}
            <div className="mt-1 text-xs text-center">
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
              <div className="absolute top-5 left-10 w-full h-0.5 bg-zinc-700">
                {/* Progress overlay on connector */}
                {(currentStep > step.id || (currentStep === step.id && currentQuestionIndex > 0)) && (
                  <motion.div 
                    className="h-full bg-[#D4AF37]"
                    initial={{ width: currentStep > step.id ? "100%" : "0%" }}
                    animate={{ 
                      width: currentStep > step.id 
                        ? "100%" 
                        : currentStep === step.id 
                          ? `${sectionProgress}%` 
                          : "0%" 
                    }}
                    transition={{ duration: 0.5 }}
                  />
                )}
              </div>
            )}
          </div>
        ))}
      </div>
      
      {/* Overall progress bar */}
      <div className="w-full bg-zinc-700 rounded-full h-1.5 mt-1">
        <motion.div 
          className="bg-[#D4AF37] h-1.5 rounded-full"
          initial={{ width: "0%" }}
          animate={{ width: `${overallProgress}%` }}
          transition={{ duration: 0.5 }}
        />
      </div>
      
      {/* Question counter */}
      <div className="text-center mt-1">
        <p className="text-xs text-gray-400">
          Question {currentQuestionIndex + 1} of {totalQuestions} in {steps[currentStep - 1]?.name}
        </p>
      </div>
    </div>
  );
};
