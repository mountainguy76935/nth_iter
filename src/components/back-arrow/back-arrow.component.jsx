  
import React from 'react';
import Back from '../../images/back.png';
import './back-arrow.styles.css'

export const BackArrow = (props) => {
    return(
        <div 
            className={props.active ? 'arrow active' : 'arrow'}
            onClick={props.active ? props.handleReset : null}
        >
                <img
                    src={Back}
                    alt="back arrow"
                    height='8px'
                    width='8px'
                />
        </div>
    )
}