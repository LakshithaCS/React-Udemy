// state = current state
// this function returns next state of the corresponding action
export const cartReducer = (state, action) => {

    let index = -1;
    if (action.payload) {
        index = state.cartItems.findIndex(item => item.id === action.payload.id);
    }


    switch (action.type) {
        case "ADD":
        case "INCQTY":
            if (index === -1) { // no product found, make quantity == 1
                state.cartItems.push({ ...action.payload, quantity: 1 });
            } else { // already have the same product, increase the quantity
                state.cartItems[index].quantity++;
            }
            break;

        case "REMOVE":
            if (index > -1) {
                state.cartItems.splice(index, 1); //remove that item from cart
            }
            break;

        case "DECQTY":
            if (index > -1) {
                state.cartItems[index].quantity--;
            }
            break;

        case "CLEAR":
            state.cartItems = []
            break;

        default:
    }

    return state;
}