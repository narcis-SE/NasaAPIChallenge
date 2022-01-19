import React, {useState, useEffect} from "react";
import Heart from "react-animated-heart"

function Button(){
    const [isClick, setClick] = useState(false);
    const likeButton = ()=>{
        setClick(!isClick)
    }
    const [value, setValue] = useState("")
    const handleChange = (e) => {
        setValue(e.target.value);
        localStorage.setItem("inputValue", e.target.value);
      };

    


    return(
        <div className={isClick? "liked": "unliked"}>
        <button onClick={likeButton}>{isClick? "Unlike":"Like"}</button>
         <div style={{width: "2rem"}}>
            <Heart isClick={isClick} onClick={likeButton}>{isClick? "unlike":"like"}/</Heart>
        </div>

    </div>
    )
}

export default Button
