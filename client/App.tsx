import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Demo from "./pages/Demo";
import Index from "./pages/Index";
import Auth from "./pages/Auth";
import OTP from "./pages/OTP";
import Wizard from "./pages/Wizard";
import Quote from "./pages/Quote";
import Payment from "./pages/Payment";
import WhatHappensNext from "./pages/WhatHappensNext";
import Success from "./pages/Success";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/otp" element={<OTP />} />
          <Route path="/wizard" element={<Wizard />} />
          <Route path="/quote" element={<Quote />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/what-happens-next" element={<WhatHappensNext />} />
          <Route path="/success" element={<Success />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
