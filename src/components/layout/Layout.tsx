import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import ExpoBanner from "@/components/landing/ExpoBanner";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 flex flex-col">
        <ExpoBanner />
        <Header />
      </div>
      {children}
      <Footer />
    </>
  );
};

export default Layout;
