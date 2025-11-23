import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Shield, CheckCircle, AlertTriangle, FileCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const complianceData = [
  { supplier: "ABC Electrical Co.", license: "Valid", insurance: "Valid", certification: "Valid", expiry: "2025-06-15", status: "compliant" },
  { supplier: "Prime Plumbing Services", license: "Valid", insurance: "Valid", certification: "Valid", expiry: "2025-08-22", status: "compliant" },
  { supplier: "Elite Roofing Inc.", license: "Valid", insurance: "Expiring Soon", certification: "Valid", expiry: "2024-12-05", status: "warning" },
  { supplier: "Foundation Masters", license: "Valid", insurance: "Valid", certification: "Pending", expiry: "2025-03-10", status: "pending" },
  { supplier: "ProBuild Materials", license: "Valid", insurance: "Valid", certification: "Valid", expiry: "2025-09-18", status: "compliant" },
];

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
                <h2 className="text-3xl font-bold mb-6">Compliance Status Dashboard</h2>
                <Card>
                  <CardHeader>
                    <CardTitle>Supplier Compliance Overview</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Supplier</TableHead>
                          <TableHead>License</TableHead>
                          <TableHead>Insurance</TableHead>
                          <TableHead>Certification</TableHead>
                          <TableHead>Next Expiry</TableHead>
                          <TableHead>Status</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {complianceData.map((item, index) => (
                          <TableRow key={index}>
                            <TableCell className="font-medium">{item.supplier}</TableCell>
                            <TableCell>
                              <Badge variant="outline" className="bg-green-500/10 text-green-600">
                                {item.license}
                              </Badge>
                            </TableCell>
                            <TableCell>
                              <Badge 
                                variant="outline" 
                                className={item.insurance === "Expiring Soon" 
                                  ? "bg-yellow-500/10 text-yellow-600" 
                                  : "bg-green-500/10 text-green-600"}
                              >
                                {item.insurance}
                              </Badge>
                            </TableCell>
                            <TableCell>
                              <Badge 
                                variant="outline"
                                className={item.certification === "Pending"
                                  ? "bg-blue-500/10 text-blue-600"
                                  : "bg-green-500/10 text-green-600"}
                              >
                                {item.certification}
                              </Badge>
                            </TableCell>
                            <TableCell className="text-muted-foreground">{item.expiry}</TableCell>
                            <TableCell>
                              {item.status === "compliant" && (
                                <Badge className="bg-green-500/10 text-green-600 hover:bg-green-500/20">
                                  <CheckCircle className="h-3 w-3 mr-1" />
                                  Compliant
                                </Badge>
                              )}
                              {item.status === "warning" && (
                                <Badge className="bg-yellow-500/10 text-yellow-600 hover:bg-yellow-500/20">
                                  <AlertTriangle className="h-3 w-3 mr-1" />
                                  Action Needed
                                </Badge>
                              )}
                              {item.status === "pending" && (
                                <Badge variant="secondary">
                                  Pending Review
                                </Badge>
                              )}
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
                    <CardTitle className="text-lg">Fully Compliant</CardTitle>
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-4xl font-bold text-primary">118</div>
                    <p className="text-sm text-muted-foreground mt-2">Out of 127 suppliers</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-lg">Expiring Soon</CardTitle>
                    <AlertTriangle className="h-5 w-5 text-yellow-600" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-4xl font-bold text-primary">6</div>
                    <p className="text-sm text-muted-foreground mt-2">Within 30 days</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-lg">Documents Tracked</CardTitle>
                    <FileCheck className="h-5 w-5 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-4xl font-bold text-primary">542</div>
                    <p className="text-sm text-muted-foreground mt-2">Total active documents</p>
                  </CardContent>
                </Card>
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
