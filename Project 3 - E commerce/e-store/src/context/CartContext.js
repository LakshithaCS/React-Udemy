import React from "react";
import { createContext } from "react";
import { cartReducer } from "../components/CartReducer";
import { useReducer } from "react";

// global context
export const CartContext = createContext();

// initial values
const initialState = { cartItems: [] }

// provider function
const CartContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(cartReducer, initialState);

    // add product callback function
    const addProduct = payload => {
        dispatch({ type: "ADD", payload });
    }

    const removeProduct = payload => {
        dispatch({ type: "REMOVE", payload });
    }

    const increseQty = payload => {
        dispatch({ type: "INCQTY", payload });
    }

    const decreseQty = payload => {
        dispatch({ type: "DECQTY", payload });
    }

    const clear = payload => {
        dispatch({ type: "CLEAR", undefined });
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