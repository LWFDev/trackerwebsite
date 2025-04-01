
import { useState } from "react";
import { OnboardingData } from "@/types/onboarding";

export const useOnboardingForm = () => {
  const [formData, setFormData] = useState<OnboardingData>({
    // Business step
    businessType: "",
    employeeCount: "",
    yearsInBusiness: "",
    decorationMethods: [],
    
    // Contact step
    fullName: "",
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

  return {
    formData,
    updateFormData
  };
};
