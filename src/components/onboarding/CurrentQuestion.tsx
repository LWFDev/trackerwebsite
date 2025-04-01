
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Question, OnboardingData } from "@/types/onboarding";

interface CurrentQuestionProps {
  question: Question;
  formData: Partial<OnboardingData>;
  updateFormData: (data: Partial<OnboardingData>) => void;
  onNext: () => void;
  onBack: () => void;
}

export function CurrentQuestion({ 
  question, 
  formData, 
  updateFormData, 
  onNext, 
  onBack 
}: CurrentQuestionProps) {
  const [isValid, setIsValid] = useState(false);

  // Reset validity when question changes
  useEffect(() => {
    const field = question?.field;
    if (field) {
      const value = formData[field];
      // Simple validity check based on value presence
      if (field === "decorationMethods") {
        setIsValid(Array.isArray(value) && value.length > 0);
      } else if (field === "agreeToTerms") {
        setIsValid(Boolean(value));
      } else {
        setIsValid(Boolean(value));
      }
    }
  }, [question, formData]);

  return (
    <motion.div
      key={question.id}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
      className="space-y-8"
    >
      {question.component({
        value: formData[question.field],
        onChange: (value) => updateFormData({ [question.field]: value }),
        onNext,
        onBack,
        isValid,
        setIsValid
      })}
      
      <div className="flex justify-end pt-4">
        <Button 
          onClick={onNext} 
          variant="gold" 
          className="w-32"
          disabled={!isValid}
        >
          Continue
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </motion.div>
  );
}
