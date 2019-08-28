import React from "react";
import { Animated, Easing, Platform, StatusBar } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer,
  BottomTabBarProps,
  NavigationSceneRendererProps,
  TabBarIconProps
} from "react-navigation";
import StackViewStyleInterpolator from "react-navigation-stack/src/views/StackView/StackViewStyleInterpolator";
import Login from "./src/pages/Login";
import Page1 from "./src/pages/Page1";
import Page2 from "./src/pages/Page2";
import Page3 from "./src/pages/Page3";
import Page4 from "./src/pages/Page4";
import ReactNavigation from "./src/pages/ReactNavigation";
import Icon from "./src/components/Icon";

const BottomNavigator = createBottomTabNavigator(
  {
    Page1: {
      screen: Page1,
      navigationOptions: {
        headerTitle: "首页",
        tabBarLabel: "首页",
        tabBarIcon: (opt: TabBarIconProps) => (
          <Icon
            style={{ fontSize: 20, color: opt.focused ? "red" : "#999999" }}
            value={"\ue602"}
          />
        )
      }
    },
    Page2: {
      screen: Page2,
      navigationOptions: {
        headerTitle: "购物车",
        tabBarLabel: "购物车",
        tabBarIcon: (opt: TabBarIconProps) => (
          <Icon
            style={{ fontSize: 20, color: opt.focused ? "red" : "#999999" }}
            value={"\ue601"}
          />
        )
      }
    },
    Page3: {
      screen: Page3,
      navigationOptions: {
        headerTitle: "个人中心",
        tabBarLabel: "个人中心",
        tabBarIcon: (opt: TabBarIconProps) => (
          <Icon
            style={{ fontSize: 20, color: opt.focused ? "red" : "#999999" }}
            value={"\ue607"}
          />
        )
      }
    }
  },
  {
    initialRouteName: "Page1",
    tabBarOptions: {
      showLabel: true,
      showIcon: true,
      activeTintColor: "red",
      inactiveTintColor: "#333333",
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
    mode: "card",
    headerLayoutPreset: "center",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "red", // TabBar 背景色
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
      screenInterpolator: (sceneProps: NavigationSceneRendererProps) =>
        StackViewStyleInterpolator.forHorizontal(sceneProps)
    })
  }
);

// 动态设置第一层级的标题
BottomNavigator.navigationOptions = (bottomTabBar: BottomTabBarProps) => {
  const { routes, index } = bottomTabBar.navigation.state;
  const navigationOptions = { title: "" };
  if (routes[index].routeName === "Page1") {
    navigationOptions.title = "首页";
    StatusBar.setBarStyle("light-content", false);
  } else if (routes[index].routeName === "Page2") {
    navigationOptions.title = "购物车";
    StatusBar.setBarStyle("light-content", false);
  } else if (routes[index].routeName === "Page3") {
    navigationOptions.title = "个人中心";
    StatusBar.setBarStyle("light-content", false);
  }
  return navigationOptions;
};

export default createAppContainer(AppNavigator);
