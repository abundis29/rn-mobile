import { Text, StyleSheet } from "react-native";

const OnboardingScreen = ({ navigation }: any) => {
  return <Text style={styles.center}>OnboardingScreen SCREEN</Text>;
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    flexDirection: "column",
    flexWrap: "nowrap",
    justifyContent: "space-between",
    padding: 20,
    marginBottom: 40,
  },
});

export default OnboardingScreen;
