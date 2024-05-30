import React from 'react';
import { useDispatch } from 'react-redux';

const ButtonCapacity = props => {
    const dispatch = useDispatch();
    const combat = () => {
        dispatch({
            type: "fight/countLap",
        })

        dispatch({
            type: "fight/hitMana",
            payload: {
                hit: 20,
                mana: 30,
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
        });

        dispatch({
            type: "fight/checkWin",
        }) 

    }, 1000);


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
            <div className='col-6 mt-2 mb-2'>
                <button type="button" onClick={() => combat()} className="btn btn-outline-primary material-tooltip-main">
                    <i className="fas fa-fire-alt me-1"></i> <span className='fw-bold'>MANA</span>
                    
                </button>
            </div>
        )
    }





export default ButtonCapacity;
