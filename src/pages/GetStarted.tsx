
import { AnimatePresence } from "framer-motion";
import { useOnboardingForm } from "@/hooks/useOnboardingForm";
import { useOnboardingNavigation } from "@/hooks/useOnboardingNavigation";
import { OnboardingLayout } from "@/components/onboarding/OnboardingLayout";
import { CurrentQuestion } from "@/components/onboarding/CurrentQuestion";
import { CompleteStep } from "@/components/onboarding/CompleteStep";
import PageSEO from "@/components/seo/PageSEO";
import { getStartedSEO, getStartedBreadcrumb } from "@/data/seoData";

const GetStarted = () => {
  const { formData, updateFormData } = useOnboardingForm();
  const { 
    currentStep, 
    totalSteps,
    currentQuestionIndex, 
    totalQuestions,
    currentQuestion,
    questionTitle,
    handleNext,
    handleBack,
    handleComplete
  } = useOnboardingNavigation(formData);

  return (
    <>
      <PageSEO seo={getStartedSEO} breadcrumbs={getStartedBreadcrumb} />
      <OnboardingLayout
        currentStep={currentStep}
        totalSteps={totalSteps}
        currentQuestionIndex={currentQuestionIndex}
        totalQuestions={totalQuestions}
        questionTitle={questionTitle}
        onBack={handleBack}
      >
      <AnimatePresence mode="wait">
        {currentStep === 3 ? (
          <CompleteStep 
            formData={formData} 
            onComplete={handleComplete} 
          />
        ) : (
          currentQuestion && (
            <CurrentQuestion
              question={currentQuestion}
              formData={formData}
              updateFormData={updateFormData}
              onNext={handleNext}
              onBack={handleBack}
            />
          )
        )}
      </AnimatePresence>
      </OnboardingLayout>
    </>
};

export default GetStarted;
