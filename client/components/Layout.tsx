import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import Background from "@/components/ui/Background";

interface LayoutProps {
  children: React.ReactNode;
  showWatermark?: boolean;
  backgroundVariant?: "default" | "gradient" | "hero";
}

const Layout = ({ 
  children, 
  showWatermark = true,
  backgroundVariant = "default" 
}: LayoutProps) => {
  return (
    <Background 
      showWatermark={showWatermark} 
      variant={backgroundVariant}
      className="flex flex-col min-h-screen"
    >
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <Footer />
    </Background>
  );
};

export default Layout;
