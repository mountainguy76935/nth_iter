import React from 'react';
import mePhoto from '../../images/it_is_me.jpg'
import './mainpage-picture.styles.css';

export class MainPagePicture extends React.Component{

    render() {
        return(
        <div className="the_image">
            <img
            src={mePhoto}
            alt='ME'
            width='469px'
            height='625px'
            />
        </div>
        )
    }
}