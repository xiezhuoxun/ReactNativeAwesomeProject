import * as React from "react";
import { Text, StyleProp, TextStyle } from "react-native";

interface IconProps {
  style?: StyleProp<TextStyle>;
  value: string;
}

const Icon = (props: IconProps) => {
  return (
    <Text style={[props.style, { fontFamily: "iconfont" }]}>{props.value}</Text>
  );
};

export default Icon;
