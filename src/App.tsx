
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "./components/landing/Header";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ModuleIndex from "./pages/modules/ModuleIndex";
import SalesOrderManagement from "./pages/modules/SalesOrderManagement";
import FinanceAccounting from "./pages/modules/FinanceAccounting";
import ProductDesign from "./pages/modules/ProductDesign";
import CustomerService from "./pages/modules/CustomerService";
import InventoryLogistics from "./pages/modules/InventoryLogistics";
import ProductionManufacturing from "./pages/modules/ProductionManufacturing";
import AnalyticsReporting from "./pages/modules/AnalyticsReporting";
import IntegrationPlatform from "./pages/modules/IntegrationPlatform";
import LogoHub from "./pages/modules/LogoHub";
import DocumentManagement from "./pages/modules/DocumentManagement";
import ProjectManagement from "./pages/modules/ProjectManagement";
import CustomerPortal from "./pages/modules/CustomerPortal";
import Footer from "./components/landing/Footer";
import GetStarted from "./pages/GetStarted";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import AboutUs from "./pages/AboutUs";

// Scroll to top component that activates on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [pathname]);
  
  return null;
};

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <Header />
          <ScrollToTop />
          <Routes>
            {/* Route with just content */}
            <Route path="/" element={<Index />} />
            <Route path="/modules" element={<ModuleIndex />} />
            <Route path="/modules/sales-order-management" element={<SalesOrderManagement />} />
            <Route path="/modules/finance-accounting" element={<FinanceAccounting />} />
            <Route path="/modules/product-design" element={<ProductDesign />} />
            <Route path="/modules/customer-service" element={<CustomerService />} />
            <Route path="/modules/inventory-logistics" element={<InventoryLogistics />} />
            <Route path="/modules/production-manufacturing" element={<ProductionManufacturing />} />
            <Route path="/modules/analytics-reporting" element={<AnalyticsReporting />} />
            <Route path="/modules/integration-platform" element={<IntegrationPlatform />} />
            <Route path="/modules/logo-hub" element={<LogoHub />} />
            <Route path="/modules/document-management" element={<DocumentManagement />} />
            <Route path="/modules/project-management" element={<ProjectManagement />} />
            <Route path="/modules/customer-portal" element={<CustomerPortal />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<AboutUs />} />
            
            {/* Route without header and footer */}
            <Route path="/get-started" element={<GetStarted />} />
            
            {/* Catch-all route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
