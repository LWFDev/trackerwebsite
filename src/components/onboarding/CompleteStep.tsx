import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { OnboardingData } from "@/types/onboarding";
import { Check, ArrowRight } from "lucide-react";
interface CompleteStepProps {
  formData: OnboardingData;
  onComplete: () => void;
}
export function CompleteStep({
  formData,
  onComplete
}: CompleteStepProps) {
  return <div className="space-y-8">
      <div className="space-y-3">
        
        
      </div>

      <div className="flex flex-col items-center justify-center py-0">
        <div className="w-20 h-20 bg-[#D4AF37] rounded-full flex items-center justify-center mb-6">
          <Check className="h-10 w-10 text-black" />
        </div>
        <h2 className="text-xl font-medium text-white mb-2">Welcome to Tracker, {formData.fullName}!</h2>
        <p className="text-gray-400 text-center max-w-md">
          Your account for {formData.companyName} has been created successfully. You can now access all the features of Tracker.
        </p>
      </div>

      

      <div className="flex justify-end pt-4">
        <Button onClick={onComplete} variant="gold" className="w-48">
          Get Started
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>;
}