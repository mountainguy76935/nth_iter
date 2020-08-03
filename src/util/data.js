import tips from "../images/tips.png";
import github from "../images/github.png";
import codepen from '../images/codepen.jpg';
import handshake from '../images/handshake.png';
import calc from '../images/calc.png';
import chem from '../images/chem.jpg';

const data = [
    {
      name: "Free-Connect",
      id: "img1",
      src: handshake,
      tagline: "Full Stack Project intended to provide easy access to local resources",
      link: "https://free-connect.herokuapp.com/"
    },
    {
      name: "Tip Out Calculator",
      id: "img2",
      src: tips,
      tagline: "Title says it all!",
      link: 'https://mountainguy76935.github.io/tip_out_calc/'
    },
    {
      name: "Github",
      id: "img3",
      src: github,
      tagline: "My github! This site has some of my solutions to problems from the Euler Project along with the source code for my apps.",
      link: 'https://github.com/mountainguy76935'
    },
    {
      name: "Code Pen",
      id: "img4",
      src: codepen,
      tagline: "Some programs to showcase HTML/CSS/JavaScript",
      link: 'https://codepen.io/mountainguy76935'
    },
    {
      name: "Mini Projects",
      id: "img5",
      src: calc,
      tagline: "A collection of some smaller projects!",
      link: 'https://my-spectacular-projects.herokuapp.com'
    }, 
    {
      name: "Periodic Table App",
      id: "img6",
      src: chem,
      tagline: "Learn some chemistry! Periodic table made using an API, React, and Express (desktop only, for now!)",
      link: 'https://greatest-periodic-table-foreal.herokuapp.com'
    }
  ];

  export default data;