import React from "react";
import { createContext } from "react";
import { cartReducer } from "../components/CartReducer";
import { useReducer } from "react";

// global context
export const CartContext = createContext();

const Storage = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [];

// initial values
const initialState = { cartItems: Storage }

// provider function
const CartContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(cartReducer, initialState);

    // add product callback function
    const addProduct = payload => {
        dispatch({ type: "ADD", payload });
    }

    const removeProduct = payload => {
        dispatch({ type: "REMOVE", payload });
        return state.cartItems;
    }

    const increseQty = payload => {
        dispatch({ type: "INCQTY", payload });
        return state.cartItems;
    }

    const decreseQty = payload => {
        dispatch({ type: "DECQTY", payload });
        return state.cartItems;
    }

    const clear = () => {
        dispatch({ type: "CLEAR", undefined });
        return [];
    }

    const getItems = () => {
        return state.cartItems;
    }

    // this json has 'addProduct' function and 'state'
    const contextValue = {
        addProduct,
        removeProduct,
        increseQty,
        decreseQty,
        clear,
        getItems,
        ...state
    }

    return (
        <CartContext.Provider value={contextValue}> {/* this make 'addProduct' and 'state' available to React components */}
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;