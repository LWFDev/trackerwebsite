
import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { OnboardingData } from "@/types/onboarding";
import { Eye, EyeOff } from "lucide-react";
import { motion } from "framer-motion";

interface PasswordFormProps {
  formData: Partial<OnboardingData>;
  updateFormData: (data: Partial<OnboardingData>) => void;
}

export function PasswordForm({ formData, updateFormData }: PasswordFormProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(0);
  const [passwordFeedback, setPasswordFeedback] = useState("");
  const [localFormData, setLocalFormData] = useState({
    password: formData.password || "",
    confirmPassword: formData.confirmPassword || ""
  });

  // Update local state when parent props change
  useEffect(() => {
    setLocalFormData({
      password: formData.password || "",
      confirmPassword: formData.confirmPassword || ""
    });
  }, [formData.password, formData.confirmPassword]);

  // Calculate password strength
  useEffect(() => {
    if (localFormData.password) {
      let strength = 0;
      
      if (localFormData.password.length >= 8) strength += 1;
      if (/[A-Z]/.test(localFormData.password)) strength += 1;
      if (/[a-z]/.test(localFormData.password)) strength += 1;
      if (/[0-9]/.test(localFormData.password)) strength += 1;
      if (/[^A-Za-z0-9]/.test(localFormData.password)) strength += 1;
      
      setPasswordStrength(strength);
      
      if (strength === 0) setPasswordFeedback("Very weak");
      else if (strength === 1) setPasswordFeedback("Weak");
      else if (strength === 2) setPasswordFeedback("Fair");
      else if (strength === 3) setPasswordFeedback("Good");
      else if (strength === 4) setPasswordFeedback("Strong");
      else setPasswordFeedback("Very strong");
    } else {
      setPasswordStrength(0);
      setPasswordFeedback("");
    }
  }, [localFormData.password]);

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = e.target.value;
    setLocalFormData(prev => ({ ...prev, password: newPassword }));
    // Update parent directly on change
    updateFormData({ 
      password: newPassword,
      confirmPassword: localFormData.confirmPassword 
    });
  };

  const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newConfirmPassword = e.target.value;
    setLocalFormData(prev => ({ ...prev, confirmPassword: newConfirmPassword }));
    // Update parent directly on change
    updateFormData({ 
      password: localFormData.password,
      confirmPassword: newConfirmPassword 
    });
  };

  const getStrengthColor = () => {
    if (passwordStrength <= 1) return "bg-red-500";
    if (passwordStrength === 2) return "bg-orange-500";
    if (passwordStrength === 3) return "bg-yellow-500";
    if (passwordStrength >= 4) return "bg-green-500";
    return "bg-gray-500";
  };

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-white">Create a password</h2>
      <p className="text-gray-400">Make sure it's secure and easy for you to remember.</p>
      
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
        className="space-y-4 mt-4"
      >
        <div className="space-y-2">
          <label htmlFor="password" className="text-white">Password</label>
          <div className="relative">
            <Input 
              id="password"
              type={showPassword ? "text" : "password"}
              value={localFormData.password}
              onChange={handlePasswordChange}
              placeholder="••••••••"
              className="bg-zinc-800 border-zinc-700 text-white focus-visible:ring-[#D4AF37] focus-visible:border-[#D4AF37] pr-10"
            />
            <button 
              type="button"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
          
          {localFormData.password && (
            <div className="space-y-1 mt-2">
              <div className="flex justify-between text-xs">
                <span className="text-gray-400">Password strength:</span>
                <span className={`
                  ${passwordStrength <= 1 ? 'text-red-500' : 
                    passwordStrength === 2 ? 'text-orange-500' : 
                    passwordStrength === 3 ? 'text-yellow-500' : 
                    'text-green-500'}
                `}>
                  {passwordFeedback}
                </span>
              </div>
              
              <div className="h-1.5 w-full bg-zinc-700 rounded-full overflow-hidden">
                <div 
                  className={`h-full ${getStrengthColor()} transition-all duration-300`}
                  style={{ width: `${(passwordStrength / 5) * 100}%` }}
                ></div>
              </div>
              
              <ul className="text-xs text-gray-400 mt-2 space-y-1">
                <li className={localFormData.password.length >= 8 ? "text-green-500" : ""}>
                  • At least 8 characters
                </li>
                <li className={/[A-Z]/.test(localFormData.password) ? "text-green-500" : ""}>
                  • Includes uppercase letter
                </li>
                <li className={/[0-9]/.test(localFormData.password) ? "text-green-500" : ""}>
                  • Includes number
                </li>
                <li className={/[^A-Za-z0-9]/.test(localFormData.password) ? "text-green-500" : ""}>
                  • Includes special character
                </li>
              </ul>
            </div>
          )}
        </div>
        
        <div className="space-y-2">
          <label htmlFor="confirmPassword" className="text-white">Confirm Password</label>
          <div className="relative">
            <Input 
              id="confirmPassword"
              type={showConfirmPassword ? "text" : "password"}
              value={localFormData.confirmPassword}
              onChange={handleConfirmPasswordChange}
              placeholder="••••••••"
              className={`
                bg-zinc-800 border-zinc-700 text-white focus-visible:ring-[#D4AF37] focus-visible:border-[#D4AF37] pr-10
                ${localFormData.confirmPassword && localFormData.password !== localFormData.confirmPassword ? 'border-red-500' : ''}
              `}
            />
            <button 
              type="button"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
          {localFormData.confirmPassword && localFormData.password !== localFormData.confirmPassword && (
            <p className="text-red-500 text-sm">Passwords do not match</p>
          )}
        </div>
      </motion.div>
    </div>
  );
}
