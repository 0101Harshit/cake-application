import Cake from "./Cake";
import { useEffect, useState } from "react";
import axios from "axios";

function CakeList() {
  // var list = props.data;
  var [cakeList, setCakeList] = useState([]);

  function sort() {
    cakeList.sort((a, b) => {
      if (a.name < b.name) return -1;
      else if (a.name > b.name) return 1;
    });
    setCakeList([...cakeList]);
  }

  function filter() {
    // document.getElementById("eggless").checked
    //   ? setCakeList([...list.filter((a) => a.eggless)]), document.getElementById("rating").checked
    //     ? setCakeList([...list.filter((a) => a.rating > 3)])
    //     : setCakeList([...list])

    if (document.getElementById("eggless").checked) {
      setCakeList([...cakeList.filter((a) => a.eggless)]);

      if (document.getElementById("rating").checked) {
        setCakeList([...cakeList.filter((a) => a.rating > 3)]);
      }
    } else {
      setCakeList([...cakeList]);
    }
  }

  useEffect(() => {
    axios({
      url: "https://apifromashu.herokuapp.com/api/allcakes",
      method: "GET",
    }).then(
      (response) => {
        setCakeList(response.data.data);
      },
      (error) => {
        console.log("Error from all cakes api", error);
      }
    );
  }, []);

  return (
    <div>


      {/* <div style={{ float: 'right' }}>
        <input
          type="button"
          name="sort"
          className="btn btn-outline-light"
          value="  Sort  "
          onClick={sort}
        />
      </div>
      EggLess
      <input
        type="checkbox"
        name="eggless"
        id="eggless"
        value=""
        onChange={filter}
      />
      Rating
      <input
        type="checkbox"
        name="rating"
        id="rating"
        value=""
        onChange={filter}
      /> */}
      <div className="container">
        <div className="row">
          {cakeList.map((each) => {
            return (
              <div className="col-md-3 col-sm-12 mb-2">
                <Cake cake={each} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default CakeList;
