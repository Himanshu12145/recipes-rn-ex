import React from "react";
import { Pressable } from "react-native";
import { Image, Text, View } from "react-native";
import colors from "../../constants/colors";
import Rating from "../Rating";
import styles from "./styles";

const Card = ({ title, style, image, time }) => {
  return (
    <View style={[styles.container, style]}>
      <Image
        style={styles.image}
        source={{
          uri: "https://cdn.loveandlemons.com/wp-content/uploads/2020/03/pantry-recipes-2.jpg",
        }}
      />
      <Text style={styles.title} numberOfLines={3}>
        {title}
      </Text>
      <Text style={styles.label}>Time</Text>
      <Text style={styles.value}>{time}</Text>
    </View>
  );
};

export default React.memo(Card);
