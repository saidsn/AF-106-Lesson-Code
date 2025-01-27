import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getProducts,
  sortAzProduct,
  sortHighProduct,
  sortLowProduct,
  sortZaProduct,
} from "../redux/features/productSlice";
import Card from "../components/card/Card";
import ActionBar from "../components/actionbar/ActionBar";

const Home = () => {
  const datas = useSelector((state) => state.products.products);
  const dispatch = useDispatch();

  const handleSortAz = () => {
    dispatch(sortAzProduct());
  };
  const handleSortZa = () => {
    dispatch(sortZaProduct());
  };
  const handleSortLow = () => {
    dispatch(sortLowProduct());
  };
  const handleSortHigh = () => {
    dispatch(sortHighProduct());
  };

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <section id="products">
      <div className="container">
        <div className="row">
          <h1>Products</h1>
          <ActionBar
            az={handleSortAz}
            za={handleSortZa}
            low={handleSortLow}
            high={handleSortHigh}
          />
          <div className="cards">
            {datas && datas.map((card) => <Card key={card.id} card={card} />)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
