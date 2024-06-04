import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { displayToggleDiv } from '../features/fight/fightSlice';


function Historic() {

const dispatch = useDispatch();
const historic = useSelector(state => state.fight.historic)
const displayToggle = () => {
    dispatch(displayToggleDiv('#historicDisplay'))
}

  return (
    <div className='container'>
        <button className='btn btn-light col-4 ' onClick={() => displayToggle()}>Historic</button>
        <div id="historicDisplay" className='text-light d-none'>
            {historic.map((key, value) => (
                <li>{historic[value]}</li>
            ))}
        </div>
    </div>
)
}

export default Historic