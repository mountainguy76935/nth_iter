import React from 'react';
import './stripe.styles.css'

export const Stripe = (props) => {
    const colors = ['#EFC413', '#E99A17', '#D45717', '#E33E32', '#CB303E'];
    return (
        <div className="whole" style={{backgroundColor: props.mainColor ? props.mainColor : 'white'}}>
            <div className='stripe-box'>
                <div className='stripe'> 
                    {colors.map((a, i) => <div 
                                        style={{
                                            left: `${80*i}px`,
                                            backgroundColor: `${a}`
                                        }} 
                                        key={i}
                                        className={'stripes'}></div>
                                    )}
                </div>
            </div>
            <div className="skew-container">
                <div className="animation_box">
                    <div 
                        className="stripe_black_left" 
                        style={{
                            backgroundColor: props.mainColor ? props.mainColor : 'white'
                        }}></div>
                    {colors.map((a,i) => <div 
                                            key={i} 
                                            className={'stripe'+(i+1)}
                                        >
                                        </div>)}
                    <div 
                        className="stripe_black_right" 
                        style={{
                            backgroundColor: props.mainColor ? props.mainColor : 'white'
                        }}></div>
                </div>
            </div>
        </div>
    )
}