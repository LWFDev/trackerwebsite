
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";

interface DocsFeedbackProps {
  docId: string;
  docTitle: string;
}

const DocsFeedback = ({ docId, docTitle }: DocsFeedbackProps) => {
  const [feedbackType, setFeedbackType] = useState<"helpful" | "notHelpful" | null>(null);
  const [feedbackText, setFeedbackText] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleFeedback = (type: "helpful" | "notHelpful") => {
    setFeedbackType(type);
  };

  const handleSubmit = () => {
    if (!feedbackType) return;
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log("Feedback submitted:", {
        docId,
        docTitle,
        feedbackType,
        feedbackText
      });
      
      setIsSubmitting(false);
      setSubmitted(true);
      
      toast({
        title: "Thank you for your feedback!",
        description: "Your input helps us improve our documentation.",
      });
    }, 1000);
  };

  return (
    <div className="mt-12 bg-zinc-800/50 rounded-lg border border-zinc-700 p-6">
      <h3 className="text-lg font-medium">Was this documentation helpful?</h3>
      
      <AnimatePresence mode="wait">
        {!submitted ? (
          <motion.div
            key="feedback-form"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="mt-4"
          >
            <div className="flex space-x-4">
              <Button
                variant="outline"
                className={feedbackType === "helpful" ? "bg-green-900/20 border-green-700" : ""}
                onClick={() => handleFeedback("helpful")}
              >
                Yes, it was helpful
              </Button>
              <Button
                variant="outline"
                className={feedbackType === "notHelpful" ? "bg-red-900/20 border-red-700" : ""}
                onClick={() => handleFeedback("notHelpful")}
              >
                No, it needs improvement
              </Button>
            </div>
            
            <AnimatePresence>
              {feedbackType && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="overflow-hidden"
                >
                  <div className="mt-4">
                    <label className="block text-sm font-medium text-zinc-300 mb-2">
                      {feedbackType === "helpful" 
                        ? "What did you find most helpful?" 
                        : "How can we improve this documentation?"}
                    </label>
                    <Textarea
                      value={feedbackText}
                      onChange={(e) => setFeedbackText(e.target.value)}
                      placeholder="Share your thoughts (optional)"
                      className="bg-zinc-900 border-zinc-700 min-h-[100px]"
                    />
                    <div className="mt-4">
                      <Button 
                        onClick={handleSubmit}
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Submitting..." : "Submit Feedback"}
                      </Button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ) : (
          <motion.div
            key="feedback-thanks"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-4 p-4 bg-zinc-700/30 rounded-lg"
          >
            <p className="text-zinc-200">
              Thank you for your feedback! We use this information to improve our documentation.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
      
      <Separator className="my-6" />
      
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="text-sm text-zinc-400">
          Last updated: May 14, 2025
        </div>
        <div className="flex space-x-4">
          <a href="#" className="text-sm text-gold-light hover:underline">
            Edit this page
          </a>
          <a href="#" className="text-sm text-gold-light hover:underline">
            Report an issue
          </a>
        </div>
      </div>
    </div>
  );
};

export default DocsFeedback;
