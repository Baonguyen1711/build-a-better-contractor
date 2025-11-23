import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { BarChart3, CheckCircle, TrendingUp, TrendingDown, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const performanceData = [
  { supplier: "ABC Electrical Co.", onTime: 94, quality: 4.8, costScore: 92, trend: "up" },
  { supplier: "Prime Plumbing Services", onTime: 98, quality: 4.9, costScore: 88, trend: "up" },
  { supplier: "Elite Roofing Inc.", onTime: 89, quality: 4.7, costScore: 85, trend: "down" },
  { supplier: "ProBuild Materials", onTime: 96, quality: 4.9, costScore: 95, trend: "up" },
  { supplier: "Foundation Masters", onTime: 87, quality: 4.6, costScore: 82, trend: "stable" },
];

const PerformanceAnalytics = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="py-24 bg-gradient-to-br from-primary/10 to-background">
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center">
                  <BarChart3 className="h-8 w-8 text-primary" />
                </div>
                <h1 className="text-5xl font-bold">Performance Analytics</h1>
              </div>
              <p className="text-xl text-muted-foreground mb-8">
                Data-driven insights on supplier performance, costs, delivery times, and reliability.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto space-y-12">
              <div>
                <h2 className="text-3xl font-bold mb-6">Key Features</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    "Custom analytics dashboards",
                    "Real-time performance metrics",
                    "Detailed cost analysis",
                    "Trend reports and forecasting",
                    "Supplier comparison tools",
                    "Delivery time tracking",
                    "Quality score calculations",
                    "Automated report generation"
                  ].map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-6">Performance Metrics Dashboard</h2>
                <div className="space-y-6">
                  {performanceData.map((supplier, index) => (
                    <Card key={index}>
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-xl">{supplier.supplier}</CardTitle>
                          <div className="flex items-center gap-2">
                            {supplier.trend === "up" && (
                              <Badge className="bg-green-500/10 text-green-600 hover:bg-green-500/20">
                                <TrendingUp className="h-3 w-3 mr-1" />
                                Improving
                              </Badge>
                            )}
                            {supplier.trend === "down" && (
                              <Badge variant="destructive" className="bg-red-500/10 text-red-600 hover:bg-red-500/20">
                                <TrendingDown className="h-3 w-3 mr-1" />
                                Declining
                              </Badge>
                            )}
                            {supplier.trend === "stable" && (
                              <Badge variant="secondary">Stable</Badge>
                            )}
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="grid md:grid-cols-3 gap-6">
                          <div>
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-sm text-muted-foreground">On-Time Delivery</span>
                              <span className="text-sm font-semibold">{supplier.onTime}%</span>
                            </div>
                            <Progress value={supplier.onTime} className="h-2" />
                          </div>
                          <div>
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-sm text-muted-foreground">Quality Score</span>
                              <span className="text-sm font-semibold">{supplier.quality}/5.0</span>
                            </div>
                            <Progress value={(supplier.quality / 5) * 100} className="h-2" />
                          </div>
                          <div>
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-sm text-muted-foreground">Cost Efficiency</span>
                              <span className="text-sm font-semibold">{supplier.costScore}%</span>
                            </div>
                            <Progress value={supplier.costScore} className="h-2" />
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              <div className="grid md:grid-cols-4 gap-6">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Avg. Delivery Time</CardTitle>
                    <Clock className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-primary">3.2 days</div>
                    <p className="text-xs text-green-600 mt-1">↓ 12% from last month</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Quality Rating</CardTitle>
                    <BarChart3 className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-primary">4.78</div>
                    <p className="text-xs text-green-600 mt-1">↑ 0.3 from last month</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Cost Savings</CardTitle>
                    <TrendingUp className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-primary">$48K</div>
                    <p className="text-xs text-green-600 mt-1">This quarter</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">On-Time Rate</CardTitle>
                    <CheckCircle className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-primary">93%</div>
                    <p className="text-xs text-green-600 mt-1">↑ 5% from last month</p>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-secondary/30 rounded-lg p-8">
                <h2 className="text-3xl font-bold mb-4">Ready to leverage your data?</h2>
                <p className="text-muted-foreground mb-6">
                  Start making data-driven supplier decisions today.
                </p>
                <div className="flex gap-4">
                  <Button variant="hero" size="lg">Start Free Trial</Button>
                  <Link to="/service">
                    <Button variant="outline" size="lg">Back to Services</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PerformanceAnalytics;
