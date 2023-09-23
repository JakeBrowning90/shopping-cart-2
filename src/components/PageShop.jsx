function PageShop({addToCart, inventory}) {
    return (
        <main className="pageShop">
            <h1>Shop</h1>

            <ul>
                {inventory.map((item) => {
                    return <li>
                        <h2>{item.productName}</h2>
                        <button data-key={item.qtyOnAdd} onClick={addToCart}>Add to Cart</button>
                    </li>
                })}
            </ul>

            {/* <button data-key={2} onClick={addToCart}>Add to Cart</button> */}
        </main>
    )
}

export default PageShop;