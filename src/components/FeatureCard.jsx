function FeatureCard({item}) {
    return (
        <div className="featureCard">
            <img className="itemImage" src={item.image} alt={item.title} />
            <h2 className="itemName">{item.title}</h2>
            <h2 className="itemPrice">${item.price.toFixed(2)}</h2> 
        </div>
    )
}

export default FeatureCard;