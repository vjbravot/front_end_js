function Doctor({name, image, years_of_experience, title}){
    return(
        <li>
        <p><b>{name}</b></p>
        <p>{title}</p>
        <p>Años de experiencia: {years_of_experience}</p>
        <img src={image}></img>
        </li>
    )
}


export default Doctor