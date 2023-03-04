import React from 'react';
import './SCard.css'

const SCard = (props) => {

    function link(){
        window.location.href = `${props.link}`
        console.log(props.link)
    }

    return(
        <div className='csocial' onClick={link}>
            {props.icon}
            <div className="text-div">
                <h1>{props.title}</h1>
                <p>{props.content}</p>
            </div>
        </div>
    )
}

export default SCard;