import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Users, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const TeamCollaboration = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="py-24 bg-gradient-to-br from-primary/10 to-background">
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h1 className="text-5xl font-bold">Team Collaboration</h1>
              </div>
              <p className="text-xl text-muted-foreground mb-8">
                Enable your entire team to access supplier information and collaborate efficiently.
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
                    "Role-based access control",
                    "Comprehensive activity logs",
                    "Real-time team notifications",
                    "Shared workspaces",
                    "Task assignment and tracking",
                    "Comment and mention system",
                    "Permission management",
                    "Team performance metrics"
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
                    Empower your team with centralized access to supplier information. Assign roles and permissions to
                    ensure team members see exactly what they need while maintaining security and control.
                  </p>
                  <p>
                    Create shared workspaces for projects, assign tasks to team members, and track progress in real-time.
                    Comment on supplier profiles, tag colleagues for input, and maintain transparency across your organization.
                  </p>
                  <p>
                    Monitor team activity with detailed logs, ensuring accountability and providing visibility into who's
                    doing what. Receive notifications for important updates and never miss critical supplier information.
                  </p>
                </div>
              </div>

              <div className="bg-secondary/30 rounded-lg p-8">
                <h2 className="text-3xl font-bold mb-4">Ready to collaborate better?</h2>
                <p className="text-muted-foreground mb-6">
                  Bring your team together with powerful collaboration tools.
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

export default TeamCollaboration;
