import React from "react";
import { Image, Text, TouchableOpacity } from "react-native";
import styles from "./styles";

const Card = ({ title, style, image, servings, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.container, style]}>
      <Image
        style={styles.image}
        source={{
          uri: image,
        }}
      />
      <Text style={styles.title} numberOfLines={3}>
        {title}
      </Text>
      {servings ? (
        <>
          <Text style={styles.label}>Serving</Text>
          <Text style={styles.value}>{servings}</Text>
        </>
      ) : null}
    </TouchableOpacity>
  );
};

export default React.memo(Card);
