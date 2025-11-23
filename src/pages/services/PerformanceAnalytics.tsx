import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { BarChart3, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

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
                <h2 className="text-3xl font-bold mb-6">How It Works</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Transform your supplier data into actionable insights. Our analytics platform automatically tracks
                    key performance indicators, helping you identify top performers and areas for improvement.
                  </p>
                  <p>
                    Create custom dashboards to monitor the metrics that matter most to your business. Compare suppliers
                    side-by-side based on cost, delivery times, quality, and reliability scores.
                  </p>
                  <p>
                    Identify spending trends, forecast future costs, and make data-driven decisions about your supplier
                    relationships. Automated reports keep stakeholders informed without manual effort.
                  </p>
                </div>
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
