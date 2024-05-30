import React from 'react';
import { useDispatch } from 'react-redux';
import { countLap, hitMonster, disabledButton, hitBack, checkWin, checkMana, checkTurn } from '../features/fight/fightSlice';

const ButtonCapacity = props => {

    const dispatch = useDispatch();
    const combat = () => {
        dispatch(countLap())
        dispatch(hitMonster({hit :50, mana: 5, id: props.player.id}))
        dispatch(disabledButton({id: props.player.id}))
        dispatch(checkMana({id: props.player.id}))
        
        setTimeout(() => {
            dispatch(hitBack({hit: 5, id: props.player.id}))
            dispatch(checkWin())
        }, 1000);

        setTimeout(() => {
            dispatch(checkTurn({id: props.player.id}))
        }, 2000);


    }
    
        return (
            <div className='col-6 mt-2 mb-2' id={`spell${props.id}`}>
                <button type="button" onClick={() => combat()} className="btn btn-outline-secondary material-tooltip-main" placeholder='Hit 50, Cost 5 mana'>
                    <i className="fas fa-bomb me-1"></i> <span className='fw-bold'>ATTACK</span>
                    
                </button>
            </div>
        )
    }





export default ButtonCapacity;