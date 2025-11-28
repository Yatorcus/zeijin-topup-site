import React from "react";
import { Link } from "react-router-dom";
import mlbb from "../assets/mlbb.jpg"; // example, replace with your images

export default function Home() {
  return (
    <div className="relative h-screen bg-gradient-to-b from-purple-900 via-black to-black">
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-5xl font-bold text-white mb-4">ZEIJIN TOPUP</h1>
        <p className="text-neutral-300 mb-6">Fast • Safe • Secure Gaming Top-up</p>
        <Link
          to="/games"
          className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg text-lg"
        >
          Top-up Now
        </Link>
      </div>
    </div>
  );
}
