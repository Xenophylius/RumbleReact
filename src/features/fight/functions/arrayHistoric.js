import React from 'react'
import { useSelector } from 'react-redux'


function arrayHistoric(message, arrayState) {

  let stateHistoric = arrayState.push(message)

  return (
    stateHistoric,
    console.log(stateHistoric)
)
}

export default arrayHistoric