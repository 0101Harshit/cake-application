import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

function Checkout(){
    return(
        <div>
            <div className="row" style={{padding:"20px"}}>
                <div className="col-md-4">
                    <div><Link style={{color:"black"}} to="/checkout/summary">Summary</Link></div>
                    <div><Link style={{color:"black"}} to="/checkout/address">Address</Link></div>
                    <div><Link style={{color:"black"}} to="/checkout/confirm">Confirm Order</Link></div>

                    
                </div>
                <div className="col-md-8">
                    <Outlet/>

                </div>
            </div>
        </div>
    )


}
export default Checkout;