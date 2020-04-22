import React from 'react';
import './portfolio-icons.styles.css';

export const PortIcons = (props) => {
    const [active, setActive] = React.useState(false)

    const handleHover = () => {
        props.handleHover(props.name);
        setActive(true)
    }

    const handleOff = () => {
        props.handleHover('');
        setActive(false)
    }

    return(
        <React.Fragment>
            <a 
                className={!active ? 'circles' : 'circles active'}
                onMouseEnter={handleHover}
                onMouseLeave={handleOff}
                href= {
                    props.link ? 
                    props.link : 
                    ''
                } 
                target="_blank" 
                rel="noopener noreferrer"
                > </a>
        </React.Fragment>
    )
}