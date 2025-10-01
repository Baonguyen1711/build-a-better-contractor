import { UserPlus, Building2, LineChart, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    title: "Sign Up & Setup",
    description: "Create your account and set up your contractor profile in minutes.",
    number: "01",
  },
  {
    icon: Building2,
    title: "Add Suppliers",
    description: "Import existing suppliers or discover new ones from our verified directory.",
    number: "02",
  },
  {
    icon: LineChart,
    title: "Track & Manage",
    description: "Monitor orders, track performance, and communicate with your supplier network.",
    number: "03",
  },
  {
    icon: CheckCircle,
    title: "Build Better",
    description: "Make data-driven decisions and complete projects on time and within budget.",
    number: "04",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-24">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            How It <span className="text-primary">Works</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Get started in four simple steps and transform how you manage suppliers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={step.title} className="relative">
              {/* Connector Line (hidden on mobile, shown on larger screens) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[60%] w-full h-0.5 bg-border -z-10" />
              )}
              
              <div className="text-center">
                <div className="relative inline-flex items-center justify-center w-24 h-24 rounded-full bg-primary/10 mb-6">
                  <span className="absolute -top-2 -right-2 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                    {step.number}
                  </span>
                  <step.icon className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
