import React from 'react';
import ButtonCapacity from './ButtonCapacity';
import ButtonHealing from './ButtonHealing';
import ButtonMana from './ButtonMana';
import ButtonSpecial from './ButtonSpecial';
import ProgressBar from './ProgressBar';
import { useSelector } from 'react-redux';



const PlayerCard = props => {

        let imagePlayer = props.player.image

        if (imagePlayer == '') {
            imagePlayer = 'https://www.newzilla.net/wp-content/uploads/2014/04/crest-150x150.png'
        }       
        
        const player = useSelector(state => state.fight.players[props.player.id])
    

        return ( 
            <div key={player.id} className={props.cardDiv} id={`joueur${player.id}`}>

                <div className="card-body text-center m-0 p-0 " id={`card${player.id}`}>
                    
                        <div className='boxHit'>
                            <div className='position-relative customIndex'>
                                <h5 className={player.home}>{player.name}</h5>
                            </div>

                        <div className="degatSpanHero" id={`spanHero${player.id}`}></div>
                        <div className="healinigSpanHero" id={`healingHero${player.id}`}></div>
                        <div className="healinigSpanHero" id={`manaHero${player.id}`}></div>

                        
                        <img src={imagePlayer} className='img-fluid mb-2 rounded-5' />
                    </div>
                    <div className='row justify-content-center'>
                        <ProgressBar id={player.id} pv={player.pv} pvMax={player.pvMax} faType='fa-heart' barName=' : pv ' bgType='bg-danger' />
                        <ProgressBar id={player.id} pv={player.mana} pvMax={player.manaMax} faType='fa-fire-alt' barName=' : mana ' />
                    </div>
                    <span className="badge badge-danger ml-2 " id="degatSpanJ1"></span>
                    <div className={props.classButton} id={`disabled${player.id}`}>
                        
                            <ButtonCapacity player={player} id={`joueur${player.id}`}/>
                            <ButtonHealing player={player} id={`joueur${player.id}`}/>
                            <ButtonMana player={player} id={`joueur${player.id}`}/>
                            <ButtonSpecial player={player} id={`joueur${player.id}`}/>

                    </div >
                </div >

            </div >
        )
}


export default PlayerCard;