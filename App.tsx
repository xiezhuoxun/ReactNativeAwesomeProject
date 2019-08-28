import { Animated, Easing, Platform, StatusBar } from "react-native";
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
import ReactNavigation from "./src/pages/ReactNavigation";

const BottomNavigator = createBottomTabNavigator(
  {
    Page1: {
      screen: Page1,
      navigationOptions: {
        headerTitle: "首页",
        tabBarLabel: "首页"
      }
    },
    Page2: {
      screen: Page2,
      navigationOptions: {
        headerTitle: "购物车",
        tabBarLabel: "购物车"
      }
    },
    Page3: {
      screen: Page3,
      navigationOptions: {
        headerTitle: "个人中心",
        tabBarLabel: "个人中心"
      }
    }
  },
  {
    initialRouteName: "Page1",
    tabBarOptions: {
      showLabel: true,
      showIcon: true,
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
    Page4: { screen: Page4 },
    ReactNavigation: { screen: ReactNavigation }
  },
  {
    initialRouteName: "Login",
    headerMode: "float",
    mode: "modal",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "green", // TabBar 背景色
        elevation: 0,
        height: Platform.OS == "android" ? 45 + StatusBar.currentHeight : 45,
        shadowOpacity: 0,
        paddingTop: Platform.OS == "android" ? StatusBar.currentHeight : 0
      },
      headerPressColorAndroid: "",
      headerTruncatedBackTitle: "",
      headerBackTitle: null,
      headerTintColor: "#ffffff",
      headerBackTitleStyle: {
        color: "#ffffff"
      },
      headerTitleStyle: {
        fontSize: 18,
        color: "#ffffff",
        textAlign: "center",
        flexGrow: 1
      },
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
