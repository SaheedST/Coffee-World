import { Link, Outlet } from "react-router-dom";
import './Navigation.css'

const Navigation = () => {
  return (
    <>
      <nav className="nav">
        <Link className="nav-text" to="/">Coffee World</Link>
        <Link className="nav-text" to="/log-in">Sign In</Link>
        <Link className="nav-text" to="/cart">Cart</Link>
      </nav>
      <Outlet/>
    </>
  );
};

export default Navigation;
