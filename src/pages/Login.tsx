import * as React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default class Login extends React.Component<any> {
  public render() {
    return (
      <View style={Styles.container}>
        <Text>我是登录页面</Text>
        <Button
          title="登录"
          onPress={() => {
            this.props.navigation.navigate("Main");
          }}
        />
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
