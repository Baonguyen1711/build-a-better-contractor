import { Users, Search, FileText, BarChart3, MessageSquare, Shield } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    icon: Users,
    title: "Supplier Directory",
    description: "Centralized database of all your suppliers with detailed profiles, contact information, and service offerings.",
  },
  {
    icon: Search,
    title: "Smart Search & Filter",
    description: "Find the right supplier instantly with powerful search and filtering by location, specialty, and rating.",
  },
  {
    icon: FileText,
    title: "Order Tracking",
    description: "Track all purchase orders, invoices, and deliveries in one place. Never miss a deadline again.",
  },
  {
    icon: BarChart3,
    title: "Performance Analytics",
    description: "Data-driven insights on supplier performance, costs, and delivery times to optimize your operations.",
  },
  {
    icon: MessageSquare,
    title: "Direct Communication",
    description: "Built-in messaging system to communicate with suppliers, share documents, and resolve issues quickly.",
  },
  {
    icon: Shield,
    title: "Compliance Management",
    description: "Ensure all suppliers meet insurance, licensing, and safety requirements with automated tracking.",
  },
];

const Features = () => {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Everything You Need to <span className="text-primary">Manage Suppliers</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Powerful features designed specifically for general contractors to streamline supplier management.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <Card key={feature.title} className="border-border hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
