import { useRoutes } from "react-router";
import "./App.css";
import Home from "./pages/Home";
import Stays from "./pages/Stays";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

// Parent komponent som styrer visninger af andre komponenter
function App() {
  // Vha react-router definerer vi hvilke komponenter der hører til hvilke paths
  const routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/stays", element: <Stays /> },
  ]);

  return (
    <div className="app">
      <Navigation />
      <main>{routes}</main>
      <Footer />
    </div>
  );
}

export default App;
