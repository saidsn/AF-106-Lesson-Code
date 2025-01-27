import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import logoImg from "../../assets/images/logo.png.webp";
import { FaShoppingBasket } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { basket } = useSelector((state) => state.basket);
  const { wishlist } = useSelector((state) => state.wishlist);

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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
