import React from "react";
import {
  Alert,
  Pressable,
  StyleProp,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from "react-native";

interface GeneralPressableProps {
  title: string;
  pressableStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  onPress?: () => void
}

const GeneralPressable: React.FC<GeneralPressableProps> = (props) => {
  return (
    <View>
      <Pressable style={props.pressableStyle} onPress={props.onPress} >
        <Text style={props.textStyle}>{props.title}</Text>
      </Pressable>
    </View>
  );
};

export default GeneralPressable;
