import React from 'react';
import './captions.styles.css'

export const Captions = (props) => (
        <div className="caption-section" >
            {props.caption}
        </div>
    )