import axios, { Axios } from "axios";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router";
import "./cakeDetails.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Login from "./Login";

function CakeDetails(props) {

  var [cakedetails, setCakeDetails] = useState({});
  var [islogin, setIsLogin] = useState(false);
  const [show, setShow] = useState(false);
  var [spinner, setSpinner] = useState(false);

  var navigate = useNavigate();
  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const cakeid = queryParams.get("cakeid");

    axios({
      url: "https://apifromashu.herokuapp.com/api/cake/" + cakeid,
      method: "get",
    }).then(
      (response) => {
        console.log(response.data.data)
        setCakeDetails(response.data.data);

        if (cakedetails.eagless) {
          document.getElementById("eagless").checked = true;
        }
      },
      (error) => {
        console.log("error hai ye to", error);
      }
    );
  }, []);

  function addToCart() {
    // props.dispatch({
    //   type:"ADD_CART",
    //   payload:{...cakedetails}
    // })

    // navigate("/demo");
    if (localStorage.token) {
      setSpinner(true);
      axios({
        url: "https://apifromashu.herokuapp.com/api/addcaketocart",
        method: "post",
        data: {
          cakeid: cakedetails.cakeid,
          name: cakedetails.name,
          price: cakedetails.price,
          image: cakedetails.image,
          weight: cakedetails.weight,
        },
        headers: {
          authtoken: localStorage.token,
        },
      }).then(
        (response) => {
          setSpinner(false);
          // console.log(response);
          toast("Cake added to cart");
          navigate("/cart");
        },
        (error) => {
          setSpinner(false);
        }
      );
    } else {
      setShow(true);
      // alert("Please Login")
    }
  }

  //   function islogin() {
  //     console.log("entered");
  //     if (localStorage.token) {
  //         console.log("Logged In")
  //         addToCart()
  //     } else {
  //         alert("Please Log In")
  //     }
  // }
  function handleClose() {
    setShow(false);
    //alert("hello");
  }
  function sendToLogin() {
    window.location.href = "/login";
  }

  return spinner ? (
    <div style={{ display: "flex", justifyContent: "center" }}>
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
    </div>
  ) : (
    <div>
      <div className="container" style={{ margin: "50px" }}>
        <div className="card">
          <div className="container-fliud" style={{ padding: "50px" }}>
            <div className="wrapper row">
              <div className="preview col-md-6">
                <div className="preview-pic tab-content">
                  <div className="tab-pane active" id="pic-1">
                    <img src={cakedetails.image} height="400px" width="200px" />
                    <div className="product-description">
                      <b>Note:</b> {cakedetails.description}
                      {/* Design and icing of cake may vary from the
                      image shown here since each chef has his/her own way of
                      baking and designing a cake */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="details col-md-6">
                <h3 className="product-title">{cakedetails.name}</h3>
                <div className="rating">{cakedetails.ratings} ratings</div>

                <h2 className="price">
                  <span>{cakedetails.price}</span>
                </h2>
                <div>inclusive of all text</div>
                <br></br>

                <ul>
                  <li>cake Flavour: {cakedetails.flavour}</li>
                  <li>Type of Cake: {cakedetails.type}</li>
                  <li>Minimum Weight: {cakedetails.weight} kilo grams</li>
                  <li>{cakedetails.ingredients}</li>
                </ul>

                <div className="row">
                  <div className="col">
                    <input type="radio" name="weight" />
                    <label className="form-label" for="exampleCheck1">
                      &nbsp;&nbsp;500 gm&nbsp;&nbsp;
                    </label>
                    <input type="radio" name="weight" />
                    <label className="form-label" for="exampleCheck1">
                      &nbsp;&nbsp;1 kg&nbsp;&nbsp;
                    </label>
                    <input type="radio" name="weight" />
                    <label className="form-label" for="exampleCheck1">
                      &nbsp;&nbsp;1.5 kg&nbsp;&nbsp;
                    </label>
                    <input type="radio" name="weight" />
                    <label className="form-label" for="exampleCheck1">
                      &nbsp;&nbsp;2 kg&nbsp;&nbsp;
                    </label>
                    <br></br>
                    <input type="radio" name="weight" />
                    <label className="form-label" for="exampleCheck1">
                      &nbsp;&nbsp;2.5 kg&nbsp;&nbsp;
                    </label>
                    <input type="radio" name="weight" />
                    <label className="form-label" for="exampleCheck1">
                      &nbsp;&nbsp;3 kg&nbsp;&nbsp;
                    </label>
                    <input type="radio" name="weight" />
                    <label className="form-label" for="exampleCheck1">
                      &nbsp;&nbsp;4 kg&nbsp;&nbsp;
                    </label>
                    <input type="radio" name="weight" />
                    <label className="form-label" for="exampleCheck1">
                      &nbsp;&nbsp;5 kg&nbsp;&nbsp;
                    </label>
                  </div>
                </div>
                <br></br>
                <div>
                  <input type="checkbox" name="eagless" />
                  &nbsp;&nbsp;Eggless &nbsp;&nbsp;&nbsp;
                  <input type="checkbox" name="shape" />
                  &nbsp;&nbsp;Heart Shape &nbsp;&nbsp;
                </div>

                <br></br>
                <br></br>

                <div className="action">
                  <button
                    className="add-to-cart btn btn-default"
                    type="button"
                    onClick={addToCart}
                  >
                    add to cart
                  </button>
                  &nbsp;&nbsp;
                  <button className="buy-now btn btn-default " type="button">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal show={show} onHide={handleClose} style={{ width: "100%" }}>
        <Modal.Body>
          <Login />
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default connect()(CakeDetails);
