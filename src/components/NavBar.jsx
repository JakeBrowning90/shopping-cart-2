import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

function NavBar({cartTotal, displayCart}) {

    return (
        <>
            <header>
                <nav>
                    <h1>Logo</h1>
                    <Link to="">Home</Link>
                    <Link to="/shop">Shop</Link>
                </nav>
                <button onClick={displayCart}>Cart: {cartTotal} items</button>
            </header>
            
            <Outlet />
        </>
    )
}

export default NavBar;
