import React from 'react';
import './App.css';

import { MainPage } from './pages/main-page.component';
import { AboutPage } from './pages/about-page.component';
import { PortMain } from './pages/port-main.component';
import { Navigation } from './components/navigation/navigation.component';
import { Trademark } from './components/trademark/trademark.component';
import { Route } from 'react-router-dom';
 
const App = () => {
  return (
    <div className="App" >
      <Navigation />
      <Trademark />
      <Route exact path='/' component={MainPage}/>
      <Route exact path='/projects' component={PortMain}/>
      <Route exact path='/about' component={AboutPage}/>
    </div>
  );
}

export default App;
