
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes } from "react-router-dom";
import PageTransition from "./components/transitions/PageTransition";
import { MainRoutes } from "./routes/MainRoutes";
import { ModuleRoutes } from "./routes/ModuleRoutes";
import { AuthRoutes } from "./routes/AuthRoutes";

// Create a new query client
const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <BrowserRouter>
          <PageTransition>
            <Routes>
              <MainRoutes />
              <ModuleRoutes />
              <AuthRoutes />
            </Routes>
          </PageTransition>
          <Toaster />
          <Sonner />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
