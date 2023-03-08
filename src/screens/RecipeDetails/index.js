import React from "react";
import { Image, SafeAreaView, View, Text, ScrollView } from "react-native";
import styles from "./styles";
import Title from "../../components/Title";
import RecipeVideo from "../../components/RecipeVideo";

const RecipeDetails = ({ route }) => {
  const { item } = route?.params || {};
  // console.log(item?.renditions?.poster_url);
  const instructions = item?.instructions || [];
  const authorName = item.credits[0].name;
  const videoUrl = item?.video_url;
  const description = item?.description;
  const nutrition = item?.nutrition;
  delete nutrition?.updated_at;
  const nutritionKeys = Object.keys(nutrition || {});

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* <Title
          style={{
            marginBottom: 32,
            textAlign: "center",
            fontWeight: "900",
            fontSize: 21,
          }}
          text={item?.name}
        /> */}

        <Image style={styles.image} source={{ uri: item?.thumbnail_url }} />

        {description ? (
          <View>
            <Title
              style={{ marginTop: 32, marginBottom: 16 }}
              text="Description"
            />
            <Text style={styles.descValue}>{description}</Text>
          </View>
        ) : (
          <Text style={styles.value}>No Description Found...</Text>
        )}

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
              text="Video Recipe"
            />
            <RecipeVideo url={videoUrl} />
          </>
        ) : (
          <Text style={styles.value}>No Video Found...</Text>
        )}

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
