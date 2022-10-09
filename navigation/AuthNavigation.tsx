import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen, OnboardingScreen, SignInScreen } from '../screens/auth';

const AuthStack = createStackNavigator();
const AuthStackScreen = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <AuthStack.Screen
        name="SignIn"
        component={SignInScreen}
        options={{ headerShown: false }}
      />
      <AuthStack.Screen
        name="Onboarding"
        component={OnboardingScreen}
        options={{ headerShown: false }}
      />
    </AuthStack.Navigator>
  );
};
export default AuthStackScreen;
