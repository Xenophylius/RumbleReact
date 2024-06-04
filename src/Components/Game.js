import React from 'react';
import './Game.css';
import Monster from './Monster';
import PlayerList from './PlayerList';
import Shop from './Shop';
import Horcruxes from './Horcruxes';
import Historic from './Historic';
import SelectUnivers from './SelectUnivers';
import ModalVictory from './ModalVictory';
import { useSelector } from 'react-redux';

const App = () => {
    
  return (
  <div className="App">
      <Shop />
      <Horcruxes />
      <Monster />
      
      <section className="container-fluid">
          <PlayerList />
      </section>
      <Historic />
      <SelectUnivers />
      <ModalVictory/>
  </div>
)
}

export default App;