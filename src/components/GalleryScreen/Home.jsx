import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import Gallery from "./Gallery";
import { loadRandomPhotos } from "../../store/action";
import Icon from "react-native-vector-icons/FontAwesome";
import { Button, View } from "react-native";

const Home = ({ navigation }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    updateList();
  }, []);

  function updateList() {
    dispatch(loadRandomPhotos(12));
  }

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Icon.Button
          backgroundColor="transparent"
          selectionColor="transparent"
          name="refresh"
          onPress={() => updateList()}
        />
      ),
    });
  }, [navigation]);

  return (
    <GalleryContainer>
      <Gallery />
    </GalleryContainer>
  );
};

const GalleryContainer = styled.View`
  flex: 1;
  background-color: black;
`;

export default Home;
