import { TextStyle, ViewStyle } from "react-native";

export const AppTextInputStyle: TextStyle = {
  height: 50,
  width: 250,
  padding: 10,
  borderRadius: 10,
  borderColor: "#4C3A51",
  borderWidth: 1,
  marginBottom: 5,
  backgroundColor: "lightgray",
};

export const AppHeaderStyle: TextStyle = {
  fontSize: 25,
  fontWeight: "bold",
  marginBottom: 20,
  color: "#774360",
};

export const AppContainerStyle: ViewStyle = {
  flex: 1,
  backgroundColor: "#E7AB79",
  alignItems: "center",
  justifyContent: "center",
};

export const AppPressableStyle: ViewStyle = {
  alignItems: "center",
  justifyContent: "center",
  paddingVertical: 10,
  paddingHorizontal: 30,
  borderRadius: 4,
  elevation: 10,
  width: 180,
};

export const AppPressableTextStyle: TextStyle = {
  fontSize: 18,
  lineHeight: 21,
  fontWeight: "500",
  letterSpacing: 0.5,
  color: "#f0ece2",
};
