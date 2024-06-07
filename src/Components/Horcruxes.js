import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { doubleLife, doubleMana, doubleMaxima, animateHorcruxe, healing, displayNone, displayToggleDivAll } from '../features/fight/fightSlice';

function Horcruxes() {

const level = useSelector(state => state.fight.killMonster)
const theme = useSelector(state => state.fight.theme)

let itemLifeUrl = './images/colierHorcruxe.png'
let itemLifeText = 'Médaillon de Serpentard'
let itemManaUrl = './images/coupeHorcruxe.png'
let itemManaText = 'Coupe de Poufsouffle'
let itemMaximaUrl = './images/anneauxHorcruxe.png'
let itemMaximaText = 'Bague de Gaunt'

if (theme === 'disney') {
    itemLifeUrl = './images/mickey.png'
    itemLifeText = 'Mickey'
    itemManaUrl = './images/mini.png'
    itemManaText = 'Mini'
    itemMaximaUrl = './images/simba.png'
    itemMaximaText = 'Simba'
}

if (theme === 'got') {
    itemLifeUrl = './images/stark.png'
    itemLifeText = 'Stark'
    itemManaUrl = './images/targaryen.png'
    itemManaText = 'Targaryen'
    itemMaximaUrl = './images/arryn.png'
    itemMaximaText = 'Arryn'
}

if (theme === 'marvel') {
    itemLifeUrl = './images/shield.png'
    itemLifeText = 'Shield'
    itemManaUrl = './images/hammer.png'
    itemManaText = 'Hammer'
    itemMaximaUrl = './images/helmet.png'
    itemMaximaText = 'Helmet'
}

const dispatch = useDispatch();
const horcruxeLife = () => {
    dispatch(displayNone('#horcruxeDisplay'))
    dispatch(doubleLife())
    dispatch(healing({mana: 0, id: 0}))
    dispatch(healing({mana: 0, id: 1}))
    dispatch(healing({mana: 0, id: 2}))
    dispatch(healing({mana: 0, id: 3}))
    dispatch(displayToggleDivAll('#horcruxeLife'))
}

const horcruxeMana = () => {
    dispatch(displayNone('#horcruxeDisplay'))
    dispatch(doubleMana())
    dispatch(displayToggleDivAll('#horcruxeMana'))
}

const horcruxeMaxima = () => {
    dispatch(displayNone('#horcruxeDisplay'))
    dispatch(doubleMaxima())
    dispatch(animateHorcruxe())
    dispatch(displayToggleDivAll('#horcruxeMaxima'))

}


  return (
    <div className='position-fixed text-light start-0 ms-1 mt-2' id="shop">

        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item dropdown d-flex align-items-center" id="shopItems">
                <a href='/'><i className="fa-solid fa-house-chimney fa-2xl text-light horcruxeItems opacity-75"></i></a>
            <div className="me-3 pt-2 h5" id="gallionsAnimate"></div>    
                <button className="nav-link dropdown-toggle me-2" data-bs-toggle="dropdown" aria-expanded="true" title="Niveau et Horcruxes (Vaincre un professeur pour obtenir un Horcruxe)">
                    <i className="fa-solid fa-hat-wizard fa-2xl text-light  horcruxeButton" id="shopHorcruxeId"></i>
                </button>
                    <ul className="dropdown-menu text-light bg-first border border-light d-none" id="horcruxeDisplay">
                        <li className="dropdown-item text-light horcruxeItems" onClick={() => horcruxeLife()} title={`Double vos points de vie maximum et vous soigne`}><img className='me-2 horcruxesImg' src={itemLifeUrl} alt={itemLifeText}/>{itemLifeText}</li>
                        <li className="dropdown-item text-light horcruxeItems" onClick={() => horcruxeMana()} title={`Double votre mana maximum`}><img className='me-2 horcruxesImg' src={itemManaUrl} alt={itemManaText}/>{itemManaText}</li>
                        <li className="dropdown-item text-light horcruxeItems" onClick={() => horcruxeMaxima()} title={`Double vos dégâts`}><img className='me-2 horcruxesImg' src={itemMaximaUrl} alt={itemMaximaText}/>{itemMaximaText}</li>
                    </ul>                    
                <h2 className='ms-3 mt-1 color-magic fw-bold'>{level}</h2>   
                 
            </li>
        </ul>
                    
        </div>

)
}

export default Horcruxes