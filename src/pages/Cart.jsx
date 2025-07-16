
import React from "react";
import { Helmet } from "react-helmet";
import { FiMinus, FiPlus } from "react-icons/fi";
import { Link } from "react-router-dom";
import Image from "../components/ui/Image";
import { useCart } from "../context/CartContext";

export default function Cart() {
    const { cartItems, removeFromCart, totalPrice, increaseQty, decreaseQty, clearCart } = useCart();

    return (
        <main>
            <Helmet>
                <title>Cart</title>
            </Helmet>
            <section className="container">
                <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
                    {cartItems.length > 0 && (
                        <button onClick={clearCart} className="bg-red-700 cursor-pointer hover:bg-red-800 text-white px-4 py-2 rounded">Clear Cart</button>
                    )}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="md:col-span-2">
                        {cartItems.length === 0 ? (
                            <p className="text-2xl">
                                Cart is empty. <Link to="/" className="text-blue-500 underline">Go shop</Link>
                            </p>
                        ) : (
                            cartItems.map((item) => (
                                <div
                                    key={item.id}
                                    className="flex items-center gap-4 mb-4 p-4 border rounded shadow"
                                >
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        className="w-20 h-20 object-contain"
                                    />
                                    <div className="flex-1">
                                        <h3 className="font-semibold">{item.title}</h3>
                                        <p className="text-sm text-gray-600">${item.price} × {item.quantity}</p>
                                    </div>
                                    <div className="flex items-center gap-2 mt-2">
                                        <button
                                            onClick={() => decreaseQty(item.id)}
                                            className="p-1 cursor-pointer bg-gray-200 rounded hover:bg-gray-300"
                                        >
                                            <FiMinus size={14} />
                                        </button>

                                        <span className="px-2">{item.quantity}</span>

                                        <button
                                            onClick={() => increaseQty(item.id)}
                                            className="p-1 cursor-pointer bg-gray-200 rounded hover:bg-gray-300"
                                        >
                                            <FiPlus size={14} />
                                        </button>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>

                    <div className="border rounded shadow p-6 sticky top-20 h-fit">
                        <h2 className="text-xl font-bold mb-4">Order Summary</h2>
                        <div className="flex justify-between mb-4">
                            <span>Total Items:</span>
                            <span>{cartItems.reduce((sum, item) => sum + item.quantity, 0)}</span>
                        </div>
                        <div className="flex justify-between mb-4">
                            <span>Total Price:</span>
                            <span className="font-semibold">${totalPrice.toFixed(2)}</span>
                        </div>
                        <button
                            onClick={() => alert("Proceeding to checkout...")}
                            className="w-full cursor-pointer bg-black disabled:opacity-50 disabled:cursor-not-allowed hover:bg-black/80 text-white py-2 rounded"
                            disabled={cartItems.length === 0}
                        >
                            Proceed to Checkout
                        </button>
                    </div>
                </div>
            </section>
        </main>
    );
}
