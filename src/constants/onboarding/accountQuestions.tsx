
import { Question } from "@/types/onboarding";
import { AccountForm } from "@/components/onboarding/AccountForm";

export const accountQuestions: Question[] = [
  {
    id: "username",
    title: "Choose a username",
    field: "username",
    component: ({ value, onChange, isValid, setIsValid }) => (
      <AccountForm 
        formData={{ username: value }}
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
          password: value, 
          confirmPassword: "" 
        }}
        updateFormData={(data) => {
          // Update the password in parent state
          if (data.password !== undefined) {
            onChange(data.password);
          }
          
          // Validate password and confirmation match
          if (data.password && data.confirmPassword && data.password === data.confirmPassword) {
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
        formData={{ agreeToTerms: value, receiveUpdates: false }}
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
