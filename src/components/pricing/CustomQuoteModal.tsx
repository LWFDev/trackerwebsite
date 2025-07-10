import React from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { X, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface CustomQuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedLicenses: {
    fullUsers: number;
    departments: number;
    stations: number;
  };
}

const CustomQuoteModal: React.FC<CustomQuoteModalProps> = ({
  isOpen,
  onClose,
  selectedLicenses
}) => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Quote Request Submitted",
      description: "Our sales team will contact you within 24 hours.",
      duration: 5000,
    });
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md bg-zinc-900 border-zinc-800">
        <DialogHeader>
          <DialogTitle className="text-white flex items-center justify-between">
            Custom Enterprise Quote
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="text-gray-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </Button>
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Selected License Summary */}
          <div className="bg-zinc-800 p-4 rounded-lg">
            <h4 className="text-white font-semibold mb-2">Your Selected Configuration</h4>
            <div className="space-y-1 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-300">Full Users:</span>
                <span className="text-white">{selectedLicenses.fullUsers}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Departments:</span>
                <span className="text-white">{selectedLicenses.departments}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Stations:</span>
                <span className="text-white">{selectedLicenses.stations}</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="firstName" className="text-gray-300">First Name</Label>
                <Input
                  id="firstName"
                  required
                  className="bg-zinc-800 border-zinc-700 text-white"
                />
              </div>
              <div>
                <Label htmlFor="lastName" className="text-gray-300">Last Name</Label>
                <Input
                  id="lastName"
                  required
                  className="bg-zinc-800 border-zinc-700 text-white"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="email" className="text-gray-300">Email</Label>
              <Input
                id="email"
                type="email"
                required
                className="bg-zinc-800 border-zinc-700 text-white"
              />
            </div>

            <div>
              <Label htmlFor="company" className="text-gray-300">Company</Label>
              <Input
                id="company"
                required
                className="bg-zinc-800 border-zinc-700 text-white"
              />
            </div>

            <div>
              <Label htmlFor="phone" className="text-gray-300">Phone</Label>
              <Input
                id="phone"
                className="bg-zinc-800 border-zinc-700 text-white"
              />
            </div>

            <div>
              <Label htmlFor="requirements" className="text-gray-300">
                Additional Requirements
              </Label>
              <Textarea
                id="requirements"
                placeholder="Tell us about your specific needs, integrations, or any questions..."
                className="bg-zinc-800 border-zinc-700 text-white min-h-20"
              />
            </div>
          </div>

          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black font-semibold"
          >
            <Send className="w-4 h-4 mr-2" />
            Request Custom Quote
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CustomQuoteModal;