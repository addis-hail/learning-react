import React from "react";
import styled from "@emotion/styled";

const Icon = (props) => {
    const Icon = styled.img`
        width: 40%;
    `;

    var icon = "";
    switch (props.condition) {
        case 'Clear':
            icon = `./img/sunny.png`;
            break;
        case 'Clouds':
            icon = `./img/mostly cloudy.png`;
            break;
        default:
            break;
    }

    return ( 
        <Icon src={icon} alt="Weather Icon" />
     );
};
 
export default Icon;