
import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { OnboardingData } from "@/pages/GetStarted";
import { Eye, EyeOff } from "lucide-react";
import { motion } from "framer-motion";

interface AccountFormProps {
  formData: OnboardingData;
  updateFormData: (data: Partial<OnboardingData>) => void;
  questionType: "username" | "password" | "terms";
}

export function AccountForm({ formData, updateFormData, questionType }: AccountFormProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(0);
  const [passwordFeedback, setPasswordFeedback] = useState("");

  // Make sure validity is updated when component mounts
  useEffect(() => {
    const data: Partial<OnboardingData> = {};
    
    if (questionType === "username" && formData.username) {
      data.username = formData.username;
    } else if (questionType === "password" && formData.password && 
               formData.confirmPassword && formData.password === formData.confirmPassword) {
      data.password = formData.password;
      data.confirmPassword = formData.confirmPassword;
    } else if (questionType === "terms") {
      data.agreeToTerms = formData.agreeToTerms;
      data.receiveUpdates = formData.receiveUpdates;
    }
    
    if (Object.keys(data).length > 0) {
      updateFormData(data);
    }
  }, [questionType, formData, updateFormData]);

  // Calculate password strength
  useEffect(() => {
    if (formData.password) {
      let strength = 0;
      
      // Length check
      if (formData.password.length >= 8) strength += 1;
      
      // Contains uppercase
      if (/[A-Z]/.test(formData.password)) strength += 1;
      
      // Contains lowercase
      if (/[a-z]/.test(formData.password)) strength += 1;
      
      // Contains number
      if (/[0-9]/.test(formData.password)) strength += 1;
      
      // Contains special character
      if (/[^A-Za-z0-9]/.test(formData.password)) strength += 1;
      
      setPasswordStrength(strength);
      
      // Feedback based on strength
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
  }, [formData.password]);

  const getStrengthColor = () => {
    if (passwordStrength <= 1) return "bg-red-500";
    if (passwordStrength === 2) return "bg-orange-500";
    if (passwordStrength === 3) return "bg-yellow-500";
    if (passwordStrength >= 4) return "bg-green-500";
    return "bg-gray-500";
  };

  const renderUsernameQuestion = () => (
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
          value={formData.username}
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

  const renderPasswordQuestion = () => (
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
              value={formData.password}
              onChange={(e) => updateFormData({ password: e.target.value })}
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
          
          {/* Password strength meter */}
          {formData.password && (
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
                <li className={formData.password.length >= 8 ? "text-green-500" : ""}>
                  • At least 8 characters
                </li>
                <li className={/[A-Z]/.test(formData.password) ? "text-green-500" : ""}>
                  • Includes uppercase letter
                </li>
                <li className={/[0-9]/.test(formData.password) ? "text-green-500" : ""}>
                  • Includes number
                </li>
                <li className={/[^A-Za-z0-9]/.test(formData.password) ? "text-green-500" : ""}>
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
              value={formData.confirmPassword}
              onChange={(e) => updateFormData({ confirmPassword: e.target.value })}
              placeholder="••••••••"
              className={`
                bg-zinc-800 border-zinc-700 text-white focus-visible:ring-[#D4AF37] focus-visible:border-[#D4AF37] pr-10
                ${formData.confirmPassword && formData.password !== formData.confirmPassword ? 'border-red-500' : ''}
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
          {formData.confirmPassword && formData.password !== formData.confirmPassword && (
            <p className="text-red-500 text-sm">Passwords do not match</p>
          )}
        </div>
      </motion.div>
    </div>
  );

  const renderTermsQuestion = () => (
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
          <Checkbox
            id="agreeToTerms"
            checked={formData.agreeToTerms}
            onCheckedChange={(checked) => updateFormData({ agreeToTerms: checked as boolean })}
            className="border-zinc-600 data-[state=checked]:bg-[#D4AF37] data-[state=checked]:text-black mt-1"
          />
          <div className="space-y-1 leading-none">
            <label htmlFor="agreeToTerms" className="text-gray-300 font-medium cursor-pointer">
              I agree to the 
              <a href="#" className="text-[#D4AF37] hover:underline mx-1">Terms of Service</a>
              and
              <a href="#" className="text-[#D4AF37] hover:underline ml-1">Privacy Policy</a>
            </label>
            <p className="text-gray-500 text-sm">
              By creating an account, you agree to our terms and conditions.
            </p>
          </div>
        </div>
        
        <div 
          className={`
            flex items-start space-x-3 space-y-0 rounded-md p-4 cursor-pointer
            ${formData.receiveUpdates ? 'bg-[#D4AF37]/10 border-[#D4AF37]/50' : 'border-zinc-800'}
            border hover:border-[#D4AF37]/50 transition-colors
          `}
          onClick={() => updateFormData({ receiveUpdates: !formData.receiveUpdates })}
        >
          <Checkbox
            id="receiveUpdates"
            checked={formData.receiveUpdates}
            onCheckedChange={(checked) => updateFormData({ receiveUpdates: checked as boolean })}
            className="border-zinc-600 data-[state=checked]:bg-[#D4AF37] data-[state=checked]:text-black mt-1"
          />
          <div className="space-y-1 leading-none">
            <label htmlFor="receiveUpdates" className="text-gray-300 font-medium cursor-pointer">
              I would like to receive updates about new features and promotions
            </label>
            <p className="text-gray-500 text-sm">
              We'll send you occasional emails about product updates, industry news, and special offers.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );

  // Render specific question based on questionType
  switch (questionType) {
    case "username":
      return renderUsernameQuestion();
    case "password":
      return renderPasswordQuestion();
    case "terms":
      return renderTermsQuestion();
    default:
      return null;
  }
}
