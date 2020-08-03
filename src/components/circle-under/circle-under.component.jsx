import React from "react";
import './circle-under.styles.css';
import { Link } from 'react-router-dom'

export const CircleUnder = (props) => (
        <div 
            className={!props.hover ? "circle_back" : 'circle_back hover'}
            style={{
                backgroundColor: 
                props.mainColor ?
                props.mainColor : 
                'black'
            }}>
            {props.picture.link !== 'calc' &&  props.picture.link !== 'nasa' ?
            <a 
                className='backlink'
                href= {
                    props.picture.link ? 
                    props.picture.link : 
                    ''
                } 
                target="_blank" 
                rel="noopener noreferrer"
                >
                    <img 
                        className="card-images" 
                        alt={props.picture.id} 
                        src={props.picture.src} 
                    />
                </a> :
                props.picture.link === 'calc' ? 
            <Link
                className="backlink"
                to="/calculator"
                >
                <img 
                        className="card-images" 
                        alt={props.picture.id} 
                        src={props.picture.src} 
                        width="100px" 
                        height="100px"
                    />
            </Link> : 
            <Link
                className="backlink"
                to="/daily_pic"
                >
                <img 
                    className="card-images" 
                    alt={props.picture.id} 
                    src={props.picture.src} 
                    width="100px" 
                    height="100px"
                />
            </Link>
            }
        </div>
    )

