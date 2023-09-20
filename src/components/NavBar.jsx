import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

function NavBar({cartTotal}) {

    // const [cartTotal, setCartTotal] = useState(0);
    // const addToCart = () => {
    //     setCartTotal(cartTotal => cartTotal + 1)
    // }

    return (
        <>
            <header>
                <h1>Shop Logo</h1>
                <nav>
                    <Link to="">Home</Link>
                    <Link to="/shop">Shop</Link>
                </nav>
            <h2>Items in Cart: {cartTotal} </h2>
            </header>
            <Outlet />
        </>
    )
}

export default NavBar;
