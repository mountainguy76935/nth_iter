import React from 'react';
import './circles.styles.css';
import { CircleUnder } from '../circle-under/circle-under.component'

export const Circles = (props) => {
    const [active, setActive] = React.useState(false);

    const handleHover =(e) => {
        e.preventDefault()
        props.handleHover(props.picture)
        setActive(true);
        props.handleChange(props.color)
    }

    const handleLeave=(e) => {
        e.preventDefault();
        setActive(false)
    }

    const handleTouch =(e) => {
        e.preventDefault()
        props.handleHover(props.picture)
        props.handleChange(props.color)
    }

    const handleTouchEnd =(e) => {
        e.preventDefault()
        setActive(true);
    }

    return(
        <div 
            className='groovy-circles'
            onTouchStart={handleTouch}
            onTouchEnd={!active ? handleTouchEnd :  null}
            onMouseEnter={handleHover}
            onMouseLeave={handleLeave}
        >
                <CircleUnder 
                key = {props.picture.id} 
                hover={active}
                {...props}
                /> 
            <div 
                className={!active ? 'balls' : 'balls active'}
                style={{backgroundColor: props.color}}></div>    
        </div>
    )
}
