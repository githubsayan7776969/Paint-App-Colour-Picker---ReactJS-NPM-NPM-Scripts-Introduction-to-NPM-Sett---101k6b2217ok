
import React, { useRef } from "react";

const Selection = (props)=> {
    const ref = useRef();
    const handleClick = (e)=> {
        // console.log(ref.current);
        props.applyColor(updateSelectionStyle)
    }
    const updateSelectionStyle = (colorObj)=> {
        // console.log(colorObj,ref.current);
        ref.current.style.background = colorObj.background;
    }
    return <div className="fix-box" style={{background:''}} ref = {ref} onClick = {handleClick}>
        <h2 className="subheading">Selection</h2>
    </div>
}

export default Selection;
