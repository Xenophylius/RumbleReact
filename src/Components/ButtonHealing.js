import React from 'react';
import { useDispatch } from 'react-redux';
import { countLap, hitMonster, disabledButton, hitBack, checkWin, checkMana, checkTurn, gallionsUp, hitMana, healing } from '../features/fight/fightSlice';

const ButtonCapacity = props => {
    const dispatch = useDispatch();
    const combat = () => {
        dispatch(countLap())
        dispatch(disabledButton({id: props.player.id}))
        dispatch(healing({mana: 5, id: props.player.id}))
        dispatch(checkMana({id: props.player.id}))
        dispatch(gallionsUp(5))
            setTimeout(() => {
                dispatch(hitBack({hit: 5, id: props.player.id}))
                dispatch(checkWin(props.player.id))
            }, 1000);
                setTimeout(() => {
                    dispatch(checkTurn({id: props.player.id}))
                }, 2000);
    }
    
        return (
            <div className='col-12 col-sm-6 mt-2 mb-2' id={`spell${props.id}`}>
                <button type="button" onClick={() => combat()} className="btn btn-outline-success material-tooltip-main" title={`Soins Max, Mana -5`}>
                    <i className="fas fa-heart me-1"></i> <span className='fw-bold'>HEALTH</span>
                    
                </button>
            </div>
        )
    }





export default ButtonCapacity;