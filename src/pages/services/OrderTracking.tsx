import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { FileText, CheckCircle, Clock, DollarSign } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const mockOrders = [
  { id: "PO-2024-001", supplier: "ABC Electrical Co.", amount: "$15,420", status: "Delivered", date: "2024-01-15", dueDate: "2024-02-15" },
  { id: "PO-2024-002", supplier: "Prime Plumbing Services", amount: "$8,750", status: "In Transit", date: "2024-01-18", dueDate: "2024-02-18" },
  { id: "PO-2024-003", supplier: "Elite Roofing Inc.", amount: "$23,100", status: "Processing", date: "2024-01-20", dueDate: "2024-02-20" },
  { id: "PO-2024-004", supplier: "ProBuild Materials", amount: "$45,200", status: "Delivered", date: "2024-01-12", dueDate: "2024-02-12" },
  { id: "PO-2024-005", supplier: "Foundation Masters", amount: "$31,500", status: "Pending", date: "2024-01-22", dueDate: "2024-02-22" },
];

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
                <h2 className="text-3xl font-bold mb-6">Recent Purchase Orders</h2>
                <Card>
                  <CardHeader>
                    <CardTitle>Order Management Dashboard</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Order ID</TableHead>
                          <TableHead>Supplier</TableHead>
                          <TableHead>Amount</TableHead>
                          <TableHead>Order Date</TableHead>
                          <TableHead>Payment Due</TableHead>
                          <TableHead>Status</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {mockOrders.map((order) => (
                          <TableRow key={order.id}>
                            <TableCell className="font-medium">{order.id}</TableCell>
                            <TableCell>{order.supplier}</TableCell>
                            <TableCell className="font-semibold">{order.amount}</TableCell>
                            <TableCell className="text-muted-foreground">{order.date}</TableCell>
                            <TableCell className="text-muted-foreground">{order.dueDate}</TableCell>
                            <TableCell>
                              <Badge 
                                variant={
                                  order.status === "Delivered" ? "default" : 
                                  order.status === "In Transit" ? "secondary" : 
                                  "outline"
                                }
                              >
                                {order.status}
                              </Badge>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-lg">Total Orders</CardTitle>
                    <FileText className="h-5 w-5 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-4xl font-bold text-primary">248</div>
                    <p className="text-sm text-muted-foreground mt-2">This year</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-lg">Total Value</CardTitle>
                    <DollarSign className="h-5 w-5 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-4xl font-bold text-primary">$2.4M</div>
                    <p className="text-sm text-muted-foreground mt-2">Cumulative value</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-lg">Pending Payments</CardTitle>
                    <Clock className="h-5 w-5 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-4xl font-bold text-primary">12</div>
                    <p className="text-sm text-muted-foreground mt-2">Awaiting payment</p>
                  </CardContent>
                </Card>
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
