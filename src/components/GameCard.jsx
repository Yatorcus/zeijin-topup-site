import { Link } from "react-router-dom";

export default function GameCard({ name, img }) {
  return (
    <Link to="/topup" className="block bg-neutral-800 rounded-lg overflow-hidden hover:scale-105 transition-transform">
      <img src={img} alt={name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-bold">{name}</h2>
      </div>
    </Link>
  );
}
