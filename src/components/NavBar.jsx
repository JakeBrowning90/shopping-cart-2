import { Link, Outlet } from "react-router-dom";

function NavBar() {
    return (
        <>
            <header>
                <h1>Shop Logo</h1>
                <nav>
                    <Link to="">Home</Link>
                    <Link to="/shop">Shop</Link>
                </nav>
            </header>
            <Outlet />
        </>
    )
}

export default NavBar;
