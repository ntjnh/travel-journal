import pin from "../pin.svg"

export default function Card(props) {
    return (
        <article className="place">
            <div className="place__image">
                <img src={props.img} alt={props.destination} />
            </div>

            <div className="place__info">
                <img className="place__pin" src={pin} />
                <span className="place__country">{props.country}</span>
                <a className="place__map-link" href={props.mapLink} target="_blank">View on Google Maps</a>
                <h2 className="place__name">{props.destination}</h2>
                <p className="place__dates">{props.dates}</p>
                <p className="place__desc">{props.description}</p>
            </div>
        </article>
    )
}
