import React, { createContext, useContext, useEffect, useReducer } from "react";
import toast from "react-hot-toast";

const getInitialCart = () => {
    const stored = localStorage.getItem("cartItems");
    return {
        cartItems: stored ? JSON.parse(stored) : [],
    };
};

function cartReducer(state, action) {
    switch (action.type) {
        case "ADD_ITEM":
            const existing = state.cartItems.find(item => item.id === action.payload.id);
            if (existing) {
                return {
                    ...state,
                    cartItems: state.cartItems.map(item =>
                        item.id === action.payload.id
                            ? { ...item, quantity: item.quantity + 1 }
                            : item
                    ),
                };
            } else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }],
                };
            }

        case "REMOVE_ITEM":
            return {
                ...state,
                cartItems: state.cartItems.filter(item => item.id !== action.payload),
            };

        case "CLEAR_CART":
            return {
                ...state,
                cartItems: [],
            };

        case "INCREASE_QUANTITY":
            return {
                ...state,
                cartItems: state.cartItems.map(item =>
                    item.id === action.payload ? { ...item, quantity: item.quantity + 1 } : item
                ),
            };

        case "DECREASE_QUANTITY":
            return {
                ...state,
                cartItems: state.cartItems
                    .map(item =>
                        item.id === action.payload
                            ? { ...item, quantity: item.quantity - 1 }
                            : item
                    )
                    .filter(item => item.quantity > 0),
            };

        default:
            return state;
    }
}

const CartContext = createContext();

export function CartProvider({ children }) {
    const [state, dispatch] = useReducer(cartReducer, {}, getInitialCart);

    const addToCart = (product) => {
        dispatch({ type: "ADD_ITEM", payload: product });
        toast.success("Product added to cart");
    };

    const removeFromCart = (id) => {
        dispatch({ type: "REMOVE_ITEM", payload: id });
        toast.success("Product removed from cart");
    };

    const clearCart = () => {
        dispatch({ type: "CLEAR_CART" });
        toast.success("Cart cleared");
    };

    const increaseQty = (id) => {
        dispatch({ type: "INCREASE_QUANTITY", payload: id });
    };

    const decreaseQty = (id) => {
        dispatch({ type: "DECREASE_QUANTITY", payload: id });
    };

    const cartCount = state.cartItems.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = state.cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    }, [state.cartItems]);

    return (
        <CartContext.Provider
            value={{
                cartItems: state.cartItems,
                addToCart,
                removeFromCart,
                clearCart,
                cartCount,
                totalPrice,
                increaseQty,
                decreaseQty,
            }}
        >
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    return useContext(CartContext);
}
