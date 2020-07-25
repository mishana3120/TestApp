import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Icon from "react-native-vector-icons/FontAwesome";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { CacheManager } from "react-native-expo-image-cache";
import { Image } from "react-native";

export const Card = ({ photo, width, height }) => {
  const navigation = useNavigation();
  const [path, setPath] = useState();

  useEffect(() => {
    Cache();
  }, []);

  async function Cache() {
    setPath(await CacheManager.get(photo.urls.regular).getPath());
  }

  function onHandlePress() {
    navigation.navigate("Photo", {
      photo: {
        title: photo.user.first_name,
        urls: photo.urls,
      },
    });
  }
  return (
    <TouchableOpacity onPress={onHandlePress} activeOpacity={1}>
      <CardContainer height={height / 3} width={width / 3}>
        <CardTitle>
          <CardText>{photo.location.title}</CardText>
        </CardTitle>
        <Image
          style={{ flex: 1, width: null, height: null }}
          source={{ uri: path }}
        />
        <CardFooter>
          <LikeContainer>
            <CardText color="white">{photo.likes}</CardText>
            <Icon name="heart" color="red" size={15} />
          </LikeContainer>
          <CardText>Author: {photo.user.first_name}</CardText>
        </CardFooter>
      </CardContainer>
    </TouchableOpacity>
  );
};

const CardContainer = styled.View`
  height: ${(props) => props.height + "px"};
  width: ${(props) => props.width + "px"};
`;

const CardFooter = styled.View`
  background-color: transparent;
  width: 100%;
  position: absolute;
  bottom: 0px;
  z-index: 1;
  flex-direction: column;
  align-items: flex-end;
`;
const CardTitle = styled.View`
  background-color: transparent;
  color: #a8f000;
  width: 100%;
  position: absolute;
  margin-top: 10px;
  align-items: center;
  z-index: 1;
`;

const CardText = styled.Text`
  opacity: 1;
  color: ${(props) => (props.color ? props.color : "greenyellow")};
  margin-right: 2px;
`;

const LikeContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;
