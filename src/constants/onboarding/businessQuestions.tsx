
import { Question } from "@/types/onboarding";
import { BusinessForm } from "@/components/onboarding/BusinessForm";

// Define questions for business step
export const businessQuestions: Question[] = [
  {
    id: "business-type",
    title: "What type of business do you operate?",
    field: "businessType",
    component: ({ value, onChange, isValid, setIsValid }) => (
      <BusinessForm 
        formData={{ businessType: value || [] }}
        updateFormData={(data) => {
          if (data.businessType && data.businessType.length > 0) {
            onChange(data.businessType);
            setIsValid(true);
          } else {
            setIsValid(false);
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
        formData={{ employeeCount: value }}
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
    id: "decoration-methods",
    title: "What decoration methods do you offer?",
    field: "decorationMethods",
    component: ({ value, onChange, isValid, setIsValid }) => (
      <BusinessForm 
        formData={{ decorationMethods: value || [] }}
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
