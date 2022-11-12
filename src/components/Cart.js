import React from "react";
import { useState } from "react";
import CartItems from "./CartItems";
var cartItem = {};

function Cart() {
  var [cart, setCart] = useState([]);
  var [quantity, setQuantity] = useState(1);



  function getName(event) {
    // debugger;
    cartItem.name = event.target.value;
  }
  function getPrice(event) {
    // debugger;
    cartItem.price = event.target.value;
  }
  function getImage(event) {
    // debugger;
    cartItem.image = event.target.value;
  }

  function AddCart(event) {
    // debugger;
    // console.log(cartItem);
    cartItem.price *= quantity;
    cart.push({ ...cartItem, quantity: quantity });
    // console.log("Items ", this.state.cart);
    setCart([...cart]);
    document.getElementById("form").reset();
    cartItem.price /= quantity;
  }

  function handleClickPositive() {
    setQuantity(quantity + 1);
    // this.cart.quantity = (this.state.quantity) ;
  }
  function handleClickNegative() {
    if (quantity > 0)
      setQuantity(quantity - 1);
    //  this.cart.quantity = (this.state.quantity);
  }

  return (
    <div style={{ "padding-left": "13%" }}>
      <form className="row g-3" id="form">
        <div className="col-auto">
          <label for="inputPassword2" className="visually-hidden">
            Name
          </label>
          <input
            onChange={getName.bind(this)}
            type="text"
            className="form-control"
            id="name"
            placeholder="Name"

          />
        </div>
        <div className="col-auto">
          <label for="inputPassword2" className="visually-hidden">
            Image
          </label>
          <input
            onChange={getImage.bind(this)}
            type="text"
            className="form-control"
            id="inputimage"
            placeholder="Image"

          />
        </div>
        <div className="col-auto">
          <label for="inputPassword2" className="visually-hidden">
            Price
          </label>
          <input
            onChange={getPrice.bind(this)}
            type="text"
            className="form-control"
            id="Price"
            placeholder="Price"

          />
        </div>
        <div className="col-auto">
          <input type="button" value="-" onClick={handleClickNegative} />
          &nbsp;&nbsp;{quantity}&nbsp;&nbsp;
          <input type="button" value="+" onClick={handleClickPositive} />
        </div>
        <div className="col-auto">
          <button onClick={AddCart} type="button" className="btn btn-primary mb-3">
            Add
          </button>
        </div>
      </form>
      <CartItems data={cart} />
    </div>
  );
}

export default Cart;
