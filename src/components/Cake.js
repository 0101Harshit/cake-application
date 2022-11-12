import { Link } from "react-router-dom";

function Cake(props) {


  return (
    <div className="card" >
      <Link to={`/cake/cakeDetails?cakeid=${props.cake.cakeid}`} ><img src={props.cake.image} className="card-img-top" alt="..." height="250px" width="150px" /></Link>
      <div className="card-body">
        <h5 className="card-title">{props.cake.name}</h5>
        <h5 >{props.cake.price}</h5>
      </div>
    </div>
  );
}
export default Cake;
