import React from 'react';
import { GithubLogo } from '../github_logo/github_logo.component';
import { LinkedInLogo } from '../linkedin-logo/linkedin_logo.component';
import './trademark.styles.css';

export const Trademark = () => {
    return(
        <footer className='trademark_container'>
            <div className="trademark">
                <GithubLogo />
                <LinkedInLogo />
            </div>
        </footer>
    )
}