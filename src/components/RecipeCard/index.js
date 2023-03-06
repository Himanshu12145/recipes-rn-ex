import React from "react";
import { Pressable } from "react-native";
import { Image, Text, View } from "react-native";
import colors from "../../constants/colors";
import styles from "./styles";

const RecipeCard = ({ title, image, author, rating, time }) => {
  console.log(title);
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.title} numberOfLines={1}>
          {title}
        </Text>
        <Image
          style={styles.image}
          source={{
            uri: "https://cdn.loveandlemons.com/wp-content/uploads/2020/03/pantry-recipes-2.jpg",
          }}
        />
      </View>
      <View style={[styles.row, { justifyContent: "space-between" }]}>
        <View style={styles.row}>
          <Image source={{ uri: author?.image }} style={styles.authorImage} />
          <Text style={styles.footerText}>By {author?.name}</Text>
        </View>
        <View style={styles.row}>
          <Image
            source={require("../../../assets/timer.png")}
            style={styles.timerIcon}
          />
          <Text style={styles.footerText}>{time}</Text>
        </View>
      </View>
    </View>
  );
};

export default React.memo(RecipeCard);
