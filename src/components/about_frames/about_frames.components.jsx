import React from 'react';
import { BackArrow } from '../back-arrow/back-arrow.component';
import { Captions } from '../caption/captions.component'
import './about_frames.styles.css'

export const AboutFrames = (props) => {
    return (
        <React.Fragment>
            {props.active ? 
                props.slideOut ? 
                <div className='about-frames slide-out'>
                    <p>{props.name}</p>
                </div> :
                <React.Fragment>
                    <div className='about-frames active'>
                        <div style={{display: 'inline'}}>
                            <i><BackArrow handleReset={props.handleReset}/></i>
                            &nbsp;&nbsp;{props.name}
                        <Captions position={props.position} caption={props.caption}/>   
                        </div>
                    </div> 
                </React.Fragment>:
            <div className='about-frames' onClick={() => props.handleClick(props.name)}>
                <p>{props.name}</p>
            </div>
            }
        </React.Fragment>
    )
}