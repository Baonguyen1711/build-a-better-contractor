import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Users, CheckCircle, UserCheck, Activity, Bell } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const teamMembers = [
  { name: "John Mitchell", role: "Project Manager", access: "Full Access", activity: "Active now", projects: 12 },
  { name: "Sarah Chen", role: "Procurement Lead", access: "Full Access", activity: "2 hours ago", projects: 8 },
  { name: "Mike Rodriguez", role: "Site Supervisor", access: "View Only", activity: "Active now", projects: 15 },
  { name: "Emily Watson", role: "Accounts Manager", access: "Finance Access", activity: "Yesterday", projects: 6 },
  { name: "David Brown", role: "Quality Inspector", access: "View Only", activity: "Active now", projects: 9 },
];

const recentActivity = [
  { user: "John Mitchell", action: "Updated supplier ABC Electrical Co.", time: "5 minutes ago" },
  { user: "Sarah Chen", action: "Added new purchase order PO-2024-006", time: "1 hour ago" },
  { user: "Mike Rodriguez", action: "Commented on Elite Roofing project", time: "2 hours ago" },
  { user: "Emily Watson", action: "Approved invoice #2024-045", time: "3 hours ago" },
];

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
                <h2 className="text-3xl font-bold mb-6">Team Overview</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Team Members</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {teamMembers.map((member, index) => (
                          <div key={index} className="flex items-center gap-3 p-3 rounded-lg border">
                            <Avatar>
                              <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                            </Avatar>
                            <div className="flex-1 min-w-0">
                              <p className="font-semibold">{member.name}</p>
                              <p className="text-sm text-muted-foreground">{member.role}</p>
                              <div className="flex items-center gap-2 mt-1">
                                <Badge variant="outline" className="text-xs">{member.access}</Badge>
                                <span className="text-xs text-muted-foreground">{member.projects} projects</span>
                              </div>
                            </div>
                            <div className="text-right">
                              <Badge variant={member.activity === "Active now" ? "default" : "secondary"} className="text-xs">
                                {member.activity}
                              </Badge>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Recent Activity</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {recentActivity.map((activity, index) => (
                          <div key={index} className="flex items-start gap-3 pb-4 border-b last:border-0 last:pb-0">
                            <Avatar className="h-8 w-8">
                              <AvatarFallback className="text-xs">
                                {activity.user.split(' ').map(n => n[0]).join('')}
                              </AvatarFallback>
                            </Avatar>
                            <div className="flex-1 min-w-0">
                              <p className="text-sm">
                                <span className="font-semibold">{activity.user}</span>
                                {' '}
                                <span className="text-muted-foreground">{activity.action}</span>
                              </p>
                              <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div className="grid md:grid-cols-4 gap-6">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Team Members</CardTitle>
                    <Users className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-primary">24</div>
                    <p className="text-xs text-muted-foreground mt-1">Across 5 departments</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Active Users</CardTitle>
                    <UserCheck className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-primary">18</div>
                    <p className="text-xs text-green-600 mt-1">Online right now</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Daily Actions</CardTitle>
                    <Activity className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-primary">156</div>
                    <p className="text-xs text-muted-foreground mt-1">Updates & changes</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Notifications</CardTitle>
                    <Bell className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-primary">42</div>
                    <p className="text-xs text-muted-foreground mt-1">Sent today</p>
                  </CardContent>
                </Card>
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
