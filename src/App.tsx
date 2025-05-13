
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation
} from "react-router-dom";
import Index from "@/pages/Index";
import Modules from "@/pages/Modules";
import Pricing from "@/pages/Pricing";
import Contact from "@/pages/Contact";
import Login from "@/pages/Login";
import GetStarted from "@/pages/GetStarted";
import TermsOfService from "@/pages/TermsOfService";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import NotFound from "@/pages/NotFound";
import Layout from "@/components/layout/Layout";
import CustomCursor from '@/components/ui/custom-cursor';
import PageTransition from '@/components/transitions/PageTransition';

// Wrapper component that contains the PageTransition and routes
const AppRoutes = () => {
  return (
    <PageTransition>
      <Layout>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/modules" element={<Modules />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/get-started" element={<GetStarted />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </PageTransition>
  );
};

function App() {
  return (
    <>
      <CustomCursor />
      <Router>
        <AppRoutes />
      </Router>
    </>
  );
}

export default App;
