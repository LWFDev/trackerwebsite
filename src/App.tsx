
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <Routes>
            {/* Routes with header and footer */}
            <Route path="/" element={
              <>
                <Header />
                <main className="flex-grow">
                  <Index />
                </main>
                <Footer />
              </>
            } />
            <Route path="/modules" element={
              <>
                <Header />
                <main className="flex-grow">
                  <ModuleIndex />
                </main>
                <Footer />
              </>
            } />
            <Route path="/modules/sales-order-management" element={
              <>
                <Header />
                <main className="flex-grow">
                  <SalesOrderManagement />
                </main>
                <Footer />
              </>
            } />
            <Route path="/modules/finance-accounting" element={
              <>
                <Header />
                <main className="flex-grow">
                  <FinanceAccounting />
                </main>
                <Footer />
              </>
            } />
            <Route path="/modules/product-design" element={
              <>
                <Header />
                <main className="flex-grow">
                  <ProductDesign />
                </main>
                <Footer />
              </>
            } />
            <Route path="/modules/customer-service" element={
              <>
                <Header />
                <main className="flex-grow">
                  <CustomerService />
                </main>
                <Footer />
              </>
            } />
            <Route path="/modules/inventory-logistics" element={
              <>
                <Header />
                <main className="flex-grow">
                  <InventoryLogistics />
                </main>
                <Footer />
              </>
            } />
            <Route path="/modules/production-manufacturing" element={
              <>
                <Header />
                <main className="flex-grow">
                  <ProductionManufacturing />
                </main>
                <Footer />
              </>
            } />
            <Route path="/modules/analytics-reporting" element={
              <>
                <Header />
                <main className="flex-grow">
                  <AnalyticsReporting />
                </main>
                <Footer />
              </>
            } />
            <Route path="/modules/integration-platform" element={
              <>
                <Header />
                <main className="flex-grow">
                  <IntegrationPlatform />
                </main>
                <Footer />
              </>
            } />
            <Route path="/modules/logo-hub" element={
              <>
                <Header />
                <main className="flex-grow">
                  <LogoHub />
                </main>
                <Footer />
              </>
            } />
            <Route path="/modules/document-management" element={
              <>
                <Header />
                <main className="flex-grow">
                  <DocumentManagement />
                </main>
                <Footer />
              </>
            } />
            <Route path="/modules/project-management" element={
              <>
                <Header />
                <main className="flex-grow">
                  <ProjectManagement />
                </main>
                <Footer />
              </>
            } />
            <Route path="/modules/customer-portal" element={
              <>
                <Header />
                <main className="flex-grow">
                  <CustomerPortal />
                </main>
                <Footer />
              </>
            } />
            
            {/* Routes without header and footer */}
            <Route path="/get-started" element={<GetStarted />} />
            
            {/* Catch-all route */}
            <Route path="*" element={
              <>
                <Header />
                <main className="flex-grow">
                  <NotFound />
                </main>
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
