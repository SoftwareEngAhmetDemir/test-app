import { Link } from "react-router-dom";

function Header() {
    return (
        <header className="lg:mx-10 mx-4 font-bold">
            <h3 className="text-lg">
                <Link to='/'>UPayments Store</Link>
            </h3>
            <h3>Register</h3>
            <Link to='/create' className="register">
                <i className="icon-plus"></i>
            </Link>
        </header>
    )
}

export default Header;