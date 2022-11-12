export function Reducer(
  state = {
    isLoggedIn: localStorage.token ? true : false,
    cartItem: [],
    totalPrice: 0,
    addressDetails:{},
    userName:""
  },
  action
) {
  switch (action.type) {
    case "LOGIN_SUCCESS": {
      state = { ...state };
      state["isLoggedIn"] = true;
      return state;
    }

    case "CARTCOUNT": {
      state = { ...state };
      state["cartItem"] = action.payload;
      return state;
    }

    case "TOTALPRICE": {
      state = { ...state };
      state["totalPrice"] = action.payload;
      return state;
    }
    case "ADDRESS": {
        state = { ...state };
        state["addressDetails"] = action.payload;
        return state;
      }
    case "USERNAME":{
        state={...state};
        state["userName"]=action.payload;
        return state;
    }

    default:
      return state;
  }
}
