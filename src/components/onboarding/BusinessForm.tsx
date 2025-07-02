
import { useEffect } from "react";
import { OnboardingData } from "@/types/onboarding";
import { BusinessTypeQuestion } from "./business/BusinessTypeQuestion";
import { EmployeeCountQuestion } from "./business/EmployeeCountQuestion";
import { DecorationMethodsQuestion } from "./business/DecorationMethodsQuestion";

interface BusinessFormProps {
  formData: Partial<OnboardingData>;
  updateFormData: (data: Partial<OnboardingData>) => void;
  questionType: "businessType" | "employeeCount" | "decorationMethods";
}

export function BusinessForm({ formData, updateFormData, questionType }: BusinessFormProps) {
  useEffect(() => {
    // Ensure validity is updated when the component mounts
    const data: Partial<OnboardingData> = {};
    
    if (questionType === "businessType" && formData.businessType) {
      data.businessType = formData.businessType;
    } else if (questionType === "employeeCount" && formData.employeeCount) {
      data.employeeCount = formData.employeeCount;
    } else if (questionType === "decorationMethods" && formData.decorationMethods && formData.decorationMethods.length > 0) {
      data.decorationMethods = formData.decorationMethods;
    }
    
    if (Object.keys(data).length > 0) {
      updateFormData(data);
    }
  }, [questionType, formData, updateFormData]);

  // Render specific question based on questionType
  switch (questionType) {
    case "businessType":
      return <BusinessTypeQuestion formData={formData} updateFormData={updateFormData} />;
    case "employeeCount":
      return <EmployeeCountQuestion formData={formData} updateFormData={updateFormData} />;
    case "decorationMethods":
      return <DecorationMethodsQuestion formData={formData} updateFormData={updateFormData} />;
    default:
      return null;
  }
}
