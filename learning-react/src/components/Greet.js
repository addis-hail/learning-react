import React from "react";

// function Greet(){
//     return <h1>Hello there</h1>
// }
const Greet = (props) => {
    console.log(props)
    return ( 
        <div>
            <h1>Hellooooo {props.name} a.k.a {props.heroName}
            </h1>
            {props.children}
        </div>
        
    ) 
}

export default Greet;