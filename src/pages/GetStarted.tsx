
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BusinessForm } from "@/components/onboarding/BusinessForm";
import { ContactForm } from "@/components/onboarding/ContactForm";
import { AccountForm } from "@/components/onboarding/AccountForm";
import { CompleteStep } from "@/components/onboarding/CompleteStep";
import { StepIndicator } from "@/components/onboarding/StepIndicator";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

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

const GetStarted = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
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

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(prev => prev + 1);
      window.scrollTo(0, 0);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
      window.scrollTo(0, 0);
    } else {
      navigate("/");
    }
  };

  const handleComplete = () => {
    // You would typically submit all the data to your backend here
    console.log("Form submitted with data:", formData);
    navigate("/");
  };

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
        <StepIndicator currentStep={currentStep} />

        {/* Form container */}
        <div className="max-w-3xl mx-auto bg-zinc-900 rounded-xl border border-zinc-800 p-8 shadow-lg mt-8 mb-8">
          {/* Back button */}
          <Button 
            variant="ghost" 
            className="mb-6 text-gray-400 hover:text-white hover:bg-zinc-800"
            onClick={handleBack}
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            {currentStep === 1 ? "Back to Home" : "Back"}
          </Button>

          {/* Step content */}
          {currentStep === 1 && (
            <BusinessForm 
              formData={formData} 
              updateFormData={updateFormData} 
              onNext={handleNext} 
            />
          )}
          
          {currentStep === 2 && (
            <ContactForm 
              formData={formData} 
              updateFormData={updateFormData} 
              onNext={handleNext} 
            />
          )}
          
          {currentStep === 3 && (
            <AccountForm 
              formData={formData} 
              updateFormData={updateFormData} 
              onNext={handleNext} 
            />
          )}
          
          {currentStep === 4 && (
            <CompleteStep 
              formData={formData} 
              onComplete={handleComplete} 
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
