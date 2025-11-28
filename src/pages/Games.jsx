import React from "react";
import GameCard from "../components/GameCard";
import mlbb from "../assets/mlbb.jpg";
import genshin from "../assets/genshin.jpg";
import codm from "../assets/codm.png";
import valorant from "../assets/valorant.jpg";

const games = [
  { name: "MLBB", img: mlbb },
  { name: "Genshin Impact", img: genshin },
  { name: "COD Mobile", img: codm },
  { name: "Valorant", img: valorant },
];


export default function Games() {
  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold mb-6">Games</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {games.map((game) => (
          <GameCard key={game.name} name={game.name} img={game.img} />
        ))}
      </div>
    </div>
  );
}
