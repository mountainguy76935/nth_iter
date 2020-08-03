import React from 'react';
import { MovingLetters } from '../components/moving letters/moving_letters.component';
import { MainPagePicture } from '../components/mainpage-picture/mainpage-picture.component';
import { Captions } from '../components/caption/captions.component'
import './main-page.styles.css';

export const MainPage = () => {
    const [vis, setVis] = React.useState(false)
    let caption = "Full-Stack, data-focused developer available for hire. "
    setTimeout(() => setVis(true), 200)
    return(
        <div className="main-page">
            <MovingLetters />
            <MainPagePicture />
            <div className='main-caption'>
                <Captions caption={caption}/>
                <br></br>
                <br></br>
                <br></br>
                { vis ? 
                <a href="mailto:nth.iter1000@gmail.com"><button>HIRE ME</button></a> : 
                null}
            </div>
        </div>
    )
}