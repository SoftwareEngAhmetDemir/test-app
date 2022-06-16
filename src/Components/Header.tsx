import { Link } from "react-router-dom";

function Header() {
    // console.log(plus);
    return (
        <header className="mx-10 font-bold">
            <h3>UPayments Store</h3>
            <h3>Register</h3>
            <Link to='/create' className="register">
                <img src='assets/images/plus.svg' />
            </Link>
        </header>
    )
}

export default Header;