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
                            <div>
                                <i><BackArrow handleReset={props.handleReset} active={true}/></i>
                                <p>&nbsp;&nbsp;{props.name}</p>
                                <Captions position={props.position} caption={props.caption} />
                            </div>
                        </div>
                    </React.Fragment> :
                <div className='about-frames' onClick={() => props.handleClick(props.name)}>
                    <i><BackArrow handleReset={props.handleReset} active={false}/></i>
                                <p>&nbsp;&nbsp;{props.name}</p>
                </div>
            }
        </React.Fragment>
    )
}
