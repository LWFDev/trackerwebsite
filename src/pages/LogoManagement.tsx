import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle, Cloud, FileImage, ArrowRight, Shield, Zap, Users, Monitor, X, AlertTriangle, TrendingUp } from "lucide-react";
import { scrollToTop } from "@/utils/navigation";
import PageSEO from "@/components/seo/PageSEO";
import { generateBreadcrumbSchema } from "@/utils/seo";
import { getCurrentOrigin } from "@/utils/domain";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const logoManagementBreadcrumb = generateBreadcrumbSchema([
  { name: "Home", url: `${getCurrentOrigin()}/` },
  { name: "Logo Management", url: `${getCurrentOrigin()}/logo-management` }
]);

const logoManagementSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Tracker Cloud Logo Management",
  description: "Cloud-based logo management software for embroidery (EMB/DST) and print separation files with version control, digital proofs, and machine integration.",
  url: `${getCurrentOrigin()}/logo-management`,
  applicationCategory: "BusinessApplication",
  applicationSubCategory: "Logo & Artwork Management",
  operatingSystem: "Web Browser",
  featureList: [
    "Cloud-based EMB/DST file storage",
    "Print separation file management",
    "Version control & audit trail",
    "Digital proof creation",
    "Customer logo portals",
    "Machine-ready file delivery",
    "Barcode-triggered logo retrieval",
    "Multi-format support (EMB, DST, PES, EXP, JEF)"
  ],
  offers: { "@type": "Offer", availability: "https://schema.org/InStock", priceCurrency: "USD" }
};

