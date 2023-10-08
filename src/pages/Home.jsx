import React from "react";
import styled from "styled-components";
import Card from "../components/Card";

const Home = () => {
  return (
    <Container>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </Container>
  );
};

export default Home;

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(4,1fr);
    gap: 45px;
`;
