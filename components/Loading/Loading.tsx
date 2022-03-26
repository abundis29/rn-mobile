import React from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import useColorScheme from "../../hooks/useColorScheme";
import Colors from "../../theme/Colors";
import { styles } from "./LoadingStyles";

const Loading = () => {
  const colorScheme = useColorScheme();
  return (
    <View style={styles.loadingView}>
      <ActivityIndicator
        size="large"
        color={Colors[colorScheme].blue100}
      ></ActivityIndicator>
      <Text
        style={{ ...styles.loadingText, color: Colors[colorScheme].blue100 }}
      >
        Loading ...
      </Text>
    </View>
  );
};
export default Loading;
