import React from 'react'
import { useSelector } from 'react-redux'


function Shop() {

const gallions = useSelector(state => state.fight.gallions)

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
                        <li className="dropdown-item text-light bg-first"><i className="fa-solid fa-flask me-2 text-success"></i>Potion de vie</li>
                        <li className="dropdown-item text-light bg-first"><i className="fa-solid fa-flask me-2 text-primary"></i>Potion de mana</li>
                        <li className="dropdown-item text-light bg-first"><i className="fa-solid fa-flask me-2 text-danger"></i>Potion d'attaque</li>
                    </ul>
                    
            </li>
            
        </ul>
                    
        </div>

)
}

export default Shop