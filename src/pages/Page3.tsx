import * as React from "react";
import { View, Text, StyleSheet } from "react-native";

export default class Page3 extends React.Component<any, any> {
  static navigationOptions = () => ({
    title: "个人中心",
    headerRight: ""
  });
  public render() {
    return (
      <View style={Styles.container}>
        <Text>我是Page3</Text>
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
