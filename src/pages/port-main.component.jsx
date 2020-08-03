import React from 'react';
import { GroovyPortPage } from '../pages/groovy-port-page.component';
import { PortfolioPage } from '../pages/portfolio-page.component';

export const PortMain = () => {
    const [active, setActive] = React.useState(false)

    const handleClick = (e) => {
        e.preventDefault()
        setActive(!active)
    }
    
    return(
        <React.Fragment>
            {active ? 
                <GroovyPortPage handleClick={handleClick} /> : 
                <PortfolioPage handleClick={handleClick} active={active}
            />}
        </React.Fragment>
    )
}