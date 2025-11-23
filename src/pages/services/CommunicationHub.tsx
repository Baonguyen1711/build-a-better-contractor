import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { MessageSquare, CheckCircle, Send, Paperclip } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const mockConversations = [
  { id: 1, supplier: "ABC Electrical Co.", lastMessage: "Materials will arrive by Thursday", time: "10 mins ago", unread: 2, status: "active" },
  { id: 2, supplier: "Prime Plumbing Services", lastMessage: "Invoice #2024-002 has been sent", time: "1 hour ago", unread: 0, status: "active" },
  { id: 3, supplier: "Elite Roofing Inc.", lastMessage: "Scheduling site visit for next week", time: "2 hours ago", unread: 1, status: "active" },
  { id: 4, supplier: "ProBuild Materials", lastMessage: "Order confirmation attached", time: "Yesterday", unread: 0, status: "completed" },
  { id: 5, supplier: "Foundation Masters", lastMessage: "Updated certificate uploaded", time: "2 days ago", unread: 0, status: "completed" },
];

const mockMessages = [
  { id: 1, sender: "ABC Electrical", message: "Good morning! The materials for project #2024-A are ready.", time: "09:15 AM", isSupplier: true },
  { id: 2, sender: "You", message: "Great! What's the estimated delivery time?", time: "09:18 AM", isSupplier: false },
  { id: 3, sender: "ABC Electrical", message: "Materials will arrive by Thursday afternoon. I'll send tracking info.", time: "09:20 AM", isSupplier: true },
];

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
                <h2 className="text-3xl font-bold mb-6">Communication Dashboard</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Recent Conversations</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {mockConversations.map((conv) => (
                          <div key={conv.id} className="flex items-start gap-3 p-3 rounded-lg hover:bg-accent cursor-pointer transition-colors">
                            <Avatar>
                              <AvatarFallback>{conv.supplier.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                            </Avatar>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center justify-between mb-1">
                                <p className="font-semibold truncate">{conv.supplier}</p>
                                {conv.unread > 0 && (
                                  <Badge variant="default" className="ml-2">{conv.unread}</Badge>
                                )}
                              </div>
                              <p className="text-sm text-muted-foreground truncate">{conv.lastMessage}</p>
                              <p className="text-xs text-muted-foreground mt-1">{conv.time}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Message Thread</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4 mb-4">
                        {mockMessages.map((msg) => (
                          <div key={msg.id} className={`flex ${msg.isSupplier ? 'justify-start' : 'justify-end'}`}>
                            <div className={`max-w-[80%] rounded-lg p-3 ${msg.isSupplier ? 'bg-secondary' : 'bg-primary text-primary-foreground'}`}>
                              <p className="text-xs font-semibold mb-1">{msg.sender}</p>
                              <p className="text-sm">{msg.message}</p>
                              <p className={`text-xs mt-1 ${msg.isSupplier ? 'text-muted-foreground' : 'opacity-70'}`}>{msg.time}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="icon">
                          <Paperclip className="h-4 w-4" />
                        </Button>
                        <div className="flex-1 flex gap-2">
                          <input 
                            type="text" 
                            placeholder="Type your message..." 
                            className="flex-1 px-3 py-2 border border-border rounded-md bg-background"
                          />
                          <Button size="icon">
                            <Send className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Active Chats</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-4xl font-bold text-primary">28</div>
                    <p className="text-sm text-muted-foreground mt-2">Ongoing conversations</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Messages Today</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-4xl font-bold text-primary">142</div>
                    <p className="text-sm text-muted-foreground mt-2">Sent & received</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Avg. Response Time</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-4xl font-bold text-primary">18m</div>
                    <p className="text-sm text-muted-foreground mt-2">Across all suppliers</p>
                  </CardContent>
                </Card>
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
