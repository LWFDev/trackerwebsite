
import { Question, OnboardingData } from "@/types/onboarding";
import { BusinessForm } from "@/components/onboarding/BusinessForm";
import { ContactForm } from "@/components/onboarding/ContactForm";
import { AccountForm } from "@/components/onboarding/AccountForm";

// Define questions for each step
export const businessQuestions: Question[] = [
  {
    id: "business-type",
    title: "What type of business do you operate?",
    field: "businessType",
    component: ({ value, onChange, isValid, setIsValid }) => (
      <BusinessForm 
        formData={{ businessType: value }}
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
    id: "years-in-business",
    title: "How long have you been in business?",
    field: "yearsInBusiness",
    component: ({ value, onChange, isValid, setIsValid }) => (
      <BusinessForm 
        formData={{ yearsInBusiness: value }}
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

export const contactQuestions: Question[] = [
  {
    id: "name",
    title: "What's your name?",
    field: "firstName",
    component: ({ value, onChange, isValid, setIsValid, onNext, onBack }) => (
      <ContactForm 
        formData={{ firstName: value, lastName: "" }}
        updateFormData={(data) => {
          if (data.firstName) {
            onChange(data.firstName);
            setIsValid(Boolean(data.firstName));
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
        formData={{ companyName: value }}
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
        formData={{ email: value }}
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
        formData={{ phone: value }}
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

export const accountQuestions: Question[] = [
  {
    id: "username",
    title: "Choose a username",
    field: "username",
    component: ({ value, onChange, isValid, setIsValid }) => (
      <AccountForm 
        formData={{ 
          businessType: "", 
          employeeCount: "", 
          yearsInBusiness: "", 
          decorationMethods: [],
          firstName: "", 
          lastName: "", 
          email: "", 
          phone: "", 
          companyName: "",
          username: value, 
          password: "", 
          confirmPassword: "", 
          agreeToTerms: false, 
          receiveUpdates: false
        }}
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
        formData={{ 
          businessType: "", 
          employeeCount: "", 
          yearsInBusiness: "", 
          decorationMethods: [],
          firstName: "", 
          lastName: "", 
          email: "", 
          phone: "", 
          companyName: "",
          username: "", 
          password: value, 
          confirmPassword: "", 
          agreeToTerms: false, 
          receiveUpdates: false
        }}
        updateFormData={(data) => {
          if (data.password && data.confirmPassword && data.password === data.confirmPassword) {
            onChange(data.password);
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
        formData={{ 
          businessType: "", 
          employeeCount: "", 
          yearsInBusiness: "", 
          decorationMethods: [],
          firstName: "", 
          lastName: "", 
          email: "", 
          phone: "", 
          companyName: "",
          username: "", 
          password: "", 
          confirmPassword: "", 
          agreeToTerms: value, 
          receiveUpdates: false
        }}
        updateFormData={(data) => {
          if (data.agreeToTerms !== undefined) {
            onChange(data.agreeToTerms);
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
export const onboardingSteps = [
  { questions: businessQuestions },
  { questions: contactQuestions },
  { questions: accountQuestions },
  { questions: [] } // Complete step has no questions
];
