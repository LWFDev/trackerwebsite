
import { OnboardingData } from "@/types/onboarding";
import { UsernameForm } from "./account/UsernameForm";
import { PasswordForm } from "./account/PasswordForm";
import { TermsForm } from "./account/TermsForm";

interface AccountFormProps {
  formData: Partial<OnboardingData>;
  updateFormData: (data: Partial<OnboardingData>) => void;
  questionType: "username" | "password" | "terms";
}

export function AccountForm({ formData, updateFormData, questionType }: AccountFormProps) {
  switch (questionType) {
    case "username":
      return <UsernameForm formData={formData} updateFormData={updateFormData} />;
    case "password":
      return <PasswordForm formData={formData} updateFormData={updateFormData} />;
    case "terms":
      return <TermsForm formData={formData} updateFormData={updateFormData} />;
    default:
      return null;
  }
}
