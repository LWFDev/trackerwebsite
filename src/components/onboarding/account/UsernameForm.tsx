
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { OnboardingData } from "@/types/onboarding";
import { motion } from "framer-motion";

interface UsernameFormProps {
  formData: Partial<OnboardingData>;
  updateFormData: (data: Partial<OnboardingData>) => void;
}

export function UsernameForm({ formData, updateFormData }: UsernameFormProps) {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-white">Choose a username</h2>
      <p className="text-gray-400">This will be your unique identifier on Tracker.</p>
      
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
        className="space-y-2 mt-4"
      >
        <label htmlFor="username" className="text-white">Username</label>
        <Input 
          id="username"
          value={formData.username || ""}
          onChange={(e) => updateFormData({ username: e.target.value })}
          placeholder="johndoe"
          className="bg-zinc-800 border-zinc-700 text-white focus-visible:ring-[#D4AF37] focus-visible:border-[#D4AF37]"
        />
        {formData.username && formData.username.length < 3 && (
          <p className="text-red-500 text-sm">Username must be at least 3 characters</p>
        )}
      </motion.div>
    </div>
  );
}
