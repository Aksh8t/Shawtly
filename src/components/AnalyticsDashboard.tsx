import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from "recharts";
import { TrendingUp, Users, Globe, MousePointer } from "lucide-react";

const clickData = [
  { name: "Mon", clicks: 120 },
  { name: "Tue", clicks: 150 },
  { name: "Wed", clicks: 180 },
  { name: "Thu", clicks: 220 },
  { name: "Fri", clicks: 280 },
  { name: "Sat", clicks: 200 },
  { name: "Sun", clicks: 160 },
];

const locationData = [
  { name: "US", value: 40, color: "hsl(0, 0%, 95%)" },
  { name: "UK", value: 25, color: "hsl(0, 0%, 85%)" },
  { name: "DE", value: 15, color: "hsl(0, 0%, 75%)" },
  { name: "FR", value: 12, color: "hsl(0, 0%, 65%)" },
  { name: "Others", value: 8, color: "hsl(0, 0%, 55%)" },
];

const deviceData = [
  { name: "Jan", mobile: 65, desktop: 35 },
  { name: "Feb", mobile: 70, desktop: 30 },
  { name: "Mar", mobile: 68, desktop: 32 },
  { name: "Apr", mobile: 72, desktop: 28 },
  { name: "May", mobile: 75, desktop: 25 },
  { name: "Jun", mobile: 73, desktop: 27 },
];

export function AnalyticsDashboard() {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl font-bold mb-6 text-foreground">
            Powerful Analytics
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get detailed insights into your link performance with real-time analytics and comprehensive reports.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 animate-fade-in">
          <Card className="glass-card hover:glow-secondary transition-smooth">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Total Clicks</p>
                  <p className="text-3xl font-bold text-primary">12,847</p>
                  <p className="text-sm text-green-400 flex items-center mt-1">
                    <TrendingUp size={14} className="mr-1" />
                    +12.5%
                  </p>
                </div>
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                  <MousePointer className="text-black" size={20} />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="glass-card hover:glow-secondary transition-smooth">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Unique Visitors</p>
                  <p className="text-3xl font-bold text-primary">8,234</p>
                  <p className="text-sm text-green-400 flex items-center mt-1">
                    <TrendingUp size={14} className="mr-1" />
                    +8.2%
                  </p>
                </div>
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                  <Users className="text-black" size={20} />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="glass-card hover:glow-secondary transition-smooth">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Countries</p>
                  <p className="text-3xl font-bold text-primary">47</p>
                  <p className="text-sm text-green-400 flex items-center mt-1">
                    <TrendingUp size={14} className="mr-1" />
                    +3.1%
                  </p>
                </div>
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                  <Globe className="text-black" size={20} />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="glass-card hover:glow-secondary transition-smooth">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Conversion Rate</p>
                  <p className="text-3xl font-bold text-primary">24.8%</p>
                  <p className="text-sm text-green-400 flex items-center mt-1">
                    <TrendingUp size={14} className="mr-1" />
                    +5.4%
                  </p>
                </div>
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                  <TrendingUp className="text-black" size={20} />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 animate-fade-in">
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="text-xl font-semibold">Weekly Clicks</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={clickData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" />
                  <YAxis stroke="hsl(var(--muted-foreground))" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: "hsl(var(--card))", 
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "8px"
                    }} 
                  />
                  <Bar dataKey="clicks" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="text-xl font-semibold">Traffic by Location</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={locationData}
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    dataKey="value"
                    label={({ name, value }) => `${name}: ${value}%`}
                  >
                    {locationData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card className="glass-card lg:col-span-2">
            <CardHeader>
              <CardTitle className="text-xl font-semibold">Device Usage Trends</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={deviceData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" />
                  <YAxis stroke="hsl(var(--muted-foreground))" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: "hsl(var(--card))", 
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "8px"
                    }} 
                  />
                  <Line type="monotone" dataKey="mobile" stroke="hsl(var(--primary))" strokeWidth={3} />
                  <Line type="monotone" dataKey="desktop" stroke="hsl(var(--accent))" strokeWidth={3} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}