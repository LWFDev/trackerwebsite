
import React from 'react';
import { motion } from 'framer-motion';
import { ScrollReveal } from '@/components/ui/scroll-reveal';
import { Scale, FileText, Shield } from 'lucide-react';
import { useLocalization } from '@/contexts/LocalizationContext';
import ContactInfo from '@/components/contact/ContactInfo';

const TermsOfService = () => {
  const { t } = useLocalization();

  const sections = [
    { id: 'acceptance', title: t('Acceptance of Terms') },
    { id: 'description', title: t('Description of Service') },
    { id: 'accounts', title: t('User Accounts & Registration') },
    { id: 'acceptable-use', title: t('Acceptable Use Policy') },
    { id: 'intellectual-property', title: t('Intellectual Property Rights') },
    { id: 'payment', title: t('Payment Terms & Billing') },
    { id: 'privacy', title: t('Data & Privacy') },
    { id: 'availability', title: t('Service Availability & Support') },
    { id: 'liability', title: t('Limitation of Liability') },
    { id: 'termination', title: t('Termination') },
    { id: 'updates', title: t('Updates to Terms') },
    { id: 'contact', title: t('Contact Information') }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-slate-50/30 to-emerald-50/20 dark:from-black dark:via-slate-950/30 dark:to-emerald-950/20">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-emerald-600 to-green-500 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute w-96 h-96 rounded-full bg-white/20 -top-48 -right-48"></div>
          <div className="absolute w-64 h-64 rounded-full bg-white/10 top-32 right-1/4"></div>
          <div className="absolute w-32 h-32 rounded-full bg-white/5 bottom-20 left-1/3"></div>
        </div>

        <div className="container mx-auto px-6 py-20 relative z-10">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 mb-8">
              <Scale size={16} className="text-white" />
              <span className="text-sm text-white font-medium tracking-wide">{t('LEGAL TERMS')}</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-white">{t('Terms of')}</span>{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-light to-white">{t('Service')}</span>
            </h1>
            <p className="text-xl text-emerald-100 max-w-2xl mx-auto leading-relaxed mb-4">
              {t('Please read these terms carefully before using Tracker software and services.')}
            </p>
            <p className="text-sm text-emerald-200 opacity-90">
              {t('Last updated: January 3, 2025')}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Table of Contents */}
            <div className="lg:col-span-1">
              <div className="sticky top-8">
                <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-4">{t('Table of Contents')}</h2>
                <nav className="space-y-2">
                  {sections.map((section) => (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      className="block text-sm text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors py-1"
                    >
                      {section.title}
                    </a>
                  ))}
                </nav>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              <div className="prose prose-lg max-w-none">
                
                <ScrollReveal>
                  <section id="acceptance" className="mb-12">
                    <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-4">{t('1. Acceptance of Terms')}</h2>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                      {t('By accessing and using Tracker software ("Service"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.')}
                    </p>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                      {t('These Terms of Service constitute a legally binding agreement between you and Tracker regarding your use of our garment decoration business software and related services.')}
                    </p>
                  </section>
                </ScrollReveal>

                <ScrollReveal>
                  <section id="description" className="mb-12">
                    <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-4">{t('2. Description of Service')}</h2>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                      {t('Tracker is a comprehensive business management software designed specifically for garment decoration businesses, including screen printing, embroidery, promotional products, and custom apparel companies.')}
                    </p>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                      {t('Our service includes modules for sales order management, customer database, production scheduling, inventory tracking, artwork management, and business analytics.')}
                    </p>
                  </section>
                </ScrollReveal>

                <ScrollReveal>
                  <section id="accounts" className="mb-12">
                    <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-4">{t('3. User Accounts & Registration')}</h2>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                      {t('You must register for an account to use Tracker. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.')}
                    </p>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                      {t('You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate and current.')}
                    </p>
                  </section>
                </ScrollReveal>

                <ScrollReveal>
                  <section id="acceptable-use" className="mb-12">
                    <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-4">{t('4. Acceptable Use Policy')}</h2>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                      {t('You agree to use the Service only for lawful purposes and in accordance with these Terms. You may not use the Service to engage in any activity that interferes with or disrupts the Service or servers and networks connected to the Service.')}
                    </p>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                      {t('You may not attempt to gain unauthorized access to any portion of the Service or any other systems or networks connected to the Service.')}
                    </p>
                  </section>
                </ScrollReveal>

                <ScrollReveal>
                  <section id="intellectual-property" className="mb-12">
                    <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-4">{t('5. Intellectual Property Rights')}</h2>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                      {t('The Service and its original content, features, and functionality are and will remain the exclusive property of Tracker and its licensors. The Service is protected by copyright, trademark, and other laws.')}
                    </p>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                      {t('You retain ownership of all content you upload to the Service, including artwork, customer data, and business information. You grant us a limited license to use this content solely to provide the Service to you.')}
                    </p>
                  </section>
                </ScrollReveal>

                <ScrollReveal>
                  <section id="payment" className="mb-12">
                    <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-4">{t('6. Payment Terms & Billing')}</h2>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                      {t('Subscription fees are billed in advance on a monthly or annual basis. All fees are non-refundable except as required by law or as specifically stated in these Terms.')}
                    </p>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                      {t('We may change our pricing at any time. If we increase the price of your subscription, we will provide at least 30 days advance notice.')}
                    </p>
                  </section>
                </ScrollReveal>

                <ScrollReveal>
                  <section id="privacy" className="mb-12">
                    <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-4">{t('7. Data & Privacy')}</h2>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                      {t('Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the Service, to understand our practices.')}
                    </p>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                      {t('We implement appropriate security measures to protect your data and maintain compliance with applicable data protection regulations, including GDPR.')}
                    </p>
                  </section>
                </ScrollReveal>

                <ScrollReveal>
                  <section id="availability" className="mb-12">
                    <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-4">{t('8. Service Availability & Support')}</h2>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                      {t('We strive to maintain high service availability but cannot guarantee uninterrupted access. We provide technical support during business hours and offer comprehensive documentation and training resources.')}
                    </p>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                      {t('Scheduled maintenance will be communicated in advance when possible.')}
                    </p>
                  </section>
                </ScrollReveal>

                <ScrollReveal>
                  <section id="liability" className="mb-12">
                    <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-4">{t('9. Limitation of Liability')}</h2>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                      {t('To the maximum extent permitted by law, Tracker shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly.')}
                    </p>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                      {t('Our total liability to you for any claim arising out of or relating to these Terms or the Service shall not exceed the amount paid by you for the Service in the twelve months preceding the claim.')}
                    </p>
                  </section>
                </ScrollReveal>

                <ScrollReveal>
                  <section id="termination" className="mb-12">
                    <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-4">{t('10. Termination')}</h2>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                      {t('You may terminate your account at any time. We may terminate or suspend your account immediately if you breach these Terms.')}
                    </p>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                      {t('Upon termination, you will retain access to your data for a reasonable period to allow for data export.')}
                    </p>
                  </section>
                </ScrollReveal>

                <ScrollReveal>
                  <section id="updates" className="mb-12">
                    <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-4">{t('11. Updates to Terms')}</h2>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                      {t('We may update these Terms from time to time. We will notify you of any material changes by posting the new Terms on this page and updating the "Last updated" date.')}
                    </p>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                      {t('Your continued use of the Service after any such changes constitutes your acceptance of the new Terms.')}
                    </p>
                  </section>
                </ScrollReveal>

                <ScrollReveal>
                  <section id="contact" className="mb-12">
                    <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-4">{t('12. Contact Information')}</h2>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                      {t('If you have any questions about these Terms of Service, please contact us:')}
                    </p>
                    <div className="bg-emerald-50 dark:bg-emerald-950/30 p-6 rounded-lg border border-emerald-200 dark:border-emerald-800">
                      <ContactInfo />
                    </div>
                  </section>
                </ScrollReveal>

              </div>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <ScrollReveal>
          <div className="max-w-4xl mx-auto mt-20">
            <div className="bg-gradient-to-r from-emerald-50 to-green-50 dark:from-emerald-950/30 dark:to-green-950/30 rounded-2xl p-12 text-center border border-emerald-200 dark:border-emerald-800">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-600 to-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-4">{t('Questions about our terms?')}</h3>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto leading-relaxed">
                {t('Our legal team is here to help clarify any questions about our Terms of Service.')}
              </p>
              <a 
                href="/contact" 
                className="bg-gradient-to-r from-emerald-600 to-green-500 hover:from-emerald-700 hover:to-green-600 text-white px-8 py-3 rounded-lg font-medium transition-all duration-200 hover:shadow-lg transform hover:-translate-y-0.5"
              >
                {t('Contact Legal Team')}
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default TermsOfService;
