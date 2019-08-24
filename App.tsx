import { Animated, Easing } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer
} from "react-navigation";
import StackViewStyleInterpolator from "react-navigation-stack/src/views/StackView/StackViewStyleInterpolator";
import Login from "./src/pages/Login";
import Page1 from "./src/pages/Page1";
import Page2 from "./src/pages/Page2";
import Page3 from "./src/pages/Page3";
import Page4 from "./src/pages/Page4";

const BottomNavigator = createBottomTabNavigator(
  {
    Page1: {
      screen: Page1,
      navigationOptions: {
        title: "页面1",
        tabBarLabel: "页面1"
      }
    },
    Page2: {
      screen: Page2,
      navigationOptions: {
        title: "页面2",
        tabBarLabel: "页面2"
      }
    },
    Page3: {
      screen: Page3,
      navigationOptions: {
        title: "页面3",
        tabBarLabel: "页面3"
      }
    }
  },
  {
    initialRouteName: "Page1",
    tabBarOptions: {
      showIcon: false,
      activeTintColor: "#333333",
      inactiveTintColor: "#999999",
      activeBackgroundColor: "#f6f6f6",
      inactiveBackgroundColor: "#f6f6f6",
      labelStyle: {
        fontSize: 10
      },
      style: {
        borderTopWidth: 0,
        backgroundColor: "#f7f7f7"
      }
    }
  }
);

const AppNavigator = createStackNavigator(
  {
    Login: { screen: Login },
    Main: { screen: BottomNavigator },
    Page4: { screen: Page4 }
  },
  {
    initialRouteName: "Login",
    headerMode: "float",
    mode: "modal",
    defaultNavigationOptions: {
      header: null,
      gesturesEnabled: false
    },
    transitionConfig: () => ({
      transitionSpec: {
        duration: 300,
        easing: Easing.out(Easing.poly(4)),
        timing: Animated.timing
      },
      screenInterpolator: sceneProps =>
        StackViewStyleInterpolator.forHorizontal(sceneProps)
    })
  }
);

export default createAppContainer(AppNavigator);
