import React from "react";
import { View, Text, Dimensions, Image } from "react-native";

export default function Photo({ route, navigation }) {
  const { photo } = route.params;
  const { width, height } = Dimensions.get("screen");
  return (
    <View style={{ flex: 1, width, height }} s>
      <Image
        style={{ flex: 1, width: null, height: null }}
        resizeMode="stretch"
        source={{ uri: photo.urls.full }}
      />
    </View>
  );
}
