import React from 'react';
import mePhoto from '../../images/it_is_me.jpg'
import './otherpage-picture.styles.css';

export class OtherPagePicture extends React.Component{

    render() {
        return(
        <div className="the_image_other">
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