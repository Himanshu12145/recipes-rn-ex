import { StyleSheet, Dimensions } from "react-native";
import colors from "../../constants/colors";

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
    backgroundColor: colors.lightestTealGreen,
    padding: 10,
    width: width * 0.4,
    marginVertical: 32,
    marginTop: 60,
    marginRight: 16,
  },
  title: {
    fontSize: 14,
    color: colors.grey,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 16,
  },
  label: {
    color: colors.grey,
    fontSize: 11,
    marginTop: 8,
    marginBottom: 4,
  },
  value: {
    color: colors.lightGrey1,
    // color: colors.grey,
    fontSize: 11,
    fontWeight: "bold",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginTop: -60,
    alignSelf: "center",
  },
});

export default styles;
