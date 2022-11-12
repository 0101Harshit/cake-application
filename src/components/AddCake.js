import axios from "axios";
import { useState } from "react";

import CartItems from "./CartItems";

function AddCake() {
  var [cake, setCake] = useState({
    name: "",
    image: "",
    price: "",
    weight: "",
    description: "",
    eggless: false,
    ingredients: [],
    flovour: "",
  });
  var [spinner, setSpinner] = useState(false);
  const [picture, setPicture] = useState("");

  var [ingredient, setIngredient] = useState();
  function setIngridients(event) {
    setIngredient(event.target.value);
  }
  function addIngridients() {
    cake.ingredients.push(ingredient);
    setIngredient("");
  }

  const onChangePicture = (e) => {
    setPicture(URL.createObjectURL(e.target.files[0]));
    cake.image = e.target.files[0];
  };
  function getCakeName(event) {
    cake.name = event.target.value;
  }
  function getCakePrice(event) {
    cake.price = event.target.value;
  }
  function getCakeDesceiption(event) {
    cake.description = event.target.value;
  }
  function getCakeWeight(event) {
    cake.weight = event.target.value;
  }
  function getCakeType(event) {
    cake.type = event.target.value;
  }
  function getCakeFlavour(event) {
    cake.flavour = event.target.value;
  }
  function addCakeItem() {
    let formData = new FormData();
    formData.append("file", cake.image);
    setSpinner(true);
    axios({
      url: "https://apifromashu.herokuapp.com/api/upload",
      method: "post",
      data: formData,
      headers: {
        authtoken: localStorage.getItem("token"),
      },
    }).then(
      (response) => {
        cake.image = response.data.imageUrl;

        axios({
          url: "https://apifromashu.herokuapp.com/api/addcake",
          method: "post",
          data: cake,
          headers: {
            authtoken: localStorage.getItem("token"),
          },
        }).then(
          (response) => {
            console.log(response);
          },
          (error) => {}
        );
      },
      (error) => {}
    );
    console.log("Cakes Detail", cake);
    // document.getElementById("myForm").reset();
  }

  return (
    <div
      className="containe-fluid"
      style={{ padding: "20px", backgroundColor: " rgb(249, 249, 249)" }}
    >
      <div className="container cont px-lg-5 text-center">
        <h1>Add Cart Items</h1>
        <div id="myForm" style={{ padding: "20px", textAlign: "start" }}>
          <label className="ml-2">Cake Image</label>
          <input
            type="file"
            id="cakeimage"
            onChange={onChangePicture}
            className="form-control m-2"
            placeholder="Enter Name of Product"
          />
          <div className="row">
            <div className="col-6">
              <label className="ml-2">Cake Name</label>
              <input
                type="text"
                onChange={getCakeName.bind(this)}
                className="form-control m-2"
                placeholder="Enter Name"
              />
            </div>
            <div className="col-6">
              <label className="ml-2">Price</label>
              <input
                type="text"
                onChange={getCakePrice.bind(this)}
                className="form-control m-2"
                placeholder="Enter price"
              />
            </div>
          </div>
          <label className="ml-2">Description</label>
          <textarea
            onChange={getCakeDesceiption.bind(this)}
            className="form-control m-2"
            placeholder="Cake Description"
          />
          <div className="row">
            <div className="col-6">
              <label className="ml-2">Weight (Kg)</label>
              <input
                type="text"
                onChange={getCakeWeight.bind(this)}
                className="form-control m-2"
                placeholder="Cake Weight"
              />
            </div>
            <div className="col-6">
              <label className="ml-2">Type</label>
              <select
                type="text"
                onChange={getCakeType.bind(this)}
                className="form-control m-2"
              >
                <option>Birthday</option>
                <option>Anniversary</option>
                <option>Farewell</option>
              </select>
            </div>
          </div>
          <div className="row" style={{ height: "250px" }}>
            <div className="col-6">
              <label className="ml-2">Flavour</label>
              <input
                type="text"
                onChange={getCakeFlavour.bind(this)}
                className="form-control m-2"
                placeholder="Cake Flavour"
              />
              <label className="ml-2">
                Ingredients <button onClick={addIngridients}>+</button>
              </label>
              <input
                type="text"
                className=" form-control m-2"
                placeholder="Cake Ingredients"
                onChange={setIngridients.bind(this)}
              />

              {cake.ingredients.map((each, index) => {
                return (
                  <div>
                    <input
                      type="text"
                      className=" form-control m-2"
                      value={each}
                    />
                  </div>
                );
              })}
            </div>
            <div className="col-6">
              <img src={picture} height="40%"></img>
            </div>
          </div>

          <button onClick={addCakeItem} className="btn btn-primary m-1">
            Add Cake
          </button>
        </div>
        {/* <CartItems data={cart} /> */}
      </div>
    </div>
  );
}
export default AddCake;
