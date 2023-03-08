import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div>
            <Link to="/">HomePage</Link>
            <Link to="/MovieListPage">MovieListPage</Link>
            <Link to="/MoviePage">MoviePage</Link>
        </div>
    )
}
export default NavBar