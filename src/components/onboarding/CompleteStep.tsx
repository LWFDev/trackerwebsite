

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { OnboardingData } from "@/types/onboarding";
import { Check, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface CompleteStepProps {
  formData: OnboardingData;
  onComplete: () => void;
}

export function CompleteStep({
  formData,
  onComplete
}: CompleteStepProps) {
  const navigate = useNavigate();

  const handleContactSales = () => {
    navigate("/contact");
  };

  return <div className="space-y-8">
      <div className="space-y-3">
        
        
      </div>

      <div className="flex flex-col items-center justify-center py-0">
        <div className="w-20 h-20 bg-[#D4AF37] rounded-full flex items-center justify-center mb-6">
          <Check className="h-10 w-10 text-black" />
        </div>
        <h2 className="text-xl font-medium text-white mb-2">You're all set!</h2>
        <p className="text-gray-400 text-center max-w-md">
          We appreciate you taking the time to share your information.
          <br /><br />
          Our team is currently reviewing your responses, and someone will be reaching out to you shortly to discuss next steps.
          <br /><br />
          In the meantime, if you have any immediate questions, feel free to reach out to our support team.
          <br /><br />
          We're excited to connect with you soon!
        </p>
      </div>

      

      <div className="flex justify-center pt-4">
        <Button onClick={handleContactSales} variant="gold" className="w-48">
          Contact sales
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>;
}

