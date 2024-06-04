import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { gallionsDown, lifeUpAll, manaUpAll, hitMonster, checkWin } from '../features/fight/fightSlice';


function Shop() {

const gallions = useSelector(state => state.fight.gallions)
let regenHeal = 50
let maximaHit = 500

const dispatch = useDispatch();
const potionLife = () => {
    dispatch(lifeUpAll(regenHeal))
    dispatch(gallionsDown(50))
}

const potionMana = () => {
    dispatch(manaUpAll(100))
    dispatch(gallionsDown(100))
}

const potionMaxima = () => {
    dispatch(hitMonster({hit : maximaHit, mana: 0, id: 0, maxima: true}))
    dispatch(gallionsDown(150))
    dispatch(checkWin(0))
}

  return (
    <div className='position-fixed text-light end-0 me-3 mt-2' id="shop">

        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item dropdown d-flex align-items-center" id="shopItems">
            <div className="me-3 pt-2 h5" id="gallionsAnimate"></div>
                <button className="nav-link dropdown-toggle me-2 shopButton" data-bs-toggle="dropdown" aria-expanded="false" title={`${gallions} Gallions`}>
                    <i className="fa-solid fa-sack-dollar fa-2xl text-warning"></i>
                </button>
                    <ul className="dropdown-menu text-light bg-first-without-cursor border border-light" >
                        <li className="dropdown-item text-light bg-first-without-cursor"><i className="fa-solid fa-sack-dollar me-2 text-warning"></i>{gallions} Gallions</li>
                    </ul>
    
                <button className="nav-link dropdown-toggle me-2 shopButton" data-bs-toggle="dropdown" aria-expanded="false" title="Potions">
                    <i className="fa-solid fa-flask fa-2xl text-warning" id="shopFlaskId"></i>
                </button>
                    <ul className="dropdown-menu text-light bg-first border border-light">
                        <li className="dropdown-item text-light bg-first" onClick={() => potionLife()} title={`Soigne tous élève de ${regenHeal} PV`}><i className="fa-solid fa-flask me-2 text-success"></i>Wiggenweld Potion (50 <i className="fa-solid fa-sack-dollar text-warning"></i>)</li>
                        <li className="dropdown-item text-light bg-first" onClick={() => potionMana()} title={`Rend à tous les élèves leur mana`}><i className="fa-solid fa-flask me-2 text-primary"></i>Concentration Potion (100 <i className="fa-solid fa-sack-dollar text-warning"></i>)</li>
                        <li className="dropdown-item text-light bg-first" onClick={() => potionMaxima()} title={`Inflige immédiatement ${maximaHit} dégâts au professeur`}><i className="fa-solid fa-flask me-2 text-danger"></i>Maxima Potion (150 <i className="fa-solid fa-sack-dollar text-warning"></i>)</li>
                    </ul>
                    
            </li>
            
        </ul>
                    
        </div>

)
}

export default Shop