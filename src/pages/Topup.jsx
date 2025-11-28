import React, { useState } from "react";

export default function TopUp() {
  const [uid, setUid] = useState("");
  const [server, setServer] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Top-up Requested:\nUID: ${uid}\nServer: ${server}\nAmount: ${amount}`);
  };

  return (
    <div className="p-10 max-w-md mx-auto">
      <h1 className="text-3xl font-bold mb-6">Top-up Form</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="UID"
          value={uid}
          onChange={(e) => setUid(e.target.value)}
          className="p-3 rounded bg-neutral-800 border border-neutral-700 text-white"
          required
        />
        <input
          type="text"
          placeholder="Server"
          value={server}
          onChange={(e) => setServer(e.target.value)}
          className="p-3 rounded bg-neutral-800 border border-neutral-700 text-white"
          required
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="p-3 rounded bg-neutral-800 border border-neutral-700 text-white"
          required
        />
        <button className="bg-purple-600 hover:bg-purple-700 text-white p-3 rounded font-bold">
          Submit
        </button>
      </form>
    </div>
  );
}
