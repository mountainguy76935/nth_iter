import React from 'react';
import './portfolio.styles.css';
import data from '../../util/data';
import { PortIcons } from '../portfolio-icons/portfolio-icons.component';
import { PortDescription } from '../portfolio-description/portfolio-description.component'

export const PortfolioGrid = () => {
    const [activeData, setActiveData] = React.useState({})

    const handleHover = (val) => {
        if (val === '') {
            return setActiveData({});
        }
        let dataPoint = data.find(a => a.name === val);
        setActiveData(dataPoint);
    }

    return(
        <React.Fragment>
            <div className="grid">
                {data.map(a => 
                    <PortIcons 
                        name={a.name}
                        tagline={a.tagline}
                        id={a.id}
                        link={a.link ? a.link : null}
                        handleHover={handleHover}
                    />
                )}
            </div>
            <PortDescription data={activeData}/>
        </React.Fragment>
    )
}