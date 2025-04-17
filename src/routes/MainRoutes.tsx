
import { Route } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import Index from "@/pages/Index";
import GetStarted from "@/pages/GetStarted";
import Pricing from "@/pages/Pricing";
import Contact from "@/pages/Contact";
import AboutUs from "@/pages/AboutUs";
import Blog from "@/pages/Blog";
import BlogPost from "@/pages/BlogPost";

export const MainRoutes = () => (
  <>
    <Route path="/" element={<Layout><Index /></Layout>} />
    <Route path="/pricing" element={<Layout><Pricing /></Layout>} />
    <Route path="/contact" element={<Layout><Contact /></Layout>} />
    <Route path="/about" element={<Layout><AboutUs /></Layout>} />
    <Route path="/blog" element={<Layout><Blog /></Layout>} />
    <Route path="/blog/:slug" element={<Layout><BlogPost /></Layout>} />
    <Route path="/get-started" element={<Layout><GetStarted /></Layout>} />
  </>
);
