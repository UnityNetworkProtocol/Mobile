const React = require("react-native");
const { Dimensions } = React;
const deviceHeight = Dimensions.get("window").height;

export default {
  container: {
    backgroundColor: "#fff"
  },
  imageContainer: {
    alignItems: "center",
    paddingTop: 30,
    paddingBottom: 30,
  },
  logoContainer: {
    alignItems: "center",
    flex: 1,
    marginTop: deviceHeight / 12,
    marginBottom: 30
  },
};
