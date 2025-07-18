import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Analytics } from "@vercel/analytics/react";
import { Toaster } from "react-hot-toast";
import "./App.css";
import Navbar from "./components/ui/Navbar";
import useLanguage from "./hooks/useLanguage";
import AppRoutes from "./routes";
function App() {
  const changeLanguage = useLanguage();
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster />
      <Navbar />
      <div className="App py-20">
        <AppRoutes />
      </div>
      <Analytics />
    </QueryClientProvider>
  );
}

export default App;
