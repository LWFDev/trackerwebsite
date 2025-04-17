
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageTransition from "./components/transitions/PageTransition";
import { MainRoutes } from "./routes/MainRoutes";
import { ModuleRoutes } from "./routes/ModuleRoutes";
import { AuthRoutes } from "./routes/AuthRoutes";
import Layout from "./components/layout/Layout";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <PageTransition>
          <div className="flex flex-col min-h-screen">
            <Routes>
              <MainRoutes />
              <ModuleRoutes />
              <AuthRoutes />
              
              <Route path="*" element={<Layout><NotFound /></Layout>} />
            </Routes>
          </div>
        </PageTransition>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
