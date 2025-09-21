import { Link2, Github, Twitter, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="bg-gradient-to-t from-secondary/50 to-background border-t border-border/50">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
              <Link2 className="text-black" size={18} />
            </div>
            <span className="text-xl font-bold text-foreground">
              Shawtly
            </span>
          </div>
            <p className="text-muted-foreground">
              The modern URL shortener with powerful analytics and QR code generation.
            </p>
            <div className="flex space-x-2">
              <Button variant="ghost" size="sm" className="hover:bg-white hover:text-black">
                <Github size={18} />
              </Button>
              <Button variant="ghost" size="sm" className="hover:bg-white hover:text-black">
                <Twitter size={18} />
              </Button>
              <Button variant="ghost" size="sm" className="hover:bg-white hover:text-black">
                <Linkedin size={18} />
              </Button>
              <Button variant="ghost" size="sm" className="hover:bg-white hover:text-black">
                <Mail size={18} />
              </Button>
            </div>
          </div>

          {/* Product */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Product</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">URL Shortener</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Analytics</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">QR Codes</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">API</a></li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Company</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">About</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Legal</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Cookie Policy</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">GDPR</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/50 mt-12 pt-8 text-center text-muted-foreground">
          <p>&copy; 2024 Shawtly. All rights reserved. Built with modern web technologies.</p>
        </div>
      </div>
    </footer>
  );
}