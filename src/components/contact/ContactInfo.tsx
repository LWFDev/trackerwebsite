
import React from "react";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const ContactInfo = () => {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
        <div className="space-y-6">
          <div className="flex items-start">
            <div className="bg-zinc-800 p-3 rounded-md mr-4">
              <Mail className="h-5 w-5 text-[#D4AF37]" />
            </div>
            <div>
              <h3 className="text-lg font-medium mb-1">Email</h3>
              <p className="text-gray-400">support@trackmybusiness.us</p>
              <p className="text-gray-400">sales@trackmybusiness.us</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="bg-zinc-800 p-3 rounded-md mr-4">
              <Phone className="h-5 w-5 text-[#D4AF37]" />
            </div>
            <div>
              <h3 className="text-lg font-medium mb-1">Phone</h3>
              <p className="text-gray-400">+1 (817) 764-0200</p>
              <p className="text-gray-400">+1 (555) 987-6543</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="bg-zinc-800 p-3 rounded-md mr-4">
              <MapPin className="h-5 w-5 text-[#D4AF37]" />
            </div>
            <div>
              <h3 className="text-lg font-medium mb-1">Office</h3>
              <p className="text-gray-400">
                1908 Lone Star Rd. <br />
                Suite B <br />
                Mansfield, TX 76063
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="bg-zinc-800 p-3 rounded-md mr-4">
              <Clock className="h-5 w-5 text-[#D4AF37]" />
            </div>
            <div>
              <h3 className="text-lg font-medium mb-1">Business Hours</h3>
              <p className="text-gray-400">Monday - Friday: 9am - 5pm PST</p>
              <p className="text-gray-400">Saturday - Sunday: Closed</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Map */}
      <div className="h-[300px] bg-zinc-800 rounded-lg overflow-hidden border border-zinc-700 relative">
        <div className="w-full h-full bg-zinc-800 opacity-80"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <MapPin className="h-12 w-12 text-[#D4AF37] mb-2" />
          <p className="text-center text-gray-400 max-w-xs">
            Interactive map would be displayed here <br />
            (Google Maps or similar integration)
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
