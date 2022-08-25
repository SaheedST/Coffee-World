import { Routes, Route } from "react-router-dom";
import Cart from "../components/Cart";
import Home from "../components/Home";
import LogIn from "../components/user-auth/sign-in/LogIn";
import Navigation from "../components/navigation/Navigation";
import SignUp from "../components/user-auth/sign-up/SignUp";

const NavRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="log-in" element={<LogIn />} />
          <Route path="cart" element={<Cart />} />
          <Route path='sign-up' element={<SignUp/>}/>
        </Route>
      </Routes>
    </>
  );
};

export default NavRoutes;
