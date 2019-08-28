import * as React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { NavigationActions, StackActions } from "react-navigation";

export default class Login extends React.Component<any, any> {
  static navigationOptions = () => ({
    title: "登录",
    headerRight: ""
  });

  goHome = () => {
    const resetAction = StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: "Main" })]
    });
    this.props.navigation.dispatch(resetAction);
  };

  public render() {
    return (
      <View style={Styles.container}>
        <Text>我是登录页面</Text>
        <Button title="登录" onPress={this.goHome.bind(this)} />
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
