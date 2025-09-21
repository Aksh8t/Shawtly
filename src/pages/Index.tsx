import { Navigation } from "@/components/Navigation";
import { URLShortener } from "@/components/URLShortener";
import { AnalyticsDashboard } from "@/components/AnalyticsDashboard";
import { QRGenerator } from "@/components/QRGenerator";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="relative">
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
