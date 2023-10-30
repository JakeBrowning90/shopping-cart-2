function FeatureCard({item}) {
    return (
        <div className="featureCard">
            <img className="featureImage" src={item.image} alt={item.title} />

            {/* TODO make new classes for featured cards */}
            <h2 className="featureName">{item.title}</h2>
            <h2 className="featurePrice">${item.price.toFixed(2)}</h2> 
        </div>
    )
}

export default FeatureCard;