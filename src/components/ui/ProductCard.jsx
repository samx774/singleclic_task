
import React from "react";
import { Link } from "react-router-dom";
import Image from "./Image";

export default function ProductCard({ product, addToCart }) {
    return (
        <div className="border border-black/20 rounded-lg shadow-md p-4 flex flex-col justify-between">
            <Link to={`/product/${product.id}`}>
                <Image
                    src={product.image}
                    alt={product.title}
                    className="w-full h-48 object-contain mb-2"
                />
            </Link>
            
            <h2 className="text-lg font-semibold mb-1">{product.title}</h2>
            <p className="text-sm text-gray-600 mb-2 line-clamp-2">{product.description}</p>
            <div className="flex items-center justify-between mt-auto">
                <span className="font-bold text-green-600">${product.price}</span>
                <Link to={`/product/${product.id}`} className="text-blue-500 hover:underline">View</Link>
            </div>
            <button
                name="add-to-cart"
                onClick={(e) => {
                    addToCart(product);
                }}
                className="bg-black text-white px-3 py-1 w-full mt-3 cursor-pointer rounded hover:bg-black/80"
            >
                Add to Cart
            </button>
        </div>
    );
}
