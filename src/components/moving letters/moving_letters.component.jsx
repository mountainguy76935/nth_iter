import React, { useEffect } from 'react';
import './moving-letters.styles.css'

export const MovingLetters = () => {

  useEffect(() => {
    makeMovingLetters()
  });

let counter = 0;
const changeIt = (margin1, margin2, val) => {
  let node = document.querySelector('.below');
  if (node) {
    node.style.marginTop = margin1
    let newNode = document.createElement('p');
    newNode.innerHTML = val;
    if (counter > 2) {
      node.style.transitionDuration='0s'
      while(node.firstChild){
        node.removeChild(node.firstChild)
      }
      node.appendChild(newNode);
      return;
    }
    node.appendChild(newNode);
    newNode.style.marginTop = margin2;
    counter++
  }
}

async function makeMovingLetters() {
  let array = ['problem solver.', 'leader.', 'web developer.'];
  await setTimeout(function() {
    changeIt('-47%', '15%', array[0])
  }, 2500);
  await setTimeout(function() {
    changeIt('-94%', '35%', array[1])
  }, 5000);
  await setTimeout(function() {
    changeIt('-121%', '15.3%', array[2])
  }, 7500);
  await setTimeout(function() {
    changeIt('0%', '0%', 'web developer.')
  }, 10000)
  return;
}

    return (
    <div className="container">
        <div className="box">
          <p>I am a</p>
          <div className='below'>
            <p>web designer.</p>
          </div>
        </div>
      </div>
    )
}