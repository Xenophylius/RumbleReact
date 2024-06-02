import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { gallionsDown, lifeUpAll, manaUpAll, hitMonster, checkWin, doubleLife, doubleMana, doubleMaxima, animateHorcruxe, healing, hitMana, disabledButton, displayNone } from '../features/fight/fightSlice';


function Horcruxes() {

const level = useSelector(state => state.fight.killMonster)
const manaMax = useSelector(state => state.fight.players[0].manaMax)

const dispatch = useDispatch();
const horcruxeLife = () => {
    dispatch(displayNone('#horcruxeDisplay'))
    dispatch(doubleLife())
    dispatch(healing({mana: 0, id: 0}))
    dispatch(healing({mana: 0, id: 1}))
    dispatch(healing({mana: 0, id: 2}))
    dispatch(healing({mana: 0, id: 3}))
}

const horcruxeMana = () => {
    dispatch(displayNone('#horcruxeDisplay'))
    dispatch(doubleMana())
}

const horcruxeMaxima = () => {
    dispatch(displayNone('#horcruxeDisplay'))
    dispatch(doubleMaxima())
    dispatch(animateHorcruxe())
}

  return (
    <div className='position-fixed text-light start-0 ms-1 mt-2' id="shop">

        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item dropdown d-flex align-items-center" id="shopItems">
            <div className="me-3 pt-2 h5" id="gallionsAnimate"></div>    
                <button className="nav-link dropdown-toggle me-2" role="button" data-bs-toggle="dropdown" aria-expanded="true" title="Niveau et Horcruxes (Vaincre un professeur pour obtenir un Horcruxe)">
                    <i className="fa-solid fa-hat-wizard fa-2xl text-light  horcruxeButton" id="shopHorcruxeId"></i>
                </button>
                    <ul className="dropdown-menu text-light bg-first border border-light d-none" id="horcruxeDisplay">
                        <li className="dropdown-item text-light horcruxeItems" onClick={() => horcruxeLife()} title={`Double vos points de vie maximum et vous soigne`}><img className='me-2 horcruxesImg' src='./images/colierHorcruxe.png' alt="Médaillon de Salazar Serpentard"/>Médaillon de Serpentard</li>
                        <li className="dropdown-item text-light horcruxeItems" onClick={() => horcruxeMana()} title={`Double votre mana maximum`}><img className='me-2 horcruxesImg' src='./images/coupeHorcruxe.png' alt="Coupe de Poufsouffle"/>Coupe de Poufsouffle</li>
                        <li className="dropdown-item text-light horcruxeItems" onClick={() => horcruxeMaxima()} title={`Double vos dégâts`}><img className='me-2 horcruxesImg' src='./images/anneauxHorcruxe.png' alt="Bague de Gaunt"/>Bague de Gaunt</li>
                    </ul>                    
                <h2 className='ms-3 mt-1 color-magic fw-bold'>{level}</h2>   
            </li>
            
        </ul>
                    
        </div>

)
}

export default Horcruxes