import React, { useState, useEffect } from "react";
import { View, Dimensions, Image } from "react-native";
import { CacheManager } from "react-native-expo-image-cache";

export default function Photo({ route }) {
  const { photo } = route.params;
  const { width, height } = Dimensions.get("screen");
  const [path, setPath] = useState();

  useEffect(() => {
    Cache();
  }, []);

  async function Cache() {
    setPath(await CacheManager.get(photo.urls.full).getPath());
  }

  return (
    <View style={{ flex: 1, width, height }} s>
      <Image
        style={{ flex: 1, width: null, height: null }}
        resizeMode="cover"
        source={{ uri: path }}
      />
    </View>
  );
}
