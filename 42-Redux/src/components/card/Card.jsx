import React from "react";
import "./Card.css";
import { useDispatch, useSelector } from "react-redux";
import { getUser, updateWishlist } from "../../redux/features/wishlistSlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { addBasket } from "../../redux/features/basketSlice";

const Card = ({ card }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.wishlist);

  const addwishList = (e) => {
    e.stopPropagation();
    if (user) {
      dispatch(updateWishlist(card));
    } else {
      setTimeout(() => {
        navigate("/login");
      }, 1500);
      notify("Please login to add wishlist", "error");
    }
  };

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  function notify(text, type) {
    toast(text, {
      type: type,
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }

  const addToBasket = (e, product) => {
    e.stopPropagation();
    dispatch(addBasket(product));
  };

  return (
    <div className="card" onClick={() => navigate(`/productdetail/${card.id}`)}>
      <i
        className="fa-regular fa-heart card-heart"
        onClick={(e) => addwishList(e)}
      ></i>
      <div className="card-image">
        <img src={card.image} alt="product_image" />
      </div>
      <div className="card-content">
        <h2 className="card-title">{card.title.slice(0, 20) + " ..."}</h2>
        <p className="card-category">{card.category}</p>
        {/* <p className="card-description">{card.description}</p> */}
        <div className="card-footer">
          <span className="card-price">${card.price}</span>
          <div className="card-rating">
            <span>⭐ {card?.rating?.rate}</span>
            <span>({card?.rating?.count} reviews)</span>
          </div>
        </div>
      </div>
      <button className="add-to-cart" onClick={(e) => addToBasket(e, card)}>
        AddToCard
      </button>
    </div>
  );
};

export default Card;
