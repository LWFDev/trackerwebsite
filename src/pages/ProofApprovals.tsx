import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageSquare, Eye, FileCheck, Send } from "lucide-react";
import { scrollToTop } from "@/utils/navigation";
import PageSEO from "@/components/seo/PageSEO";
import { generateBreadcrumbSchema } from "@/utils/seo";
import { getCurrentOrigin } from "@/utils/domain";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const breadcrumb = generateBreadcrumbSchema([
  { name: "Home", url: `${getCurrentOrigin()}/` },
  { name: "Digital Proof Approvals", url: `${getCurrentOrigin()}/proof-approvals` }
]);

const schema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Tracker Digital Proof Approvals",
  description: "Digital proof approval software for garment decoration with customer comments, version tracking, and automated production release.",
  url: `${getCurrentOrigin()}/proof-approvals`,
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web Browser",
  featureList: [
    "One-click proof generation",
    "Customer comment threads",
    "Version comparison view",
    "Automated production release on approval",
    "Email & portal notifications",
    "Mobile-friendly approval interface",
    "Approval audit trail",
    "Integration with logo management"
  ]
};

const ProofApprovals = () => {
  return (
    <>
      <PageSEO
        seo={{
          title: "Digital Proof Approvals for Garment Decoration | Comments & Version Tracking",
          description: "Streamline customer proof approvals with Tracker. Send digital proofs, collect comments, track versions & auto-release to production on approval. Built for embroidery, DTG & screen printing.",
          keywords: "digital proof approvals, garment decoration proofs, customer artwork approval, proof comments, version tracking, embroidery proof software, DTG proof approval, screen printing proofs, licensed team gear approvals",
          canonical: `${getCurrentOrigin()}/proof-approvals`
        }}
        breadcrumbs={breadcrumb}
        extraSchema={schema}
      />

      <main className="min-h-screen bg-background">
        {/* Hero */}
        <section className="pt-32 md:pt-36 pb-20 px-4 bg-gradient-to-b from-background via-emerald-950/10 to-background">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block px-4 py-1.5 bg-gold/10 rounded-full border border-gold/20 mb-6">
                  <span className="text-sm text-gold uppercase font-medium tracking-wider">Digital Proof Approvals</span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground leading-tight">
                  Faster Approvals. <span className="text-gold-gradient">Zero Reprints.</span>
                </h1>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Stop chasing emails and phone calls for proof sign-off. Tracker generates professional digital proofs from your logo library, sends them to customers via email or portal, and captures approvals, comments, and change requests in one auditable thread. When the customer clicks "Approve", the job auto-releases to production.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link to="/get-started" onClick={scrollToTop}><Button variant="gold" size="lg">Get Started <ArrowRight className="ml-2 h-5 w-5" /></Button></Link>
                  <Link to="/contact" onClick={scrollToTop}><Button variant="outline" size="lg">Request a Demo</Button></Link>
                </div>
              </div>
              <div className="flex justify-center">
                <img src="/lovable-uploads/5a59d4b9-43ac-485e-830d-ee80fc2e0905.png" alt="Tracker digital proof approval interface with customer comments" className="w-full max-w-md rounded-xl shadow-2xl border border-border" loading="lazy" />
              </div>
            </div>
          </div>
        </section>

        {/* The Cost of Slow Approvals */}
        <ScrollReveal>
          <section className="py-20 px-4 bg-muted/30">
            <div className="container mx-auto max-w-6xl">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">The Hidden Cost of Slow Proof Approvals</h2>
              <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-12">
                Every day a proof sits unapproved is a day your production line can't start. For licensed team gear, school uniforms, and corporate apparel — where deadlines are non-negotiable — delayed proofs cascade into overtime, expedited shipping, and unhappy customers. Tracker compresses the approval cycle from days to hours.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { icon: <Send className="h-7 w-7 text-gold" />, title: "One-Click Proofs", desc: "Generate a proof from the logo library with placement views, thread charts, and decoration specs. Send via email or customer portal instantly." },
                  { icon: <MessageSquare className="h-7 w-7 text-gold" />, title: "Threaded Comments", desc: "Customers annotate directly on the proof image. Your team responds in-thread. Every exchange is timestamped and linked to the order." },
                  { icon: <Eye className="h-7 w-7 text-gold" />, title: "Version Comparison", desc: "Side-by-side or overlay views let customers compare revisions. Clear visual diff reduces confusion and re-revision cycles." },
                  { icon: <FileCheck className="h-7 w-7 text-gold" />, title: "Auto Production Release", desc: "When the customer clicks 'Approved', Tracker automatically releases the job to the production queue with the approved file version locked." }
                ].map((item, i) => (
                  <div key={i} className="bg-card border border-border rounded-xl p-6 hover:border-gold/50 transition-all">
                    <div className="mb-4">{item.icon}</div>
                    <h3 className="text-lg font-semibold mb-2 text-foreground">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* Workflow Detail */}
        <ScrollReveal>
          <section className="py-20 px-4">
            <div className="container mx-auto max-w-4xl">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">The Proof Approval Workflow</h2>
              <div className="space-y-8">
                {[
                  { step: "1", title: "Create the Proof", desc: "Select a logo from the cloud library, choose a garment mockup, position the decoration, and add thread-colour or ink details. Tracker generates a high-resolution proof PDF or interactive web proof." },
                  { step: "2", title: "Send for Approval", desc: "Email the proof to your customer with a unique approval link, or notify them via the customer portal. Licensed team-gear buyers can route proofs through internal stakeholders before final sign-off." },
                  { step: "3", title: "Collect Feedback", desc: "The customer reviews the proof on any device — desktop, tablet, or phone. They can zoom, annotate, and leave comments. If changes are needed, your team revises and re-sends without leaving Tracker." },
                  { step: "4", title: "Approve & Produce", desc: "One click on 'Approve' locks the file version, triggers the production schedule, and notifies the floor supervisor. The audit trail records who approved, when, and which version — protecting you in disputes." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-gold rounded-full flex items-center justify-center text-black font-bold text-lg">{item.step}</div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-foreground">{item.title}</h3>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* Use Cases */}
        <ScrollReveal>
          <section className="py-20 px-4 bg-muted/30">
            <div className="container mx-auto max-w-6xl">
              <h2 className="text-3xl font-bold text-center mb-8 text-foreground">Who Uses Tracker Proof Approvals?</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { title: "Licensed Team Gear", desc: "Leagues and licensors require exact logo placement, colour matching, and written approval before production. Tracker's audit trail satisfies compliance requirements." },
                  { title: "Corporate Apparel Programs", desc: "Brand managers approve uniforms, event merchandise, and promotional items across multiple locations — all from a single dashboard with role-based permissions." },
                  { title: "Embroidery & DTG Shops", desc: "Small and mid-size shops eliminate phone-tag and email chains. Customers approve on their phone in minutes, and the job hits the production queue the same day." }
                ].map((item, i) => (
                  <div key={i} className="bg-card border border-border rounded-xl p-8 hover:border-gold/50 transition-all">
                    <h3 className="text-xl font-semibold mb-3 text-foreground">{item.title}</h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* Related */}
        <ScrollReveal>
          <section className="py-16 px-4">
            <div className="container mx-auto max-w-6xl">
              <h2 className="text-2xl font-bold text-center mb-8 text-foreground">Related Capabilities</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { to: "/logo-management", title: "Cloud Logo Management", desc: "The logo library that powers your proof generation." },
                  { to: "/production-scheduling", title: "Production Scheduling", desc: "Auto-release approved jobs into optimised production runs." },
                  { to: "/modules/customer-portal", title: "Customer Portal", desc: "Self-service ordering and proof approvals for your customers." }
                ].map((link, i) => (
                  <Link key={i} to={link.to} onClick={scrollToTop} className="group">
                    <div className="bg-card border border-border rounded-xl p-6 hover:border-gold/50 transition-all h-full">
                      <h3 className="text-lg font-semibold text-foreground group-hover:text-gold transition-colors">{link.title}</h3>
                      <p className="text-muted-foreground text-sm mt-2">{link.desc}</p>
                      <span className="text-gold text-sm mt-3 inline-flex items-center">Learn more <ArrowRight className="ml-1 h-4 w-4" /></span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* CTA */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="container mx-auto max-w-3xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Eliminate Proof Delays Today</h2>
            <p className="text-muted-foreground mb-8">See how Tracker compresses approval cycles from days to hours — and auto-releases approved jobs to your production floor.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/get-started" onClick={scrollToTop}><Button variant="gold" size="lg">Get Started</Button></Link>
              <Link to="/contact" onClick={scrollToTop}><Button variant="outline" size="lg">Talk to Sales</Button></Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default ProofApprovals;
