import React, { useEffect, useState } from "react";
import { Image, ActivityIndicator } from "react-native";
import styled from "styled-components";

export function Card() {
  const [photos, setPhotos] = useState();
  const [isLoading, setLoading] = useState(false);
  return (
    <>
      <CardImg>
        {!isLoading && <ActivityIndicator size="large" color="grey" />}
        {isLoading && (
          <Image
            style={{ width: 100, height: 550 }}
            resizeMode="cover"
            source={{ uri: photos[0].urls.small }}
          />
        )}
      </CardImg>
      <CardAuthor>
        <AuthorText>Author: Skorik Mikhail</AuthorText>
      </CardAuthor>
    </>
  );
}

const CardImg = styled.View`
  height: 90%;
  background-color: green;
`;

const CardAuthor = styled.View`
  height: 10%;
  background-color: black;
`;

const AuthorText = styled.Text`
  color: white;
`;
