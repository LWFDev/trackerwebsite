
import { Question } from "@/types/onboarding";
import { ContactForm } from "@/components/onboarding/ContactForm";
import { TermsForm } from "@/components/onboarding/account/TermsForm";

export const contactQuestions: Question[] = [
  {
    id: "name",
    title: "What's your name?",
    field: "fullName",
    component: ({ value, onChange, isValid, setIsValid }) => (
      <ContactForm 
        formData={{ fullName: value }}
        updateFormData={(data) => {
          if (data.fullName) {
            onChange(data.fullName);
            setIsValid(Boolean(data.fullName));
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
  },
  {
    id: "terms",
    title: "Almost done!",
    field: "agreeToTerms",
    component: ({ value, onChange, isValid, setIsValid, formData, updateFormData }) => (
      <TermsForm 
        formData={{ 
          agreeToTerms: value,
          receiveUpdates: formData?.receiveUpdates ?? true
        }}
        updateFormData={(data) => {
          if (data.agreeToTerms !== undefined) {
            onChange(data.agreeToTerms);
            setIsValid(Boolean(data.agreeToTerms));
          }
          // Update the main form data for receiveUpdates
          if (data.receiveUpdates !== undefined && updateFormData) {
            updateFormData({ receiveUpdates: data.receiveUpdates });
          }
        }}
      />
    )
  }
];
