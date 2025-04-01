
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { onboardingSteps } from "@/constants/onboarding";
import { Question, OnboardingData } from "@/types/onboarding";

export const useOnboardingNavigation = (formData: OnboardingData) => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isValid, setIsValid] = useState(false);

  const totalSteps = onboardingSteps.length;
  const currentStepQuestions = onboardingSteps[currentStep - 1].questions;
  const totalQuestions = currentStepQuestions.length || 1;
  const currentQuestion = currentStepQuestions[currentQuestionIndex];
  
  // Get the question title for the current question
  const questionTitle = currentQuestion?.title || "Complete Your Profile";

  const handleNext = () => {
    if (currentQuestionIndex < currentStepQuestions.length - 1) {
      // Move to next question in current step
      setCurrentQuestionIndex(prev => prev + 1);
      setIsValid(false);
    } else if (currentStep < totalSteps) {
      // Move to first question of next step
      setCurrentStep(prev => prev + 1);
      setCurrentQuestionIndex(0);
      setIsValid(false);
    }
    
    window.scrollTo(0, 0);
  };

  const handleBack = () => {
    if (currentQuestionIndex > 0) {
      // Move to previous question in current step
      setCurrentQuestionIndex(prev => prev - 1);
    } else if (currentStep > 1) {
      // Move to last question of previous step
      setCurrentStep(prev => prev - 1);
      setCurrentQuestionIndex(onboardingSteps[currentStep - 2].questions.length - 1);
    } else {
      // Go back to home if we're at the first question of the first step
      navigate("/");
    }
    
    window.scrollTo(0, 0);
  };

  const handleComplete = () => {
    // You would typically submit all the data to your backend here
    console.log("Form submitted with data:", formData);
    navigate("/");
  };

  // Reset validity when question changes
  useEffect(() => {
    const field = currentQuestion?.field;
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
  }, [currentQuestion, formData]);

  return {
    currentStep,
    totalSteps,
    currentQuestionIndex,
    totalQuestions,
    currentQuestion,
    questionTitle,
    isValid,
    setIsValid,
    handleNext,
    handleBack,
    handleComplete
  };
};
