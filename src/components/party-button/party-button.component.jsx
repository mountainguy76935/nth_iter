import React from 'react';
import './party-button.styles.css';

export const PartyButton = (props) => {

    return(
        <div className="party-button" onClick={props.handleClick}>
            {props.active === false ? 
            <p>Party Button!</p> :
            <p className = 'groovy'>Business Button!</p>}
        </div>
    )
}