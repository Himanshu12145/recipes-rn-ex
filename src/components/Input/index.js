import React from "react";
import { Pressable } from "react-native";
import { Image, TextInput, View } from "react-native";
import colors from "../../constants/colors";
import styles from "./styles";

const Input = ({
  placeholder = "Search Recipe",
  showSearchIcon = true,
  style,
  pressable,
  onPress,
}) => {
  const renderInput = () => {
    return (
      <View style={[styles.container, style]}>
        {showSearchIcon ? (
          <Image
            style={styles.icon}
            source={require("../../../assets/search.png")}
          />
        ) : null}
        <TextInput
          editable={!pressable}
          placeholderTextColor={colors.lightGrey}
          style={styles.input}
          placeholder={placeholder}
        />
      </View>
    );
  };
  if (pressable) {
    return <Pressable onPress={onPress}>{renderInput()}</Pressable>;
  }
  return renderInput();
};

export default React.memo(Input);
