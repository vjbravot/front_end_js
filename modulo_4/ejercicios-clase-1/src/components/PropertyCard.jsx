import PropTypes from 'prop-types'

function PropertyCard({name, location, price}){
    return(
        <div classname="col">
            <div classname="card">
                <div className="card-body">
                    <h5 className="class-title">{name}</h5>
                    <p className="card-text">{location}</p>
                    <p className="card-text">{price}</p>
                </div>
            </div>
        </div>
    )
}

PropertyCard.propType = {
    name: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
}

export default PropertyCard;