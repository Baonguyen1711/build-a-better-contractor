import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { FileText, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const OrderTracking = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="py-24 bg-gradient-to-br from-primary/10 to-background">
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center">
                  <FileText className="h-8 w-8 text-primary" />
                </div>
                <h1 className="text-5xl font-bold">Order & Invoice Tracking</h1>
              </div>
              <p className="text-xl text-muted-foreground mb-8">
                Complete visibility into purchase orders, invoices, and payment status across all suppliers.
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
                    "Automated order tracking",
                    "Smart payment reminders",
                    "Secure document storage",
                    "Complete audit trails",
                    "Invoice matching and validation",
                    "Payment status monitoring",
                    "Multi-currency support",
                    "Budget tracking and alerts"
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
                    Track every purchase order from creation to completion. Our system automatically monitors order status,
                    delivery schedules, and payment deadlines, ensuring nothing falls through the cracks.
                  </p>
                  <p>
                    Match invoices to purchase orders with ease, validate pricing and quantities, and maintain a complete
                    audit trail of all transactions. Receive automated reminders for upcoming payments and overdue invoices.
                  </p>
                  <p>
                    Store all order-related documents securely in one place, accessible to authorized team members whenever needed.
                    Generate reports to analyze spending patterns and identify cost-saving opportunities.
                  </p>
                </div>
              </div>

              <div className="bg-secondary/30 rounded-lg p-8">
                <h2 className="text-3xl font-bold mb-4">Ready to streamline your orders?</h2>
                <p className="text-muted-foreground mb-6">
                  Take control of your purchase orders and invoices today.
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

export default OrderTracking;
