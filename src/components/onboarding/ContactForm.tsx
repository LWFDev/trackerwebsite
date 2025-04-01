
import { useEffect } from "react";
import { Input } from "@/components/ui/input";
import { OnboardingData } from "@/pages/GetStarted";
import { motion } from "framer-motion";

interface ContactFormProps {
  formData: OnboardingData;
  updateFormData: (data: Partial<OnboardingData>) => void;
  questionType: "name" | "company" | "email" | "phone";
}

export function ContactForm({ formData, updateFormData, questionType }: ContactFormProps) {
  // Make sure validity is updated when component mounts
  useEffect(() => {
    const data: Partial<OnboardingData> = {};
    
    if (questionType === "name" && formData.firstName && formData.lastName) {
      data.firstName = formData.firstName;
      data.lastName = formData.lastName;
    } else if (questionType === "company" && formData.companyName) {
      data.companyName = formData.companyName;
    } else if (questionType === "email" && formData.email) {
      data.email = formData.email;
    } else if (questionType === "phone" && formData.phone) {
      data.phone = formData.phone;
    }
    
    if (Object.keys(data).length > 0) {
      updateFormData(data);
    }
  }, [questionType, formData, updateFormData]);

  // Email validation
  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  // Phone validation
  const isValidPhone = (phone: string) => {
    const digitsOnly = phone.replace(/\D/g, '');
    return digitsOnly.length >= 10;
  };

  const renderNameQuestion = () => (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-white">What's your name?</h2>
      <p className="text-gray-400">We'll use this to personalize your experience.</p>
      
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4"
      >
        <div className="space-y-2">
          <label htmlFor="firstName" className="text-white">First Name</label>
          <Input 
            id="firstName"
            value={formData.firstName}
            onChange={(e) => updateFormData({ firstName: e.target.value })}
            placeholder="John"
            className="bg-zinc-800 border-zinc-700 text-white focus-visible:ring-[#D4AF37] focus-visible:border-[#D4AF37]"
          />
        </div>
        
        <div className="space-y-2">
          <label htmlFor="lastName" className="text-white">Last Name</label>
          <Input 
            id="lastName"
            value={formData.lastName}
            onChange={(e) => updateFormData({ lastName: e.target.value })}
            placeholder="Doe"
            className="bg-zinc-800 border-zinc-700 text-white focus-visible:ring-[#D4AF37] focus-visible:border-[#D4AF37]"
          />
        </div>
      </motion.div>
    </div>
  );

  const renderCompanyQuestion = () => (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-white">What's your company name?</h2>
      <p className="text-gray-400">This will be used throughout your Tracker account.</p>
      
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
        className="space-y-2 mt-4"
      >
        <label htmlFor="companyName" className="text-white">Company Name</label>
        <Input 
          id="companyName"
          value={formData.companyName}
          onChange={(e) => updateFormData({ companyName: e.target.value })}
          placeholder="Awesome Apparel Co."
          className="bg-zinc-800 border-zinc-700 text-white focus-visible:ring-[#D4AF37] focus-visible:border-[#D4AF37]"
        />
      </motion.div>
    </div>
  );

  const renderEmailQuestion = () => (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-white">What's your email address?</h2>
      <p className="text-gray-400">We'll use this for account verification and important notifications.</p>
      
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
        className="space-y-2 mt-4"
      >
        <label htmlFor="email" className="text-white">Email Address</label>
        <Input 
          id="email"
          type="email"
          value={formData.email}
          onChange={(e) => {
            const value = e.target.value;
            updateFormData({ email: value });
          }}
          placeholder="john.doe@example.com"
          className={`
            bg-zinc-800 border-zinc-700 text-white 
            focus-visible:ring-[#D4AF37] focus-visible:border-[#D4AF37]
            ${formData.email && !isValidEmail(formData.email) ? 'border-red-500' : ''}
          `}
        />
        {formData.email && !isValidEmail(formData.email) && (
          <p className="text-red-500 text-sm">Please enter a valid email address</p>
        )}
      </motion.div>
    </div>
  );

  const renderPhoneQuestion = () => (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-white">What's your phone number?</h2>
      <p className="text-gray-400">We'll only use this if we need to contact you about your account.</p>
      
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
        className="space-y-2 mt-4"
      >
        <label htmlFor="phone" className="text-white">Phone Number</label>
        <Input 
          id="phone"
          type="tel"
          value={formData.phone}
          onChange={(e) => {
            const value = e.target.value;
            updateFormData({ phone: value });
          }}
          placeholder="(123) 456-7890"
          className={`
            bg-zinc-800 border-zinc-700 text-white 
            focus-visible:ring-[#D4AF37] focus-visible:border-[#D4AF37]
            ${formData.phone && !isValidPhone(formData.phone) ? 'border-red-500' : ''}
          `}
        />
        {formData.phone && !isValidPhone(formData.phone) && (
          <p className="text-red-500 text-sm">Please enter a valid phone number</p>
        )}
      </motion.div>
    </div>
  );

  // Render specific question based on questionType
  switch (questionType) {
    case "name":
      return renderNameQuestion();
    case "company":
      return renderCompanyQuestion();
    case "email":
      return renderEmailQuestion();
    case "phone":
      return renderPhoneQuestion();
    default:
      return null;
  }
}
