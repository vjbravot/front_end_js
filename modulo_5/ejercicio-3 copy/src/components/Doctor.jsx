import PropTypes from "prop-types";
import React from "react"

function Doctor({name, image, years_of_experience, title, specialty}){

    return(
        <li>
        <p><b>{name}</b></p>
        <p>{title}</p>
        <p>{specialty}</p>
        <p>Años de experiencia: {years_of_experience}</p>
        <img src={image}></img>
        
        </li>
    )
}

Doctor.propTypes = {
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    specialty: PropTypes.string.isRequired,
}


export default React.memo(Doctor)