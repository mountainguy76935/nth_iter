import React from 'react';
import { PortfolioGrid } from '../components/portfolio/portfolio.component';
import { MainPagePicture } from '../components/mainpage-picture/mainpage-picture.component';
import { PartyButton } from '../components/party-button/party-button.component'

export const PortfolioPage = () => {
    
    return(
        <div>
            <PortfolioGrid />
            <MainPagePicture />
            <PartyButton />
        </div>
    )
}