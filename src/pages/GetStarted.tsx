
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BusinessForm } from "@/components/onboarding/BusinessForm";
import { ContactForm } from "@/components/onboarding/ContactForm";
import { AccountForm } from "@/components/onboarding/AccountForm";
import { CompleteStep } from "@/components/onboarding/CompleteStep";
import { StepIndicator } from "@/components/onboarding/StepIndicator";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

// Define the main form data structure
export interface OnboardingData {
  // Business step
  businessType: string;
  employeeCount: string;
  yearsInBusiness: string;
  decorationMethods: string[];
  
  // Contact step
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  companyName: string;
  
  // Account step
  username: string;
  password: string;
  confirmPassword: string;
  agreeToTerms: boolean;
  receiveUpdates: boolean;
}

// Define the question structure for each step
interface Question {
  id: string;
  title: string;
  field: keyof OnboardingData;
  component: React.FC<QuestionProps>;
}

// Props for each question component
interface QuestionProps {
  value: any;
  onChange: (value: any) => void;
  onNext: () => void;
  onBack: () => void;
  isValid: boolean;
  setIsValid: (valid: boolean) => void;
}

const GetStarted = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isValid, setIsValid] = useState(false);
  
  const [formData, setFormData] = useState<OnboardingData>({
    // Business step
    businessType: "",
    employeeCount: "",
    yearsInBusiness: "",
    decorationMethods: [],
    
    // Contact step
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    companyName: "",
    
    // Account step
    username: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
    receiveUpdates: false
  });

  const updateFormData = (data: Partial<OnboardingData>) => {
    setFormData(prev => ({ ...prev, ...data }));
  };

  // Define questions for each step
  const businessQuestions: Question[] = [
    {
      id: "business-type",
      title: "What type of business do you operate?",
      field: "businessType",
      component: ({ value, onChange, isValid, setIsValid }) => (
        <BusinessForm 
          formData={formData} 
          updateFormData={(data) => {
            if (data.businessType) {
              onChange(data.businessType);
              setIsValid(true);
            }
          }}
          questionType="businessType"
        />
      )
    },
    {
      id: "employee-count",
      title: "How many employees do you have?",
      field: "employeeCount",
      component: ({ value, onChange, isValid, setIsValid }) => (
        <BusinessForm 
          formData={formData} 
          updateFormData={(data) => {
            if (data.employeeCount) {
              onChange(data.employeeCount);
              setIsValid(true);
            }
          }}
          questionType="employeeCount"
        />
      )
    },
    {
      id: "years-in-business",
      title: "How long have you been in business?",
      field: "yearsInBusiness",
      component: ({ value, onChange, isValid, setIsValid }) => (
        <BusinessForm 
          formData={formData} 
          updateFormData={(data) => {
            if (data.yearsInBusiness) {
              onChange(data.yearsInBusiness);
              setIsValid(true);
            }
          }}
          questionType="yearsInBusiness"
        />
      )
    },
    {
      id: "decoration-methods",
      title: "What decoration methods do you offer?",
      field: "decorationMethods",
      component: ({ value, onChange, isValid, setIsValid }) => (
        <BusinessForm 
          formData={formData} 
          updateFormData={(data) => {
            if (data.decorationMethods && data.decorationMethods.length > 0) {
              onChange(data.decorationMethods);
              setIsValid(true);
            } else {
              setIsValid(false);
            }
          }}
          questionType="decorationMethods"
        />
      )
    }
  ];

  const contactQuestions: Question[] = [
    {
      id: "name",
      title: "What's your name?",
      field: "firstName",
      component: ({ value, onChange, isValid, setIsValid }) => (
        <ContactForm 
          formData={formData} 
          updateFormData={(data) => {
            if (data.firstName && data.lastName) {
              onChange(data.firstName);
              updateFormData({ lastName: data.lastName });
              setIsValid(true);
            } else {
              setIsValid(false);
            }
          }}
          questionType="name"
        />
      )
    },
    {
      id: "company",
      title: "What's your company name?",
      field: "companyName",
      component: ({ value, onChange, isValid, setIsValid }) => (
        <ContactForm 
          formData={formData} 
          updateFormData={(data) => {
            if (data.companyName) {
              onChange(data.companyName);
              setIsValid(true);
            } else {
              setIsValid(false);
            }
          }}
          questionType="company"
        />
      )
    },
    {
      id: "email",
      title: "What's your email address?",
      field: "email",
      component: ({ value, onChange, isValid, setIsValid }) => (
        <ContactForm 
          formData={formData} 
          updateFormData={(data) => {
            if (data.email) {
              onChange(data.email);
              setIsValid(true);
            } else {
              setIsValid(false);
            }
          }}
          questionType="email"
        />
      )
    },
    {
      id: "phone",
      title: "What's your phone number?",
      field: "phone",
      component: ({ value, onChange, isValid, setIsValid }) => (
        <ContactForm 
          formData={formData} 
          updateFormData={(data) => {
            if (data.phone) {
              onChange(data.phone);
              setIsValid(true);
            } else {
              setIsValid(false);
            }
          }}
          questionType="phone"
        />
      )
    }
  ];

  const accountQuestions: Question[] = [
    {
      id: "username",
      title: "Choose a username",
      field: "username",
      component: ({ value, onChange, isValid, setIsValid }) => (
        <AccountForm 
          formData={formData} 
          updateFormData={(data) => {
            if (data.username) {
              onChange(data.username);
              setIsValid(true);
            } else {
              setIsValid(false);
            }
          }}
          questionType="username"
        />
      )
    },
    {
      id: "password",
      title: "Create a password",
      field: "password",
      component: ({ value, onChange, isValid, setIsValid }) => (
        <AccountForm 
          formData={formData} 
          updateFormData={(data) => {
            if (data.password && data.confirmPassword && data.password === data.confirmPassword) {
              onChange(data.password);
              updateFormData({ confirmPassword: data.confirmPassword });
              setIsValid(true);
            } else {
              setIsValid(false);
            }
          }}
          questionType="password"
        />
      )
    },
    {
      id: "terms",
      title: "Terms and preferences",
      field: "agreeToTerms",
      component: ({ value, onChange, isValid, setIsValid }) => (
        <AccountForm 
          formData={formData} 
          updateFormData={(data) => {
            if (data.agreeToTerms !== undefined) {
              onChange(data.agreeToTerms);
              if (data.receiveUpdates !== undefined) {
                updateFormData({ receiveUpdates: data.receiveUpdates });
              }
              setIsValid(data.agreeToTerms);
            } else {
              setIsValid(false);
            }
          }}
          questionType="terms"
        />
      )
    }
  ];

  // Combine all questions by step
  const steps = [
    { questions: businessQuestions },
    { questions: contactQuestions },
    { questions: accountQuestions },
    { questions: [] } // Complete step has no questions
  ];

  // Current question based on step and index
  const currentQuestion = steps[currentStep - 1]?.questions[currentQuestionIndex];
  const totalQuestions = steps[currentStep - 1]?.questions.length || 1;

  const handleNext = () => {
    const currentStepQuestions = steps[currentStep - 1].questions;
    
    if (currentQuestionIndex < currentStepQuestions.length - 1) {
      // Move to next question in current step
      setCurrentQuestionIndex(prev => prev + 1);
      setIsValid(false);
    } else if (currentStep < 4) {
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
      setCurrentQuestionIndex(steps[currentStep - 2].questions.length - 1);
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

  // Get the question title for the current question
  const questionTitle = currentQuestion?.title || "Complete Your Profile";

  return (
    <div className="min-h-screen bg-black pb-20">
      <div className="container mx-auto pt-28 px-4">
        {/* Logo and nav */}
        <div className="flex justify-center mb-8">
          <div className="flex items-center text-white text-xl font-bold">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
              <rect width="24" height="24" rx="4" fill="#D4AF37"/>
              <path d="M7 12H17M7 8H17M7 16H13" stroke="black" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            Tracker
          </div>
        </div>

        {/* Progress indicator */}
        <StepIndicator 
          currentStep={currentStep} 
          totalSteps={4}
          currentQuestionIndex={currentQuestionIndex}
          totalQuestions={totalQuestions}
          questionTitle={questionTitle}
        />

        {/* Form container */}
        <div className="max-w-2xl mx-auto bg-zinc-900 rounded-xl border border-zinc-800 p-8 shadow-lg mt-8 mb-8">
          {/* Back button */}
          <Button 
            variant="ghost" 
            className="mb-6 text-gray-400 hover:text-white hover:bg-zinc-800"
            onClick={handleBack}
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            {currentStep === 1 && currentQuestionIndex === 0 ? "Back to Home" : "Back"}
          </Button>

          {/* Step content */}
          <AnimatePresence mode="wait">
            {currentStep === 4 ? (
              <motion.div
                key="complete"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <CompleteStep 
                  formData={formData} 
                  onComplete={handleComplete} 
                />
              </motion.div>
            ) : (
              <motion.div
                key={`${currentStep}-${currentQuestionIndex}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-8"
              >
                {currentQuestion && (
                  <>
                    {currentQuestion.component({
                      value: formData[currentQuestion.field],
                      onChange: (value) => updateFormData({ [currentQuestion.field]: value }),
                      onNext: handleNext,
                      onBack: handleBack,
                      isValid,
                      setIsValid
                    })}
                    
                    {/* Only show next button for questions, not on complete step */}
                    <div className="flex justify-end pt-4">
                      <Button 
                        onClick={handleNext} 
                        variant="gold" 
                        className="w-32"
                        disabled={!isValid}
                      >
                        Continue
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
