import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Service from "./pages/Service";
import Career from "./pages/Career";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import SupplierDatabase from "./pages/services/SupplierDatabase";
import OrderTracking from "./pages/services/OrderTracking";
import CommunicationHub from "./pages/services/CommunicationHub";
import PerformanceAnalytics from "./pages/services/PerformanceAnalytics";
import ComplianceManagement from "./pages/services/ComplianceManagement";
import TeamCollaboration from "./pages/services/TeamCollaboration";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/service/supplier-database" element={<SupplierDatabase />} />
          <Route path="/service/order-tracking" element={<OrderTracking />} />
          <Route path="/service/communication-hub" element={<CommunicationHub />} />
          <Route path="/service/performance-analytics" element={<PerformanceAnalytics />} />
          <Route path="/service/compliance-management" element={<ComplianceManagement />} />
          <Route path="/service/team-collaboration" element={<TeamCollaboration />} />
          <Route path="/career" element={<Career />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
