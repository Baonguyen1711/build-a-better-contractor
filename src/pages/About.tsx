import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Users, Target, Award, Globe } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-br from-primary/10 to-background">
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-5xl sm:text-6xl font-bold mb-6">
                About <span className="text-primary">VITA</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                We're transforming how general contractors manage their supplier relationships,
                one connection at a time.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20">
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              <div>
                <Target className="h-12 w-12 text-primary mb-4" />
                <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
                <p className="text-muted-foreground text-lg">
                  To empower general contractors with intelligent tools that streamline supplier
                  management, reduce costs, and enable better project outcomes through data-driven
                  decision making.
                </p>
              </div>
              <div>
                <Globe className="h-12 w-12 text-primary mb-4" />
                <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
                <p className="text-muted-foreground text-lg">
                  To become the industry standard platform connecting contractors and suppliers,
                  fostering transparency, efficiency, and collaboration across the construction industry.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-secondary/30">
          <div className="container px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center mb-12">Our Values</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="text-center">
                <Award className="h-10 w-10 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Excellence</h3>
                <p className="text-muted-foreground">
                  We strive for excellence in every feature, interaction, and customer experience.
                </p>
              </div>
              <div className="text-center">
                <Users className="h-10 w-10 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Collaboration</h3>
                <p className="text-muted-foreground">
                  Building strong partnerships between contractors and suppliers is at our core.
                </p>
              </div>
              <div className="text-center">
                <Target className="h-10 w-10 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Innovation</h3>
                <p className="text-muted-foreground">
                  We continuously innovate to solve real problems in the construction industry.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20">
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-4xl font-bold mb-6">Built by Industry Experts</h2>
              <p className="text-xl text-muted-foreground">
                Our team combines decades of construction industry experience with cutting-edge
                technology expertise to build solutions that truly understand your needs.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
