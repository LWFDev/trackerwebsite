
import { Route, Navigate } from "react-router-dom";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
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

export const ModuleRoutes = () => (
  <>
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
    
    {/* Legacy route redirects */}
    <Route path="/modules/sales-order-management" element={<Navigate to="/modules/sales-orders" replace />} />
    <Route path="/modules/finance-accounting" element={<Navigate to="/modules/purchase-orders" replace />} />
    <Route path="/modules/product-design" element={<Navigate to="/modules/product-designer" replace />} />
    <Route path="/modules/customer-service" element={<Navigate to="/modules/customer-database" replace />} />
    <Route path="/modules/inventory-logistics" element={<Navigate to="/modules/inventory" replace />} />
    <Route path="/modules/production-manufacturing" element={<Navigate to="/modules/production" replace />} />
    <Route path="/modules/logo-hub" element={<Navigate to="/modules/logos" replace />} />
  </>
);
