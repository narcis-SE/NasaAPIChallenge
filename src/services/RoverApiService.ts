import axios from "axios";
import { Photos } from "../models/mars-rover";

export function fetchRoverPhotos(): Promise<Photos[]>{
    const apiKey = process.env.REACT_APP_API_KEY;
    return axios.get("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos", {
        params:{
            sol: 1000,
            api_key: apiKey
        }
    })
    .then(res=>res.data.photos)


}