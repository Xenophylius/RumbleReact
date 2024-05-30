import React from 'react';
import { useDispatch } from 'react-redux';
import { gallionsUp } from '../features/fight/fightSlice';

const ButtonSpecial = props => {
    const dispatch = useDispatch();
    const combat = () => {
        dispatch({
            type: "fight/countLap",
        })

        dispatch({
            type: "fight/disabledButton",
            payload: {
                id: props.player.id,
            }
        })

        setTimeout(() => {
        dispatch({
            type: "fight/hitBack",
            payload: {
                hit: 5,
                id: props.player.id
            }
        })

        dispatch({
            type: "fight/checkWin",
            payload: props.player.id
        })
    }, 1000);

        dispatch({
            type: "fight/hitMonster",
            payload: {
                hit: 150,
                mana: 16,
                id: props.player.id,
                special: true
            }
        })

        dispatch(gallionsUp(20))

        dispatch({
            type: "fight/checkMana",
            payload: {
                id: props.player.id,
            }
        })

        setTimeout(() => {
        dispatch({
            type: "fight/checkTurn",
            payload: {
                id: props.player.id,
            }
        })
    }, 2000);

    }
    
        return (
            <div className='col-12 col-sm-6 mt-2 mb-2' id={`spellSpecial${props.id}`}>
                <button type="button" onClick={() => combat()} className="btn btn-success material-tooltip-main btn-combo pulse">
                    <i className="fa-solid fa-wand-sparkles me-1" style={{color: 'yellow'}}></i> SPECIAL
                    
                </button>
            </div>
        )
    }





export default ButtonSpecial;