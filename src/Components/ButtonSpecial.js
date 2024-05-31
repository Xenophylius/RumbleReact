import React from 'react';
import { useDispatch } from 'react-redux';
import { checkMana, checkTurn, checkWin, countLap, disabledButton, gallionsUp, hitBack, hitMonster } from '../features/fight/fightSlice';

const ButtonSpecial = props => {
    const dispatch = useDispatch();
    let attack = 150

    const combat = () => {
        dispatch(countLap())
        dispatch(disabledButton({id: props.player.id}))
        dispatch(gallionsUp(20))
        dispatch(checkMana({id: props.player.id}))
        dispatch(hitMonster({hit: attack, mana: 16, id: props.player.id, special: true}))
            setTimeout(() => {
                dispatch(hitBack({hit: 5,id: props.player.id}))
                dispatch(checkWin(props.player.id))
            }, 1000);
                setTimeout(() => {
                    dispatch(checkTurn({id: props.player.id}))
                }, 2000);
    }
    
        return (
            <div className='col-12 col-sm-6 mt-2 mb-2' id={`spellSpecial${props.id}`}>
                <button type="button" onClick={() => combat()} className="btn btn-success material-tooltip-main btn-combo pulse" title={`Attack +${attack}, Mana -16`}>
                    <i className="fa-solid fa-wand-sparkles me-1" style={{color: 'yellow'}}></i> SPECIAL
                </button>
            </div>
        )
    }





export default ButtonSpecial;