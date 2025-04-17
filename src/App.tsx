
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import PageTransition from "./components/transitions/PageTransition";
import Layout from "./components/layout/Layout";
import Index from "@/pages/Index";
import GetStarted from "@/pages/GetStarted";
import Pricing from "@/pages/Pricing";
import Contact from "@/pages/Contact";
import AboutUs from "@/pages/AboutUs";
import Blog from "@/pages/Blog";
import BlogPost from "@/pages/BlogPost";
import NotFound from "./pages/NotFound";
import Login from "@/pages/Login";
import ModuleIndex from "@/pages/modules/ModuleIndex";
import SalesOrders from "@/pages/modules/SalesOrders";
import Warehouse from "@/pages/modules/Warehouse";
import CustomerDatabase from "@/pages/modules/CustomerDatabase";
import BaseGarments from "@/pages/modules/BaseGarments";
import Logos from "@/pages/modules/Logos";
import ProductDesigner from "@/pages/modules/ProductDesigner";
import Inventory from "@/pages/modules/Inventory";
import Production from "@/pages/modules/Production";
import Suppliers from "@/pages/modules/Suppliers";
import PurchaseOrders from "@/pages/modules/PurchaseOrders";
import Artworkers from "@/pages/modules/Artworkers";
import CustomerPortal from "@/pages/modules/CustomerPortal";

// Create a new query client
const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <BrowserRouter>
          <PageTransition>
            <Routes>
              {/* Main Routes */}
              <Route path="/" element={<Layout><Index /></Layout>} />
              <Route path="/pricing" element={<Layout><Pricing /></Layout>} />
              <Route path="/contact" element={<Layout><Contact /></Layout>} />
              <Route path="/about" element={<Layout><AboutUs /></Layout>} />
              <Route path="/blog" element={<Layout><Blog /></Layout>} />
              <Route path="/blog/:slug" element={<Layout><BlogPost /></Layout>} />
              <Route path="/get-started" element={<Layout><GetStarted /></Layout>} />
              
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
              <Route path="/login" element={<Login />} />
              
              {/* 404 Route */}
              <Route path="*" element={<Layout><NotFound /></Layout>} />
            </Routes>
          </PageTransition>
          <Toaster />
          <Sonner />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
