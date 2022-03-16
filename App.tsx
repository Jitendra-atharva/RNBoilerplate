import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Splash, Login } from "./src/module";
import Provider, { AppContext } from "./src/framework/AppContext";
import "./src/localization/i18n";
import "react-native-gesture-handler";
import Home from "./Home";

const Stack = createNativeStackNavigator();
function App() {
  const { state } = React.useContext(AppContext);
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {state.isLogin ? (
        <Stack.Screen name="Auth" component={AuthFlow} /> // -- add home screen or after login
      ) : (
        <Stack.Screen name="Auth" component={AuthFlow} />
      )}
    </Stack.Navigator>
  );
}

const AuthStack = createNativeStackNavigator();
function AuthFlow() {
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name="Login" component={Login} />
    </AuthStack.Navigator>
  );
}

const SplashStack = createNativeStackNavigator();
function AppFlow() {
  return (
    <NavigationContainer>
      <SplashStack.Navigator screenOptions={{ headerShown: false }}>
        <SplashStack.Screen name="Splash" component={Splash} />
        <SplashStack.Screen name="App" component={App} />
      </SplashStack.Navigator>
    </NavigationContainer>
  );
}

if (!Home.instance) {
  const defaultProps = {
    navigation: null,
    id: "InstanceCreate",
  };
  new Home(defaultProps);
}

export default () => {
  return (
    <Provider>
      <AppFlow />
    </Provider>
  );
};
