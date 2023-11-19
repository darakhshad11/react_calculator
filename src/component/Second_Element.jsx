import React from "react";
import "./Second_Element.css";
function Second_Element() {
    const buttonName = ['c','1','2','+',"3","4","-","5","6","*","7","8","/","=","9","0","%","."];
  return (
    <div className="buttoncontainer">
      
        {buttonName.map((buttonName) => (
            <button className="button" >{buttonName}</button>
        ))}
        </div>
    
  );
}

export default Second_Element;