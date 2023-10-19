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
                <nav>
                    <h1>Logo</h1>
                    <Link to="">Home</Link>
                    <Link to="/shop">Shop</Link>
                </nav>
                <button>Cart: {cartTotal} items</button>
                {/* <div className="headerCartRow"> 
                    <h2>Items in Cart: {cartTotal} </h2> 
                    <button>Cart: {cartTotal} items</button> 
                </div> */}
            </header>
            
            <Outlet />
        </>
    )
}

export default NavBar;
