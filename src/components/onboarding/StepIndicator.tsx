
import { Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Progress } from "@/components/ui/progress";

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

  // Calculate overall progress percentage
  const previousSectionsQuestions = currentStep > 1 ? (currentStep - 1) * (totalQuestions / totalSteps) : 0;
  const overallProgress = ((previousSectionsQuestions + currentQuestionIndex + 1) / (totalQuestions * (totalSteps / totalSteps))) * 100;

  return (
    <div className="max-w-3xl mx-auto mb-8">
      {/* Section title with animation */}
      <AnimatePresence mode="wait">
        <motion.div
          key={questionTitle}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="mb-6 text-center"
        >
          <h2 className="text-2xl font-bold text-[#D4AF37]">{questionTitle}</h2>
        </motion.div>
      </AnimatePresence>

      {/* Step indicators */}
      <div className="flex items-center justify-between relative mb-2">
        {/* Progress line behind the circles */}
        <div className="absolute top-1/2 left-0 w-full h-[2px] bg-zinc-800 -translate-y-1/2 z-0">
          <motion.div 
            className="h-full bg-[#D4AF37]"
            initial={{ width: "0%" }}
            animate={{ width: `${overallProgress}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>

        {steps.map((step) => (
          <div key={step.id} className="flex flex-col items-center z-10">
            {/* Step circle indicator */}
            <motion.div 
              className={`
                flex items-center justify-center w-10 h-10 rounded-full
                ${currentStep > step.id 
                  ? 'bg-[#D4AF37] border-[#D4AF37]' 
                  : currentStep === step.id 
                    ? 'bg-[#D4AF37] border-[#D4AF37]' 
                    : 'bg-zinc-700 border-zinc-700'
                }
                border-2 transition-all duration-300
              `}
              initial={{ scale: 0.9 }}
              animate={{ 
                scale: currentStep === step.id ? 1.1 : 1,
                backgroundColor: currentStep >= step.id ? '#D4AF37' : '#27272a' 
              }}
              transition={{ duration: 0.3 }}
            >
              {currentStep > step.id ? (
                <Check className="h-5 w-5 text-black" />
              ) : (
                <span className={`text-sm font-medium ${currentStep === step.id ? 'text-black' : 'text-white'}`}>
                  {step.id}
                </span>
              )}
            </motion.div>
            
            {/* Step name */}
            <motion.p
              className={`mt-2 text-xs font-medium ${currentStep === step.id ? 'text-[#D4AF37]' : 'text-gray-400'}`}
              animate={{ 
                color: currentStep === step.id ? '#D4AF37' : '#9ca3af',
                scale: currentStep === step.id ? 1.05 : 1
              }}
              transition={{ duration: 0.3 }}
            >
              {step.name}
            </motion.p>
          </div>
        ))}
      </div>
      
      {/* Question counter */}
      <div className="text-center mt-4">
        <p className="text-sm text-gray-400">
          Question {currentQuestionIndex + 1} of {totalQuestions} in {steps[currentStep - 1]?.name}
        </p>
      </div>
    </div>
  );
};
