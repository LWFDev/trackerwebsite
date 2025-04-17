
import { Route } from "react-router-dom";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import Index from "@/pages/Index";
import GetStarted from "@/pages/GetStarted";
import Pricing from "@/pages/Pricing";
import Contact from "@/pages/Contact";
import AboutUs from "@/pages/AboutUs";
import Blog from "@/pages/Blog";
import BlogPost from "@/pages/BlogPost";

export const MainRoutes = () => (
  <>
    <Route path="/" element={
      <>
        <Header />
        <Index />
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
  </>
);
