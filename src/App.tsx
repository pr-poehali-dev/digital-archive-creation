import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Museums from "./pages/Museums";
import Documents from "./pages/Documents";
import Search from "./pages/Search";
import Indexes from "./pages/Indexes";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import DocumentDetail from "./pages/DocumentDetail";
import Admin from "./pages/admin/Admin";
import DocumentForm from "./pages/admin/DocumentForm";
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
          <Route path="/museums" element={<Museums />} />
          <Route path="/documents" element={<Documents />} />
          <Route path="/search" element={<Search />} />
          <Route path="/indexes" element={<Indexes />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/document/:id" element={<DocumentDetail />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/documents/new" element={<DocumentForm />} />
          <Route path="/admin/documents/:id/edit" element={<DocumentForm />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
