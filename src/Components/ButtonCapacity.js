import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { countLap, hitMonster, disabledButton, hitBack, checkWin, checkMana, checkTurn, gallionsUp } from '../features/fight/fightSlice';

const ButtonCapacity = props => {

    const dispatch = useDispatch();
    const hitBase = useSelector(state => state.fight.hitBase)
    const nameMonster = useSelector(state => state.fight.monster.name)
    const namePlayer = useSelector(state => state.fight.players[props.player.id].name)


    const combat = () => {
        dispatch(countLap())
        dispatch(hitMonster({hit : hitBase, mana: 5, id: props.player.id}))
        dispatch(disabledButton({id: props.player.id}))
        dispatch(checkMana({id: props.player.id}))
        dispatch(gallionsUp(10))  
        // let message = namePlayer + ' inflige ' + hitBase + ' points de dégats à ' + nameMonster
        // dispatch(arrayHistoric(message))
            setTimeout(() => {
                dispatch(hitBack({hit: 5, id: props.player.id}))
                    // let messageHitBack = nameMonster + ' inflige ' + 5 + ' points de dégats à ' + namePlayer
                    // dispatch(arrayHistoric(messageHitBack))
                dispatch(checkWin(props.player.id))
            }, 1000);
                setTimeout(() => {
                    dispatch(checkTurn({id: props.player.id}))
                }, 2000);
    }
    
        return (
            <div className='col-12 col-sm-6 mt-2 mb-2' id={`spell${props.id}`}>
                <button type="button" onClick={() => combat()} className="btn btn-outline-secondary material-tooltip-main" title={`Attack +${hitBase}, Mana -5`}>
                    <i className="fas fa-bomb me-1"></i> <span className='fw-bold'>ATTACK</span>
                    
                </button>
            </div>
        )
    }





export default ButtonCapacity;