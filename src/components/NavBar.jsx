import { Link, Outlet } from "react-router-dom";
import Logo from './img/bird.png';

function NavBar({cartTotal, displayCart}) {

    return (
        <>
            <header>
                <nav>
                    <img src={Logo} alt="bird logo" id="logo"/>
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
