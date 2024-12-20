import React from "react";
import Header from "../components/header/Header";
import "./Home.css";
import styled from "styled-components";

const Countainer = styled.div`
  height: 400px;
  background-color: rgb(167, 135, 94);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    background-color: red;
  }
`;

const Title = styled.h1`
  font-size: 40px;
  color: white;
  font-weight: bold;
  font-family: "Playwrite HR Lijeva", cursive;
`;
const Text = styled.p`
  font-size: 20px;
  color: rgb(174, 30, 30);
  font-family: "Playwrite HR Lijeva", cursive;
  letter-spacing: 2px;
`;
const Button = styled.button`
  padding: 10px 20px;
  font-size: 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-family: "Playwrite HR Lijeva", cursive;
  margin-top: 10px;
  background-color: rgb(174, 30, 30);
  color: ${(props) => (props.primary ? "white" : "black")};
  &:hover {
    background-color: green;
    color: black;
  }
`;
const BlackButton = styled(Button)`
  &:hover {
    background-color: green;
    color: black;
  }
`;

const Home = () => {
  return (
    <Countainer>
      <Title>Lorem ipsum dolor sit.</Title>
      <Text>Lorem ipsum dolor sit amet consectetur.</Text>
      <Button onClick={() => console.log("click olundu")}>Learn More</Button>
      <Button primary="true">Learn More</Button>
      <BlackButton primary="true">Learn More</BlackButton>
    </Countainer>
  );
};

export default Home;
