import ItemCard from "./ItemCard";

function PageShop({handleQtyChange, addToCart, inventory}) {
    return (
        <main className="pageShop">
            <h1>Shop</h1>
            <ul>
                {inventory.map((item) => {
                    return <li key={item.key}>
                        <ItemCard item={item} handleQtyChange={handleQtyChange} addToCart={addToCart}/>
                    </li>
                })}
            </ul>
        </main>
    )
}

export default PageShop;