function PageShop({handleQtyChange, addToCart, inventory}) {
    return (
        <main className="pageShop">
            <h1>Shop</h1>

            <ul>
                {inventory.map((item) => {
                    return <li key={item.key}>
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
                    </li>
                })}
            </ul>

            {/* <button data-key={2} onClick={addToCart}>Add to Cart</button> */}
        </main>
    )
}

export default PageShop;