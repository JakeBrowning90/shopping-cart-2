function ItemCard({item, handleQtyChange, addToCart}) {
    return (
        <div className="itemCard">
            <img className="itemImage" src={item.image} alt="product image" />
            <h2 className="itemName">{item.title}</h2>
            <h2 className="itemPrice">${item.price.toFixed(2)}</h2>
            <input 
                name="cardCount" 
                type="number" 
                min="0"
                max="99"
                data-key={item.key}
                onChange={handleQtyChange} 
                value={item.cardCount}
                placeholder="0 - 99"
            />
            <button className="addButton" data-key={item.key} onClick={addToCart}>Add to Cart</button> 
        </div>
    )
}

export default ItemCard;