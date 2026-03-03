import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageSquare, Eye, FileCheck, Send, CheckCircle, X, TrendingUp, AlertTriangle, Clock, Shield } from "lucide-react";
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
    "Licensed team gear compliance routing"
  ]
};

const ProofApprovals = () => {
  return (
    <>
      <PageSEO
        seo={{
          title: "Digital Proof Approvals for Garment Decoration | Comments & Version Tracking",
          description: "Streamline customer proof approvals with Tracker. Send digital proofs, collect comments, track versions & auto-release to production. Built for embroidery & DTG.",
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
                  Stop chasing emails and phone calls for proof sign-off. Tracker generates professional digital proofs from your <Link to="/logo-management" className="text-gold hover:underline">cloud logo library</Link>, sends them to customers via email or portal, and captures approvals, comments, and change requests in one auditable thread. When the customer clicks "Approve", the job auto-releases to <Link to="/production-scheduling" className="text-gold hover:underline">production scheduling</Link> with the approved file version locked. For licensed team gear and corporate apparel, multi-stakeholder routing ensures compliance officers and brand managers sign off before production begins.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link to="/get-started" onClick={scrollToTop}><Button variant="gold" size="lg">Get Started <ArrowRight className="ml-2 h-5 w-5" /></Button></Link>
                  <Link to="/contact" onClick={scrollToTop}><Button variant="outline" size="lg">Request a Demo</Button></Link>
                </div>
              </div>
              <div className="flex justify-center">
                <img src="/lovable-uploads/5a59d4b9-43ac-485e-830d-ee80fc2e0905.png" alt="Tracker digital proof approval interface showing customer comments and version comparison for embroidery artwork" className="w-full max-w-md rounded-xl shadow-2xl border border-border" loading="lazy" />
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
                Every day a proof sits unapproved is a day your production line can't start. For licensed team gear, school uniforms, and corporate apparel — where deadlines are non-negotiable — delayed proofs cascade into overtime, expedited shipping, and unhappy customers. Industry data shows that manual proof approval processes average 3.2 days per cycle, while Tracker users complete approvals in under 4 hours.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { icon: <Send className="h-7 w-7 text-gold" />, title: "One-Click Proofs", desc: "Generate a proof from the logo library with placement views, thread charts, garment mockups, and decoration specs. Send via email or customer portal instantly. Proofs render beautifully on mobile, tablet, and desktop." },
                  { icon: <MessageSquare className="h-7 w-7 text-gold" />, title: "Threaded Comments", desc: "Customers annotate directly on the proof image — pinpoint placement adjustments, colour corrections, or sizing changes. Your team responds in-thread. Every exchange is timestamped, linked to the order, and archived." },
                  { icon: <Eye className="h-7 w-7 text-gold" />, title: "Version Comparison", desc: "Side-by-side or overlay views let customers compare revisions. Clear visual diff with highlighted changes reduces confusion, re-revision cycles, and 'I didn't see the difference' disputes." },
                  { icon: <FileCheck className="h-7 w-7 text-gold" />, title: "Auto Production Release", desc: "When the customer clicks 'Approved', Tracker locks the file version, releases the job to production scheduling, and notifies the floor supervisor. The audit trail records who approved, when, and which version." }
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

        {/* Workflow Diagram */}
        <ScrollReveal>
          <section className="py-20 px-4">
            <div className="container mx-auto max-w-4xl">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">The Proof Approval Workflow</h2>
              <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
                From proof creation to production release in four streamlined steps. Each step is tracked, timestamped, and auditable.
              </p>
              <div className="space-y-8">
                {[
                  { step: "1", title: "Create the Proof", desc: "Select a logo from the cloud library, choose a garment mockup (polo, hoodie, cap, bag), position the decoration, and add thread-colour or ink details. Tracker generates a high-resolution proof as an interactive web proof or downloadable PDF. For embroidery, stitch counts and needle assignments are displayed. For DTG/DTF, colour gamut and print-area dimensions are shown." },
                  { step: "2", title: "Send for Approval", desc: "Email the proof to your customer with a unique approval link, or notify them via the customer portal. For licensed team gear, configure multi-stakeholder routing: the coach approves placement, the league compliance officer verifies logo usage rights, and the purchasing manager confirms quantities — all in sequence or parallel." },
                  { step: "3", title: "Collect Feedback", desc: "The customer reviews the proof on any device — desktop, tablet, or phone. They can zoom into stitch detail, annotate specific areas, and leave threaded comments. If changes are needed, your artwork team revises and re-sends a new version without leaving Tracker. Version history shows every iteration side-by-side." },
                  { step: "4", title: "Approve & Produce", desc: "One click on 'Approve' locks the file version, triggers the production schedule, and notifies the floor supervisor. The approved design file is ready for barcode-triggered delivery to the embroidery machine, DTG printer, or screen-burn unit. The audit trail protects you in disputes — you can prove exactly what was approved, by whom, and when." }
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

        {/* Case Study: Licensed Team Gear */}
        <ScrollReveal>
          <section className="py-20 px-4 bg-muted/30">
            <div className="container mx-auto max-w-4xl">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">Case Study: Licensed Team Gear Approvals</h2>
              <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-12">
                A sports-apparel decorator processing 500+ orders per month for school and recreational leagues needed a way to satisfy league compliance requirements while keeping production on schedule.
              </p>
              <div className="bg-card border border-border rounded-xl p-8 md:p-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2"><AlertTriangle className="h-5 w-5 text-red-400" /> Before Tracker</h3>
                    <ul className="space-y-3 text-muted-foreground text-sm">
                      <li className="flex gap-2"><X className="h-4 w-4 text-red-400 flex-shrink-0 mt-0.5" /> Proofs emailed as PDF attachments — lost in inboxes</li>
                      <li className="flex gap-2"><X className="h-4 w-4 text-red-400 flex-shrink-0 mt-0.5" /> Approval tracked via spreadsheet with manual date entry</li>
                      <li className="flex gap-2"><X className="h-4 w-4 text-red-400 flex-shrink-0 mt-0.5" /> Average approval cycle: 3.5 days</li>
                      <li className="flex gap-2"><X className="h-4 w-4 text-red-400 flex-shrink-0 mt-0.5" /> 6% reprint rate from unapproved or wrong-version production</li>
                      <li className="flex gap-2"><X className="h-4 w-4 text-red-400 flex-shrink-0 mt-0.5" /> League compliance disputes with no audit trail</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2"><TrendingUp className="h-5 w-5 text-green-500" /> After Tracker</h3>
                    <ul className="space-y-3 text-muted-foreground text-sm">
                      <li className="flex gap-2"><CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" /> Interactive web proofs with mobile-friendly approval</li>
                      <li className="flex gap-2"><CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" /> Multi-stakeholder routing: coach → compliance → purchasing</li>
                      <li className="flex gap-2"><CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" /> Average approval cycle: 3.8 hours</li>
                      <li className="flex gap-2"><CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" /> Reprint rate dropped to 0.4% — auto version-locking</li>
                      <li className="flex gap-2"><CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" /> Full audit trail satisfies league compliance in minutes</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* Use Cases */}
        <ScrollReveal>
          <section className="py-20 px-4">
            <div className="container mx-auto max-w-6xl">
              <h2 className="text-3xl font-bold text-center mb-8 text-foreground">Who Uses Tracker Proof Approvals?</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { icon: <Shield className="h-6 w-6 text-gold" />, title: "Licensed Team Gear", desc: "Leagues and licensors require exact logo placement, colour matching (PMS or thread-chart), and written approval before production. Tracker's audit trail with timestamped approvals, version history, and stakeholder sign-off satisfies compliance requirements for NFL, NBA, MLB, NHL, NCAA, and school-league licensing." },
                  { icon: <Clock className="h-6 w-6 text-gold" />, title: "Corporate Apparel Programs", desc: "Brand managers approve uniforms, event merchandise, and promotional items across multiple locations — all from a single dashboard with role-based permissions. Proofs are routed through brand-compliance teams before production release, ensuring Pantone accuracy and logo-placement standards are met." },
                  { icon: <TrendingUp className="h-6 w-6 text-gold" />, title: "Embroidery & DTG Shops", desc: "Small and mid-size shops eliminate phone-tag and email chains. Customers approve on their phone in minutes, and the job hits the production queue the same day. Comments are threaded on the proof image, so there's no ambiguity about what the customer wants changed." }
                ].map((item, i) => (
                  <div key={i} className="bg-card border border-border rounded-xl p-8 hover:border-gold/50 transition-all">
                    <div className="mb-3">{item.icon}</div>
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
          <section className="py-16 px-4 bg-muted/30">
            <div className="container mx-auto max-w-6xl">
              <h2 className="text-2xl font-bold text-center mb-8 text-foreground">Related Capabilities</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { to: "/logo-management", title: "Cloud Logo Management", desc: "The cloud logo library that powers your proof generation and version control." },
                  { to: "/production-scheduling", title: "Production Scheduling", desc: "Auto-release approved jobs into optimised production runs with barcode-to-machine delivery." },
                  { to: "/modules/customer-portal", title: "Customer Portal", desc: "Self-service ordering and proof approvals for your customers with role-based access." }
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
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-3xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Eliminate Proof Delays Today</h2>
            <p className="text-muted-foreground mb-8">See how Tracker compresses approval cycles from days to hours — and auto-releases approved jobs to your production floor with the correct file version locked.</p>
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
