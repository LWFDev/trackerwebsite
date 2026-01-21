import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import ExpoBanner from "@/components/landing/ExpoBanner";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <ExpoBanner />
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
