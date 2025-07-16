
import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";

export default function Navbar() {
    const { cartCount } = useCart();
    return (
        <header className="fixed bg-black top-0 w-full z-50">
            <nav className="container text-white p-4 flex justify-between items-center shadow-md">
                <div className="text-2xl font-bold">
                    <Link to="/">Singleclic</Link>
                </div>
                <div className="flex items-center gap-6">
                    <Link to="/" className="hover:underline">
                        Home
                    </Link>
                    <div className="relative">
                        <Link to="/cart">
                            <FiShoppingCart size={24} />
                        </Link>
                        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                            {cartCount}
                        </span>
                    </div>
                </div>
            </nav>
        </header>
    );
}
