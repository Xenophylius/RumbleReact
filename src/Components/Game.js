import React from 'react';
import './Game.css';
import Monster from './Monster';
import PlayerList from './PlayerList';
import Shop from './Shop';
import Horcruxes from './Horcruxes';


const App = () => (
  <div className="App">
      <Shop />
      <Horcruxes />
      <Monster />
      <br></br>
      <section className="container-fluid">
          <PlayerList />
      </section>
  </div>
)

export default App;