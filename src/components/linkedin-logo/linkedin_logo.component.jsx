import React from 'react';
import './linkedin_logo.styles.css';
import linkedin from '../../images/linkedin.png'

export const LinkedInLogo = () => (
    <div className="linkedin_logo">
        <a 
            href="https://www.linkedin.com/in/david-stoll-7a0158a5/"
        >
            <img
                src={linkedin}
                alt="linkedin"
                height="20px"
                width="20px"
            />
        </a>
    </div>
)