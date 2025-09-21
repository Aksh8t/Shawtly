import { Navigation } from "@/components/Navigation";
import { URLShortener } from "@/components/URLShortener";
import { AnalyticsDashboard } from "@/components/AnalyticsDashboard";
import { QRGenerator } from "@/components/QRGenerator";
import { Footer } from "@/components/Footer";
import heroImage from "@/assets/hero-bg.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Background */}
      <div 
        className="fixed inset-0 z-0 opacity-10"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      />
      
      <main className="relative z-10">
        <section id="home">
          <URLShortener />
        </section>
        
        <section id="analytics">
          <AnalyticsDashboard />
        </section>
        
        <section id="qr-generator">
          <QRGenerator />
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
