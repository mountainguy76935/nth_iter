import React from 'react';
import './title.styles.css';
import { Stripe } from '../stripe/stripe.component'

export const Title = (props) => {
      let colors = ['#8fb0a9', '#2e2a39']
      let percent = new Array(2).fill(35).map((a, i) => a-(1*i));
      let leftPer = 50;
      return (
            <React.Fragment>
                  <div className='groovy-fade'>
                  {percent.map((a, i) => {
                        return(
                        <h1 
                              className = "groovy-title" 
                              key={i}
                              style={{
                                    top: `${a}%`, 
                                    left: `${leftPer-i/3}%`,
                                    animationDelay: `${1+(i/10)}s`, 
                                    color: colors[i]}}
                        >
                              {props.newTitle ? 
                              props.newTitle : 
                              'GROOVY PORTFOLIO PAGE!'
                        }
                        </h1>
                        )    
                  })}
                  <Stripe {...props}/>
                  </div>
            </React.Fragment>
      )
}