import { createStore } from "redux";
import cartReducer from './cartReducer'

const cartStore = createStore(cartReducer);

export default cartStore
