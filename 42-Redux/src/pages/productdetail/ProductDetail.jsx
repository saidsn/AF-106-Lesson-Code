import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import "./ProductDetail.css";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/features/productSlice";

const ProductDetail = () => {
  const { id } = useParams();

  const { products } = useSelector((state) => state.products);

  const dispatch = useDispatch();
  const findProduct = products.find((product) => product.id === id);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <>
      <h1>Product Detail</h1>
      <div className="container">
        <div className="row">
          <div className="product-container">
            <div className="product-detail-image">
              <img
                className="img"
                src={findProduct?.image}
                alt="Product Image"
              />
            </div>

            <div className="product-details">
              <h4 className="product-title">{findProduct?.title}</h4>
              <p className="product-category">
                Category: {findProduct?.category}
              </p>
              <p className="product-price">${findProduct?.price}</p>
              <p className="product-description">{findProduct?.description}</p>

              <div className="product-rating">
                <span>⭐ {findProduct?.rating?.rate}</span>
                <span>({findProduct?.rating?.count} reviews)</span>
              </div>

              <div className="quantity-selector">
                <button className="btn-minus">-</button>
                <input type="number" defaultValue={1} min="1" />
                <button className="btn-plus">+</button>
              </div>

              <button className="btn btn-danger add-to-cart-btn">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
