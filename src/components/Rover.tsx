import React, {useEffect, useState, useRef} from "react"
import { Photos } from "../models/mars-rover";
import { fetchRoverPhotos } from "../services/RoverApiService";
import Button from "./Button";
import "./Rover.css"

function Rover(){
    const[roverList, setRoverList]= useState<Photos[]>([])
    useEffect(()=>{
        fetchRoverPhotos().then(
            roverList=>setRoverList(roverList)
        );
    }, [])

    const [isClick, setClick] = useState(false);


    return(
        <div className="Rover">
            <h1>RoverGram</h1>
            <p>Brought to you by NASA's image API</p>
            <ul >
                {
                    roverList.map((roverList,i)=>
                    <li key={i}>
                            <div className="container">
                                <img src={roverList.img_src} alt=""/>
                                <p>{roverList.rover.name} - {roverList.camera.full_name}</p>
                                <div className="date">
                                  <p>{roverList.earth_date}</p>
                                  <Button />
                                </div>
                        </div>


                    </li>
                    
                )
                }
            </ul>
        </div>
    )
}

export default Rover; 