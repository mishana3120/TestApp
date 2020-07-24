import React from "react";
import { View } from "react-native";
import { Card } from "./Card";
import styled from "styled-components";

const Home = () => {
  return (
    <CardContainer>
      <Card />
    </CardContainer>
  );
};

const CardContainer = styled.View`
  flex: 1;
  margin-top: 25px;
  background-color: red;
`;

export default Home;
