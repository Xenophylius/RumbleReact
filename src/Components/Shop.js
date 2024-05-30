import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { gallionsDown, lifeUpAll, manaUpAll, hitMonster } from '../features/fight/fightSlice';


function Shop() {

const gallions = useSelector(state => state.fight.gallions)
const dispatch = useDispatch();
const potionLife = () => {
    dispatch(lifeUpAll(50))
    dispatch(gallionsDown(50))
}

const potionMana = () => {
    dispatch(manaUpAll(100))
    dispatch(gallionsDown(100))
}

const potionMaxima = () => {
    dispatch(hitMonster({hit :500, mana: 0, id: 0, maxima: true}))
    dispatch(gallionsDown(150))
}

  return (
    <div className='position-fixed text-light end-0 me-3 mt-2' id="shop">

        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item dropdown d-flex align-items-center" id="shopItems">
            <div className="me-3 pt-2 h5" id="gallionsAnimate"></div>
                <a className="nav-link dropdown-toggle me-2" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="fa-solid fa-sack-dollar fa-2xl text-warning"></i>
                </a>
                    <ul className="dropdown-menu text-light bg-first-without-cursor border border-light">
                        <li className="dropdown-item text-light bg-first-without-cursor"><i className="fa-solid fa-sack-dollar me-2 text-warning"></i>{gallions} Gallions</li>
                    </ul>
    
                <a className="nav-link dropdown-toggle me-2" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="fa-solid fa-flask fa-2xl text-warning"></i>
                </a>
                    <ul className="dropdown-menu text-light bg-first border border-light">
                        <li className="dropdown-item text-light bg-first" onClick={() => potionLife()}><i className="fa-solid fa-flask me-2 text-success"></i>Wiggenweld Potion (50 <i className="fa-solid fa-sack-dollar text-warning"></i>)</li>
                        <li className="dropdown-item text-light bg-first" onClick={() => potionMana()}><i className="fa-solid fa-flask me-2 text-primary"></i>Concentration Potion (100 <i className="fa-solid fa-sack-dollar text-warning"></i>)</li>
                        <li className="dropdown-item text-light bg-first" onClick={() => potionMaxima()}><i className="fa-solid fa-flask me-2 text-danger"></i>Maxima Potion (150 <i className="fa-solid fa-sack-dollar text-warning"></i>)</li>
                    </ul>
                    
            </li>
            
        </ul>
                    
        </div>

)
}

export default Shop