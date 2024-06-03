import React from 'react';
import './Game.css';
import Monster from './Monster';
import PlayerList from './PlayerList';
import Shop from './Shop';
import Horcruxes from './Horcruxes';
import Historic from './Historic';
import SelectUnivers from './SelectUnivers';


const App = () => (
  <div className="App">
      <Shop />
      <Horcruxes />
      <Monster />
      <br></br>
      <section className="container-fluid">
          <PlayerList />
      </section>
      <Historic />
      <SelectUnivers />
  </div>
)

export default App;