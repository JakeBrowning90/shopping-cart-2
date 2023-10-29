function FeatureCard({item}) {
    return (
        <div className="featureCard">
            <img className="itemImage" src={item.image} alt={item.title} />

            {/* TODO make new classes for featured cards */}
            <h2 >{item.title}</h2>
            <h2 >${item.price}</h2> 
        </div>
    )
}

export default FeatureCard;