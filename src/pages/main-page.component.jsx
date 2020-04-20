import React from 'react';
import { MovingLetters } from '../components/moving letters/moving_letters.component';
import { MainPagePicture } from '../components/mainpage-picture/mainpage-picture.component';
import './main-page.styles.css';

export const MainPage = () => (
    <div className="main_page">
        <MovingLetters />
        <MainPagePicture />
    </div>
)
