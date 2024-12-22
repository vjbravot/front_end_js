function Service ({ title, description, image}) {
    return(
        <li>
        <p><b>{title}</b></p>
        <p>{description}</p>
        <img src={image}></img>
        </li>
    )
}

export default Service