import React from 'react';
import { useDispatch } from 'react-redux';

const ButtonCapacity = props => {

    const dispatch = useDispatch();
    const combat = () => {
        dispatch({
            type: "fight/countLap",
        })

        dispatch({
            type: "fight/hitMonster",
            payload: {
                hit: 50,
                mana: 5,
                id: props.player.id
            }
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
        })
    }, 1000);

        

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
            <div className='col-6 mt-2 mb-2' id={`spell${props.id}`}>
                <button type="button" onClick={() => combat()} className="btn btn-success material-tooltip-main" placeholder='Hit 50, Cost 5 mana'>
                    <i className="fas fa-bomb me-1"></i> ATTACK
                    
                </button>
            </div>
        )
    }





export default ButtonCapacity;