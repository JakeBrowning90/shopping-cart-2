import { useState } from "react";

function PageShop() {

    const [cartTotal, setCartTotal] = useState(0);
    const addToCart = () => {
        setCartTotal(cartTotal => cartTotal + 1)
    }

    return (
        <main className="pageShop">
            <h1>Shop</h1>
            <h2>Items in Cart: {cartTotal}</h2>
            <button>Continue to Checkout</button>
            <button onClick={addToCart}>Add to Cart</button>
        </main>
    )
}

export default PageShop;