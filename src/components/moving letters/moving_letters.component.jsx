import React from 'react';
import './moving-letters.styles.css'

export class MovingLetters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      counter: 0,
      letterCounter: 0,
      arrayName: [
        'problem solver.', 
        'leader.', 
        'web developer.', 
        'web developer.'
      ],
      arrayA: [
        '-47%', 
        '-94%', 
        '-121%', 
        '0%'
      ],
      arrayB: [
        '15%', 
        '35%', 
        '15.3%', 
        '0%'
      ]
    }
  }

  changeIt = (margin1, margin2, val) => {
    if (this.state.letterCounter>2) {
      clearInterval(this.int)
    } else {
      console.log(this.state.letterCounter)
    }
    let node = document.querySelector('.below');
    if (node) {
      node.style.marginTop = margin1
      let newNode = document.createElement('p');
      newNode.innerHTML = val;
    if (this.state.counter > 2) {
      node.style.transitionDuration='0s'
      while(node.firstChild){
        node.removeChild(node.firstChild)
      }
      node.appendChild(newNode);
      return;
    }
      node.appendChild(newNode);
      newNode.style.marginTop = margin2;
      this.setState({
        counter: this.state.counter + 1
      })
    }
  }

  onLoadChange = () => {
    this.setState({
      loaded: true
    })
  }

  handleReload() {
    this.setState({
      loaded: false,
      couter: 0,
      letterCounter: 0
    })
  }

  async componentDidMount() {
      await this.onLoadChange();
        if (this.state.loaded) {
        this.int = await setInterval(() => {
          let name = this.state.arrayName;
          let arr1 = this.state.arrayA;
          let arr2 = this.state.arrayB;
          let i = this.state.letterCounter;
          this.changeIt(arr1[i], arr2[i], name[i]);
          this.setState({
            letterCounter: i+1
          })
      }, 2500)
    };
  }

  componentWillUnmount(){
    console.log('unmounted')
      clearInterval(this.int)
      this.setState({
        loaded: false,
        letterCounter: 0,
        counter: 0
      })
  }

    render() {
    return (
    <div className="container">
        <div className="box" >
          <p>I am a</p>
          <div className='below'>
            <p>web designer.</p>
          </div>
        </div>
      </div>
    )
  }
}