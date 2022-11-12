import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
function EditCake() {
  var params = useParams()
  var cakeid = params.cakeid;
  var [spinner, setSpinner] = useState(false)
  var [cake, setCake] = useState({})
  useEffect(() => {
    setSpinner(true)
    axios({
      url: `https://apifromashu.herokuapp.com/api/cake/${cakeid}`,
      method: "get"
    }).then((response) => {
      setCake(response.data.data)
      setSpinner(false)
    }, (error) => {
      console.log("Error :", error)
      setSpinner(false)
    })
  }, [])

  return (
    <div className="containe-fluid" style={{ padding: "20px", backgroundColor: " rgb(249, 249, 249)" }}>
      <div className="container cont px-lg-5 text-center">
        {spinner ? <>
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
          : <>
            <form id="myform">
              <h1>Add Cart Items</h1>
              <div id="myForm" style={{ padding: "20px", textAlign: "start" }}>
                <label className="ml-2">Cake Image</label>
                <input type="file" id="cakeimage" className="form-control m-2" placeholder="Enter Name of Product" />
                <div className="row">
                  <div className="col-6">
                    <label className="ml-2">Cake Name</label>
                    <input type="text" id="cakename" className="form-control m-2" defaultValue={cake.name} placeholder="Enter Name" />
                  </div>
                  <div className="col-6">
                    <label className="ml-2">Price</label>
                    <input type="text" id="price" className="form-control m-2" defaultValue={cake.price} placeholder="Enter price" />
                  </div>
                </div>
                <label className="ml-2">Description</label>
                <textarea id="description" className="form-control m-2" defaultValue={cake.description} placeholder="Cake Description" />
                <div className="row">
                  <div className="col-6">
                    <label className="ml-2">Weight (Kg)</label>
                    <input type="text" id="weight" className="form-control m-2" defaultValue={cake.weight} placeholder="Cake Weight" />
                  </div>
                  <div className="col-6">
                    <label className="ml-2">Type</label>
                    <select type="text" id="type" className="form-control m-2" >
                      <option>{cake.type}</option>
                      <option>Birthday</option>
                      <option>Anniversary</option>
                      <option>Farewell</option>
                    </select>
                  </div>
                </div>
                <div className="row" style={{ height: "250px" }}>
                  <div className="col-6">
                    <label className="ml-2">Flavour</label>
                    <input type="text" className="form-control m-2" defaultValue={cake.flavour} placeholder="Cake Flavour" />
                    <label className="ml-2">Ingredients <input type="button" value="+" /></label>
                    <input type="text" className=" form-control m-2" defaultValue={cake.ingredients} placeholder="Cake Flavour" />
                  </div>
                  <div className="col-6">
                    <img src={cake.image} height="50%" width="100%"></img>
                    <br /><br />
                    <button className="btn btn-primary m-1">Add Cake</button>
                  </div>
                </div>
              </div>
            </form>
          </>}
      </div>
    </div>
  )
}
export default EditCake;