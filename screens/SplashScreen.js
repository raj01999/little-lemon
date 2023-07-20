import React from "react";
import { View, StyleSheet, Image, ActivityIndicator } from "react-native";

const SplashScreen = () => {
  return (
    <ActivityIndicator color={"pink"} size={100} style={styles.container} />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default SplashScreen;
