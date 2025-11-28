import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-black/30 backdrop-blur-md p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">ZEIJIN TOPUP</h1>

      <div className="flex gap-6 text-lg">
        <Link to="/">Home</Link>
        <Link to="/games">Games</Link>
        <Link to="/dashboard">Dashboard</Link>
      </div>
    </nav>
  );
}
