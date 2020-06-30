import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faUser } from '@fortawesome/free-solid-svg-icons'

const ImgCard = ({img, alt, description, username, likes}) => {
    return (
        <div className = "img-container">
            <img  src={img} alt={alt} className = "img-square"/>
            <div className = "img-overlay">
            
                <p><FontAwesomeIcon className = "icon" icon={faUser} size='1x' />{username}</p>
                <p><FontAwesomeIcon className = "icon" icon={faHeart} size='1x' />{likes}</p>
            </div>
        </div>
    )
}

export default ImgCard