
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { OnboardingData } from "@/types/onboarding";
import { motion } from "framer-motion";

interface TermsFormProps {
  formData: Partial<OnboardingData>;
  updateFormData: (data: Partial<OnboardingData>) => void;
}

export function TermsForm({ formData, updateFormData }: TermsFormProps) {
  // Default receiveUpdates to true if not set
  const receiveUpdates = formData.receiveUpdates ?? true;

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-white">Almost done!</h2>
      <p className="text-gray-400">Please review our terms and preferences.</p>
      
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
        className="space-y-4 mt-6"
      >
        <div 
          className={`
            flex items-start space-x-3 space-y-0 rounded-md p-4 cursor-pointer
            ${formData.agreeToTerms ? 'bg-[#D4AF37]/10 border-[#D4AF37]/50' : 'border-zinc-800'}
            border hover:border-[#D4AF37]/50 transition-colors
          `}
          onClick={() => updateFormData({ agreeToTerms: !formData.agreeToTerms })}
        >
          <Switch
            id="agreeToTerms"
            checked={formData.agreeToTerms}
            onCheckedChange={(checked) => updateFormData({ agreeToTerms: checked as boolean })}
            className="border-zinc-600 data-[state=checked]:bg-[#D4AF37] data-[state=checked]:text-black mt-1"
          />
          <div className="space-y-1 leading-none">
            <Label htmlFor="agreeToTerms" className="text-gray-300 font-medium cursor-pointer">
              I agree to the 
              <a href="/terms" target="_blank" rel="noopener noreferrer" className="text-[#D4AF37] hover:underline mx-1">Terms of Service</a>
              and
              <a href="/privacy" target="_blank" rel="noopener noreferrer" className="text-[#D4AF37] hover:underline ml-1">Privacy Policy</a>
            </Label>
            <p className="text-gray-500 text-sm">
              By getting started with Tracker, you agree to our terms and conditions.
            </p>
          </div>
        </div>
        
        <div 
          className={`
            flex items-start space-x-3 space-y-0 rounded-md p-4 cursor-pointer
            ${receiveUpdates ? 'bg-[#D4AF37]/10 border-[#D4AF37]/50' : 'border-zinc-800'}
            border hover:border-[#D4AF37]/50 transition-colors
          `}
          onClick={() => updateFormData({ receiveUpdates: !receiveUpdates })}
        >
          <Switch
            id="receiveUpdates"
            checked={receiveUpdates}
            onCheckedChange={(checked) => updateFormData({ receiveUpdates: checked as boolean })}
            className="border-zinc-600 data-[state=checked]:bg-[#D4AF37] data-[state=checked]:text-black mt-1"
          />
          <div className="space-y-1 leading-none">
            <Label htmlFor="receiveUpdates" className="text-gray-300 font-medium cursor-pointer">
              I would like to receive updates about new features and promotions
            </Label>
            <p className="text-gray-500 text-sm">
              We'll send you occasional emails about product updates, industry news, and special offers.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
