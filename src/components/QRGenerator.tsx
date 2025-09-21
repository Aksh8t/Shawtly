import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { QrCode, Download, Palette, CreditCard, Share } from "lucide-react";

export function QRGenerator() {
  const [qrUrl, setQrUrl] = useState("");
  const [qrColor, setQrColor] = useState("#8B5CF6");
  const [qrSize, setQrSize] = useState("256");
  const [paymentAmount, setPaymentAmount] = useState("");
  const [paymentCurrency, setPaymentCurrency] = useState("USD");

  return (
    <section className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl font-bold mb-6 text-foreground">
            QR Code Generator
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Create beautiful, customizable QR codes for your links and payments. 
            Perfect for marketing campaigns and seamless transactions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 animate-fade-in">
          {/* QR Generator Form */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <QrCode className="text-primary" size={24} />
                Generate QR Code
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <Tabs defaultValue="url" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-6">
                  <TabsTrigger value="url">URL QR Code</TabsTrigger>
                  <TabsTrigger value="payment">Payment QR Code</TabsTrigger>
                </TabsList>
                
                <TabsContent value="url" className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="qr-url">Enter URL</Label>
                    <Input
                      id="qr-url"
                      placeholder="https://example.com"
                      value={qrUrl}
                      onChange={(e) => setQrUrl(e.target.value)}
                      className="bg-secondary/50"
                    />
                  </div>
                </TabsContent>
                
                <TabsContent value="payment" className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="amount">Amount</Label>
                      <Input
                        id="amount"
                        placeholder="100.00"
                        value={paymentAmount}
                        onChange={(e) => setPaymentAmount(e.target.value)}
                        className="bg-secondary/50"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="currency">Currency</Label>
                      <Select value={paymentCurrency} onValueChange={setPaymentCurrency}>
                        <SelectTrigger className="bg-secondary/50">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="USD">USD</SelectItem>
                          <SelectItem value="EUR">EUR</SelectItem>
                          <SelectItem value="GBP">GBP</SelectItem>
                          <SelectItem value="BTC">BTC</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="payment-url">Payment URL</Label>
                    <Input
                      id="payment-url"
                      placeholder="https://payment-provider.com/..."
                      className="bg-secondary/50"
                    />
                  </div>
                </TabsContent>
              </Tabs>

              {/* Customization Options */}
              <div className="space-y-4 pt-4 border-t border-border/50">
                <h4 className="font-semibold flex items-center gap-2">
                  <Palette size={18} />
                  Customization
                </h4>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="qr-color">QR Color</Label>
                    <div className="flex gap-2">
                      <Input
                        id="qr-color"
                        type="color"
                        value={qrColor}
                        onChange={(e) => setQrColor(e.target.value)}
                        className="w-16 h-10 p-1 bg-secondary/50"
                      />
                      <Input
                        value={qrColor}
                        onChange={(e) => setQrColor(e.target.value)}
                        className="flex-1 bg-secondary/50"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="qr-size">Size</Label>
                    <Select value={qrSize} onValueChange={setQrSize}>
                      <SelectTrigger className="bg-secondary/50">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="128">128x128</SelectItem>
                        <SelectItem value="256">256x256</SelectItem>
                        <SelectItem value="512">512x512</SelectItem>
                        <SelectItem value="1024">1024x1024</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              <Button className="bg-white text-black hover:bg-gray-200 transition-smooth w-full">
                Generate QR Code
              </Button>
            </CardContent>
          </Card>

          {/* QR Preview */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle>QR Code Preview</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center space-y-6">
              {/* QR Code Placeholder */}
              <div className="w-64 h-64 border-2 border-dashed border-border/50 rounded-lg flex items-center justify-center bg-secondary/20">
                <div className="text-center">
                  <QrCode size={48} className="text-muted-foreground mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground">QR Code will appear here</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <Button variant="outline" className="transition-smooth hover:bg-primary/10">
                  <Download size={16} className="mr-2" />
                  Download
                </Button>
                <Button variant="outline" className="transition-smooth hover:bg-primary/10">
                  <Share size={16} className="mr-2" />
                  Share
                </Button>
              </div>

              {/* QR Code Stats */}
              <div className="w-full space-y-3 pt-4 border-t border-border/50">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Format:</span>
                  <span>PNG</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Size:</span>
                  <span>{qrSize}x{qrSize}px</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Color:</span>
                  <div className="flex items-center gap-2">
                    <div 
                      className="w-4 h-4 rounded border border-border/50" 
                      style={{ backgroundColor: qrColor }}
                    />
                    <span>{qrColor}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Payment QR Features */}
        <div className="mt-16 animate-fade-in">
          <Card className="glass-card">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <CreditCard className="w-16 h-16 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">Payment QR Codes</h3>
                <p className="text-muted-foreground">
                  Create QR codes for instant payments with support for multiple currencies and payment providers
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-4">
                  <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-green-400 font-bold">$</span>
                  </div>
                  <h4 className="font-semibold mb-2">Multi-Currency</h4>
                  <p className="text-sm text-muted-foreground">Support for USD, EUR, GBP, and cryptocurrencies</p>
                </div>
                
                <div className="text-center p-4">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <CreditCard className="text-blue-400" size={20} />
                  </div>
                  <h4 className="font-semibold mb-2">Multiple Providers</h4>
                  <p className="text-sm text-muted-foreground">PayPal, Stripe, Square, and crypto wallets</p>
                </div>
                
                <div className="text-center p-4">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <QrCode className="text-purple-400" size={20} />
                  </div>
                  <h4 className="font-semibold mb-2">Instant Generation</h4>
                  <p className="text-sm text-muted-foreground">Generate payment QR codes in seconds</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}