import { createStackNavigator } from '@react-navigation/stack';
import AuthStackScreen from './AuthNavigation';

const RootStack = createStackNavigator();

const GuestNavigation = (
  <RootStack.Navigator>
    <RootStack.Screen
      name="Auth"
      component={AuthStackScreen}
      options={{
        animationEnabled: false,
        header: () => null,
      }}
    />
  </RootStack.Navigator>
);
export default GuestNavigation;
