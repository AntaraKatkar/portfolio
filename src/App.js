import React, { Component } from 'react';
import { HashRouter, Route, Link } from "react-router-dom";
//import logo from './logo.svg';
import './App.css';
//import 'bootstrap/dist/css/bootstrap.css';

import Sidemenu from './components/sidemenu.js';
import About from './components/About.js';
import Experience from './components/Experience.js';
import Education from './components/Education.js';
import Skills from './components/Skills.js';
import Interest from './components/Interest.js';
import Awards from './components/Awards.js';
import Resume from './components/Resume.js';


class App extends Component {
  render() {
  return (
    <HashRouter basename='/'>
    <div id="page-top">
    {/* Creating the Component for side menu navigation and will import here*/}

    <Sidemenu />

    <div className="container-fluid p-0">
      {/* Creating the Component for about section and will import here*/}

      <About />

      <hr className="m-0" />
      {/* Creating the Component for Experience section and will import here*/}

      <Experience title="Experience"/>

      <hr className="m-0" />
      {/* Creating the Component for Education section and will import here*/}

      <Education title="Education"/>

      <hr className="m-0"/>
      {/* Creating the Component for Skills section and will import here*/}

      <Skills title="Skills" />

      <hr className="m-0"/>
      {/* Creating the Component for Interest section and will import here*/}

      <Interest title="Interest" />

      <hr className="m-0"/>
      {/* Creating the Component for Awards section and will import here*/}
      <Awards title="Awards &amp; Certifications"/>

      <hr className="m-0"/>
      {/* Creating the Component for Resume section and will import here*/}

      <Resume title="Resume" />

      </div>

    </div>

  </HashRouter>

  );
}
}

export default App;
