import React from 'react';
import './portfolio-description.styles.css'

export const PortDescription = (props) => {
    return(
        <div className={!props.data.tagline ? 'description' : 'description active'}>
            <p>{props.data.tagline ? props.data.tagline : null}</p>
        </div>
    )
}