import React from 'react'
import { Component } from 'react';
import CartItems from './CartItems';


class Cart extends Component {
  constructor() {
    super();
    this.state = { quantity: 0, cart: [] };
  }
  cart = {};
  getName(event) {
    this.cart.name = event.target.value;
  }
  getPrice(event) {
    this.cart.price = event.target.value;
  }
  getImage(event) {
    this.cart.image = event.target.value;
  }

  AddCart(event) {
    this.state.cart.push({ ...this.cart, quantity: this.state.quantity });
    console.log("Items ", this.state.cart);
    this.setState({
      cart: this.state.cart,
    });
  }

  handleClickPositive() {
    this.setState({ quantity: this.state.quantity + 1 });
    this.cart.quantity = (this.state.quantity);

  }
  handleClickNegative() {
    this.setState({ quantity: this.state.quantity - 1 });
    //  this.cart.quantity = (this.state.quantity);
  }
  render() {
    return (
      <div style={{ "padding-left": "13%" }}>
        <form className="row g-3">
          <div className="col-auto">
            <label for="inputPassword2" className="visually-hidden">
              Name
            </label>
            <input
              onChange={this.getName.bind(this)}
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
              onChange={this.getImage.bind(this)}
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
              onChange={this.getPrice.bind(this)}
              type="text"
              className="form-control"
              id="Price"
              placeholder="Price"
            />
          </div>
          <div className="col-auto">
            <input
              type="button"
              value="-"
              onClick={this.handleClickNegative.bind(this)}
            />
            &nbsp;&nbsp;{this.state.quantity}&nbsp;&nbsp;
            <input
              type="button"
              value="+"
              onClick={this.handleClickPositive.bind(this)}
            />
          </div>
          <div className="col-auto">
            <button type="button" className="btn btn-primary mb-3">
              delete
            </button>
          </div>
          <div className="col-auto">
            <button
              onClick={this.AddCart.bind(this)}
              type="button"
              className="btn btn-primary mb-3"
            >
              Add
            </button>
          </div>
        </form>
        <CartItems data={this.state.cart} />
      </div>
    );
  }
}
export default Cart;


