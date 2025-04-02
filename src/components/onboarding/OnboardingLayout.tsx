import { ReactNode } from "react";
import { StepIndicator } from "@/components/onboarding/StepIndicator";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
interface OnboardingLayoutProps {
  children: ReactNode;
  currentStep: number;
  totalSteps: number;
  currentQuestionIndex: number;
  totalQuestions: number;
  questionTitle: string;
  onBack: () => void;
}
export function OnboardingLayout({
  children,
  currentStep,
  totalSteps,
  currentQuestionIndex,
  totalQuestions,
  questionTitle,
  onBack
}: OnboardingLayoutProps) {
  return <div className="min-h-screen bg-black pb-20">
      <div className="container mx-auto pt-28 px-4">
        {/* Logo and nav */}
        <div className="flex justify-center mb-8">
          
        </div>

        {/* Progress indicator */}
        <StepIndicator currentStep={currentStep} totalSteps={totalSteps} currentQuestionIndex={currentQuestionIndex} totalQuestions={totalQuestions} questionTitle={questionTitle} />

        {/* Form container */}
        <div className="max-w-2xl mx-auto bg-zinc-900 rounded-xl border border-zinc-800 p-8 shadow-lg mt-8 mb-8">
          {/* Back button */}
          <Button variant="ghost" className="mb-6 text-gray-400 hover:text-white hover:bg-zinc-800" onClick={onBack}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            {currentStep === 1 && currentQuestionIndex === 0 ? "Back to Home" : "Back"}
          </Button>

          {/* Step content */}
          {children}
        </div>
      </div>
    </div>;
}