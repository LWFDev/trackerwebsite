
// Define the main form data structure
export interface OnboardingData {
  // Business step
  businessType: string;
  employeeCount: string;
  yearsInBusiness: string;
  decorationMethods: string[];
  
  // Contact step
  fullName: string;
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
export interface Question {
  id: string;
  title: string;
  field: keyof OnboardingData;
  component: React.FC<QuestionProps>;
}

// Props for each question component
export interface QuestionProps {
  value: any;
  onChange: (value: any) => void;
  onNext: () => void;
  onBack: () => void;
  isValid: boolean;
  setIsValid: (valid: boolean) => void;
}
