import React from 'react';
import { useDispatch } from 'react-redux';
import { countLap, disabledButton, hitBack, checkWin, checkTurn, gallionsUp, hitMana } from '../features/fight/fightSlice';


const ButtonCapacity = props => {
    const dispatch = useDispatch();
    let regMana = 30

    const combat = () => {
        dispatch(countLap())
        dispatch(hitMana({ hit: 20, mana: regMana, id: props.player.id}))
        dispatch(disabledButton({id: props.player.id}))
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
            <div className='col-12 col-sm-6 mt-2 mb-2'>
                <button type="button" onClick={() => combat()} className="btn btn-outline-primary material-tooltip-main" title={`Mana +${regMana}, Vie -20`}>
                    <i className="fas fa-fire-alt me-1"></i> <span className='fw-bold'>MANA</span>
                    
                </button>
            </div>
        )
    }





export default ButtonCapacity;
