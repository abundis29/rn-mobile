import { ColorSchemeName } from "react-native";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import GuestNavigation from "./GuestNavigation";

const Navigation = ({ colorScheme }: { colorScheme: ColorSchemeName }) => {
  const resolveTheme = colorScheme?.includes("dark") ? DarkTheme : DefaultTheme;
  return (
    <NavigationContainer theme={resolveTheme}>
      {GuestNavigation}
    </NavigationContainer>
  );
};
export default Navigation;
