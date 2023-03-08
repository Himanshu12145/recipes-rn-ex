import React, { useEffect, useState } from "react";
import "react-native-gesture-handler";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./src/screens/Home";
import Splash from "./src/screens/Splash";
import Search from "./src/screens/Search";
import { Pressable, Image, StyleSheet } from "react-native";
import { getRecipesList } from "./src/http";
import RecipeDetails from "./src/screens/RecipeDetails";
import colors from "./src/constants/colors";

const Stack = createStackNavigator();

export const RecipesContext = React.createContext();
export const HealthyRecipeContext = React.createContext();
const BackButton = (props) => {
  return (
    <Pressable onPress={props.onPress}>
      <Image style={styles.back} source={require("./assets/back.png")} />
    </Pressable>
  );
};

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "#ffffff",
  },
};

export default function App() {
  const [recipes, setRecipes] = useState([]);
  const [healthyRecipes, setHealthyRecipes] = useState([]);

  useEffect(() => {
    (async () => {
      const rec = await handleRecipesFetch(null, "15");
      setRecipes(rec);
      const healthyRec = await handleRecipesFetch("healthy", "5");
      setHealthyRecipes(healthyRec);
    })();
  }, []);

  const handleRecipesFetch = async (tags, size) => {
    try {
      const recipes = await getRecipesList(tags, size);
      return recipes?.data?.results;
    } catch (e) {
      console.log("error fetching recipes :>> ", e);
    }
  };

  return (
    <HealthyRecipeContext.Provider
      value={{ healthyRecipes, setHealthyRecipes }}
    >
      <RecipesContext.Provider value={{ recipes, setRecipes }}>
        <NavigationContainer theme={theme}>
          <Stack.Navigator
            screenOptions={{
              headerTitleAlign: "center",
              headerShadowVisible: false,
            }}
          >
            <Stack.Screen
              name="Splash"
              component={Splash}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Home"
              component={Home}
              options={{
                headerLeft: null,
                headerTitleStyle: {
                  fontWeight: "bold",
                  color: colors.purple,
                },
              }}
            />
            <Stack.Screen
              name="Search"
              component={Search}
              options={{
                headerLeft: (props) => <BackButton {...props} />,
                headerTitleStyle: {
                  fontWeight: "bold",
                  color: colors.tealGreen,
                },
              }}
            />
            <Stack.Screen
              name="RecipeDetails"
              component={RecipeDetails}
              options={({ route }) => ({
                headerLeft: (props) => <BackButton {...props} />,
                title: route.params.name,
                headerTitleStyle: {
                  fontWeight: "bold",
                  color: colors.purple,
                },
              })}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </RecipesContext.Provider>
    </HealthyRecipeContext.Provider>
  );
}

const styles = StyleSheet.create({
  back: {
    height: 24,
    width: 24,
    margin: 16,
  },
});