const LogoManagement = () => {
  return (
    <>
      <PageSEO
        seo={{
          title: "Cloud Logo Management for Embroidery & DTG Shops | EMB, DST & Print Files",
          description: "Manage embroidery files (EMB, DST), print separations & artwork in the cloud. Version control, digital proofs, barcode retrieval & machine-ready delivery.",
          keywords: "cloud logo management, embroidery logo software, EMB file management, DST file storage, print separation files, embroidery artwork management, logo version control, digital proof approvals, garment decoration software",
          canonical: `${getCurrentOrigin()}/logo-management`
        }}
        breadcrumbs={logoManagementBreadcrumb}
        extraSchema={logoManagementSchema}
      />

      <main className="min-h-screen bg-background">
        {/* Hero */}
        <section className="pt-32 md:pt-36 pb-20 px-4 bg-gradient-to-b from-background via-emerald-950/10 to-background">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block px-4 py-1.5 bg-gold/10 rounded-full border border-gold/20 mb-6">
                  <span className="text-sm text-gold uppercase font-medium tracking-wider">Cloud Logo Management</span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground leading-tight">
                  Every Logo, Every Format, <span className="text-gold-gradient">One Cloud Platform</span>
                </h1>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Store, organise, and deliver embroidery files (EMB, DST, PES, EXP, JEF), print separations, and digital artwork from a single cloud hub. Tracker eliminates lost files, wrong versions, and manual searching — so your team always grabs the right logo in seconds. Whether you run a five-head embroidery shop or a multi-location enterprise with thousands of customer logos across embroidery, DTG, DTF, and screen printing, Tracker scales with you.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link to="/get-started" onClick={scrollToTop}>
                    <Button variant="gold" size="lg">Get Started <ArrowRight className="ml-2 h-5 w-5" /></Button>
                  </Link>
                  <Link to="/contact" onClick={scrollToTop}>
                    <Button variant="outline" size="lg">Request a Demo</Button>
                  </Link>
                </div>
              </div>
              <div className="flex justify-center">
                <img src="/lovable-uploads/9ed005ea-9015-43b6-b721-149fd7e96dc3.png" alt="Tracker cloud logo management module showing EMB and DST file organisation for embroidery shops" className="w-full max-w-md rounded-xl shadow-2xl border border-border" loading="lazy" />
              </div>
            </div>
          </div>
        </section>

        {/* Problem / Solution */}
        <ScrollReveal>
          <section className="py-20 px-4 bg-muted/30">
            <div className="container mx-auto max-w-6xl">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">Why Garment Decorators Struggle with Logo Files</h2>
              <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-12">
                The average embroidery or DTG shop manages thousands of customer logos across dozens of formats. Without a purpose-built system, files get lost in shared drives, operators stitch the wrong version, and reprints eat into margins. According to industry surveys, embroidery shops lose an average of 3–5% of annual revenue to wrong-version reprints and misplaced files. Tracker solves this with a centralised, searchable, version-controlled cloud vault purpose-built for garment decoration workflows.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { icon: <Cloud className="h-8 w-8 text-gold" />, title: "Centralised Cloud Storage", desc: "Every EMB, DST, PES, and print-separation file lives in one searchable cloud vault. No more digging through folders, USB sticks, or email attachments. Tag logos by customer, decoration method, stitch count, thread palette, and garment type for instant retrieval." },
                  { icon: <Shield className="h-8 w-8 text-gold" />, title: "Version Control & Audit Trail", desc: "Track every revision with automatic version history. Know who changed what, when, and why — and roll back instantly if a customer requests an older version. The audit trail satisfies licensed team-gear compliance requirements from leagues and licensors." },
                  { icon: <Zap className="h-8 w-8 text-gold" />, title: "Barcode-Triggered Retrieval", desc: "Scan a job barcode and Tracker delivers the correct logo file directly to your Barudan bNET, Tajima Pulse, DTG printer, or DTF transfer system — no manual lookup required. Operators never touch a file explorer again." }
                ].map((item, i) => (
                  <div key={i} className="bg-card border border-border rounded-xl p-8 hover:border-gold/50 transition-all duration-300">
                    <div className="mb-4">{item.icon}</div>
                    <h3 className="text-xl font-semibold mb-3 text-foreground">{item.title}</h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* Competitor Comparison */}
        <ScrollReveal>
          <section className="py-20 px-4">
            <div className="container mx-auto max-w-6xl">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">Tracker vs. Generic File Storage</h2>
              <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-12">
                Dropbox, Google Drive, and even legacy digitising software can hold files — but none understand the garment decoration workflow. Here's how Tracker's purpose-built logo management compares to generic alternatives.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="py-4 px-6 text-foreground font-semibold">Capability</th>
                      <th className="py-4 px-6 text-gold font-semibold">Tracker</th>
                      <th className="py-4 px-6 text-muted-foreground font-semibold">Shared Drives / Dropbox</th>
                      <th className="py-4 px-6 text-muted-foreground font-semibold">Legacy Digitising Software</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    {[
                      ["EMB/DST format awareness", true, false, true],
                      ["Customer-logo tagging", true, false, false],
                      ["Auto version control", true, false, false],
                      ["Barcode → machine delivery", true, false, false],
                      ["Digital proof generation", true, false, false],
                      ["Customer self-service portal", true, false, false],
                      ["Print-separation file support", true, true, false],
                      ["Thread-palette indexing", true, false, true],
                      ["Multi-decoration-method aware", true, false, false],
                      ["Audit trail for compliance", true, false, false],
                    ].map(([feature, tracker, drives, legacy], i) => (
                      <tr key={i} className="border-b border-border/50">
                        <td className="py-3 px-6 text-foreground">{feature as string}</td>
                        <td className="py-3 px-6">{tracker ? <CheckCircle className="h-5 w-5 text-green-500" /> : <X className="h-5 w-5 text-red-400" />}</td>
                        <td className="py-3 px-6">{drives ? <CheckCircle className="h-5 w-5 text-green-500" /> : <X className="h-5 w-5 text-red-400" />}</td>
                        <td className="py-3 px-6">{legacy ? <CheckCircle className="h-5 w-5 text-green-500" /> : <X className="h-5 w-5 text-red-400" />}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* Detailed Features */}
        <ScrollReveal>
          <section className="py-20 px-4 bg-muted/30">
            <div className="container mx-auto max-w-6xl">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">Complete Logo Lifecycle Management</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  { icon: <FileImage className="h-6 w-6" />, title: "Multi-Format Support", desc: "Store embroidery formats (EMB, DST, PES, EXP, JEF, XXX), print-ready files (AI, EPS, PDF, PSD), and separation files for screen printing — all tagged to the customer and logo name. Tracker auto-detects file type on upload and indexes stitch counts, colour palettes, and hoop sizes for embroidery files." },
                  { icon: <Monitor className="h-6 w-6" />, title: "Digital Proof Creation", desc: "Generate professional digital proofs with logo placement mockups, thread-colour swatches, and stitch counts. Send proofs for customer approval with one click — comments and approvals tracked in-app. Proofs render on mobile, tablet, and desktop so customers approve anywhere." },
                  { icon: <Users className="h-6 w-6" />, title: "Customer Logo Portals", desc: "Give customers secure self-service access to their logo library. They can browse approved artwork, request new logos, and reorder decorated products — reducing your admin workload by up to 60%. Portal access is role-based so brand managers control which logos are available." },
                  { icon: <CheckCircle className="h-6 w-6" />, title: "Machine-Ready Delivery", desc: "Push logo files to embroidery machines (Barudan bNET, Tajima Pulse), DTG printers, DTF transfer systems, and screen-burn units via barcode scanning — zero manual file transfers. The file arrives at the machine with the correct needle settings, thread sequence, and hoop configuration pre-loaded." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-6 bg-card border border-border rounded-xl hover:border-gold/50 transition-all">
                    <div className="flex-shrink-0 w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center text-gold">{item.icon}</div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-foreground">{item.title}</h3>
                      <p className="text-muted-foreground text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* Case Study: Licensed Team Gear */}
        <ScrollReveal>
          <section className="py-20 px-4">
            <div className="container mx-auto max-w-4xl">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">Real-World Example: Licensed Team Gear Logo Management</h2>
              <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-12">
                A mid-size decorator managing 200+ licensed sports logos for school and recreational leagues faced constant compliance issues — the wrong logo version on a team jersey meant costly reprints and league fines.
              </p>
              <div className="bg-card border border-border rounded-xl p-8 md:p-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2"><AlertTriangle className="h-5 w-5 text-red-400" /> Before Tracker</h3>
                    <ul className="space-y-3 text-muted-foreground text-sm">
                      <li className="flex gap-2"><X className="h-4 w-4 text-red-400 flex-shrink-0 mt-0.5" /> Logos stored in nested folders by team name — new staff couldn't find files</li>
                      <li className="flex gap-2"><X className="h-4 w-4 text-red-400 flex-shrink-0 mt-0.5" /> No version control — operators sometimes stitched last season's logo</li>
                      <li className="flex gap-2"><X className="h-4 w-4 text-red-400 flex-shrink-0 mt-0.5" /> Manual file transfer to Tajima machines via USB</li>
                      <li className="flex gap-2"><X className="h-4 w-4 text-red-400 flex-shrink-0 mt-0.5" /> 4.2% reprint rate due to wrong-version errors</li>
                      <li className="flex gap-2"><X className="h-4 w-4 text-red-400 flex-shrink-0 mt-0.5" /> League compliance audits took 2+ days to prepare</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2"><TrendingUp className="h-5 w-5 text-green-500" /> After Tracker</h3>
                    <ul className="space-y-3 text-muted-foreground text-sm">
                      <li className="flex gap-2"><CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" /> All logos in searchable cloud vault, tagged by team, league, and season</li>
                      <li className="flex gap-2"><CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" /> Auto-version control with approval-locked current version</li>
                      <li className="flex gap-2"><CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" /> Barcode scan delivers correct file to Tajima Pulse instantly</li>
                      <li className="flex gap-2"><CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" /> Reprint rate dropped to 0.3%</li>
                      <li className="flex gap-2"><CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" /> Compliance audits completed in 2 hours with exported audit trail</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* How It Works */}
        <ScrollReveal>
          <section className="py-20 px-4 bg-muted/30">
            <div className="container mx-auto max-w-4xl">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">How Tracker's Logo Management Works</h2>
              <div className="space-y-8">
                {[
                  { step: "1", title: "Upload & Tag", desc: "Drag-and-drop logo files into Tracker. The system auto-detects format (EMB, DST, PES, AI, EPS, PSD), assigns to the correct customer, and indexes by logo name, stitch count, colour palette, hoop size, and decoration method. Bulk-import tools handle migrations from existing file servers." },
                  { step: "2", title: "Proof & Approve", desc: "Create digital proofs with placement views, thread charts, and garment mockups. Email or portal-share with the customer. They approve, request changes, or add comments — all tracked with timestamps. For licensed team gear, route proofs through the league compliance officer before production." },
                  { step: "3", title: "Produce & Deliver", desc: "When production starts, the operator scans the job barcode. Tracker pushes the approved logo file directly to the Barudan bNET embroidery head, Tajima Pulse queue, DTG printer, or screen-burn unit. The file arrives with pre-configured needle assignments and thread sequences — no searching, no wrong versions." },
                  { step: "4", title: "Archive & Reuse", desc: "Completed logos are archived with full production history including actual run times, stitch counts, and QA results. When the customer reorders, the exact same file — with proven settings — is retrieved instantly. Seasonal updates create new versions while preserving the archive." }
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

        {/* Internal Links */}
        <ScrollReveal>
          <section className="py-16 px-4">
            <div className="container mx-auto max-w-6xl">
              <h2 className="text-2xl font-bold text-center mb-8 text-foreground">Related Capabilities</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { to: "/proof-approvals", title: "Digital Proof Approvals", desc: "Streamline customer approvals with threaded comments and version tracking." },
                  { to: "/production-scheduling", title: "Production Scheduling", desc: "Optimise thread colours and stack orders for maximum machine efficiency." },
                  { to: "/integrations", title: "Machine & PLM Integrations", desc: "Barcode-driven file delivery to Barudan, Tajima, DTG & DTF equipment." }
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Ready to Centralise Your Logo Library?</h2>
            <p className="text-muted-foreground mb-8">Join hundreds of garment decorators who eliminated lost files and wrong-version reprints with Tracker's cloud logo management. Book a demo to see barcode-triggered retrieval, version control, and customer portals in action.</p>
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

export default LogoManagement;
