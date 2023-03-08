import React from "react";
import { Image, SafeAreaView, View, Text, ScrollView } from "react-native";
import styles from "./styles";
import Title from "../../components/Title";
import RecipeVideo from "../../components/RecipeVideo";

const RecipeDetails = ({ route }) => {
  const { item } = route?.params || {};
  console.log(item?.video_url);
  const instructions = item?.instructions || [];
  const authorName = item.credits[0].name;
  const videoUrl = item?.video_url;
  const nutrition = item?.nutrition;
  delete nutrition?.updated_at;
  const nutritionKeys = Object.keys(nutrition || {});

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Image style={styles.image} source={{ uri: item?.thumbnail_url }} />

        <Title style={{ marginBottom: 32 }} text={item?.name} />

        {nutritionKeys.map((key) => (
          <View style={styles.row} key={key}>
            <Text style={styles.key}>{key}</Text>
            <Text style={styles.value}>{nutrition[key]}</Text>
          </View>
        ))}

        <Title
          style={{ marginTop: 32, marginBottom: 16 }}
          text="Instructions"
        />

        {instructions.map((instruction, index) => (
          <View style={styles.instructionRow} key={instruction?.id}>
            <Text style={styles.index}>{index + 1})</Text>
            <Text style={styles.instructionText}>
              {instruction?.display_text}
            </Text>
          </View>
        ))}

        {!instructions.length ? (
          <Text style={styles.value}>No Instructions Found...</Text>
        ) : null}

        {videoUrl ? (
          <>
            <Title
              style={{ marginTop: 32, marginBottom: 16 }}
              text="Video Explanation"
            />
            <RecipeVideo url={videoUrl} />
          </>
        ) : null}

        {authorName ? (
          <Text style={styles.authorName}>
            <Text>~ </Text>
            {authorName}
          </Text>
        ) : null}
      </ScrollView>
    </SafeAreaView>
  );
};

export default React.memo(RecipeDetails);
