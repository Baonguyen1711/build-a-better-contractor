import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Database, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const SupplierDatabase = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="py-24 bg-gradient-to-br from-primary/10 to-background">
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Database className="h-8 w-8 text-primary" />
                </div>
                <h1 className="text-5xl font-bold">Supplier Database Management</h1>
              </div>
              <p className="text-xl text-muted-foreground mb-8">
                Centralized supplier directory with detailed profiles, certifications, and performance history.
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
                    "Custom categorization and tagging",
                    "Advanced search and filtering",
                    "Real-time data synchronization",
                    "Export capabilities to multiple formats",
                    "Supplier performance tracking",
                    "Certificate and license management",
                    "Contact history and notes",
                    "Integration with accounting systems"
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
                    Our supplier database management system provides a centralized location for all your supplier information.
                    Easily add new suppliers, update existing profiles, and maintain a comprehensive record of all interactions.
                  </p>
                  <p>
                    With advanced categorization options, you can organize suppliers by trade, location, specialty, or any custom
                    criteria that fits your business needs. The powerful search functionality ensures you can find the right
                    supplier in seconds.
                  </p>
                  <p>
                    Track certifications, insurance policies, and licenses with automatic expiration alerts to ensure compliance.
                    Monitor supplier performance over time with detailed metrics and historical data.
                  </p>
                </div>
              </div>

              <div className="bg-secondary/30 rounded-lg p-8">
                <h2 className="text-3xl font-bold mb-4">Ready to organize your suppliers?</h2>
                <p className="text-muted-foreground mb-6">
                  Start managing your supplier network more effectively today.
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

export default SupplierDatabase;
