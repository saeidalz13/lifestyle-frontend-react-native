import { Alert, StyleSheet, View, ViewStyle } from "react-native";
import GeneralPressable from "@components/Pressable/GeneralPressable";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import { AuthNavigationProp } from "navigation/AuthNavigation";
import { AppContainerStyle, AppPressableStyle, AppPressableTextStyle } from "styles/commonStyles";


const authPressableStyle = StyleSheet.create({
  signupPressable: {
    ...AppPressableStyle,
    backgroundColor: "#4C3A51",
  },
  loginPressable: {
    ...AppPressableStyle,
    backgroundColor: "#774360",
    marginTop: 5,
  },
});


const AuthScreen = () => {
  const nav = useNavigation<AuthNavigationProp>();

  const handlePressSignUp = () => {
    nav.navigate("Login");
  };

  return (
    <View style={AppContainerStyle}>
      <StatusBar style="auto" />
      <GeneralPressable
        title="Sign Up"
        pressableStyle={authPressableStyle.signupPressable}
        textStyle={AppPressableTextStyle}
        onPress={() => Alert.alert("Signed Up!")}
      />
      <GeneralPressable
        title="Log in"
        pressableStyle={authPressableStyle.loginPressable}
        textStyle={AppPressableTextStyle}
        onPress={handlePressSignUp}
      />
    </View>
  );
};

export default AuthScreen;
