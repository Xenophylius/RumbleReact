import React from 'react';
import ProgressBar from './ProgressBar';
import { useSelector } from 'react-redux'; 
import { useEffect } from 'react';

function Monster() {

  const monster = useSelector(state => state.fight.monster)

  return (
    <section>
        <div className="container">
          <div className="row">
            <div className="card-monstre col-sm-12 ">
              <div id="monsterCard">
                <div className="text-center">
                  <div className="row justify-content-center">
                  <h3 className='text-light titleMonster pb-3'>{monster.name}</h3>
                    <div className="col-sm-3 boxHit">
                      <div className="degatSpanMonster"></div>
                      <img className="img-fluid mb-3 rounded-5" src={monster.image} alt='monster' id='monster'/>
                    </div>
                  </div>
                </div>
                <div className='row justify-content-center'>
                <ProgressBar pv={monster.pv} pvMax={monster.pvMax} bgType='bg-danger' faType='fa-heart' barName=' : pv' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section >
  )
}

export default Monster