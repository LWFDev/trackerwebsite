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
        <h1 className="text-2xl font-bold text-white text-center">You're all set!</h1>
        <p className="text-gray-400 text-center">We appreciate you taking the time to share your information.
      </p>
      </div>

      <div className="flex flex-col items-center justify-center py-10">
        <div className="w-20 h-20 bg-[#D4AF37] rounded-full flex items-center justify-center mb-6">
          <Check className="h-10 w-10 text-black" />
        </div>
        <h2 className="text-xl font-medium text-white mb-2">You're all set!</h2>
        <p className="text-gray-400 text-center max-w-md">
          Your account for {formData.companyName} has been created successfully. You can now access all the features of Tracker.
        </p>
      </div>

      <div className="space-y-6 bg-zinc-800 p-6 rounded-lg border border-zinc-700">
        <h3 className="text-lg font-medium text-white">Here's what's next:</h3>
        <ul className="space-y-4">
          <li className="flex items-start">
            <div className="bg-[#D4AF37]/20 rounded-full p-1 mr-3 mt-0.5">
              <Check className="h-4 w-4 text-[#D4AF37]" />
            </div>
            <div>
              <p className="text-white font-medium">Explore your dashboard</p>
              <p className="text-gray-400 text-sm">Get familiar with your new business management tools</p>
            </div>
          </li>
          <li className="flex items-start">
            <div className="bg-[#D4AF37]/20 rounded-full p-1 mr-3 mt-0.5">
              <Check className="h-4 w-4 text-[#D4AF37]" />
            </div>
            <div>
              <p className="text-white font-medium">Set up your business profile</p>
              <p className="text-gray-400 text-sm">Complete your profile to personalize your experience</p>
            </div>
          </li>
          <li className="flex items-start">
            <div className="bg-[#D4AF37]/20 rounded-full p-1 mr-3 mt-0.5">
              <Check className="h-4 w-4 text-[#D4AF37]" />
            </div>
            <div>
              <p className="text-white font-medium">Connect with your team</p>
              <p className="text-gray-400 text-sm">Invite your team members to collaborate</p>
            </div>
          </li>
        </ul>
      </div>

      <div className="flex justify-end pt-4">
        <Button onClick={onComplete} variant="gold" className="w-48">
          Get Started
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>;
}
