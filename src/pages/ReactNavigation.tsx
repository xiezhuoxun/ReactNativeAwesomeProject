import * as React from "react";
import { View, Text, StyleSheet } from "react-native";

export default class ReactNavigation extends React.Component<any, any> {

  static navigationOptions = () => ({
    title: "ReactNavigation示例",
    headerRight: ""
  });

  public render() {
    return (
      <View style={Styles.container}>
        <Text>ReactNavigation</Text>
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
