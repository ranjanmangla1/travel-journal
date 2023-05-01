export function Card(props) {
    return(
        <div className="card">
            <img src={props.img} alt="" />
            <div className="card-right">
                <div className="card-top-row">
                    <img 
                        src="./location-icon.png" 
                        alt=""
                    />
                    <h3>{props.country}</h3>
                    <a target="_blank" rel="noreferrer" href={props.mapLink}>View on Google Maps</a>
                </div>
                <h2>{props.name}</h2>
                <p className="date">{props.date}</p>
                <p className="description">{props.description}</p>
            </div>
        </div>
    )
}
