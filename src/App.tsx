import { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index";
import Resume from "./pages/Resume";
import NotFound from "./pages/NotFound";
import GlobalGlassCursor from "./components/GlobalGlassCursor";
import { installPointerListener } from "./lib/pointer";

const queryClient = new QueryClient();

const App = () => {
  // Install the single shared pointer listener once at mount
  useEffect(() => {
    installPointerListener();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        {/* Global frosted-glass cursor — renders above all page content */}
        <GlobalGlassCursor />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
