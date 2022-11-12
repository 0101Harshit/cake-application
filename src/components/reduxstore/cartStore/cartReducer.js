const initProduct = {
    numberCart: 0,
    Carts: []
}
function cartReducer(state = initProduct, action) {

    switch (action.type) {
        case "ADD_CART":
            if (state.numberCart == 0) {
                let cart = {
                    cakeid: action.payload.cakeid,
                    quantity: 1,
                    name: action.payload.name,
                    image: action.payload.image,
                    price: action.payload.price,
                    weight: action.payload.weight
                }
                state.Carts.push(cart);
                state["numberCart"]=state.numberCart+1
                console.log(state);
            }
            else {
                let check = false;
                state.Carts.map((item, key) => {
                    if (item.cakeid == action.payload.cakeid) {
                        state.Carts[key].quantity++;
                        check = true;
                    }
                });
                if (!check) {
                    let _cart = {
                        cakeid: action.payload.cakeid,
                        quantity: 1,
                        name: action.payload.name,
                        image: action.payload.image,
                        price: action.payload.price,
                        weight: action.payload.weight
                    }
                    state["numberCart"]=state.numberCart+1
                    state.Carts.push(_cart);
                }
            }
            return {
                ...state,
                numberCart: state.numberCart + 1
            }
        // case INCREASE_QUANTITY:
        //     state.numberCart++
        //     state.Carts[action.payload].quantity++;

        //     return {
        //         ...state
        //     }
        // case DECREASE_QUANTITY:
        //     let quantity = state.Carts[action.payload].quantity;
        //     if (quantity > 1) {
        //         state.numberCart--;
        //         state.Carts[action.payload].quantity--;
        //     }

        //     return {
        //         ...state
        //     }
        // case DELETE_CART:
        //     let quantity_ = state.Carts[action.payload].quantity;
        //     return {
        //         ...state,
        //         numberCart: state.numberCart - quantity_,
        //         Carts: state.Carts.filter(item => {
        //             return item.id != state.Carts[action.payload].id
        //         })

        //     }
        default:
            return state;
    }
}
export default cartReducer;