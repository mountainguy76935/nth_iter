import React from 'react';
import { OtherPagePicture } from '../components/otherpage-picture/otherpage-picture.component';
import AboutPics from '../util/about';
import { AboutFrames } from '../components/about_frames/about_frames.components';
import './about-page.styles.css'

export const AboutPage = () => {
    const [clicked, setClicked] = React.useState('')
    const [active, setActive] = React.useState(false)

    const findClicked = AboutPics.find(a => a.name === clicked);

    const handleClick = (val) => {
        setClicked(val);
        setActive(true);
    }

    const handleReset = () => {
        setClicked('');
        setActive(false);
    }

    return(
        <div className="about-page">
            <div className="captions">
                {!clicked ?
                AboutPics.map((a, i) => 
                    <AboutFrames 
                        name={a.name} 
                        key={i}
                        caption={a.caption}
                        handleClick={handleClick}
                    />) : 
                AboutPics.map((a, i) => 
                    a.name !== findClicked.name ? 
                    <AboutFrames 
                        active={active}
                        name={a.name} 
                        key={i}
                        caption={a.caption}
                        handleClick={handleClick}
                        slideOut={true}
                    /> : 
                    <AboutFrames 
                        name={findClicked.name} 
                        key={i}
                        caption={findClicked.caption}
                        active={active}
                        handleReset={handleReset}
                    />)
            }
            </div>
            <OtherPagePicture />
        </div>
    )
}