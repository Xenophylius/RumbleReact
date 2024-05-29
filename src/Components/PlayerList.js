import React from 'react';
import PlayerCard from './PlayerCard';
import { useSelector } from 'react-redux';

function PlayerList() {

  const players = useSelector(state => state.fight.players)
  const countLap = useSelector(state => state.fight.countLap)
  
  let classOfDiv = "col-12 col-md-6 col-xl-2 card center m-0 p-0 rounded-1"
  let classOfDivShadow = "col-12 col-md-6 col-xl-2 card center m-0 p-0 card-shadow rounded-1"
  let classButton = "row justify-content-center mt-3"
  let classButtonDisabled = "row justify-content-center mt-3 disabledbutton"

    return (
      <div className='mb-5'>
      <div className="row justify-content-center">
        <h3 className="text-light fsw-bold border border-2 col-2 text-center">Tour : {countLap}</h3>
      </div>
      <div className='row justify-content-evenly mt-3'>
        
        <PlayerCard key={players[0].id} player={players[0]} cardDiv={classOfDivShadow} classButton={classButton}/>
        <PlayerCard key={players[1].id} player={players[1]} cardDiv={classOfDiv} classButton={classButtonDisabled}/>
        <PlayerCard key={players[2].id} player={players[2]} cardDiv={classOfDiv} classButton={classButtonDisabled}/>
        <PlayerCard key={players[3].id} player={players[3]} cardDiv={classOfDiv} classButton={classButtonDisabled}/>
      </div>
      </div>
    );
  }



export default PlayerList;