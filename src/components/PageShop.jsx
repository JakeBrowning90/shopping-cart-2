function PageShop({addToCart}) {
    return (
        <main className="pageShop">
            <h1>Shop</h1>
            <button data-key={2} onClick={addToCart}>Add to Cart</button>
        </main>
    )
}

export default PageShop;