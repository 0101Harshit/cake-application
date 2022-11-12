import { connect } from "react-redux";
import { useNavigate } from "react-router";
import "./summary.css";
var address = {
  fullName: "",
  phone: "",
  address: "",
  city: "",
  pincode: "",
};
function Address(props) {
  var navigate = useNavigate();
  if (props.cartItem.length > 0) {


    function getFullName(event) {
      document.getElementById("fullname").innerHTML = "";
      document.getElementById("Fullname").style.borderColor = "black";
      address.fullName = event.target.value;
    }
    function getPhone(event) {
      document.getElementById("phone").innerHTML = "";
      document.getElementById("Phone").style.borderColor = "black";
      address.phone = event.target.value;
    }
    function getAddressLine(event) {
      document.getElementById("address").innerHTML = "";
      document.getElementById("Address").style.borderColor = "black";

      address.address = event.target.value;
    }
    function getCity(event) {
      document.getElementById("city").innerHTML = "";
      document.getElementById("City").style.borderColor = "black";

      address.city = event.target.value;
    }
    function getPincode(event) {
      document.getElementById("pincode").innerHTML = "";
      document.getElementById("Pincode").style.borderColor = "black";

      address.pincode = event.target.value;
    }

    function addAddress() {
      if (address.name == "") {
        document.getElementById("fullname").innerHTML = "Empty field!";
        document.getElementById("Fullname").style.borderColor = "red";
        return false;
      }
      if (address.phone == "") {
        document.getElementById("phone").innerHTML = "Empty field!";
        document.getElementById("Phone").style.borderColor = "red";
        return false;
      }
      if (address.address == "") {
        document.getElementById("address").innerHTML = "Empty field!";
        document.getElementById("Address").style.borderColor = "red";
        return false;
      }
      if (address.city == "") {
        document.getElementById("city").innerHTML = "Empty field!";
        document.getElementById("City").style.borderColor = "red";
        return false;
      }
      if (address.pincode == "") {
        document.getElementById("pincode").innerHTML = "Empty field!";
        document.getElementById("Pincode").style.borderColor = "red";
        return false;
      }

      props.dispatch({
        type: "ADDRESS",
        payload: address,
      });

      navigate("/checkout/confirm");
    }
    return (
      <div className="col-md-12">
        <div className="cart-block card">
          <div className="row">
            <div className="col-md-8 cart">
              <div className="title">
                <div className="row m-0">
                  <div className="col">
                    <h4>
                      <b>Order Address</b>
                    </h4>
                  </div>
                </div>
              </div>
              <hr />
              <form className="form">
                <div className="col">
                  <div className="form-group">
                    <label for="fullName">Fullname</label>
                    <input
                      type="text"
                      className="form-control"
                      id="Fullname"
                      placeholder="Fullname"
                      onChange={getFullName}
                    />
                    <small id="fullname" className="form-text "></small>
                  </div>
                  <div className="form-group">
                    <label for="phone">Phone</label>
                    <input
                      type="text"
                      className="form-control"
                      id="Phone"
                      placeholder="Enter phone"
                      onChange={getPhone}
                    />
                    <small id="phone" className="form-text "></small>
                  </div>
                  <div className="form-group">
                    <label for="addressLine">Address Line</label>
                    <input
                      type="text"
                      className="form-control"
                      id="Address"
                      placeholder="Address line"
                      onChange={getAddressLine}
                    />
                    <small id="address" className="form-text "></small>
                  </div>
                  <div className="form-group">
                    <label for="city">City</label>
                    <input
                      type="text"
                      className="form-control"
                      id="City"
                      placeholder="City"
                      onChange={getCity}
                    />
                    <small id="city" className="form-text "></small>
                  </div>
                  <div className="form-group">
                    <label for="pincode">Pincode</label>
                    <input
                      type="text"
                      className="form-control"
                      id="Pincode"
                      placeholder="pincode"
                      onChange={getPincode}
                    />
                    <small id="pincode" className="form-text "></small>
                  </div>
                  <br />
                  <input
                    type="button"
                    className="btn btn-dark btn-block"
                    onClick={addAddress}
                    value="Add Address"
                  />
                </div>
              </form>
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
                <div className="col text-right">₹ {props.totalPrice}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  else {
    window.location.href = "/";
    return;
  }

}
export default connect(function (state, props) {
  return { cartItem: state["cartItem"], totalPrice: state["totalPrice"] };
})(Address);
