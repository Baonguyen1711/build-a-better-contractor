import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Shield, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const ComplianceManagement = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="py-24 bg-gradient-to-br from-primary/10 to-background">
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <h1 className="text-5xl font-bold">Compliance Management</h1>
              </div>
              <p className="text-xl text-muted-foreground mb-8">
                Ensure all suppliers meet insurance, licensing, and safety requirements automatically.
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
                    "Automated license tracking",
                    "Insurance verification",
                    "Expiration alerts and reminders",
                    "Comprehensive compliance reports",
                    "Document management system",
                    "Safety certification tracking",
                    "Regulatory requirement monitoring",
                    "Audit trail maintenance"
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
                    Stay compliant without the headache. Our system automatically tracks all supplier licenses, insurance
                    policies, and certifications, alerting you well before any documents expire.
                  </p>
                  <p>
                    Upload and store compliance documents securely, with version control and audit trails. Verify insurance
                    coverage levels, license validity, and safety certifications at a glance.
                  </p>
                  <p>
                    Generate compliance reports for stakeholders, auditors, or project requirements instantly. Ensure every
                    supplier meets your standards and regulatory requirements before they start work.
                  </p>
                </div>
              </div>

              <div className="bg-secondary/30 rounded-lg p-8">
                <h2 className="text-3xl font-bold mb-4">Ready to ensure compliance?</h2>
                <p className="text-muted-foreground mb-6">
                  Protect your business with automated compliance management.
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

export default ComplianceManagement;
