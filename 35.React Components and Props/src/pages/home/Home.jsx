import React from "react";
import Header from "../../components/header/Header";
import "./Home.css";
import Main from "../../components/mainHeader/Main";
import Footer from "../../components/footer/Footer";

const Home = () => {
  return (
    <>
      <div style={{ backgroundColor: "black" }}>
        <div className="countainer">
          <Header />
        </div>
      </div>
      <Main />
      <Footer />
    </>
  );
};

export default Home;
