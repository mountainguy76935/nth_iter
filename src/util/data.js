import tips from "../images/tips.png";
import github from "../images/github.png";
import codepen from '../images/codepen.jpg';
import shapes from '../images/shapes.jpg';
import calc from '../images/calc.png';
import chem from '../images/chem.jpg';

const data = [
    {
      name: "Shapes",
      id: "img1",
      src: shapes,
      tagline: "App with animated shapes! Full screen and click around.",
      link: "https://some-wild-shapes.herokuapp.com/"
    },
    {
      name: "Tip Out Calculator",
      id: "img3",
      src: tips,
      tagline: "Title says it all!",
      link: 'https://tip-out-calc.herokuapp.com/'
    },
    {
      name: "Github",
      id: "img4",
      src: github,
      tagline: "My github! This site has some of my solutions to problems from the Euler Project along with the source code for my apps.",
      link: 'https://github.com/mountainguy76935'
    },
    {
      name: "Code Pen",
      id: "img6",
      src: codepen,
      tagline: "Some programs to showcase HTML/CSS/JavaScript",
      link: 'https://codepen.io/mountainguy76935'
    },
    {
      name: "Regular Calculator",
      id: "img7",
      src: calc,
      tagline: "Little React Calculator",
      link: 'https://my-spectacular-projects.herokuapp.com/calculator'
    }, 
    {
      name: "Periodic Table App",
      id: "img8",
      src: chem,
      tagline: "Learn some chemistry! Periodic table made using an API, React, and Express (desktop only, for now!)",
      link: 'https://greatest-periodic-table-foreal.herokuapp.com'
    }
  ];

  export default data;