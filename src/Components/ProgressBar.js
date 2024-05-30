import React from 'react';

const ProgressBar = props => {

    let width = (props.pv * 100 / props.pvMax) + "%"

    if (props.pv <= 0 ) {
        width = "0%"
    }
        return (
            <div className="progress md-progress col-8 p-0" >
                <div className="progress-bar"
                    style={{  width: width }}
                    aria-valuenow={props.pv}
                    aria-valuemin="0"
                    aria-valuemax={props.pvMax}
                    role="progressbar" 
                    id={`health${props.id}`}>
                    <i className={` fas ${props.faType} ${props.bgType} icon-text`}> {props.pv} {props.barName} </i>
                    
                </div>
            </div >
        )
    }


export default ProgressBar;