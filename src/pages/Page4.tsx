import * as React from "react";
import { View, Text, StyleSheet } from "react-native";

export default class Page4 extends React.Component<any> {
  public render() {
    return (
      <View style={Styles.container}>
        <Text>我是Page4</Text>
      </View>
    );
  }
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
