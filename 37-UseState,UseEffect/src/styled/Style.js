import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: rgb(134, 77, 188);
  gap: 20px;
`;

export const Title = styled.h1`
  font-size: 50px;
  color: white;
  font-family: "Courier New", Courier, monospace;
  text-shadow: 10px 10px 10px black;
`;

export const Text = styled.p`
  font-size: 30px;
  color: green;
  font-weight: bold;
  font-family: "Courier New", Courier, monospace;
  text-shadow: 10px 15px 30px black;
`;
