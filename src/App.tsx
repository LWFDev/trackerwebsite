
import React, { Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import PageTransition from "./components/transitions/PageTransition";
import Layout from "./components/layout/Layout";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LocalizationProvider } from "./contexts/LocalizationContext";
import ScrollAnimationInit from "./components/ui/scroll-animation-init";

// Critical pages - load immediately
import Index from "@/pages/Index";
import NotFound from "./pages/NotFound";

// Lazy load non-critical pages
const GetStarted = React.lazy(() => import("@/pages/GetStarted"));
const Pricing = React.lazy(() => import("@/pages/Pricing"));
const Contact = React.lazy(() => import("@/pages/Contact"));
const AboutUs = React.lazy(() => import("@/pages/AboutUs"));
const Blog = React.lazy(() => import("@/pages/Blog"));
const BlogPost = React.lazy(() => import("@/pages/BlogPost"));
const FAQ = React.lazy(() => import("@/pages/FAQ"));
const TermsOfService = React.lazy(() => import("@/pages/TermsOfService"));
const PrivacyPolicy = React.lazy(() => import("@/pages/PrivacyPolicy"));
const Login = React.lazy(() => import("@/pages/Login"));
const Documentation = React.lazy(() => import("@/pages/Documentation"));
const Support = React.lazy(() => import("@/pages/Support"));
const Industries = React.lazy(() => import("@/pages/Industries"));
const CaseStudies = React.lazy(() => import("@/pages/CaseStudies"));

// Module pages - lazy loaded
const ModuleIndex = React.lazy(() => import("@/pages/modules/ModuleIndex"));
const SalesOrders = React.lazy(() => import("@/pages/modules/SalesOrders"));
const Warehouse = React.lazy(() => import("@/pages/modules/Warehouse"));
const CustomerDatabase = React.lazy(() => import("@/pages/modules/CustomerDatabase"));
const BaseGarments = React.lazy(() => import("@/pages/modules/BaseGarments"));
const Logos = React.lazy(() => import("@/pages/modules/Logos"));
const ProductDesigner = React.lazy(() => import("@/pages/modules/ProductDesigner"));
const Inventory = React.lazy(() => import("@/pages/modules/Inventory"));
const Production = React.lazy(() => import("@/pages/modules/Production"));
const Suppliers = React.lazy(() => import("@/pages/modules/Suppliers"));
const PurchaseOrders = React.lazy(() => import("@/pages/modules/PurchaseOrders"));
const Artworkers = React.lazy(() => import("@/pages/modules/Artworkers"));
const CustomerPortal = React.lazy(() => import("@/pages/modules/CustomerPortal"));

// Case study pages - lazy loaded
const PureOptical = React.lazy(() => import("@/pages/case-studies/PureOptical"));
const WoolCool = React.lazy(() => import("@/pages/case-studies/WoolCool"));
const AGAME = React.lazy(() => import("@/pages/case-studies/AGAME"));

// Industry pages - lazy loaded
const HighVolumeEmbroidery = React.lazy(() => import("@/pages/industries/HighVolumeEmbroidery"));
const ScreenPrinting = React.lazy(() => import("@/pages/industries/ScreenPrinting"));
const ApparelManufacturing = React.lazy(() => import("@/pages/industries/ApparelManufacturing"));
const CorporateApparel = React.lazy(() => import("@/pages/industries/CorporateApparel"));
const PromotionalProducts = React.lazy(() => import("@/pages/industries/PromotionalProducts"));
const SportsAndUniforms = React.lazy(() => import("@/pages/industries/SportsAndUniforms"));
const WorkwearUniforms = React.lazy(() => import("@/pages/industries/WorkwearUniforms"));
const FashionBrands = React.lazy(() => import("@/pages/industries/FashionBrands"));
const PrintOnDemand = React.lazy(() => import("@/pages/industries/PrintOnDemand"));
const ContractDecoration = React.lazy(() => import("@/pages/industries/ContractDecoration"));

// Loading component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-black">
    <div className="text-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gold mx-auto mb-4"></div>
      <p className="text-white">Loading...</p>
    </div>
  </div>
);

