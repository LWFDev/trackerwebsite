
import React from 'react';
import { motion } from 'framer-motion';
import { ScrollReveal } from '@/components/ui/scroll-reveal';
import { Shield, Eye, Lock } from 'lucide-react';
import { useLocalization } from '@/contexts/LocalizationContext';
import ContactInfo from '@/components/contact/ContactInfo';
import PageSEO from "@/components/seo/PageSEO";
import { privacySEO, privacyBreadcrumb } from "@/data/seoData";

const PrivacyPolicy = () => {
  const { t } = useLocalization();

  const sections = [
    { id: 'information-collection', title: t('Information We Collect') },
    { id: 'information-use', title: t('How We Use Your Information') },
    { id: 'information-sharing', title: t('Information Sharing & Disclosure') },
    { id: 'data-security', title: t('Data Security') },
    { id: 'data-retention', title: t('Data Retention') },
    { id: 'your-rights', title: t('Your Rights & Choices') },
    { id: 'international-transfers', title: t('International Data Transfers') },
    { id: 'cookies', title: t('Cookies & Tracking Technologies') },
    { id: 'childrens-privacy', title: t('Children\'s Privacy') },
    { id: 'policy-updates', title: t('Updates to Policy') },
    { id: 'contact-us', title: t('Contact Us') }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-slate-50/30 to-emerald-50/20 dark:from-black dark:via-slate-950/30 dark:to-emerald-950/20">
      <PageSEO seo={privacySEO} breadcrumbs={privacyBreadcrumb} />
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
              <Shield size={16} className="text-white" />
              <span className="text-sm text-white font-medium tracking-wide">{t('PRIVACY & DATA PROTECTION')}</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-white">{t('Privacy')}</span>{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-light to-white">{t('Policy')}</span>
            </h1>
            <p className="text-xl text-emerald-100 max-w-2xl mx-auto leading-relaxed mb-4">
              {t('Learn how we collect, use, and protect your personal information and business data.')}
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
                  <section id="information-collection" className="mb-12">
                    <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-4">{t('1. Information We Collect')}</h2>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                      {t('We collect information you provide directly to us, such as when you create an account, use our services, or contact us for support. This includes:')}
                    </p>
                    <ul className="list-disc list-inside text-slate-700 dark:text-slate-300 space-y-2 mb-4">
                      <li>{t('Account information (name, email, company details)')}</li>
                      <li>{t('Business data (customer information, orders, artwork, inventory)')}</li>
                      <li>{t('Usage information (how you interact with our software)')}</li>
                      <li>{t('Communication data (support requests, feedback)')}</li>
                    </ul>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                      {t('We also automatically collect certain information about your device and usage patterns when you access our service.')}
                    </p>
                  </section>
                </ScrollReveal>

                <ScrollReveal>
                  <section id="information-use" className="mb-12">
                    <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-4">{t('2. How We Use Your Information')}</h2>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                      {t('We use the information we collect to:')}
                    </p>
                    <ul className="list-disc list-inside text-slate-700 dark:text-slate-300 space-y-2 mb-4">
                      <li>{t('Provide, maintain, and improve our services')}</li>
                      <li>{t('Process transactions and manage your account')}</li>
                      <li>{t('Provide customer support and respond to inquiries')}</li>
                      <li>{t('Send important service updates and notifications')}</li>
                      <li>{t('Analyze usage patterns to enhance user experience')}</li>
                      <li>{t('Comply with legal obligations and protect our rights')}</li>
                    </ul>
                  </section>
                </ScrollReveal>

                <ScrollReveal>
                  <section id="information-sharing" className="mb-12">
                    <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-4">{t('3. Information Sharing & Disclosure')}</h2>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                      {t('We do not sell, rent, or trade your personal information. We may share your information only in the following circumstances:')}
                    </p>
                    <ul className="list-disc list-inside text-slate-700 dark:text-slate-300 space-y-2 mb-4">
                      <li>{t('With your explicit consent')}</li>
                      <li>{t('With service providers who assist in delivering our services')}</li>
                      <li>{t('When required by law or to protect our rights')}</li>
                      <li>{t('In connection with a business transfer or merger')}</li>
                    </ul>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                      {t('All third-party service providers are bound by confidentiality agreements and data protection requirements.')}
                    </p>
                  </section>
                </ScrollReveal>

                <ScrollReveal>
                  <section id="data-security" className="mb-12">
                    <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-4">{t('4. Data Security')}</h2>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                      {t('We implement industry-standard security measures to protect your information, including:')}
                    </p>
                    <ul className="list-disc list-inside text-slate-700 dark:text-slate-300 space-y-2 mb-4">
                      <li>{t('Encryption of data in transit and at rest')}</li>
                      <li>{t('Regular security audits and monitoring')}</li>
                      <li>{t('Access controls and authentication requirements')}</li>
                      <li>{t('Secure data centers with physical security measures')}</li>
                    </ul>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                      {t('While we strive to protect your information, no security system is impenetrable. We encourage you to use strong passwords and keep your account credentials secure.')}
                    </p>
                  </section>
                </ScrollReveal>

                <ScrollReveal>
                  <section id="data-retention" className="mb-12">
                    <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-4">{t('5. Data Retention')}</h2>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                      {t('We retain your information for as long as necessary to provide our services and comply with legal obligations. Specifically:')}
                    </p>
                    <ul className="list-disc list-inside text-slate-700 dark:text-slate-300 space-y-2 mb-4">
                      <li>{t('Account data is retained while your account is active')}</li>
                      <li>{t('Transactional data may be retained for up to 7 years for accounting purposes')}</li>
                      <li>{t('Support communications are retained for 3 years')}</li>
                      <li>{t('Usage analytics are anonymized after 2 years')}</li>
                    </ul>
                  </section>
                </ScrollReveal>

                <ScrollReveal>
                  <section id="your-rights" className="mb-12">
                    <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-4">{t('6. Your Rights & Choices')}</h2>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                      {t('You have the following rights regarding your personal information:')}
                    </p>
                    <ul className="list-disc list-inside text-slate-700 dark:text-slate-300 space-y-2 mb-4">
                      <li>{t('Access: Request a copy of your personal data')}</li>
                      <li>{t('Rectification: Correct inaccurate or incomplete information')}</li>
                      <li>{t('Erasure: Request deletion of your personal data')}</li>
                      <li>{t('Portability: Export your data in a machine-readable format')}</li>
                      <li>{t('Restriction: Limit how we process your information')}</li>
                      <li>{t('Objection: Object to certain types of processing')}</li>
                    </ul>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                      {t('To exercise these rights, please contact our privacy team using the information provided at the end of this policy.')}
                    </p>
                  </section>
                </ScrollReveal>

                <ScrollReveal>
                  <section id="international-transfers" className="mb-12">
                    <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-4">{t('7. International Data Transfers')}</h2>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                      {t('Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place for international transfers, including:')}
                    </p>
                    <ul className="list-disc list-inside text-slate-700 dark:text-slate-300 space-y-2 mb-4">
                      <li>{t('Adequacy decisions by relevant authorities')}</li>
                      <li>{t('Standard contractual clauses')}</li>
                      <li>{t('Binding corporate rules')}</li>
                      <li>{t('Certification schemes')}</li>
                    </ul>
                  </section>
                </ScrollReveal>

                <ScrollReveal>
                  <section id="cookies" className="mb-12">
                    <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-4">{t('8. Cookies & Tracking Technologies')}</h2>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                      {t('We use cookies and similar technologies to:')}
                    </p>
                    <ul className="list-disc list-inside text-slate-700 dark:text-slate-300 space-y-2 mb-4">
                      <li>{t('Remember your preferences and settings')}</li>
                      <li>{t('Authenticate your identity')}</li>
                      <li>{t('Analyze site usage and performance')}</li>
                      <li>{t('Provide personalized content')}</li>
                    </ul>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                      {t('You can control cookie settings through your browser preferences. However, disabling certain cookies may affect the functionality of our service.')}
                    </p>
                  </section>
                </ScrollReveal>

                <ScrollReveal>
                  <section id="childrens-privacy" className="mb-12">
                    <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-4">{t('9. Children\'s Privacy')}</h2>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                      {t('Our service is designed for business use and is not intended for children under 16. We do not knowingly collect personal information from children under 16.')}
                    </p>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                      {t('If we become aware that we have collected personal information from a child under 16, we will take steps to delete such information promptly.')}
                    </p>
                  </section>
                </ScrollReveal>

                <ScrollReveal>
                  <section id="policy-updates" className="mb-12">
                    <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-4">{t('10. Updates to Policy')}</h2>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                      {t('We may update this Privacy Policy from time to time to reflect changes in our practices or applicable laws. We will notify you of material changes by:')}
                    </p>
                    <ul className="list-disc list-inside text-slate-700 dark:text-slate-300 space-y-2 mb-4">
                      <li>{t('Posting the updated policy on our website')}</li>
                      <li>{t('Sending email notifications to registered users')}</li>
                      <li>{t('Displaying notices within our software')}</li>
                    </ul>
                  </section>
                </ScrollReveal>

                <ScrollReveal>
                  <section id="contact-us" className="mb-12">
                    <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-4">{t('11. Contact Us')}</h2>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                      {t('If you have any questions about this Privacy Policy or our data practices, please contact us:')}
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
                <Lock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-4">{t('Questions about your privacy?')}</h3>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto leading-relaxed">
                {t('Our privacy team is here to help you understand how we protect your data.')}
              </p>
              <a 
                href="/contact" 
                className="bg-gradient-to-r from-emerald-600 to-green-500 hover:from-emerald-700 hover:to-green-600 text-white px-8 py-3 rounded-lg font-medium transition-all duration-200 hover:shadow-lg transform hover:-translate-y-0.5"
              >
                {t('Contact Privacy Team')}
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
