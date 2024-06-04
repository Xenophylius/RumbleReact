import React from 'react';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { openModal2 } from '../features/fight/fightSlice';

const customStyles = {
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: '#232323'
      },
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        borderRadius: '4px',
    },
};

Modal.setAppElement('#root')

function ModalVictory() {
  let subtitle;
  const victory = useSelector(state => state.fight.victory)
  const killMonster = useSelector(state => state.fight.killMonster)
  const gallions = useSelector(state => state.fight.gallions)
  const dispatch = useDispatch();

  // const openModal = () => {
  //   dispatch(openModal2(true))
  // }

  function afterOpenModal() {
    subtitle.style.color = '#7F99E8';
  }

  const closeModal = () => {
    dispatch(openModal2(false))
  }

  return (
    <div className='modalIndex col-6'>
      <Modal
        isOpen={victory}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Victory"
      >

        <h2 className='text-center mb-5' ref={(_subtitle) => (subtitle = _subtitle)}>Victoire</h2>
        <div className='row justify-content-center'>
            <p className='text-center'>Vous êtes désormais niveau {killMonster}. Le héro adversire va changer et devenir plus fort.</p> 
            <p className='text-center'>Vous pouvez choisir un Objet special <i className="fa-solid fa-hat-wizard fa-lg text-dark"></i> afin de vous aider.</p>
            <p className='text-center'>Vous avez aussi à votre diposition des potions <i className="fa-solid fa-flask fa-lg text-warning"></i> contre des gallions.</p>
            <p className='text-center'>Vous disposez de {gallions} gallions. <i className="fa-solid fa-sack-dollar fa-lg text-warning"></i></p>

            <button onClick={closeModal} className='col-2 btn btn-success'>Suivant</button>

        </div>

      </Modal>
    </div>
  );
}

export default ModalVictory;
