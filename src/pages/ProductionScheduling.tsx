import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Cpu, BarChart3, Layers, Gauge, Palette } from "lucide-react";
import { scrollToTop } from "@/utils/navigation";
import PageSEO from "@/components/seo/PageSEO";
import { generateBreadcrumbSchema } from "@/utils/seo";
import { getCurrentOrigin } from "@/utils/domain";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const breadcrumb = generateBreadcrumbSchema([
  { name: "Home", url: `${getCurrentOrigin()}/` },
  { name: "Production Scheduling", url: `${getCurrentOrigin()}/production-scheduling` }
]);

const schema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Tracker Production Scheduling",
  description: "Advanced production scheduling for garment decoration with thread colour optimisation, order stacking, machine barcode integration, and real-time capacity planning.",
  url: `${getCurrentOrigin()}/production-scheduling`,
  applicationCategory: "BusinessApplication",
  applicationSubCategory: "Production Scheduling Software",
  operatingSystem: "Web Browser",
  featureList: [
    "Thread colour optimisation",
    "Order stacking & batching",
    "Machine barcode integration",
    "Real-time capacity planning",
    "Barudan/Tajima machine push",
    "DTG/DTF queue management",
    "Screen printing scheduling",
    "Time tracking & efficiency metrics"
  ]
};

const ProductionScheduling = () => {
  return (
    <>
      <PageSEO
        seo={{
          title: "Production Scheduling for Embroidery, DTG & Screen Printing | Thread Optimisation",
          description: "Optimise garment decoration production with thread colour batching, order stacking, barcode-to-machine pushes (Barudan, Tajima, DTG/DTF printers) & real-time capacity planning.",
          keywords: "production scheduling for embroidery, thread colour optimisation, order stacking, machine barcode integration, Barudan scheduling, Tajima production, DTG queue management, garment decoration scheduling, screen printing workflow",
          canonical: `${getCurrentOrigin()}/production-scheduling`
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
                  <span className="text-sm text-gold uppercase font-medium tracking-wider">Production Scheduling</span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground leading-tight">
                  Smarter Scheduling. <span className="text-gold-gradient">More Output. Less Waste.</span>
                </h1>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Tracker's production scheduler groups orders by thread colour, stacks compatible jobs, and pushes designs directly to your embroidery heads, DTG printers, and screen-burn units — all driven by barcode scanning. The result: fewer changeovers, higher throughput, and tighter delivery windows.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link to="/get-started" onClick={scrollToTop}><Button variant="gold" size="lg">Get Started <ArrowRight className="ml-2 h-5 w-5" /></Button></Link>
                  <Link to="/contact" onClick={scrollToTop}><Button variant="outline" size="lg">Request a Demo</Button></Link>
                </div>
              </div>
              <div className="flex justify-center">
                <img src="/lovable-uploads/d42f1f67-bb61-4af4-bf00-41e4dd3055e8.png" alt="Tracker Production Scheduling dashboard showing order stacking and thread optimisation" className="w-full max-w-md rounded-xl shadow-2xl border border-border" loading="lazy" />
              </div>
            </div>
          </div>
        </section>

        {/* Key Capabilities */}
        <ScrollReveal>
          <section className="py-20 px-4 bg-muted/30">
            <div className="container mx-auto max-w-6xl">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">Built for Garment Decoration Production</h2>
              <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-12">
                Generic scheduling tools don't understand thread changes, head counts, or print queues. Tracker was purpose-built for embroidery, DTG, DTF, screen printing, and heat-seal operations.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { icon: <Palette className="h-8 w-8 text-gold" />, title: "Thread Colour Optimisation", desc: "Tracker analyses upcoming jobs and groups them by thread palette. Orders sharing the same colour runs are batched together, slashing changeover time by up to 40%. The scheduler considers needle positions, bobbin thread, and backing material." },
                  { icon: <Layers className="h-8 w-8 text-gold" />, title: "Order Stacking & Batching", desc: "Combine multiple small orders onto the same hoop run. Tracker calculates garment placement, stitch sequence, and trim points so operators can decorate more pieces per cycle without quality loss." },
                  { icon: <Cpu className="h-8 w-8 text-gold" />, title: "Barcode → Machine Push", desc: "Scan a production barcode and Tracker delivers the design file, thread chart, and run parameters directly to the target machine — Barudan (bNET), Tajima (Pulse), DTG printers, DTF transfer systems, screen-burn units, and heat-seal presses." }
                ].map((item, i) => (
                  <div key={i} className="bg-card border border-border rounded-xl p-8 hover:border-gold/50 transition-all">
                    <div className="mb-4">{item.icon}</div>
                    <h3 className="text-xl font-semibold mb-3 text-foreground">{item.title}</h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* Deep Dive */}
        <ScrollReveal>
          <section className="py-20 px-4">
            <div className="container mx-auto max-w-6xl">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">Advanced Scheduling Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  { icon: <Clock className="h-6 w-6" />, title: "Time Tracking & Labour Costing", desc: "Operators clock on and off each job via barcode scan. Tracker captures actual run times, compares them to estimated times, and feeds the data back into your quoting engine so future quotes are more accurate." },
                  { icon: <BarChart3 className="h-6 w-6" />, title: "Machine Efficiency Dashboards", desc: "Real-time views of head utilisation, downtime reasons, stitch counts per hour, and job completion rates. Identify bottlenecks before they delay shipments and benchmark performance across shifts." },
                  { icon: <Gauge className="h-6 w-6" />, title: "Capacity Planning", desc: "See available capacity across all decoration methods — embroidery heads, DTG platens, screen stations, heat presses — and slot incoming orders into the earliest feasible window. Tracker flags overcommitments before you accept the order." },
                  { icon: <Layers className="h-6 w-6" />, title: "QA Routing & Rework Tracking", desc: "Define quality checkpoints between production stages. If a piece fails QA, Tracker creates a rework ticket, re-queues the item, and adjusts the production schedule automatically so nothing slips through." }
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

        {/* Supported Machines */}
        <ScrollReveal>
          <section className="py-20 px-4 bg-muted/30">
            <div className="container mx-auto max-w-4xl">
              <h2 className="text-3xl font-bold text-center mb-8 text-foreground">Machines & Equipment We Integrate With</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {["Barudan (bNET)", "Tajima (Pulse)", "Brother DTG", "Epson DTG/DTF", "Kornit DTG", "M&R Screen Presses", "ROQ Presses", "Heat-Seal Presses"].map((machine, i) => (
                  <div key={i} className="bg-card border border-border rounded-lg p-4 text-center text-foreground font-medium text-sm hover:border-gold/50 transition-all">{machine}</div>
                ))}
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* Related Pages */}
        <ScrollReveal>
          <section className="py-16 px-4">
            <div className="container mx-auto max-w-6xl">
              <h2 className="text-2xl font-bold text-center mb-8 text-foreground">Related Capabilities</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { to: "/logo-management", title: "Cloud Logo Management", desc: "Centralise EMB, DST & print files in one searchable cloud vault." },
                  { to: "/proof-approvals", title: "Digital Proof Approvals", desc: "Get customer sign-off before production starts." },
                  { to: "/integrations", title: "ERP & Shipping Integrations", desc: "Connect Tracker to your existing business systems." }
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">See How Much More You Can Produce</h2>
            <p className="text-muted-foreground mb-8">Book a demo to see thread-colour batching, barcode-to-machine pushes, and real-time capacity planning in action.</p>
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

export default ProductionScheduling;
