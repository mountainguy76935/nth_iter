import React from 'react';
import './App.css';

import { MainPage } from './pages/main-page.component';
import { AboutPage } from './pages/about-page.component';
import { PortfolioPage } from './pages/portfolio-page.component';
import { Navigation } from './components/navigation/navigation.component';
import { GithubLogo } from './components/github_logo/github_logo.component';
import { Route } from 'react-router-dom';
 
function App() {
  return (
    <div className="App">
      <Navigation />
      <GithubLogo />
      <Route exact path='/' component={MainPage}/>
      <Route exact path='/about' component={AboutPage}/>
      <Route exact path='/projects' component={PortfolioPage}/>
    </div>
  );
}

export default App;
