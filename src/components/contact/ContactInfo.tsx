import React from "react";
import { Mail, Phone, MapPin, Clock, Award } from "lucide-react";
import { useLocalization } from "@/contexts/LocalizationContext";

const ContactInfo = () => {
  const { locale, t } = useLocalization();

  const getContactDetails = () => {
    if (locale === 'UK') {
      return {
        phone: "+44 20 3808 9467",
        address: {
          line1: "85 Great Portland Street",
          line2: "London, W1W 7LT",
          line3: ""
        },
        hours: {
          weekdays: "Monday - Friday: 9am - 5pm GMT",
          weekend: "Saturday - Sunday: Closed"
        },
        companyRegistration: "09826463",
        vatNumber: "GB 230622156"
      };
    } else {
      return {
        phone: "+1 (817) 764-0200",
        address: {
          line1: "1908 Lone Star Rd.",
          line2: "Suite B",
          line3: "Mansfield, TX 76063"
        },
        hours: {
          weekdays: "Monday - Friday: 9am - 5pm PST",
          weekend: "Saturday - Sunday: Closed"
        }
      };
    }
  };

  const contactDetails = getContactDetails();

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-6">{t("Contact Information")}</h2>
        <div className="space-y-6">
          <div className="flex items-start">
            <div className="bg-zinc-800 p-3 rounded-md mr-4">
              <Mail className="h-5 w-5 text-[#D4AF37]" />
            </div>
            <div>
              <h3 className="text-lg font-medium mb-1">{t("Email")}</h3>
              <p className="text-gray-400">support@trackmybusiness.com</p>
              <p className="text-gray-400">sales@trackmybusiness.com</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="bg-zinc-800 p-3 rounded-md mr-4">
              <Phone className="h-5 w-5 text-[#D4AF37]" />
            </div>
            <div>
              <h3 className="text-lg font-medium mb-1">{t("Phone")}</h3>
              <p className="text-gray-400">{contactDetails.phone}</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="bg-zinc-800 p-3 rounded-md mr-4">
              <MapPin className="h-5 w-5 text-[#D4AF37]" />
            </div>
            <div>
              <h3 className="text-lg font-medium mb-1">{t("Office")}</h3>
              <p className="text-gray-400">
                {contactDetails.address.line1} <br />
                {contactDetails.address.line2 && (
                  <>
                    {contactDetails.address.line2} <br />
                  </>
                )}
                {contactDetails.address.line3 && contactDetails.address.line3}
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="bg-zinc-800 p-3 rounded-md mr-4">
              <Clock className="h-5 w-5 text-[#D4AF37]" />
            </div>
            <div>
              <h3 className="text-lg font-medium mb-1">{t("Business Hours")}</h3>
              <p className="text-gray-400">{contactDetails.hours.weekdays}</p>
              <p className="text-gray-400">{contactDetails.hours.weekend}</p>
            </div>
          </div>
          {locale === 'US' && (
            <div className="flex items-start">
              <div className="bg-zinc-800 p-3 rounded-md mr-4">
                <Award className="h-5 w-5 text-[#D4AF37]" />
              </div>
              <div>
                <h3 className="text-lg font-medium mb-1">{t("Distribution Partner")}</h3>
                <p className="text-gray-400">MebuisWorks is the Exclusive US Distributor</p>
              </div>
            </div>
          )}
          {locale === 'UK' && (
            <>
              <div className="flex items-start">
                <div className="bg-zinc-800 p-3 rounded-md mr-4">
                  <MapPin className="h-5 w-5 text-[#D4AF37]" />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1">{t("Company Registration")}</h3>
                  <p className="text-gray-400">{contactDetails.companyRegistration}</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-zinc-800 p-3 rounded-md mr-4">
                  <MapPin className="h-5 w-5 text-[#D4AF37]" />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1">{t("VAT Number")}</h3>
                  <p className="text-gray-400">{contactDetails.vatNumber}</p>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
