import React from "react";
import { View, Text, Dimensions, Image } from "react-native";

export default function Photo({ route, navigation }) {
  const { photo } = route.params;
  const { width, height } = Dimensions.get("window");
  return (
    <View style={{ width, height }}>
      <Image
        style={{ flex: 1, width: null, height: null }}
        source={{ uri: photo.urls.regular }}
      />
    </View>
  );
}
