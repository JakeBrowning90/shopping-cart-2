function ItemCard({item, handleQtyChange, addToCart}) {
    return (
        <div>
            <h2>{item.productName}</h2>
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
            <button data-key={item.key} onClick={addToCart}>Add to Cart</button> 
        </div>
    )
}

export default ItemCard;