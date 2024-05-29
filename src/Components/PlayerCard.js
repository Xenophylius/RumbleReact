import React from 'react';
import ButtonCapacity from './ButtonCapacity';
import ButtonHealing from './ButtonHealing';
import ButtonMana from './ButtonMana';
import ButtonSpecial from './ButtonSpecial';
import ProgressBar from './ProgressBar';



class PlayerCard extends React.Component {

    render() {

        let imagePlayer = this.props.player.image

        if (imagePlayer == '') {
            imagePlayer = 'https://www.newzilla.net/wp-content/uploads/2014/04/crest-150x150.png'
        }       
        
        return ( 
            <div key={this.props.player.id} className={this.props.cardDiv} id={`joueur${this.props.player.id}`}>

                <div className="card-body text-center m-0 p-0 " id={`card${this.props.player.id}`}>
                    
                        <div className='boxHit'>
                            <div className='position-relative customIndex'>
                                <h5 className={this.props.player.home}>{this.props.player.name}</h5>
                            </div>

                        <div className="degatSpanHero" id={`spanHero${this.props.player.id}`}></div>
                        <div className="healinigSpanHero" id={`healingHero${this.props.player.id}`}></div>
                        <div className="healinigSpanHero" id={`manaHero${this.props.player.id}`}></div>

                        
                        <img src={imagePlayer} className='img-fluid mb-2 rounded-5' />
                    </div>
                    <div className='row justify-content-center'>
                        <ProgressBar pv={this.props.player.pv} pvMax={this.props.player.pvMax} faType='fa-heart' barName=' : pv ' bgType='bg-danger' />
                        <ProgressBar pv={this.props.player.mana} pvMax={this.props.player.manaMax} faType='fa-fire-alt' barName=' : mana ' />
                    </div>
                    <span className="badge badge-danger ml-2 " id="degatSpanJ1"></span>
                    <div className={this.props.classButton} id={`disabled${this.props.player.id}`}>
                        
                            <ButtonCapacity player={this.props.player} id={`joueur${this.props.player.id}`}/>
                            <ButtonHealing player={this.props.player} id={`joueur${this.props.player.id}`}/>
                            <ButtonMana player={this.props.player} id={`joueur${this.props.player.id}`}/>
                            <ButtonSpecial player={this.props.player} id={`joueur${this.props.player.id}`}/>

                    </div >
                </div >

            </div >
        )
    }
}


export default PlayerCard;