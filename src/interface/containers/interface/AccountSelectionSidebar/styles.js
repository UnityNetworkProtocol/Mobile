const React = require("react-native");
const { Dimensions, Platform } = React;
const deviceHeight = Dimensions.get("window").height;

export default {
  imageContainer: {
    flex: 1,
    width: null,
    height: null
  },
  logoContainer: {
    alignItems: "center",
    height: 20,
    flex: 1,
    marginTop: deviceHeight / 14,
    paddingHorizontal: 20,
  },
  avatar: {
    borderColor: "#FFF",
    borderRadius: 9999,
    borderWidth: 2,
    height: 45,
    width: 45,
  },
  textName: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "100",
  },
  textAccount: {
    color: "#FFF",
    fontSize: 13,
    fontWeight: "300",
  },
  textBalance: {
    color: "#FFF",
    fontSize: 14,
    fontWeight: "300",
    lineHeight: 14,
  },
  viewEth: {
    backgroundColor: "#2bace8",
    borderColor: "#FFF",
    borderRadius: 9999,
    borderWidth: 2,
    color: "#FFF",
    height: 30,
    width: 30,
    position: "absolute",
    right: 10,
    top: -5,
  }
};
