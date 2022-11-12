import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./summary.css";
function Summary(props) {
  if (props.cartItem.length > 0) {
    return (
      <div className="col-md-12">
        <div className="cart-block card">
          <div className="row">
            <div className="col-md-8 cart">
              <div className="title">
                <div className="row m-0">
                  <div className="col">
                    <h4>
                      <b>Order Summary</b>
                    </h4>
                  </div>
                  <div className="col align-self-center text-right text-muted">
                    {props.cartItem.length} items
                  </div>
                </div>
              </div>

              {props.cartItem.map((each, index) => {
                return (
                  <div className="row m-0 border-top border-bottom">
                    <div className="row main align-items-center">
                      <div className="col-2">
                        <img
                          className=""
                          src={each.image}
                          alt=""
                          width="60"
                          height="60"
                        />
                      </div>
                      <div className="col">
                        <div className="row">{each.name}</div>
                      </div>
                      {/* <div className="col">
                    Qty: <span className="btn btn-sm border ml-2 mr-2 qty">1</span>
                  </div> */}
                      <div className="col">₹ {each.price}</div>
                    </div>
                    <br></br>
                  </div>
                );
              })}
              <br />
              <br />
              <Link to="/checkout/address">
                <button className="btn btn-dark btn-block">Next</button>
              </Link>
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
  return { cartItem: state["cartItem"], totalPrice: state["totalPrice"] };
})(Summary);
