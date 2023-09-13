import { Link, Outlet } from "react-router-dom";

function NavBar() {
    return (
        <>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/shop">Shop</Link>
            </nav>
            <Outlet />
        </>
    )
}

export default NavBar;
