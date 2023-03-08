import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 24,
    flex: 1,
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    marginVertical: 12,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: colors.tealGreen,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginVertical: 4,
  },
  key: {
    fontSize: 18,
    color: colors.black,
    textTransform: "capitalize",
    fontWeight: "bold",
  },
  value: {
    fontSize: 18,
    color: colors.lightGrey1,
    fontWeight: "bold",
  },
  descValue: {
    fontSize: 12,
    color: colors.lightGrey2,
    marginBottom: 23,
  },
  authorName: {
    textAlign: "right",
    fontSize: 16,
    fontWeight: "bold",
    color: colors.lightGrey3,
    paddingBottom: 23,
  },
  instructionRow: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 12,
  },
  index: {
    fontSize: 20,
    color: colors.grey2,
    marginRight: 16,
  },
  instructionText: {
    fontSize: 14,
    color: colors.black,
    flex: 1,
  },
  descriptionText: {
    fontSize: 14,
    color: colors.lightGrey3,
    flex: 1,
    marginBottom: 23,
  },
});

export default styles;
