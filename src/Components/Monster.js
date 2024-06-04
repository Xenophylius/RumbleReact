import React from 'react';
import ProgressBar from './ProgressBar';
import { useSelector } from 'react-redux'; 
import { useEffect } from 'react';

function Monster() {

  const monster = useSelector(state => state.fight.monster)

  return (
    <section id="header">
        <div className="container-fluid">
          <div className="row">
            <div className="card-monstre col-sm-12 ">
              <div id="monsterCard">
                <div className="text-center">
                  <div className="row justify-content-center" id="arena">
                  <h2 className='text-light titleMonster w-100 mb-3 pb-2 pt-3'>{monster.name}</h2>
                    <div className="col-sm-3 boxHit">
                      <div className="degatSpanMonster"></div>
                      <img className="img-fluid mb-3 rounded-5 border border-1" src={monster.image} alt='monster' id='monster'/>
                    </div>
                    <div className='row justify-content-center mb-3'>
                      <ProgressBar pv={monster.pv} pvMax={monster.pvMax} bgType='bg-danger' faType='fa-heart' barName=' PV' />
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </section >
  )
}

export default Monster