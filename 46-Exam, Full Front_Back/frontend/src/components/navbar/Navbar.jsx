import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import logoImg from "../../assets/images/logo.png.webp";
import { FaShoppingBasket } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

const Navbar = () => {
  const baseUrl = "http://localhost:5000/auth";
  const { basket } = useSelector((state) => state.basket);
  const { wishlist } = useSelector((state) => state.wishlist);

  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleLogout = async () => {
    const res = await axios.get(`${baseUrl}/logout`);

    dispatch(setUser(null));

    if (res.status === 200) {
      alert("Logout successful");
    } else {
      alert("Logout failed");
    }
  };

  const totalCount = basket.reduce((sum, item) => sum + item.count, 0);
  const totalWishlistCount = wishlist.length;
  return (
    <div className="navbar-section">
      <div className="container">
        <div className="navbar">
          <div className="logo">
            <img src={logoImg} alt="" />
          </div>
          <ul className="navlist">
            <li className="navlist-item">
              <Link to="/">Home</Link>
            </li>
            <li className="navlist-item">
              <Link to="/category">Category</Link>
            </li>
            <li className="navlist-item">
              <Link to="/men">Men</Link>
            </li>
            <li className="navlist-item">
              <Link to="/women">Women</Link>
            </li>
            <li className="navlist-item">
              <Link to="/latest">Latest</Link>
            </li>
            <li className="navlist-item">
              <Link to="/admin">Admin</Link>
            </li>
          </ul>
          <div className="wrapper">
            <div className="basket">
              <Link to="/basket">
                <FaShoppingBasket />
              </Link>
              <sup>{totalCount}</sup>
            </div>
            <div className="heart">
              <Link to="/wishlist">
                <CiHeart />
                <sup>{totalWishlistCount}</sup>
              </Link>
            </div>
            <div className="dropdown">
              <button
                className="btn btn-light"
                type="button"
                data-bs-toggle="dropdown"
              >
                <i className="fa-solid fa-user"></i>
                Daxil ol
              </button>
              <ul className="dropdown-menu">
                {user ? (
                  <li onClick={handleLogout}>
                    <Link className="dropdown-item logout " to="/">
                      Logout
                    </Link>
                  </li>
                ) : (
                  <>
                    <li>
                      <Link className="dropdown-item register" to="/register">
                        Register
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item login" to="/login">
                        Login
                      </Link>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
