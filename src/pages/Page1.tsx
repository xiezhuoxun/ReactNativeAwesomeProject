import * as React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export default class Page1 extends React.Component<any, any> {

  public render() {
    return (
      <View style={Styles.container}>
        <Text>我是Page1</Text>
        <Button
          title="去页面4"
          onPress={() => {
            this.props.navigation.navigate("Page4");
          }}
        />
        <Button
          title="ReactNavigation示例"
          onPress={() => {
            this.props.navigation.navigate("ReactNavigation");
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
