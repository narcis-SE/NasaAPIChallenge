import axios from "axios";
import { Photos } from "../models/mars-rover";

export function fetchRoverPhotos(): Promise<Photos[]>{
    return axios.get("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos", {
        params:{
            sol: 1000,
            api_key: "wUWAmPHaTLaWxa95exYPiXAtn0u325gX9O0YRmBG"
        }
    })
    .then(res=>res.data.photos)


}