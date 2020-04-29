import React from 'react';
import './App.css';

import { MainPage } from './pages/main-page.component';
import { AboutPage } from './pages/about-page.component';
import { GroovyPortPage } from './pages/groovy-port-page.component'
import { PortfolioPage } from './pages/portfolio-page.component';
import { Navigation } from './components/navigation/navigation.component';
import { Trademark } from './components/trademark/trademark.component';
import { Route } from 'react-router-dom';
 
const App = () => {
  const [active, setActive] = React.useState(false)

  const handleClick = (e) => {
    e.preventDefault()
    setActive(!active)
  }

  return (
    <div className="App" >
      <Navigation />
      <Trademark />
      <Route exact path='/' component={MainPage}/>
      <Route exact path='/projects' render={active ? () =>  <GroovyPortPage handleClick={handleClick} /> : () => <PortfolioPage handleClick={handleClick} active={active}/>}/>
      <Route exact path='/about' component={AboutPage}/>
    </div>
  );
}

export default App;
