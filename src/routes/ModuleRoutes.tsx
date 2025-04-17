
import { Route, Navigate } from "react-router-dom";
import Layout from "@/components/layout/Layout";
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

export const ModuleRoutes = () => {
  return (
    <>
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
    </>
  );
};
