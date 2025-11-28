import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Games from "./pages/Games";
import TopUp from "./pages/TopUp";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="min-h-screen bg-neutral-900 text-white">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/games" element={<Games />} />
        <Route path="/topup" element={<TopUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
