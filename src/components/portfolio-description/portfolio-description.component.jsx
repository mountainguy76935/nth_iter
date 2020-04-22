import React from 'react';
import './portfolio-description.styles.css'

export const PortDescription = (props) => {
    return(
        <div className={!props.data.tagline ? 'description' : 'description active'}>
            <h1 style={{fontSize: '25px'}}>{props.data.name}</h1>
            <p>{props.data.tagline ? props.data.tagline : null}</p>
        </div>
    )
}