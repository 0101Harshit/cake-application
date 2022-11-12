import axios from "axios";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";

function CartItems(props) {
  var navigate = useNavigate();
  var [cart, setCart] = useState([]);
  var [spinner, setSpinner] = useState(false);
  var [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    setSpinner(true)
    axios({
      url: "https://apifromashu.herokuapp.com/api/cakecart",
      method: "post",
      data: {},
      headers: { authtoken: localStorage.token },
    }).then(
      (response) => {
        setCart(response.data.data);
        setSpinner(false)
        var total = 0;
        response.data.data.map((item, key) => {
          total = item.price * item.quantity + total;
        });
        setTotalPrice(total);
      },
      (error) => {
        setSpinner(false)
      }
    );
  }, []);

  function checkout() {
    props.dispatch({
      type: "CARTCOUNT",
      payload: cart,
    });
    props.dispatch({
      type: "TOTALPRICE",

      payload: totalPrice,
    });
    navigate("/checkout/summary");
  }
  function addOneItem(index) {
    cart[index].quantity += 1;
    setCart([...cart]);
    var total = 0;
    cart.map((item, key) => {
      total = item.price * item.quantity + total;
    });
    setTotalPrice(total);
    axios({
      url: "https://apifromashu.herokuapp.com/api/addcaketocart",
      method: "post",
      data: {
        cakeid: cart[index].cakeid,
        name: cart[index].name,
        price: cart[index].price,
        image: cart[index].image,
        weight: cart[index].weight,
      },
      headers: {
        authtoken: localStorage.token,
      },
    }).then(
      (response) => { },
      (error) => { }
    );
  }
  function removeOneItem(index) {
    if (cart[index].quantity > 1) {
      cart[index].quantity -= 1;
      setCart([...cart]);
      var total = 0;
      cart.map((item, key) => {
        total = item.price * item.quantity + total;
      });
      setTotalPrice(total);
      axios({
        url: "https://apifromashu.herokuapp.com/api/removeonecakefromcart",
        method: "post",
        data: {
          cakeid: cart[index].cakeid,
        },
        headers: {
          authtoken: localStorage.token,
        },
      }).then(
        (response) => { },
        (error) => { }
      );

    }

  }

  function removeItem(cakeid, index) {
    cart.splice(index, 1);
    setCart(cart);

    axios({
      url: "https://apifromashu.herokuapp.com/api/removecakefromcart",
      method: "post",
      data: { cakeid: cakeid },
      headers: {
        authtoken: localStorage.token,
      },
    }).then(
      (response) => {
        var total = 0;
        cart.map((item, key) => {
          total = item.price * item.quantity + total;
        });
        setTotalPrice(total);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  if (cart.length > 0) {
    return (

      <div className="cartItem_table m-5">
        {spinner ? (
          <>
            <div className="spinner-grow text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-grow text-secondary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-grow text-success" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-grow text-danger" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-grow text-warning" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-grow text-info" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-grow text-light" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-grow text-dark" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </>
        ) : <table className="table table-striped mt-5">
          <thead>
            <tr>
              <th scope="col">Product Image</th>
              <th scope="col">Product Name</th>

              <th scope="col">Product Quantity</th>
              <th scope="col"> Price</th>

              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {cart.map((each, index) => {
              return (
                <tr className="cartItem_table">
                  <td>
                    <img src={each.image} width="80" height="60" />
                  </td>
                  <td>{each.name}</td>

                  <td>
                    <button
                      className="btn btn-light"
                      onClick={() => removeOneItem(index)}
                    >
                      -
                    </button>
                    &nbsp;{each.quantity}&nbsp;
                    <button
                      className="btn btn-light"
                      onClick={() => addOneItem(index)}
                    >
                      +
                    </button>
                  </td>
                  <td>₹ {each.price}</td>

                  <td>
                    <button
                      className="btn btn-light"
                      onClick={() => removeItem(each.cakeid, index)}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              );
            })}
            <tr>
              <td></td>
              <td></td>

              <td>Total Price</td>
              <td>₹ {totalPrice}</td>
              <td>
                <button className="btn btn-dark" onClick={checkout}>
                  Checkout
                </button>
              </td>
            </tr>
          </tbody>
        </table>}

      </div>
    );
  } else {
    return (
      <div style={{ display: "flex", justifyContent: "center", margin: "20px" }}>
        {spinner ? (
          <>
            <div className="spinner-grow text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-grow text-secondary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-grow text-success" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-grow text-danger" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-grow text-warning" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-grow text-info" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-grow text-light" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-grow text-dark" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </>
        ) : <h4>Cart is empty</h4>}

      </div>
    );
  }


}
export default connect()(CartItems);
