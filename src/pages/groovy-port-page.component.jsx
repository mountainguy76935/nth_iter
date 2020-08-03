import React from 'react';
import { Title } from '../components/title/title.component';
import { Circles } from '../components/circles/circles.component'
import { PartyButton } from '../components/party-button/party-button.component'
import './groovy-port-page.styles.css'
import Data from '../util/data';

export const GroovyPortPage = (props) => {
    const [color, setColor] = React.useState('')
    const [tagline, setTagline] = React.useState('');
    const [title, setTitle] = React.useState('');

    const colorLeft = ['#E99A17', '#D45717', '#d76735', '#CB303E'];
    const colorRight = ['#f2d8b3', '#8fb0a9', '#7ba247', '#55893c'];
    

    const handleHover = (val) => {
        if (val !== tagline) {
            setTagline(val.tagline)
            setTitle(val.name)
        } else {
            return;
        }
    }

    return (
        <React.Fragment>
            <Title 
            {...props} 
            mainColor={color} 
            handleChange={setColor}
            newTitle={title}/>
            <div className="circle_list">
                <div  
                    className='left-circle'
                    >
                    {Data.slice(0, 3).map((a, i) => {
                    return <Circles
                            picture={a}
                            color={colorLeft[i]}
                            key={i}
                            {...props}
                            mainColor={color} 
                            handleChange={setColor}
                            handleHover = {handleHover}
                            /> 
                })}
                </div>
                <div 
                    className='right-circle'
                    >
                    {Data.slice(3).map((a, i) => {
                    return <Circles 
                            picture={a}
                            color={colorRight[i]}
                            mainColor={color} 
                            key={i}
                            handleChange={setColor}
                            {...props}
                            handleHover = {handleHover}
                            /> 
                })}
                </div>
                <div className="groovy-captions">
                    <p>{tagline}</p>
                </div>
            </div>
            <PartyButton handleClick={props.handleClick}/>
        </React.Fragment>
    )
}
