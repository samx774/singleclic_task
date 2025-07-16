
import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center p-6">
      <h1 className="text-5xl font-bold mb-4">404</h1>
      <p className="text-xl mb-4">Oops! The page you're looking for doesn't exist.</p>
      <Link
        to="/"
        className="bg-black text-white px-4 py-2 rounded hover:bg-black/80 transition"
      >
        Go Back Home
      </Link>
    </div>
  );
}
