import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Copy, Link, BarChart3, QrCode } from "lucide-react";
import { toast } from "@/hooks/use-toast";

export function URLShortener() {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleShorten = async () => {
    if (!url) return;
    
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setShortUrl(`https://shawtly.co/${Math.random().toString(36).substr(2, 8)}`);
      setIsLoading(false);
    }, 1000);
  };

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(shortUrl);
    toast({
      title: "Copied!",
      description: "Short URL copied to clipboard",
    });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20" />
      
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
            Shawtly
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Shorten URLs, track analytics, and create custom QR codes with payment options. 
            All in one modern platform.
          </p>
        </div>

        <Card className="glass-card animate-fade-in max-w-2xl mx-auto mb-16">
          <CardContent className="p-8">
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <Input
                placeholder="Enter your long URL here..."
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="flex-1 h-14 text-lg bg-secondary/50 border-border/50"
              />
              <Button
                onClick={handleShorten}
                disabled={!url || isLoading}
                className="hero-button h-14 px-8 text-lg font-semibold"
              >
                {isLoading ? "Shortening..." : "Shorten"}
              </Button>
            </div>

            {shortUrl && (
              <div className="animate-fade-in">
                <div className="flex items-center gap-4 p-4 bg-secondary/30 rounded-lg border border-border/50">
                  <Link className="text-primary flex-shrink-0" size={20} />
                  <span className="flex-1 text-left font-mono break-all">{shortUrl}</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={copyToClipboard}
                    className="flex-shrink-0"
                  >
                    <Copy size={16} />
                  </Button>
                </div>
                
                <div className="flex justify-center gap-4 mt-6">
                  <Button variant="outline" className="transition-smooth hover:bg-primary/10">
                    <BarChart3 size={16} className="mr-2" />
                    View Analytics
                  </Button>
                  <Button variant="outline" className="transition-smooth hover:bg-primary/10">
                    <QrCode size={16} className="mr-2" />
                    Generate QR
                  </Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 animate-float">
              <Link className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Smart Shortening</h3>
            <p className="text-muted-foreground">Create short, memorable links with custom aliases</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 animate-float" style={{ animationDelay: "1s" }}>
              <BarChart3 className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Real-time Analytics</h3>
            <p className="text-muted-foreground">Track clicks, locations, and performance metrics</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 animate-float" style={{ animationDelay: "2s" }}>
              <QrCode className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2">QR Codes</h3>
            <p className="text-muted-foreground">Generate custom QR codes with payment options</p>
          </div>
        </div>
      </div>
    </section>
  );
}