import React from "react";
import './Button.css'

function Button(props) {

    const onButtonClick = () =>{
        console.log('Yendo al inicio de sesion!')
    }
    return(
        <div>
        <button
            onClick={onButtonClick} 
            className="btn" position="absolute">{props.name}
            Comienza Ahora!
        </button>
        </div>
        
    );

}


export default Button;