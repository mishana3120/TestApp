import React from "react";
import {  useSelector } from "react-redux";
import { Card } from "./Card";
import { ActivityIndicator, View, Dimensions } from "react-native";
import { FlatList } from "react-native-gesture-handler";

export default function Gallery() {
  
  const { width, height } = Dimensions.get("window");
  const photos = useSelector((state) => state.photo.list);


  const renderItem = ({ item }) => (
    <Card photo={item} width={width} height={height} />
  );

  if (photos.length === 0) {
    return (
      <View>
        <ActivityIndicator size="large" color="grey" />
      </View>
    );
  } else {
    return (
      <FlatList
        numColumns={3}
        data={photos}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    );
  }
}
