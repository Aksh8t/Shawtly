import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link2, Menu, X, BarChart3, QrCode, Zap } from "lucide-react";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? "glass-card backdrop-blur-xl border-b border-border/50" : "bg-transparent"
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-primary rounded flex items-center justify-center">
              <Zap className="text-white" size={18} />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              Shawtly
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("analytics")}
              className="text-foreground/80 hover:text-foreground transition-colors flex items-center gap-2"
            >
              <BarChart3 size={16} />
              Analytics
            </button>
            <button
              onClick={() => scrollToSection("qr-generator")}
              className="text-foreground/80 hover:text-foreground transition-colors flex items-center gap-2"
            >
              <QrCode size={16} />
              QR Codes
            </button>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" className="transition-smooth hover:bg-primary/10">
              Sign In
            </Button>
            <Button className="hero-button">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 glass-card border-t border-border/50 animate-fade-in">
            <div className="px-4 py-6 space-y-4">
              <button
                onClick={() => scrollToSection("home")}
                className="block w-full text-left text-foreground/80 hover:text-foreground transition-colors py-2"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("analytics")}
                className="block w-full text-left text-foreground/80 hover:text-foreground transition-colors py-2 flex items-center gap-2"
              >
                <BarChart3 size={16} />
                Analytics
              </button>
              <button
                onClick={() => scrollToSection("qr-generator")}
                className="block w-full text-left text-foreground/80 hover:text-foreground transition-colors py-2 flex items-center gap-2"
              >
                <QrCode size={16} />
                QR Codes
              </button>
              <div className="pt-4 border-t border-border/50 space-y-3">
                <Button variant="outline" className="w-full">
                  Sign In
                </Button>
                <Button className="hero-button w-full">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}