import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ScrollReveal } from '@/components/ui/scroll-reveal';
import { Scale, FileText } from 'lucide-react';
import { useLocalization } from '@/contexts/LocalizationContext';
import PageSEO from "@/components/seo/PageSEO";
import { termsSEO, termsBreadcrumb } from "@/data/seoData";

const TermsOfService = () => {
  const { t } = useLocalization();
  const location = useLocation();

  // Handle hash scrolling for anchor links
  useEffect(() => {
    if (location.hash) {
      const timer = setTimeout(() => {
        const elementId = location.hash.replace('#', '');
        const element = document.getElementById(elementId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [location.hash]);

  const sections = [
    { id: 'application', title: t('1. Application of Terms') },
    { id: 'accounts', title: t('2. User Accounts') },
    { id: 'fees', title: t('3. Fees') },
    { id: 'support', title: t('4. Support') },
    { id: 'obligations', title: t('5. General Obligations') },
    { id: 'content', title: t('6. Your Content') },
    { id: 'warranties', title: t('7. Warranties & Representations') },
    { id: 'provision', title: t('8. Provision of Services') },
    { id: 'data', title: t('9. Data') },
    { id: 'limitation-services', title: t('10. Limitation of Services') },
    { id: 'changes', title: t('11. Changes to Services') },
    { id: 'analytics', title: t('12. Business Analytics') },
    { id: 'user-content', title: t('13. User Generated Content') },
    { id: 'security', title: t('14. Security and Access') },
    { id: 'liability', title: t('15. Limitation of Liability') },
    { id: 'intellectual-property', title: t('16. Intellectual Property') },
    { id: 'indemnification', title: t('17. Indemnification') },
    { id: 'confidential', title: t('18. Confidential Information') },
    { id: 'privacy', title: t('19. Personal Data and Privacy') },
    { id: 'termination', title: t('20. Termination') },
    { id: 'general', title: t('21. General Terms') },
    { id: 'contact', title: t('22. Contact Us') }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-slate-50/30 to-emerald-50/20 dark:from-black dark:via-slate-950/30 dark:to-emerald-950/20">
      <PageSEO seo={termsSEO} breadcrumbs={termsBreadcrumb} />
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
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-light to-white">{t('Use')}</span>
            </h1>
            <p className="text-xl text-emerald-100 max-w-2xl mx-auto leading-relaxed mb-4">
              {t('Please read these terms carefully before accessing or using our Services.')}
            </p>
            <p className="text-sm text-emerald-200 opacity-90">
              {t('Last updated: January 2025')}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Table of Contents */}
            <div className="lg:col-span-1">
              <div className="sticky top-8">
                <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-4">{t('Table of Contents')}</h2>
                <nav className="space-y-1 max-h-[70vh] overflow-y-auto pr-2">
                  {sections.map((section) => (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      className="block text-xs text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors py-1"
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
                
                {/* Introduction */}
                <ScrollReveal>
                  <div className="mb-12 p-6 bg-emerald-50 dark:bg-emerald-950/30 rounded-lg border border-emerald-200 dark:border-emerald-800">
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                      {t('In these Terms of Use ("Terms"), "we", "us" or "our" means Little White Feather Limited, company number 09826463, registered office 85 Great Portland Street, London W1W 7LT and "you" or "your" means the entity in the Service Order together with your authorised users ("Users") of the Services.')}
                    </p>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                      {t('These Terms govern your access to and use of our online platform currently branded "TRACKER" and any other related service we provide ("Services"), set out our legal obligations to you and your legal obligations to us and form a binding contractual agreement between you and us and includes the Proposal incorporating them, together called the "Agreement".')}
                    </p>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                      {t('You must read these Terms carefully before accessing or using our Services. If you do not agree to these Terms, you must not access or use our Services.')}
                    </p>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                      {t('By using or continuing to use our Services, you agree to be bound by these Terms and shall ensure compliance with these Terms by all your Users of the Services who shall also be bound by these Terms.')}
                    </p>
                  </div>
                </ScrollReveal>

                {/* 1. Application of Terms */}
                <ScrollReveal>
                  <section id="application" className="mb-12">
                    <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-4">{t('1. Application of Terms')}</h2>
                    
                    <h3 className="text-lg font-medium text-slate-800 dark:text-slate-200 mb-3">{t('1.1 Terms apply to all Users')}</h3>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                      {t('These Terms apply to all Users of the Services. All Services provided to you shall be governed exclusively by this Agreement. The Proposal sets out the monthly licence and support charges payable by you for our Services.')}
                    </p>
                    
                    <h3 className="text-lg font-medium text-slate-800 dark:text-slate-200 mb-3">{t('1.2 Updates to Terms')}</h3>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                      {t('We may update or amend these Terms and the ongoing applicable monthly licence and support charges from time to time at our discretion for any reason that we consider appropriate, including as a result of changes, modifications or removal of the TRACKER application or any of our Services, changes to applicable laws or regulations, or for other legitimate commercial reasons. When these Terms are updated, we will notify you by sending you an email with a link to the updated Terms or presenting them to you when you access our Services.')}
                    </p>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                      {t('If you do not agree to the updated terms, then you must cease using or accessing the Services, and we may end your use of and access to the Services and terminate our Agreement. By using or continuing to use the Services, you are agreeing to be bound by the updated Terms.')}
                    </p>
                  </section>
                </ScrollReveal>

                {/* 2. User Accounts */}
                <ScrollReveal>
                  <section id="accounts" className="mb-12">
                    <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-4">{t('2. User Accounts')}</h2>
                    
                    <h3 className="text-lg font-medium text-slate-800 dark:text-slate-200 mb-3">{t('2.1')}</h3>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                      {t('As part of the Service set-up, we will set up your administrative users and other authorised users ("Users"). As part of the set-up activity you will determine the rights and access of each type of User. We will set up your access to TRACKER as detailed in the applicable project implementation plan.')}
                    </p>
                    
                    <h3 className="text-lg font-medium text-slate-800 dark:text-slate-200 mb-3">{t('2.2 Our legal relationship with Users')}</h3>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                      {t('Nothing contained or implied in these Terms means a User is a partner, agent or legal representative of us for any purpose, or creates any partnership, agency or trust. No User has any authority to bind us in any way. You shall be responsible for all your Users and shall ensure your Users comply with these Terms and are bound by them. By Using the Services Users accept the Terms and agree to be bound by them.')}
                    </p>
                  </section>
                </ScrollReveal>

                {/* 3. Fees */}
                <ScrollReveal>
                  <section id="fees" className="mb-12">
                    <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-4">{t('3. Fees')}</h2>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                      {t('We charge you fees for our Services which are set out in the Proposal. We will invoice you monthly in advance for the Services during the Subscription Term. You will pay all undisputed invoices within 15 days of the date of such invoice. Except as expressly provided otherwise, fees are non-refundable. We shall bill you for applicable taxes as a separate line item on each invoice. You shall be responsible for payment of all sales and use taxes, value added taxes (VAT), or similar charges relating to your purchase and use of the Services. Where expenses are included in the Service Order, you will reimburse us for our reasonable, out-of-pocket travel and related expenses incurred in performing the Services. We reserve the right to increase the fees each year: we will provide you with 60 days written notice of price.')}
                    </p>
                  </section>
                </ScrollReveal>

                {/* 4. Support */}
                <ScrollReveal>
                  <section id="support" className="mb-12">
                    <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-4">{t('4. Support')}</h2>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                      {t('As part of the Services, we provide support services as detailed in the Proposal.')}
                    </p>
                  </section>
                </ScrollReveal>

                {/* 5. General Obligations */}
                <ScrollReveal>
                  <section id="obligations" className="mb-12">
                    <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-4">{t('5. General Obligations')}</h2>
                    
                    <h3 className="text-lg font-medium text-slate-800 dark:text-slate-200 mb-3">{t('5.1')}</h3>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                      {t('In addition to the obligations set out in the rest of these Terms, you must:')}
                    </p>
                    <ul className="list-disc list-inside text-slate-700 dark:text-slate-300 mb-4 space-y-2">
                      <li>{t('use the Services in a professional manner;')}</li>
                      <li>{t('provide us with all the information that we need in order to provide the Services or to otherwise exercise our rights or comply with our obligations under these Terms; and')}</li>
                      <li>{t('comply with all applicable laws while using the Services.')}</li>
                    </ul>
                    
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                      {t('You must not:')}
                    </p>
                    <ul className="list-disc list-inside text-slate-700 dark:text-slate-300 mb-4 space-y-2">
                      <li>{t('engage in any unlawful, defamatory or otherwise offensive conduct while using the Services;')}</li>
                      <li>{t('do anything that is likely to bring us into disrepute during the course of your use of the Services;')}</li>
                      <li>{t('intentionally distribute viruses, malicious code or other items of a destructive or deceptive nature;')}</li>
                      <li>{t('interfere with the use of the Services, or the equipment used to provide the Services;')}</li>
                      <li>{t("delete, alter or interfere with another User's data;")}</li>
                      <li>{t("access another User's account without permission;")}</li>
                      <li>{t('alter, disable, interfere with or circumvent any aspect of the Services;')}</li>
                      <li>{t('test or reverse engineer the Services in order to find limitations, vulnerabilities or evade filtering capabilities;')}</li>
                      <li>{t('reproduce, modify or prepare derivative works of the Services;')}</li>
                      <li>{t('perform any indexing, scraping or other such data mining of the Services;')}</li>
                      <li>{t('use any Services, or a component of the Services, in a manner not authorised by us; or')}</li>
                      <li>{t('do anything designed to affect access to or the integrity of the Services.')}</li>
                    </ul>
                    
                    <h3 className="text-lg font-medium text-slate-800 dark:text-slate-200 mb-3">{t('5.2 Account obligations')}</h3>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                      {t('With respect to your User account, you must:')}
                    </p>
                    <ul className="list-disc list-inside text-slate-700 dark:text-slate-300 mb-4 space-y-2">
                      <li>{t('keep your password secret;')}</li>
                      <li>{t('not allow any other person to access your account; and')}</li>
                      <li>{t('notify us if you think your account has been compromised.')}</li>
                    </ul>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                      {t('You shall be solely responsible for the acts and omissions of your Users. We shall not be liable for any loss of data or functionality caused directly or indirectly by the Users.')}
                    </p>
                  </section>
                </ScrollReveal>

                {/* 6. Your Content */}
                <ScrollReveal>
                  <section id="content" className="mb-12">
                    <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-4">{t('6. Your Content')}</h2>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                      {t("You must not upload any content that is untrue, incorrect, misleading or deceptive, which infringes a third party's intellectual property rights or other proprietary rights, breaches any law or is offensive, discriminatory, defamatory or otherwise inappropriate or unlawful.")}
                    </p>
                  </section>
                </ScrollReveal>

                {/* 7. Your warranties and representations */}
                <ScrollReveal>
                  <section id="warranties" className="mb-12">
                    <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-4">{t('7. Your Warranties and Representations')}</h2>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                      {t('You warrant and represent that:')}
                    </p>
                    <ul className="list-disc list-inside text-slate-700 dark:text-slate-300 space-y-2">
                      <li>{t("if you are using the Services (including uploading content) on behalf of another person or organisation, you have and continue to hold the necessary permission to act on that person or organisation's behalf;")}</li>
                      <li>{t('you will use the Services in accordance with these Terms;')}</li>
                      <li>{t('you will not use our Services or any information you obtain during the course of us providing the services for any improper or unlawful purpose; and')}</li>
                      <li>{t("you will not infringe any person's intellectual property rights during the course of your use of the Services including the content provided by you.")}</li>
                    </ul>
                  </section>
                </ScrollReveal>

                {/* 8. Provision of the Services */}
                <ScrollReveal>
                  <section id="provision" className="mb-12">
                    <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-4">{t('8. Provision of the Services')}</h2>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                      {t('We provide the Services strictly on an "as-is" and "as available" basis and to the maximum extent permitted by law, we exclude all warranties, terms, conditions or undertakings whether express or implied, statutory or otherwise, including that the Services will be:')}
                    </p>
                    <ul className="list-disc list-inside text-slate-700 dark:text-slate-300 space-y-2">
                      <li>{t('available at any particular time;')}</li>
                      <li>{t('secure or error free;')}</li>
                      <li>{t('fit for any particular purpose; or')}</li>
                      <li>{t('will meet any standard or specification.')}</li>
                    </ul>
                  </section>
                </ScrollReveal>

                {/* 9. Data */}
                <ScrollReveal>
                  <section id="data" className="mb-12">
                    <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-4">{t('9. Data')}</h2>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                      {t('We will not be responsible or liable for any loss of data resulting from your use of the Services. We will provide you with a copy of your data from our systems upon request. The servers that host the TRACKER application are based in the EU for UK and EU Users and in the USA for USA Users. Full system backups are made every 24 hours, 7 days/week. We use dual location servers to provide resilience in our Services.')}
                    </p>
                  </section>
                </ScrollReveal>

                {/* 10. Limitation of Services */}
                <ScrollReveal>
                  <section id="limitation-services" className="mb-12">
                    <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-4">{t('10. Limitation of Services')}</h2>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                      {t('We may limit your access to or use of the Services at any time and for any reason, including for any breach of these Terms or misuse of the Services.')}
                    </p>
                  </section>
                </ScrollReveal>

                {/* 11. Changes to the Services */}
                <ScrollReveal>
                  <section id="changes" className="mb-12">
                    <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-4">{t('11. Changes to the Services')}</h2>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                      {t('We may change, modify or remove some or all of the Services at any time and at our sole discretion, including but not limited to circumstances in which we need to update our commercial offering to attract new Users, to add or remove functionality, to ensure that our Services are secure, to comply with applicable laws or regulations or to respond to requests by customers.')}
                    </p>
                  </section>
                </ScrollReveal>

                {/* 12. Business analytics and advertising */}
                <ScrollReveal>
                  <section id="analytics" className="mb-12">
                    <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-4">{t('12. Business Analytics and Advertising')}</h2>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                      {t('We may use and disclose any information uploaded to the TRACKER application or otherwise collected by us in providing the Services (including Confidential Information) for our internal business purposes, including to perform analytics, to develop new features, to conduct maintenance, to determine whether features are useful, and for advertising and marketing, subject only to our obligations relating to privacy and confidentiality in these Terms.')}
                    </p>
                  </section>
                </ScrollReveal>

                {/* 13. User generated content */}
                <ScrollReveal>
                  <section id="user-content" className="mb-12">
                    <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-4">{t('13. User Generated Content')}</h2>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                      {t('We are not responsible or liable for any content that is created by or uploaded to the TRACKER platform by Users. Specifically, we do not warrant or represent that any content uploaded:')}
                    </p>
                    <ul className="list-disc list-inside text-slate-700 dark:text-slate-300 mb-4 space-y-2">
                      <li>{t('is true and correct, and not misleading or deceptive;')}</li>
                      <li>{t("does not infringe any third party's intellectual property rights or other proprietary rights; or")}</li>
                      <li>{t('does not breach any law or is offensive, defamatory or otherwise inappropriate.')}</li>
                    </ul>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                      {t('If you believe any content or information infringes your rights or is otherwise unlawful, please contact us on the details at the end of these Terms.')}
                    </p>
                  </section>
                </ScrollReveal>

                {/* 14. Security and access */}
                <ScrollReveal>
                  <section id="security" className="mb-12">
                    <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-4">{t('14. Security and Access')}</h2>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                      {t('We implement appropriate technical and organisational measures to secure the Services from unauthorised access and to protect the integrity and confidentiality of your content, using industry standard systems and security practices. However, any transmission of data over the internet is inherently risky. You acknowledge and agree that you are responsible for your access to the Services, for the computer or mobile device and associated software that you use to access the Services, and for your transmission of data over the internet. You are responsible for taking your own precautions to ensure that your access to the Services does not expose you to the risk of interference or damage to your content or your computer system or network.')}
                    </p>
                  </section>
                </ScrollReveal>

                {/* 15. Limitation of Liability */}
                <ScrollReveal>
                  <section id="liability" className="mb-12">
                    <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-4">{t('15. Limitation of Liability')}</h2>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                      {t('Neither party (nor any licensor or other supplier of supplier) shall be liable for indirect, incidental, special or consequential damages, including, without limitation, damages for lost business, profits, data or use of any service, incurred by either party or any third party in connection with these Terms, regardless of the nature of the claim (including negligence), even if foreseeable or the other party has been advised of the possibility of such damages.')}
                    </p>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                      {t('To the maximum extent permitted by law, we exclude all liability (whether under contract, tort including negligence, statute or otherwise) for all claims, expenses, losses, damages and costs made against or incurred by you directly or indirectly arising out of your use or misuse of the Service, including your inability to access the Services and any negligent acts or omissions by us or our employees or contractors.')}
                    </p>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                      {t('Our aggregate liability (whether under contract, tort including negligence, statute or otherwise) shall not exceed the fees paid or payable by you under this Agreement during the 12 months preceding the date the claim arose. Nothing in this Agreement will limit or exclude either Party\'s liability for fraud or fraudulent misrepresentation or any other matter for which it would be illegal or void at law to limit or exclude liability.')}
                    </p>
                  </section>
                </ScrollReveal>

                {/* 16. Intellectual Property */}
                <ScrollReveal>
                  <section id="intellectual-property" className="mb-12">
                    <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-4">{t('16. Intellectual Property')}</h2>
                    
                    <h3 className="text-lg font-medium text-slate-800 dark:text-slate-200 mb-3">{t('16.1 Intellectual property rights in the Services')}</h3>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                      {t('You acknowledge and agree that as between you and us, we own all intellectual property rights in the Services and the TRACKER application (excluding the content that you upload or provide to us to perform the Services).')}
                    </p>
                    
                    <h3 className="text-lg font-medium text-slate-800 dark:text-slate-200 mb-3">{t('16.2 Intellectual property rights in content you upload')}</h3>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                      {t('We acknowledge and agree that as between you and us, you (or to the extent that you are using your account on behalf of an organisation, your organisation) own all intellectual property rights in the content that you upload to the TRACKER platform or otherwise provide to us for the purpose of us performing the Services. You grant us a non-exclusive, perpetual, irrevocable, worldwide, royalty-free and transferable licence to use, store, modify, keep, copy and display such content, subject only to the confidentiality and privacy restrictions set out in these Terms, and without any further consent, notice or compensation. We may sub-licence this licence to third party service providers who assist us in providing the Services, to exercise the rights granted to us with respect to such content.')}
                    </p>
                    
                    <h3 className="text-lg font-medium text-slate-800 dark:text-slate-200 mb-3">{t('16.3 No assignment or transfer of intellectual property')}</h3>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                      {t('Nothing in these Terms results in the transfer or assignment of any intellectual property rights from you to us or from us to you.')}
                    </p>
                  </section>
                </ScrollReveal>

                {/* 17. Indemnification */}
                <ScrollReveal>
                  <section id="indemnification" className="mb-12">
                    <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-4">{t('17. Indemnification')}</h2>
                    
                    <h3 className="text-lg font-medium text-slate-800 dark:text-slate-200 mb-3">{t('17.1 Indemnification by us')}</h3>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                      {t("If a third party makes a claim against you that the Services infringe any patent, copyright or trademark or other intellectual property rights, or misappropriates any trade secret, we shall defend you and your directors, officers and employees against the claim at our expense and we shall pay all losses, damages and expenses (including reasonable attorneys' fees) finally awarded in favour of such parties or agreed to in a written settlement agreement signed by us, to the extent arising from the claim. We shall have no liability for any claim based on (a) your content, (b) modification of the Services not authorised by Us, or (c) use of the Services other than in accordance with these Terms. We may, at our sole option and expense, procure for you the right to continue use of the Services, modify the Services in a manner that does not materially impair the functionality, or terminate this agreement and repay to You any amount paid by You with respect to the remaining term following the termination date.")}
                    </p>
                    
                    <h3 className="text-lg font-medium text-slate-800 dark:text-slate-200 mb-3">{t('17.2 Indemnification by you')}</h3>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                      {t("If a third party makes a claim against us that your content infringes any patent, copyright or trademark, or misappropriates any trade secret, you shall defend us and our directors, officers and employees against the claim at your expense and you shall pay all losses, damages and expenses (including reasonable attorneys' fees) finally awarded in favour of such parties or agreed to in a written settlement agreement signed by you, to the extent arising from the claim.")}
                    </p>
                    
                    <h3 className="text-lg font-medium text-slate-800 dark:text-slate-200 mb-3">{t('17.3 Conditions for Indemnification')}</h3>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                      {t("A party seeking indemnification under this section shall (a) promptly notify the other party of the claim, (b) give the other party sole control of the defence and settlement of the claim, and (c) provide, at the other party's expense for out-of-pocket expenses, the assistance, information and authority reasonably requested by the other party in the defence and settlement of the claim.")}
                    </p>
                  </section>
                </ScrollReveal>

                {/* 18. Confidential Information */}
                <ScrollReveal>
                  <section id="confidential" className="mb-12">
                    <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-4">{t('18. Confidential Information')}</h2>
                    
                    <h3 className="text-lg font-medium text-slate-800 dark:text-slate-200 mb-3">{t('18.1 Meaning of confidential information')}</h3>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                      {t('For the purpose of these Terms, "confidential information" means, in relation to a party, information that: is by its nature confidential; is designated by a party as confidential; or the other party knows or ought to know is confidential. Our confidential information specifically includes the terms of any other agreements we have with you. Information is no longer confidential if it:')}
                    </p>
                    <ul className="list-disc list-inside text-slate-700 dark:text-slate-300 mb-4 space-y-2">
                      <li>{t('is or becomes generally available to the public other than as a result of a disclosure in breach of this agreement; or')}</li>
                      <li>{t('becomes available to the recipient on a non-confidential basis from a source other than the discloser who has represented to the recipient that it is entitled to such information.')}</li>
                    </ul>
                    
                    <h3 className="text-lg font-medium text-slate-800 dark:text-slate-200 mb-3">{t('18.2 Your access to our confidential information')}</h3>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                      {t('You may have access to our confidential information as part of us providing the Services. This may include technical information, business information and business plans. You must not disclose that information to any person or use it other than as permitted by these Terms.')}
                    </p>
                    
                    <h3 className="text-lg font-medium text-slate-800 dark:text-slate-200 mb-3">{t('18.3 Our use of your confidential information')}</h3>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                      {t('We may use or disclose your confidential information to assist us in providing the Services to you, as otherwise provided for in these Terms, as you otherwise permit, or if an exception in clause 18.4 applies. We will endeavour to keep your content secure and confidential except where:')}
                    </p>
                    <ul className="list-disc list-inside text-slate-700 dark:text-slate-300 mb-4 space-y-2">
                      <li>{t('disclosure to organisations or other Users or third parties is contemplated by these Terms, the functionality of the TRACKER application or our Services or the settings that we make available on the TRACKER application;')}</li>
                      <li>{t('we wish to disclose any content submitted via the TRACKER application for our own business purposes, provided that we use reasonable efforts to do so on an anonymised and non-attributable basis, without disclosing the identity of any organisation or User from whom the content has originated.')}</li>
                    </ul>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                      {t('Where we make settings available on the TRACKER application, we will make reasonable efforts to honour the choices you make about access to content by your Users which will be agreed as part of the set-up activity. Where your confidential information has been disclosed to organisations or third parties pursuant to these Terms, we will not be responsible for their further use or disclosure of such confidential information.')}
                    </p>
                    
                    <h3 className="text-lg font-medium text-slate-800 dark:text-slate-200 mb-3">{t('18.4 Exceptions')}</h3>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                      {t('Confidential information may be disclosed if, notwithstanding this clause 18, the confidential information is:')}
                    </p>
                    <ul className="list-disc list-inside text-slate-700 dark:text-slate-300 space-y-2">
                      <li>{t('disclosed with the written consent of the person to whom the confidential information belongs;')}</li>
                      <li>{t('being provided to legal or other professional advisors (provided those provided are under obligations of confidentiality which are no less protective than this clause 18);')}</li>
                      <li>{t('required to be disclosed as a result of a law or legal process, provided (to the extent permitted by law), the receiving party makes all reasonable efforts to notify the disclosing party of the requirement to disclose and cooperates to limit the scope of disclosure.')}</li>
                    </ul>
                  </section>
                </ScrollReveal>

                {/* 19. Personal Data and Privacy */}
                <ScrollReveal>
                  <section id="privacy" className="mb-12">
                    <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-4">{t('19. Personal Data and Privacy')}</h2>
                    
                    <h3 className="text-lg font-medium text-slate-800 dark:text-slate-200 mb-3">{t('19.1 Acknowledgment')}</h3>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                      {t('You hereby acknowledge and agree that our performance of the Services may require us to process, transmit and/or store your personal data or the personal data of your employees, agents and customers. By submitting personal data to us, you agree that we may process, transmit and/or store Personal Data (as defined in the General Data Protection Regulation (EU) 2016/679 "GDPR") only to the extent necessary for, and for the sole purpose of, enabling us to perform our obligations to under these Terms. In relation to all Personal Data provided by or through you to us, you will be responsible as sole Data Controller (as defined under GDPR) for complying with all applicable data protection or similar laws that regulate the processing of Personal Data and special categories of data. You agree to obtain all necessary consents and make all necessary disclosures before including Personal Data in content and using the Services. You confirm that you are solely responsible for any Personal Data that may be contained in content provided by you, including any information which any of your Users share with third parties on your behalf.')}
                    </p>
                    
                    <h3 className="text-lg font-medium text-slate-800 dark:text-slate-200 mb-3">{t('19.2 Our Personal Data Obligations')}</h3>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                      {t('In performing the Services, we will comply with our Privacy Policy, which is available at https://www.trackmybusiness.com/privacy-policy and incorporated herein by reference. Our Privacy Policy is subject to change at our discretion; however, our policy changes will not result in a material reduction in the level of protection provided for your data during the period for which fees for the services have been paid. We will only process your Personal Data in a manner that is reasonably necessary to provide the Services and only for that purpose. We will only process your Personal Data in delivering the Services.')}
                    </p>
                    
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                      {t('You agree to provide any notices and obtain any consent related to our use of the data for provisioning the Services, including those related to the collection, use, processing, transfer and disclosure of personal information. You shall have sole responsibility for the accuracy, quality, integrity, legality, reliability, appropriateness and retains ownership of all of your data.')}
                    </p>
                  </section>
                </ScrollReveal>

                {/* 20. Termination */}
                <ScrollReveal>
                  <section id="termination" className="mb-12">
                    <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-4">{t('20. Termination')}</h2>
                    
                    <h3 className="text-lg font-medium text-slate-800 dark:text-slate-200 mb-3">{t('20.1 Material Breach')}</h3>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                      {t('Either party may terminate this Agreement immediately upon a material breach by the other party that has not been cured within thirty (30) days after receipt of notice of such breach.')}
                    </p>
                    
                    <h3 className="text-lg font-medium text-slate-800 dark:text-slate-200 mb-3">{t('20.2 Customer Termination Rights')}</h3>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                      {t('The rights of the customer to terminate this Agreement other than for a breach in 20.1 are set out in their Tracker Commercial Proposal document.')}
                    </p>
                    
                    <h3 className="text-lg font-medium text-slate-800 dark:text-slate-200 mb-3">{t('20.3 Suspension for Non-Payment')}</h3>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                      {t('We reserve the right to suspend delivery of the Services if you fail to timely pay any undisputed amounts due to us under this Agreement, but only after we notify you of such failure and such failure continues for fifteen (15) days. Suspension of the Services shall not release you of your payment obligations under these Terms. We shall not be liable to you or to any third party for any liabilities, claims or expenses arising from or relating to any suspension of the Services in accordance with this Clause 20.3.')}
                    </p>
                    
                    <h3 className="text-lg font-medium text-slate-800 dark:text-slate-200 mb-3">{t('20.4 Suspension for Ongoing Harm')}</h3>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                      {t('We reserve the right to suspend delivery of the Services if we reasonably conclude that you or any of your Users use of the Services is causing immediate and ongoing harm to us or others. In the extraordinary case that we must suspend delivery of the Services, we shall immediately notify you of the suspension and the parties shall diligently attempt to resolve the issue. We shall not be liable to you or to any third party for any liabilities, claims or expenses arising from or relating to any suspension of the Services in accordance with this Clause 20.4.')}
                    </p>
                    
                    <h3 className="text-lg font-medium text-slate-800 dark:text-slate-200 mb-3">{t('20.5 Effect of Termination')}</h3>
                    <ul className="list-disc list-inside text-slate-700 dark:text-slate-300 space-y-2">
                      <li>{t('(a) Upon termination of this Agreement or expiration of the Subscription Term, you shall immediately cease providing the Services and all usage rights granted under this Agreement shall terminate.')}</li>
                      <li>{t('(b) If we terminate this Agreement due to a breach by you, then you shall immediately pay to us all amounts then due under this Agreement and to become due during the remaining term of this Agreement, but for such termination. If you terminate this Agreement due to a breach by us, then we shall immediately repay to you all pre-paid amounts for any unperformed Services scheduled to be delivered after the termination date.')}</li>
                      <li>{t('(c) Upon termination of this Agreement and upon subsequent written request by the disclosing party, the receiving party of tangible Confidential Information shall immediately return such information or destroy such information and provide written certification of such destruction, provided that the receiving party may permit its legal counsel to retain one archival copy of such information in the event of a subsequent dispute between the parties.')}</li>
                    </ul>
                  </section>
                </ScrollReveal>

                {/* 21. General Terms */}
                <ScrollReveal>
                  <section id="general" className="mb-12">
                    <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-4">{t('21. General Terms')}</h2>
                    
                    <h3 className="text-lg font-medium text-slate-800 dark:text-slate-200 mb-3">{t('21.1 Interpretation')}</h3>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                      {t('A reference to any legislation includes regulations under it and any consolidations, amendments, re-enactments or replacements of any of them. The meaning of general words is not limited by specific examples introduced by "including", "for example", "such as" or similar expressions.')}
                    </p>
                    
                    <h3 className="text-lg font-medium text-slate-800 dark:text-slate-200 mb-3">{t('21.2 Jurisdiction')}</h3>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                      {t('These Terms will be governed by English law and the Courts of England and Wales.')}
                    </p>
                    
                    <h3 className="text-lg font-medium text-slate-800 dark:text-slate-200 mb-3">{t('21.3 Assignment')}</h3>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                      {t('You cannot assign your rights under these Terms without our express written consent. We may assign our rights under these Terms at any time without your consent.')}
                    </p>
                    
                    <h3 className="text-lg font-medium text-slate-800 dark:text-slate-200 mb-3">{t('21.4 Third Party Rights')}</h3>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                      {t('No other person who is not a party to these Terms may enforce them against a party.')}
                    </p>
                    
                    <h3 className="text-lg font-medium text-slate-800 dark:text-slate-200 mb-3">{t('21.5 No Waiver')}</h3>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                      {t('A failure or delay by a party to exercise a right or remedy provided under these Terms or by law does not constitute a waiver of the right or remedy or a waiver of other rights or remedies.')}
                    </p>
                    
                    <h3 className="text-lg font-medium text-slate-800 dark:text-slate-200 mb-3">{t('21.6 Severability')}</h3>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                      {t('If any part of these Terms is void, unenforceable or illegal in a jurisdiction, that part is severed for that jurisdiction. The remainder of these Terms have full force and effect.')}
                    </p>
                    
                    <h3 className="text-lg font-medium text-slate-800 dark:text-slate-200 mb-3">{t('21.7 Clauses that survive termination')}</h3>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                      {t('The following clauses survive termination or cancellation: 6, 8, 9, 12-19, 21 and 22.')}
                    </p>
                  </section>
                </ScrollReveal>

                {/* 22. Contact Us */}
                <ScrollReveal>
                  <section id="contact" className="mb-12">
                    <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-4">{t('22. Contact Us')}</h2>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                      {t('You can contact us on the following details:')}
                    </p>
                    <div className="bg-emerald-50 dark:bg-emerald-950/30 p-6 rounded-lg border border-emerald-200 dark:border-emerald-800">
                      <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-2">
                        <strong>{t('Email:')}</strong> hello@trackmybusiness.com
                      </p>
                      <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                        <strong>{t('Address:')}</strong> 85 Great Portland Street, London W1W 7LT, United Kingdom
                      </p>
                    </div>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed mt-4">
                      {t('If you want to send us notices or service or process, please contact us using the postal address above and/or use the email address above. We may send you notices or service or process using the contact details provided with your registration.')}
                    </p>
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
                {t('Our team is here to help clarify any questions about our Terms of Use.')}
              </p>
              <a 
                href="/contact" 
                className="bg-gradient-to-r from-emerald-600 to-green-500 hover:from-emerald-700 hover:to-green-600 text-white px-8 py-3 rounded-lg font-medium transition-all duration-200 hover:shadow-lg transform hover:-translate-y-0.5"
              >
                {t('Contact Us')}
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default TermsOfService;