// Create a new query client
const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <LocalizationProvider>
          <TooltipProvider>
            <BrowserRouter>
              <ScrollAnimationInit />
              <PageTransition>
                <Suspense fallback={<PageLoader />}>
                  <Routes>
                    {/* Main Routes */}
                    <Route path="/" element={<Layout><Index /></Layout>} />
                    <Route path="/pricing" element={<Layout><Pricing /></Layout>} />
                    <Route path="/contact" element={<Layout><Contact /></Layout>} />
                    <Route path="/about" element={<Layout><AboutUs /></Layout>} />
                    <Route path="/blog" element={<Layout><Blog /></Layout>} />
                    <Route path="/blog/:slug" element={<Layout><BlogPost /></Layout>} />
                    <Route path="/faq" element={<Layout><FAQ /></Layout>} />
                    <Route path="/terms" element={<Layout><TermsOfService /></Layout>} />
                    <Route path="/privacy" element={<Layout><PrivacyPolicy /></Layout>} />
                    <Route path="/support" element={<Layout><Support /></Layout>} />
                    <Route path="/industries" element={<Layout><Industries /></Layout>} />
                    <Route path="/industries/high-volume-embroidery" element={<Layout><HighVolumeEmbroidery /></Layout>} />
                    <Route path="/industries/screen-printing" element={<Layout><ScreenPrinting /></Layout>} />
                    <Route path="/industries/apparel-manufacturing" element={<Layout><ApparelManufacturing /></Layout>} />
                    <Route path="/industries/corporate-apparel" element={<Layout><CorporateApparel /></Layout>} />
                    <Route path="/industries/promotional-products" element={<Layout><PromotionalProducts /></Layout>} />
                    <Route path="/industries/sports-and-uniforms" element={<Layout><SportsAndUniforms /></Layout>} />
                    <Route path="/industries/workwear-uniforms" element={<Layout><WorkwearUniforms /></Layout>} />
                    <Route path="/industries/fashion-brands" element={<Layout><FashionBrands /></Layout>} />
                    <Route path="/industries/print-on-demand" element={<Layout><PrintOnDemand /></Layout>} />
                    <Route path="/industries/contract-decoration" element={<Layout><ContractDecoration /></Layout>} />
                    <Route path="/get-started" element={<Layout><GetStarted /></Layout>} />
                    
                    {/* Case Studies Routes */}
                    <Route path="/case-studies" element={<Layout><CaseStudies /></Layout>} />
                    <Route path="/case-studies/pure-optical" element={<Layout><PureOptical /></Layout>} />
                    <Route path="/case-studies/woolcool" element={<Layout><WoolCool /></Layout>} />
                    <Route path="/case-studies/agame" element={<Layout><AGAME /></Layout>} />
                    
                    {/* Documentation Routes */}
                    <Route path="/documentation" element={<Layout><Documentation /></Layout>} />
                    <Route path="/documentation/:category" element={<Layout><Documentation /></Layout>} />
                    <Route path="/documentation/:category/:doc" element={<Layout><Documentation /></Layout>} />
                    
                    {/* Module Routes */}
                    <Route path="/modules" element={<Layout><ModuleIndex /></Layout>} />
                    <Route path="/modules/sales-orders" element={<Layout><SalesOrders /></Layout>} />
                    <Route path="/modules/warehouse" element={<Layout><Warehouse /></Layout>} />
                    <Route path="/modules/customer-database" element={<Layout><CustomerDatabase /></Layout>} />
                    <Route path="/modules/base-garments" element={<Layout><BaseGarments /></Layout>} />
                    <Route path="/modules/logos" element={<Layout><Logos /></Layout>} />
                    <Route path="/modules/product-designer" element={<Layout><ProductDesigner /></Layout>} />
                    <Route path="/modules/inventory" element={<Layout><Inventory /></Layout>} />
                    <Route path="/modules/production" element={<Layout><Production /></Layout>} />
                    <Route path="/modules/suppliers" element={<Layout><Suppliers /></Layout>} />
                    <Route path="/modules/purchase-orders" element={<Layout><PurchaseOrders /></Layout>} />
                    <Route path="/modules/artworkers" element={<Layout><Artworkers /></Layout>} />
                    <Route path="/modules/customer-portal" element={<Layout><CustomerPortal /></Layout>} />
                    
                    {/* Legacy route redirects */}
                    <Route path="/modules/sales-order-management" element={<Navigate to="/modules/sales-orders" replace />} />
                    <Route path="/modules/finance-accounting" element={<Navigate to="/modules/purchase-orders" replace />} />
                    <Route path="/modules/product-design" element={<Navigate to="/modules/product-designer" replace />} />
                    <Route path="/modules/customer-service" element={<Navigate to="/modules/customer-database" replace />} />
                    <Route path="/modules/inventory-logistics" element={<Navigate to="/modules/inventory" replace />} />
                    <Route path="/modules/production-manufacturing" element={<Navigate to="/modules/production" replace />} />
                    <Route path="/modules/logo-hub" element={<Navigate to="/modules/logos" replace />} />
                    
                    {/* Auth Routes */}
                    <Route path="/login" element={<Suspense fallback={<PageLoader />}><Login /></Suspense>} />
                    
                    {/* 404 Route */}
                    <Route path="*" element={<Layout><NotFound /></Layout>} />
                  </Routes>
                </Suspense>
              </PageTransition>
              <Toaster />
              <Sonner />
            </BrowserRouter>
          </TooltipProvider>
        </LocalizationProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
