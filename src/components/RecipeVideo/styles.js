import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 20,
    justifyContent: "center",
    backgroundColor: colors.purple,
    borderRadius: 12,
  },
  watermark: {
    margin: 5,
    position: "absolute",
    alignSelf: "center",

    justifyContent: "center",
    height: 80,
    width: 80,
    opacity: 50,
    zIndex: 100,
  },
  video: {
    zIndex: 1,
    alignSelf: "center",
    minWidth: 320,
    height: 300,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default styles;
