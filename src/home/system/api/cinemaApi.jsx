import axios from "axios";
import { backendUrl } from "./api";

// get cinema data
export const getFilms=async ()=>{
    var data={};
    await axios.get(backendUrl.cinemaUrl)
        .then(res=>{
            data= res;
        })
        .catch(e=>{
            console.log("cannot get cinema data");
        })
    return data;
}



