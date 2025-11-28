import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Games from "./pages/Games";
import Topup from "./pages/Topup";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Games />} />
        <Route path="/games" element={<Games />} />
        <Route path="/topup/:gameName" element={<Topup />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
