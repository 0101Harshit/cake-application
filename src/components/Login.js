import React from "react";
import "./style.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { connect } from "react-redux";
function Login(props) {
  var navigate = useNavigate();
  var [spinner, setSpinner] = useState(false);
  if (localStorage.token == null) {
    var user = {};

    function getName(event) {
      user.name = event.target.value;
    }
    function getEmail(event) {
      user.email = event.target.value;
    }
    function getPassword(event) {
      user.password = event.target.value;
    }
    function login(event) {
      let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (user.email == "") {
        document.getElementById("email-msg").innerHTML = "email is empty!";
        document.getElementById("email").style.borderColor = "red";
      } else if (!user.email.match(mailformat)) {
        document.getElementById("email-msg").innerHTML = "Invalid emial!";
        document.getElementById("email").style.borderColor = "red";
      }
      if (user.password == "") {
        document.getElementById("password-msg").innerHTML =
          "password is empty!";
        document.getElementById("password").style.borderColor = "red";
      } else if (user.email.match(mailformat)) {
        setSpinner(true);
        axios({
          url: "https://apifromashu.herokuapp.com/api/login",
          method: "post",
          data: {
            email: user.email,
            password: user.password,
          },
        }).then(
          (response) => {
            setSpinner(false);
            if (response.data.token) {
              toast("Log in Successfully");
              localStorage.token = response.data.token;
              props.dispatch({
                type: "CARTCOUNT",
                payload: [{}],
              });
              props.dispatch({ type: "LOGIN_SUCCESS" });
              props.dispatch({
                type: "USERNAME",
                payload: response.data.name,
              });
              navigate("/");
            } else {
              toast("Wrong Email or password");
            }

            console.log("response from login api", response.data);
          },
          (error) => {
            setSpinner(false);
            console.log("error", error);
          }
        );
      }
    }

    return (
      <div className="signup-form">
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
        ) : (
          <>
            <br />
            <br />
            <br />
            <h4 align="center">Login</h4>
            <br />
            <form>
              {/* <div className="form-group">
          <label htmlFor="exampleInputEmail1">Name</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail2"
            aria-describedby="emailHelp"
            placeholder="Enter name"
            onChange={getName}
          />
          <small id="nameHelp" className="form-text text-muted"></small>
        </div> */}
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <br />

                <input
                  id="email"
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  onChange={getEmail.bind(this)}
                />
                <small id="email-msg" className="form-text "></small>
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <br />
                <input
                  id="password"
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                  onChange={getPassword.bind(this)}
                  autoComplete="on"
                />
                <small id="password-msg" className="form-text "></small>
              </div>
              <br></br>
              <br />
              <div style={{ display: "flex", justifyContent: "center" }}>
                <input
                  type="button"
                  name="submit"
                  className="btn btn-dark"
                  value="    Login    "
                  onClick={login}
                />
              </div>
            </form>
          </>
        )}
      </div>
    );
  } else {
    window.location.href = "/";
    return;
  }
}
export default connect()(Login);
