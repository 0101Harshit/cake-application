import React from "react";
import "./style.css";
import { useState } from "react";
import axios from "axios";

function SignUp() {
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
  function register(event) {
    let mailformat = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;


    if (user.email == "") {
      document.getElementById("email-msg").innerHTML = "email is empty!"
      document.getElementById('email').style.borderColor = "red"

    }
    else if (!user.email.match(mailformat)) {
      document.getElementById("email-msg").innerHTML = "Invalid emial!"
      document.getElementById('email').style.borderColor = "red"


    }
    if (user.name == "") {
      document.getElementById("name-msg").innerHTML = "name is empty!"
      document.getElementById('name').style.borderColor = "red"

    }
    if (user.password == "") {
      document.getElementById("password-msg").innerHTML = "password is empty!"
      document.getElementById('password').style.borderColor = "red"

    } else {
      axios({
        url: "https://apifromashu.herokuapp.com/api/register",
        method: "post",
        data: {
          email: user.email,
          name: user.name,
          password: user.password,
        },
      }).then(
        (response) => {
          console.log("response from register api", response.data.message);
        },
        (error) => {
          console.log("error", error);
        }
      );
      document.getElementById("form").reset();
    }


  }

  return (
    <div className="signup-form">
      <br /><br />
      <h4 align="center">Sign Up</h4>
      <form id="form">
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Name</label>
          <br />
          <input
            type="text"
            className="form-control"
            id="name"
            aria-describedby="emailHelp"
            placeholder="Enter name"
            onChange={getName.bind(this)}
          />
          <small id="name-msg" className=" "></small>

        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <br />
          <input
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            onChange={getEmail.bind(this)}
          />
          <small id="email-msg" className=" "></small>

        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <br />
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Password"
            onChange={getPassword.bind(this)}
            autoComplete="on"
          />
          <small id="password-msg" className="form-text "></small>
        </div>
        <br></br>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <input
            type="button"
            name="submit"
            className=" btn btn-dark"
            value="    Sign-Up    "
            onClick={register}
          />
        </div>
      </form>
    </div>
  );
}
export default SignUp;
