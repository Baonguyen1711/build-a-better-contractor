import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Database, Shield, BarChart3, MessageSquare, FileText, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Database,
    title: "Supplier Database Management",
    description: "Centralized supplier directory with detailed profiles, certifications, and performance history.",
    features: ["Custom categorization", "Advanced search", "Real-time updates", "Export capabilities"],
    link: "/service/supplier-database",
  },
  {
    icon: FileText,
    title: "Order & Invoice Tracking",
    description: "Complete visibility into purchase orders, invoices, and payment status across all suppliers.",
    features: ["Automated tracking", "Payment reminders", "Document storage", "Audit trails"],
    link: "/service/order-tracking",
  },
  {
    icon: MessageSquare,
    title: "Communication Hub",
    description: "Integrated messaging system for seamless communication with your supplier network.",
    features: ["Direct messaging", "File sharing", "Group conversations", "Email integration"],
    link: "/service/communication-hub",
  },
  {
    icon: BarChart3,
    title: "Performance Analytics",
    description: "Data-driven insights on supplier performance, costs, delivery times, and reliability.",
    features: ["Custom dashboards", "Performance metrics", "Cost analysis", "Trend reports"],
    link: "/service/performance-analytics",
  },
  {
    icon: Shield,
    title: "Compliance Management",
    description: "Ensure all suppliers meet insurance, licensing, and safety requirements automatically.",
    features: ["License tracking", "Insurance verification", "Expiration alerts", "Compliance reports"],
    link: "/service/compliance-management",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Enable your entire team to access supplier information and collaborate efficiently.",
    features: ["Role-based access", "Activity logs", "Team notifications", "Shared workspaces"],
    link: "/service/team-collaboration",
  },
];

const Service = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-br from-primary/10 to-background">
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-5xl sm:text-6xl font-bold mb-6">
                Our <span className="text-primary">Services</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Comprehensive supplier management solutions designed specifically for general contractors
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <Link key={service.title} to={service.link}>
                  <Card className="border-border hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer h-full">
                    <CardHeader>
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                        <service.icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                      <CardDescription className="text-base">{service.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {service.features.map((feature) => (
                          <li key={feature} className="text-sm text-muted-foreground flex items-center">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-secondary/30">
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Join hundreds of contractors who are already streamlining their supplier management
              </p>
              <Button variant="hero" size="xl">
                Start Free Trial
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Service;
