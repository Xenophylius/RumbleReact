import React from 'react';
import './Game.css';
import Monster from './Monster';
import PlayerList from './PlayerList';
import Shop from './Shop';


const App = () => (
  <div className="App">
      <Shop />
      <Monster />
      <br></br>
      <section className="container-fluid">
          <PlayerList />
      </section>
  </div>
)

export default App;