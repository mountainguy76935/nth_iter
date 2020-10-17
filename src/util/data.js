import tips from "../images/tips.png";
import github from "../images/github.png";
import leaf from '../images/leaf.png';
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
      name: "Rae's and Kay's Melting Pot",
      id: "img4",
      src: leaf,
      tagline: "Website for local Puerto Rican/ Soul Food Restaurant",
      link: 'https://www.raesandkaysmeltingpot.com'
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