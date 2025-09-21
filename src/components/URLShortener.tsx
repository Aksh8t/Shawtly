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
    <section className="pt-24 pb-16 px-4 relative overflow-hidden">
      {/* Lovable-inspired gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 via-purple-800 via-pink-700 to-orange-600 opacity-90" />
      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
      
      <div className="container max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            URL Shortener
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Shorten URLs, track analytics, and create custom QR codes with payment options.
          </p>
        </div>

        <Card className="glass-card animate-fade-in max-w-2xl mx-auto mb-20">
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
                className="h-14 px-8 text-lg font-semibold bg-white text-black hover:bg-gray-200 transition-smooth"
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
                  <Button variant="outline" className="transition-smooth hover:bg-white hover:text-black">
                    <BarChart3 size={16} className="mr-2" />
                    View Analytics
                  </Button>
                  <Button variant="outline" className="transition-smooth hover:bg-white hover:text-black">
                    <QrCode size={16} className="mr-2" />
                    Generate QR
                  </Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in relative z-10">
          <div className="text-center">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 animate-float">
              <Link className="text-black" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-white">Smart Shortening</h3>
            <p className="text-white/70">Create short, memorable links with custom aliases</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 animate-float" style={{ animationDelay: "1s" }}>
              <BarChart3 className="text-black" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-white">Real-time Analytics</h3>
            <p className="text-white/70">Track clicks, locations, and performance metrics</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 animate-float" style={{ animationDelay: "2s" }}>
              <QrCode className="text-black" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-white">QR Codes</h3>
            <p className="text-white/70">Generate custom QR codes with payment options</p>
          </div>
        </div>
      </div>
    </section>
  );
}