// state = current state
// this function returns next state of the corresponding action
export const cartReducer = (state, action) => {

    const Storage = (cartItems) => {
        localStorage.setItem('cart', JSON.stringify(cartItems.length > 0 ? cartItems : []));
    }

    let index = -1;
    if (action.payload) {
        index = state.cartItems.findIndex(item => item.id === action.payload.id);
    }

    let cart = [...state.cartItems] //copy cart items

    switch (action.type) {
        case "ADD":
        case "INCQTY":
            if (index === -1) { // no product found, make quantity == 1
                cart.push({ ...action.payload, quantity: 1 });
            } else { // already have the same product, increase the quantity
                cart[index].quantity++;
            }
            break;

        case "REMOVE":
            if (index > -1) {
                cart = state.cartItems.filter(item => item.id !== action.payload.id)
            }
            break;

        case "DECQTY":
            if (index > -1 && cart[index].quantity > 1) {
                cart[index].quantity--;
            }
            break;

        case "CLEAR":
            cart = []
            break;

        default:
    }

    state.cartItems = cart
    Storage(cart);

    return state;
}