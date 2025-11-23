import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { MessageSquare, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const CommunicationHub = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="py-24 bg-gradient-to-br from-primary/10 to-background">
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center">
                  <MessageSquare className="h-8 w-8 text-primary" />
                </div>
                <h1 className="text-5xl font-bold">Communication Hub</h1>
              </div>
              <p className="text-xl text-muted-foreground mb-8">
                Integrated messaging system for seamless communication with your supplier network.
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
                    "Direct messaging with suppliers",
                    "Secure file sharing",
                    "Group conversations and channels",
                    "Email integration",
                    "Message threading and organization",
                    "Read receipts and notifications",
                    "Search and archive functionality",
                    "Mobile app support"
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
                    Centralize all supplier communications in one secure platform. Send direct messages, share files,
                    and collaborate in real-time without juggling multiple email threads and phone calls.
                  </p>
                  <p>
                    Create group channels for specific projects or trades, ensuring all relevant parties stay informed.
                    Integrate with your existing email system to capture all communications automatically.
                  </p>
                  <p>
                    Track conversation history, attach relevant documents, and search through past communications instantly.
                    Mobile apps ensure you stay connected with your suppliers wherever your work takes you.
                  </p>
                </div>
              </div>

              <div className="bg-secondary/30 rounded-lg p-8">
                <h2 className="text-3xl font-bold mb-4">Ready to improve communication?</h2>
                <p className="text-muted-foreground mb-6">
                  Connect with your suppliers more effectively today.
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

export default CommunicationHub;
