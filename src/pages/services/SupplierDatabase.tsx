import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Database, CheckCircle, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const mockSuppliers = [
  { id: 1, name: "ABC Electrical Co.", category: "Electrical", rating: 4.8, projects: 45, status: "Active", location: "New York, NY" },
  { id: 2, name: "Prime Plumbing Services", category: "Plumbing", rating: 4.9, projects: 62, status: "Active", location: "Los Angeles, CA" },
  { id: 3, name: "Elite Roofing Inc.", category: "Roofing", rating: 4.7, projects: 38, status: "Active", location: "Chicago, IL" },
  { id: 4, name: "Foundation Masters", category: "Foundation", rating: 4.6, projects: 29, status: "Pending", location: "Houston, TX" },
  { id: 5, name: "ProBuild Materials", category: "Materials", rating: 4.9, projects: 91, status: "Active", location: "Phoenix, AZ" },
];

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
                <h2 className="text-3xl font-bold mb-6">Sample Supplier Database</h2>
                <Card>
                  <CardHeader>
                    <CardTitle>Your Suppliers</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Name</TableHead>
                          <TableHead>Category</TableHead>
                          <TableHead>Location</TableHead>
                          <TableHead>Rating</TableHead>
                          <TableHead>Projects</TableHead>
                          <TableHead>Status</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {mockSuppliers.map((supplier) => (
                          <TableRow key={supplier.id}>
                            <TableCell className="font-medium">{supplier.name}</TableCell>
                            <TableCell>
                              <Badge variant="outline">{supplier.category}</Badge>
                            </TableCell>
                            <TableCell className="text-muted-foreground">{supplier.location}</TableCell>
                            <TableCell>
                              <div className="flex items-center gap-1">
                                <Star className="h-4 w-4 fill-primary text-primary" />
                                <span>{supplier.rating}</span>
                              </div>
                            </TableCell>
                            <TableCell>{supplier.projects}</TableCell>
                            <TableCell>
                              <Badge variant={supplier.status === "Active" ? "default" : "secondary"}>
                                {supplier.status}
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
                  <CardHeader>
                    <CardTitle className="text-lg">Total Suppliers</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-4xl font-bold text-primary">127</div>
                    <p className="text-sm text-muted-foreground mt-2">Across 15 categories</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Active Projects</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-4xl font-bold text-primary">342</div>
                    <p className="text-sm text-muted-foreground mt-2">Currently in progress</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Avg. Rating</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-4xl font-bold text-primary">4.7</div>
                    <p className="text-sm text-muted-foreground mt-2">Out of 5.0 stars</p>
                  </CardContent>
                </Card>
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
