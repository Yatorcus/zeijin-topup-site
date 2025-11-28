import { Link } from "react-router-dom";
import { games } from "../data/games";

export default function Games() {
  return (
    <div className="max-w-4xl mx-auto mt-10 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {games.map((game) => (
        <Link
          key={game.name}
          to={`/topup/${game.name.replace(/\s/g, "")}`}
        >
          <div className="bg-white shadow-md rounded-lg hover:scale-105 transition-transform flex items-center justify-center h-24">
            <h2 className="font-bold text-lg text-center">{game.name}</h2>
          </div>
        </Link>
      ))}
    </div>
  );
}
