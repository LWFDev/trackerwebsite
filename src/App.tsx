import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import PageTransition from "./components/transitions/PageTransition";
import Header from "./components/landing/Header";
import Footer from "./components/landing/Footer";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ModuleIndex from "./pages/modules/ModuleIndex";
import SalesOrders from "./pages/modules/SalesOrders";
import Warehouse from "./pages/modules/Warehouse";
import CustomerDatabase from "./pages/modules/CustomerDatabase";
import BaseGarments from "./pages/modules/BaseGarments";
import Logos from "./pages/modules/Logos";
import ProductDesigner from "./pages/modules/ProductDesigner";
import Inventory from "./pages/modules/Inventory";
import Production from "./pages/modules/Production";
import Suppliers from "./pages/modules/Suppliers";
import PurchaseOrders from "./pages/modules/PurchaseOrders";
import Artworkers from "./pages/modules/Artworkers";
import CustomerPortal from "./pages/modules/CustomerPortal";
import GetStarted from "./pages/GetStarted";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import AboutUs from "./pages/AboutUs";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Login from "./pages/Login";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <PageTransition>
          <div className="flex flex-col min-h-screen">
            <Routes>
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
              
              <Route path="/modules/sales-orders" element={
                <>
                  <Header />
                  <SalesOrders />
                  <Footer />
                </>
              } />
              <Route path="/modules/warehouse" element={
                <>
                  <Header />
                  <Warehouse />
                  <Footer />
                </>
              } />
              <Route path="/modules/customer-database" element={
                <>
                  <Header />
                  <CustomerDatabase />
                  <Footer />
                </>
              } />
              <Route path="/modules/base-garments" element={
                <>
                  <Header />
                  <BaseGarments />
                  <Footer />
                </>
              } />
              <Route path="/modules/logos" element={
                <>
                  <Header />
                  <Logos />
                  <Footer />
                </>
              } />
              <Route path="/modules/product-designer" element={
                <>
                  <Header />
                  <ProductDesigner />
                  <Footer />
                </>
              } />
              <Route path="/modules/inventory" element={
                <>
                  <Header />
                  <Inventory />
                  <Footer />
                </>
              } />
              <Route path="/modules/production" element={
                <>
                  <Header />
                  <Production />
                  <Footer />
                </>
              } />
              <Route path="/modules/suppliers" element={
                <>
                  <Header />
                  <Suppliers />
                  <Footer />
                </>
              } />
              <Route path="/modules/purchase-orders" element={
                <>
                  <Header />
                  <PurchaseOrders />
                  <Footer />
                </>
              } />
              <Route path="/modules/artworkers" element={
                <>
                  <Header />
                  <Artworkers />
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
              
              <Route path="/modules/sales-order-management" element={<Navigate to="/modules/sales-orders" replace />} />
              <Route path="/modules/finance-accounting" element={<Navigate to="/modules/purchase-orders" replace />} />
              <Route path="/modules/product-design" element={<Navigate to="/modules/product-designer" replace />} />
              <Route path="/modules/customer-service" element={<Navigate to="/modules/customer-database" replace />} />
              <Route path="/modules/inventory-logistics" element={<Navigate to="/modules/inventory" replace />} />
              <Route path="/modules/production-manufacturing" element={<Navigate to="/modules/production" replace />} />
              <Route path="/modules/logo-hub" element={<Navigate to="/modules/logos" replace />} />
              
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
        </PageTransition>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
