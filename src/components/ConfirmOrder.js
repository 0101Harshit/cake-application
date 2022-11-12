import axios from "axios";
import { connect } from "react-redux";
import { toast } from "react-toastify";

function ConfirmOrder(props) {

  if (props.cartItem.length > 0) {
    function placeOrder() {
      var confirmOrder = {
        name: props.addressDetails.fullName,
        address: props.addressDetails.address,
        city: props.addressDetails.city,
        pincode: props.addressDetails.pincode,
        phone: props.addressDetails.phone,
        cakes: props.cartItem,
        price: props.totalPrice
      }


      axios({
        url: "https://apifromashu.herokuapp.com/api/addcakeorder",
        method: "post",
        data: confirmOrder,
        headers: {
          authtoken: localStorage.token
        }
      }).then((response) => {
        console.log(response);
        toast("Order Placed Successfully")



      }, (error) => { })

    }



    return (
      <div className="col-md-12">
        <div className="cart-block card">
          <div className="row">
            <div
              className="containe-fluid col-md-8 cart"
              style={{ padding: "20px", backgroundColor: " rgb(249, 249, 249)" }}
            >
              <div className="container cont px-lg-5 text-center">
                <div
                  className="row"
                  style={{
                    margin: "20px",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <h3>Confirm order</h3>
                  <hr />
                  <br />
                  Name : {props.addressDetails.fullName} <br /> Phone :{" "}
                  {props.addressDetails.phone}
                  <br />
                  Shipping Address : {props.addressDetails.address}{" "}
                  {props.addressDetails.city} {props.addressDetails.pincode}
                  <br />
                  <br />
                  <hr />
                  <label>
                    <b>Delivery</b>
                  </label>
                  Cash on delivery
                  <br />
                  <br />
                  <hr />
                </div>
                <button className="btn btn-outline-dark" onClick={placeOrder}>Place Order</button>
              </div>
            </div>
            <div className="col-md-4 summary">
              <div>
                <h5>
                  <b>Summary</b>
                </h5>
              </div>
              <hr />
              <div className="row">
                <div className="col">ITEMS {props.cartItem.length}</div>
                <div className="col text-right">₹ {props.totalPrice}</div>
              </div>
              <div className="row">
                <div className="col">Shipping</div>
                <div className="col text-right">₹ 0</div>
              </div>
              <div
                className="row mt-5"
                style={{
                  borderTop: "1px solid rgba(0, 0, 0, 0.1)",
                  padding: "2vh 0px",
                }}
              >
                <div className="col">TOTAL PRICE</div>
                <div className="col text-right">{props.totalPrice}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    window.location.href = "/";
    return;
  }
}
export default connect(function (state, props) {
  return {
    cartItem: state["cartItem"],
    totalPrice: state["totalPrice"],
    addressDetails: state["addressDetails"],
  };
})(ConfirmOrder);
