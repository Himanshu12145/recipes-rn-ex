import React from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Input from "../../components/Input";
import Title from "../../components/Title";
import Categories from "../../components/Categories";
import styles from "./styles";
import RecipeCard from "../../components/RecipeCard";
import { FlatList } from "react-native-gesture-handler";
import Card from "../../components/Card";

const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Input pressable onPress={() => navigation.navigate("Search")} />

      <Title text="Featured Recipes" />
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ marginHorizontal: -24 }}
        data={[1, 2, 3]}
        keyExtractor={(item) => String(item)}
        renderItem={({ index }) => (
          <RecipeCard
            style={index === 0 ? { marginLeft: 24 } : {}}
            title="Steak with tomato sauce and bulgur rice."
            author={{
              name: "James Milner",
              image:
                "https://creativeedtech.weebly.com/uploads/4/1/6/3/41634549/published/avatar.png?1487742111",
            }}
            time="20 min"
          />
        )}
      />

      <Categories
        categories={["Trending", "Seasonal"]}
        selectedCategory="Trending"
        onCategoryPress={() => {}}
      />

      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ marginHorizontal: -24 }}
        data={[1, 2, 3]}
        keyExtractor={(item) => String(item)}
        renderItem={({ index }) => (
          <Card
            style={index === 0 ? { marginLeft: 24 } : {}}
            title="Steak with tomato sauce and bulgur rice."
            author={{
              name: "James Milner",
              image:
                "https://creativeedtech.weebly.com/uploads/4/1/6/3/41634549/published/avatar.png?1487742111",
            }}
            time="20 min"
          />
        )}
      />
    </SafeAreaView>
  );
};

export default React.memo(Home);
