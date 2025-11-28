import { useParams, useNavigate } from "react-router-dom";
import { games } from "../data/games";

export default function Topup() {
  const { gameName } = useParams();
  const navigate = useNavigate();
  const game = games.find((g) => g.name.replace(/\s/g, "") === gameName);

  if (!game)
    return <div className="text-center mt-10 text-red-600">Game not found</div>;

  return (
    <div className="flex flex-col items-center mt-10">
      {/* Stylish Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="mb-6 px-6 py-2 bg-white shadow-md rounded-full flex items-center gap-2 hover:shadow-xl transition transform hover:-translate-y-1"
      >
        <span className="text-blue-500 font-semibold">← Back</span>
      </button>

      {/* Game Image with Hover Zoom */}
      <div className="overflow-hidden rounded-lg shadow-md hover:scale-105 transition-transform">
        <img
          src={game.image}
          alt={game.name}
          style={{ width: "250px", height: "250px", objectFit: "cover" }}
        />
      </div>

      {/* Game Title */}
      <h1 className="text-3xl font-bold mt-4">{game.name}</h1>
    </div>
  );
}
