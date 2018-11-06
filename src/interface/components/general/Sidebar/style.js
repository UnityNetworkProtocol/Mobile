const React = require("react-native");
const { Platform, Dimensions } = React;

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

export default {
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
  drawerCover: {
    alignSelf: "stretch",
    height: deviceHeight / 3.5,
    width: null,
    position: "relative",
    marginBottom: 10
  },
  drawerImage: {
    position: "absolute",
    left: Platform.OS === "android" ? deviceWidth / 10 : deviceWidth / 9,
    top: Platform.OS === "android" ? deviceHeight / 13 : deviceHeight / 12,
    width: 210,
    height: 75,
    resizeMode: "cover"
  },
  text: {
    fontWeight: Platform.OS === "ios" ? "500" : "400",
    fontSize: 16,
    marginLeft: 20,
  },
  badgeText: {
    fontSize: Platform.OS === "ios" ? 13 : 11,
    fontWeight: "400",
    textAlign: "center",
    marginTop: Platform.OS === "android" ? -3 : undefined
  },

  imageContainer: {
    alignItems: "center",
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  linearGradient: {
    
  },
  textLogo: {
    color: "#D8D8D8",
    height: 40,
    fontSize: 32,
    fontWeight: "100",
    paddingTop: 25,
    textAlign: "center"
  }
};
