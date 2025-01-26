import PropTypes from "prop-types";

function Service ({ title, description, image }) {
    return(
        <li>
        <p><b>{title}</b></p>
        <p>{description}</p>
        <img src={image}></img>
        </li>
    )
}

Service.propTypes ={
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
}

export default Service