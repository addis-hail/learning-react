import React from "react";

const Hello = () => {
    // return (
    //     <div className = 'dummyClass'>
    //         <h1>hell000 there</h1>
    //     </div>
    // )

    return React.createElement(
        'div', 
        {id: 'hello', className: 'dummyClass'}, 
        React.createElement('h1', null, 'Hellooo there'))
}

export default Hello;