

## SEO Optimization Plan for Garment Decoration Software

This is a large, content-heavy update touching SEO metadata, on-page headings, keyword integration, and robots.txt across the entire site. I'll break it into clear phases.

---

### Phase 1: Update Core SEO Data (`src/data/seoData.ts`)

Rewrite all page SEO objects with garment-decoration-specific keywords:

| Page | New Title | New Meta Description (≤160 chars) |
|------|-----------|----------------------------------|
| **Home** | `Tracker: Cloud-Based Garment Decoration Software for Embroidery, DTG, DTF & Team Gear` | `Streamline garment decoration with Tracker. Manage logos, proofs, production scheduling & machine integrations for embroidery, DTG, DTF, screen printing & team gear.` |
| **Pricing** | `Pricing - Cloud Garment Decoration Software for Embroidery, DTG & DTF` | `Flexible pricing for Tracker's cloud garment decoration platform. Plans for embroidery shops, DTG/DTF printers, screen printers & licensed team gear operations.` |
| **About** | `About Tracker - Cloud Logo Management & Production Scheduling Software` | `Learn how Tracker helps garment decorators manage embroidery logos, DTG/DTF production, digital proofs & PLM integrations from a single cloud platform.` |
| **Contact** | `Contact Us - Garment Decoration Software Support & Sales` | `Get in touch for demos, support, or questions about Tracker's embroidery logo software, DTG printing management, production scheduling & ERP integrations.` |
| **Industries** | `Industries - Garment Decoration Software for Embroidery, Screen Printing & DTG` | `See how Tracker serves embroidery shops, screen printers, DTG/DTF operations, licensed team gear companies & apparel manufacturers with cloud production tools.` |
| **Modules** | `Software Modules - Logo Management, Production Scheduling & Proof Approvals` | `Explore Tracker modules: embroidery logo management, DTG/DTF tracking, digital proof approvals, production scheduling, PLM garment integrations & more.` |
| **Blog** | `Blog - Garment Decoration Tips, DTG/DTF Insights & Embroidery Best Practices` | `Industry insights on garment decoration software, embroidery production, DTG printing, DTF transfers, screen printing workflows & team gear customization.` |
| **Support** | `Support - Help for Garment Decoration & Embroidery Software` | `Get help with Tracker's garment decoration platform. FAQs, tutorials & support for logo management, production scheduling, proof approvals & integrations.` |

Update all `keywords` fields to include the high-volume terms: `garment decoration software`, `DTG printing management`, `DTF transfer tracking`, `embroidery logo software`, `screen printing workflow`, `heat seal production`, `licensed team gear ordering`, `team gear customization`, `cloud logo management`, `production scheduling for embroidery`, `digital proof approvals`, `PLM garment integrations`.

Update `industryPagesSEO` entries and `generateModuleSEO` to append decoration-specific keywords.

Update FAQ schema answers to reference DTG, DTF, embroidery, screen printing, heat seal, and licensed team gear.

---

### Phase 2: Update `src/utils/seo.ts`

- Change `defaultSEO.title` to reference Tracker as cloud garment decoration software
- Update `organizationSchema` description, keywords, and `applicationCategory` to reflect garment decoration focus
- Update `organizationSchema.name` and social URLs if needed

---

### Phase 3: Update `src/config/seo.config.ts`

- Update `businessDescription` to: `"Cloud-based garment decoration software for embroidery, DTG, DTF, screen printing, heat seal & licensed team gear production management"`

---

### Phase 4: Update Hero Content (`src/components/landing/hero/HeroContent.tsx`)

- Update H1 to: `"Cloud-Based Software for"` + gold span `"Embroidery, DTG, DTF & Team Gear"`
- Update subtitle to naturally include keywords: logo management, digital proof approvals, production scheduling, machine integrations
- Update trust indicators to reference DTG/DTF/embroidery/screen printing

---

### Phase 5: Update Features Section (`src/components/landing/features/FeaturesSection.tsx`)

- Update section heading to include "Garment Decoration Software" naturally
- Update feature card descriptions to reference: DTG printing management, DTF transfer tracking, screen printing workflow, heat seal production, embroidery logo software
- Update Logo Management section text to include keywords: cloud logo management, embroidery and print separation files, barcode integrations

---

### Phase 6: Update Module Pages with SEO Props

Update `ModuleLayout` calls in key module pages to pass richer `seoKeywords`:

- **Logos** → title: "Logo Management for Embroidery and Print Files", keywords include `embroidery logo software`, `cloud logo management`, `print separation files`
- **Production** → title: "Production Scheduling for Embroidery, DTG & DTF", keywords include `production scheduling for embroidery`, `thread color optimization`, `barcode integrations`
- **Customer Portal** → title: "Digital Proof Approvals & Customer Portal", keywords include `digital proof approvals`, `quick proof creation`

---

### Phase 7: Update `robots.txt`

Replace `tracker-systems.com` references with `trackmybusiness.us` (or make dynamic). Update sitemap URL to match.

---

### Phase 8: Update `public/sitemap.xml`

Ensure all module pages, industry pages, and key feature pages are listed with proper `<lastmod>` dates and `<priority>` values.

---

### Files Modified

| File | Change |
|------|--------|
| `src/data/seoData.ts` | Rewrite all SEO objects with garment decoration keywords |
| `src/utils/seo.ts` | Update defaults, org schema, keywords |
| `src/config/seo.config.ts` | Update business description |
| `src/components/landing/hero/HeroContent.tsx` | Update H1, subtitle, trust indicators |
| `src/components/landing/features/FeaturesSection.tsx` | Update headings and descriptions |
| `src/pages/modules/Logos.tsx` | Update title, description, seoKeywords |
| `src/pages/modules/Production.tsx` | Update title, description, seoKeywords |
| `src/pages/modules/CustomerPortal.tsx` | Update title, description, seoKeywords |
| `public/robots.txt` | Fix domain references |
| `public/sitemap.xml` | Verify all pages listed |

No new routes or pages are created in this phase -- this focuses purely on optimizing existing on-page SEO elements across the site.

