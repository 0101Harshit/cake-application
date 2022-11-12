import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { useEffect, useState } from "react";
function Ordersummary() {
  var [orders, setOrders] = useState([]);
  useEffect(() => {
    axios({
      url: "https://apifromashu.herokuapp.com/api/cakeorders",
      method: "post",
      data: {},
      headers: {
        authtoken: localStorage.token,
      },
    }).then(
      (response) => {
        console.log(response.data.cakeorders);
        setOrders([...response.data.cakeorders]);

        console.log(orders);
      },
      (error) => {
        console.log("error", error);
      }
    );
  }, []);
  return (
    <>
      <div
        className="containe-fluid"
        style={{
          padding: "20px",
          backgroundColor: " rgb(249, 249, 249)",
          height: "80%",
        }}
      >
        <div
          className="container"
          style={{ margin: "20px", paddingLeft: "50px", paddingRight: "50px" }}
        >
          <div className="row">
            <Accordion
              defaultActiveKey="0"
              style={{ padding: "0px", marginTop: "30px" }}
            >
              {orders.map((each, index) => {
                return (
                  <Accordion.Item eventKey={index}>
                    <Accordion.Header
                      className="btn btn-outline-dark"
                      style={{ width: "100%" }}
                    >
                      Order ID #{each.orderid}
                    </Accordion.Header>
                    <Accordion.Body
                      style={{ backgroundColor: "white", paddingLeft: "30px" }}
                    >
                      <div className="card-body">
                        <div className="row m-0">
                          <div className="col-md-6">
                            <b>Order Information</b>
                            <div>Price: ₹ {each.price}</div>
                            <div>Payment mode: {each.mode}</div>
                            <div>
                              Status: {each.pending && <span>Pending</span>}
                            </div>
                            <div>Purchased on: {each.orderdate}</div>
                          </div>
                          <div className="col-md-6">
                            <b>Shipping Address:</b>
                            <div>{each.name}</div>
                            <div>Phone: {each.phone}</div>
                            <div>
                              {each.address}, {each.city}, {each.pincode}
                            </div>
                          </div>
                        </div>
                        <br />
                        <div className="col-md-12">
                          <div className="title">
                            <div className="row m-0">
                              <div className="col">
                                <h6>
                                  <b>Items</b>
                                </h6>
                              </div>
                            </div>
                          </div>
                          {each.cakes.map((item, index) => {
                            return (
                              <div className="row m-0 border-top border-bottom">
                                <div className="row main align-items-center">
                                  <div className="col-2">
                                    <img
                                      className=""
                                      src={item.image}
                                      alt=""
                                      width="60"
                                      height="60"
                                    />
                                  </div>
                                  <div className="col">
                                    <div className="row">{item.name}</div>
                                  </div>
                                  <div className="col">
                                    Qty:{" "}
                                    <span className="btn btn-sm border ml-2 mr-2 qty">
                                      {item.quantity}
                                    </span>
                                  </div>
                                  <div className="col">₹ {item.price}</div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                );
              })}
            </Accordion>
          </div>
        </div>
      </div>
    </>
  );
}
export default Ordersummary;
