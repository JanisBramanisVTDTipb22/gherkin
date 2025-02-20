import { Component } from 'react';
import Transaltion from './Translations.js'
import Funkcionala from './FunkcionalaIezime.js'
import Formats from './Formats.js'
import Scenarijs from './Scenarijs.js';
import Rubiks from './Rubiks.js';
import Translations from './Translations'
import Veiksmigs from './Veiksmigs'


function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Transaltion />
        <Funkcionala/> 
        <Formats/>
        <Scenarijs/>
        <Rubiks/>
        <Veiksmigs/>
      </header>
    </div>
  );
}

export default App;
