
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
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
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
