
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
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Login from "./pages/Login";

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
          <ScrollToTop />
          <Routes>
            {/* Routes with header and footer */}
            <Route path="/" element={
              <>
                <Header />
                <Index />
                <Footer />
              </>
            } />
            <Route path="/modules" element={
              <>
                <Header />
                <ModuleIndex />
                <Footer />
              </>
            } />
            <Route path="/modules/sales-order-management" element={
              <>
                <Header />
                <SalesOrderManagement />
                <Footer />
              </>
            } />
            <Route path="/modules/finance-accounting" element={
              <>
                <Header />
                <FinanceAccounting />
                <Footer />
              </>
            } />
            <Route path="/modules/product-design" element={
              <>
                <Header />
                <ProductDesign />
                <Footer />
              </>
            } />
            <Route path="/modules/customer-service" element={
              <>
                <Header />
                <CustomerService />
                <Footer />
              </>
            } />
            <Route path="/modules/inventory-logistics" element={
              <>
                <Header />
                <InventoryLogistics />
                <Footer />
              </>
            } />
            <Route path="/modules/production-manufacturing" element={
              <>
                <Header />
                <ProductionManufacturing />
                <Footer />
              </>
            } />
            <Route path="/modules/analytics-reporting" element={
              <>
                <Header />
                <AnalyticsReporting />
                <Footer />
              </>
            } />
            <Route path="/modules/integration-platform" element={
              <>
                <Header />
                <IntegrationPlatform />
                <Footer />
              </>
            } />
            <Route path="/modules/logo-hub" element={
              <>
                <Header />
                <LogoHub />
                <Footer />
              </>
            } />
            <Route path="/modules/document-management" element={
              <>
                <Header />
                <DocumentManagement />
                <Footer />
              </>
            } />
            <Route path="/modules/project-management" element={
              <>
                <Header />
                <ProjectManagement />
                <Footer />
              </>
            } />
            <Route path="/modules/customer-portal" element={
              <>
                <Header />
                <CustomerPortal />
                <Footer />
              </>
            } />
            <Route path="/pricing" element={
              <>
                <Header />
                <Pricing />
                <Footer />
              </>
            } />
            <Route path="/contact" element={
              <>
                <Header />
                <Contact />
                <Footer />
              </>
            } />
            <Route path="/about" element={
              <>
                <Header />
                <AboutUs />
                <Footer />
              </>
            } />
            <Route path="/blog" element={
              <>
                <Header />
                <Blog />
                <Footer />
              </>
            } />
            <Route path="/blog/:slug" element={
              <>
                <Header />
                <BlogPost />
                <Footer />
              </>
            } />
            <Route path="/get-started" element={
              <>
                <Header />
                <GetStarted />
                <Footer />
              </>
            } />
            
            {/* Routes without header and footer */}
            <Route path="/login" element={<Login />} />
            
            <Route path="*" element={
              <>
                <Header />
                <NotFound />
                <Footer />
              </>
            } />
          </Routes>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
