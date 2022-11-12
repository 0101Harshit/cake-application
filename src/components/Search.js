import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router"
import Cake from "./Cake";

function Search() {
    var [search, setSearch] = useState([]);
    var location = useLocation()
    useEffect(() => {
        var query = new URLSearchParams(location.search).get('q')
        axios({
            url: `https://apifromashu.herokuapp.com/api/searchcakes?q=${query}`,
            method: "get"
        }).then((response) => {
            setSearch(response.data.data)
        }, (error) => {
            console.log(error)
        }
        )
    }, [])
    return (
        <div className="row">
            {
                search.map((each) => {
                    return <div className="col-3 mb-2">
                        <Cake cake={each} />
                    </div>
                })
            }
        </div>
    )
}
export default Search