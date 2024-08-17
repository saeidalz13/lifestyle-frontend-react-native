import { useNavigation } from "@react-navigation/native";
import GeneralPressable from "components/Pressable/GeneralPressable";
import { LoginNavigationProp } from "navigation/AuthNavigation";
import { TextInput, View, ViewStyle } from "react-native";
import {
  AppContainerStyle,
  AppPressableStyle,
  AppPressableTextStyle,
  AppTextInputStyle,
} from "styles/commonStyles";

const loginButtonStyle: ViewStyle = {
  ...AppPressableStyle,
  backgroundColor: "#4C3A51",
  marginTop: 10,
};

const backButtonStyle: ViewStyle = {
  ...AppPressableStyle,
  backgroundColor: "black",
  marginTop: 5,
};

const LoginScreen = () => {
  const nav = useNavigation<LoginNavigationProp>();

  return (
    <View style={AppContainerStyle}>
      <TextInput style={AppTextInputStyle} placeholder="Email"></TextInput>
      <TextInput style={AppTextInputStyle} placeholder="Password"></TextInput>

      <GeneralPressable
        title="Login"
        pressableStyle={loginButtonStyle}
        textStyle={AppPressableTextStyle}
      />
      <GeneralPressable
        title="Back"
        pressableStyle={backButtonStyle}
        textStyle={AppPressableTextStyle}
        onPress={() => nav.goBack()}
      />
    </View>
  );
};

export default LoginScreen;
