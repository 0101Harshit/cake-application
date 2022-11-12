import axios, { Axios } from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus, faSearch } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";

function Navbar(props) {
  var [searchItem, setSearchItem] = useState("");

  function getSearch(event) {
    setSearchItem(event.target.value);
  }
  var navigate = useNavigate();
  function search() {

    window.location.href = "/search?q=" + searchItem;
  }
  function logout() {
    localStorage.clear();

    props.dispatch({
      type: "CARTCOUNT",
      payload: [{}],
    });
    toast("Logout Successfully")
    window.location.href = "/";

  }

  useEffect(() => {
    axios({
      url: "https://apifromashu.herokuapp.com/api/cakecart",
      method: "post",
      data: {},
      headers: { authtoken: localStorage.token },
    }).then(
      (response) => {
        props.dispatch({
          type: "CARTCOUNT",
          payload: response.data.data,
        });
      },
      (error) => { }
    );
  });

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <div>
            <Link to="/" className="navbar-brand">
              Cake
            </Link>

            {/* <Link to="addcake" style={{ color: "black" }}>
              Add Cakes
            </Link> */}
            <span>{props.userName}</span>
          </div>
          <div style={{ display: "flex" }}>
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={getSearch.bind(this)}
            />
            &nbsp;
            <button onClick={search} className="btn btn-outline-dark" type="submit">
              Search
            </button>
            &nbsp;
            {props.isLoggedIn == false && (
              <div style={{ display: "flex" }}>
                <Link to="signUp">
                  <button className="btn  btn-outline-dark" type="submit">
                    SignUp
                  </button>
                </Link>
                &nbsp;
                <Link to="login">
                  <button className="btn btn-dark" type="submit">
                    Login
                  </button>
                </Link>
              </div>
            )}
            {props.isLoggedIn == true && (

              <div style={{ display: "flex" }}>
                <Link to="ordersummary" >
                  <button
                    className="btn btn-outline-dark"
                    type="button"
                    style={{ padding: "8px" }}>Orders</button>
                </Link>
                &nbsp;
                <Link to="cart">
                  <button
                    className="btn btn-outline-dark"
                    style={{ display: "flex", padding: "10px" }}
                  >
                    <FontAwesomeIcon icon={faCartPlus}></FontAwesomeIcon>
                    <span className="badge bg-dark text-white ms-1 rounded-pill">
                      {props.cartItem.length}
                    </span>
                  </button>
                </Link>
                &nbsp;

                <button
                  className="btn btn-outline-dark"
                  type="button"
                  onClick={logout}
                >
                  Logout
                </button>

              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}
export default connect(function (state, props) {
  if (localStorage.token != "") {
    return { isLoggedIn: state["isLoggedIn"], cartItem: state["cartItem"], userName: state["userName"] };
  } else {
    return {
      isLoggedIn: false,
      cartItem: [{}],
    };
  }
})(Navbar);
