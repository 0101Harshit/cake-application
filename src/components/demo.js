
import React from "react";
import { connect } from "react-redux";
import CartItems from "./CartItems";

function demo(props)
{
    return(
        <CartItems data={props.items}/>
    )
   
}
export default connect(function(state,props){

   
    return{
      items:state["Carts"]
    }
  })(demo);
// const mapStateToProps = state =>{
//      console.log(state)
//       return{
//           items:state.CartReducer
//       }
//   }
//   export default connect(mapStateToProps) (demo);
