import { Button } from "@/components/ui/button";
import vitaLogo from "@/assets/vita-logo.png";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={vitaLogo} alt="VITA Logo" className="h-10 w-10" />
            <span className="text-xl font-bold">VITA</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <a href="/" className="text-sm font-medium hover:text-primary transition-colors">
              Home
            </a>
            <a href="/about" className="text-sm font-medium hover:text-primary transition-colors">
              About Us
            </a>
            <a href="/service" className="text-sm font-medium hover:text-primary transition-colors">
              Service
            </a>
            <a href="/career" className="text-sm font-medium hover:text-primary transition-colors">
              Career
            </a>
            <a href="/contact" className="text-sm font-medium hover:text-primary transition-colors">
              Contact
            </a>
          </nav>

          <div className="flex items-center gap-4">
            <Button variant="ghost">Sign In</Button>
            <Button>Get Started</Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
