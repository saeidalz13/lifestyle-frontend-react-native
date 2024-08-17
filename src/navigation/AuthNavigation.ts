import { StackNavigationProp } from "@react-navigation/stack";
import { AppStackParamList } from "./StackParams";

export type AuthNavigationProp = StackNavigationProp<AppStackParamList, 'Auth'>;
export type LoginNavigationProp = StackNavigationProp<AppStackParamList, 'Login'>;

