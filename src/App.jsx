import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import useLanguage from "./hooks/useLanguage";
import AppRoutes from "./routes";
import Navbar from "./components/ui/Navbar";
import { Toaster } from "react-hot-toast";
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
    </QueryClientProvider>
  );
}

export default App;
