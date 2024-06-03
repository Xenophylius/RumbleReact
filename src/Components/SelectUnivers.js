import React from 'react';
import Modal from 'react-modal';
import { useDispatch } from 'react-redux';
import { changeForGot } from '../features/fight/fightSlice';
import { changeForDisney } from '../features/fight/fightSlice';
import { changeForMarvel } from '../features/fight/fightSlice';
import { changeForHogwarts } from '../features/fight/fightSlice';

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

function SelectUnivers() {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(true);
  const dispatch = useDispatch();

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    subtitle.style.color = '#7F99E8';
  }

  function hogwarts() {
    dispatch(changeForHogwarts());
    setIsOpen(false);
  }

  function gotChange() {
    dispatch(changeForGot());
    setIsOpen(false);
  }

  function disneyChange() {
    dispatch(changeForDisney());
    setIsOpen(false);
  }

  function marvelChange() {
    dispatch(changeForMarvel());
    setIsOpen(false);
  }

  function closeModal() {
    
  }

  return (
    <div className='modalIndex'>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >

        <h2 className='text-center mb-5' ref={(_subtitle) => (subtitle = _subtitle)}>Selectionne ton univers</h2>
        <div className='row justify-content-center'>
            <img className='logoUnivers col-12 col-md-6 col-xl-3' src='./images/disney2.png' onClick={disneyChange}/>
            <img className='logoUnivers col-12 col-md-6 col-xl-3' src='./images/hogwarts.png' onClick={hogwarts}/>
            <img className='logoUnivers col-12 col-md-6 col-xl-3' src='./images/got.png' onClick={gotChange}/>
            <img className='logoUnivers col-12 col-md-6 col-xl-3' src='./images/marvel.png' onClick={marvelChange}/>
        </div>

      </Modal>
    </div>
  );
}

export default SelectUnivers;