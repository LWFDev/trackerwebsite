
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
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

  const handleComplete = async () => {
    try {
      console.log("Form submitted with data:", formData);
      
      // Send email with form data
      const { data, error } = await supabase.functions.invoke('send-form-emails', {
        body: {
          type: 'onboarding',
          ...formData
        }
      });

      if (error) {
        console.error('Error sending email:', error);
        toast({
          title: "Registration Complete!",
          description: "Your account has been created. However, there was an issue sending the notification email.",
          variant: "destructive",
        });
      } else {
        toast({
          title: "Registration Complete!",
          description: "Welcome to TrackerZone. Your account has been created successfully and we've been notified.",
        });
      }
    } catch (error) {
      console.error('Error in handleComplete:', error);
      toast({
        title: "Registration Complete!",
        description: "Your account has been created. However, there was an issue sending the notification email.",
        variant: "destructive",
      });
    }
    
    navigate("/");
  };

  // Reset validity when question changes
  useEffect(() => {
    const field = currentQuestion?.field;
    if (field) {
      const value = formData[field];
      // Simple validity check based on value presence
      if (field === "decorationMethods" || field === "businessType") {
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
