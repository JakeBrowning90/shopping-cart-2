import { Link, Outlet } from "react-router-dom";
import Logo from './img/bird.png';
import CartIcon from './img/cart-outline.png';

function NavBar({cartTotal, cartPrice, displayCart}) {

    return (
        <>
            <header>
                <nav>
                    <img src={Logo} alt="bird logo" className="headerIcon"/>
                    <Link to="">Home</Link>
                    <Link to="/shop">Shop</Link>
                </nav>
                <button onClick={displayCart}>
                <img src={CartIcon} alt="cart icon" className="headerIcon"/>
                <div>
                    <div>{cartTotal} items</div>
                   <div>${cartPrice.toFixed(2)}</div>
                </div>
                </button>
            </header>
            
            <Outlet />
        </>
    )
}

export default NavBar;
