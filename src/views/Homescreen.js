import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ToggleButton from "../components/ToggleButton";

function Homescreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Homescreen</Text>
      <ToggleButton
        title="Toggle drawer"
        onPress={() => navigation.toggleDrawer()}
      />
    </View>
  );
}

export default Homescreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 40,
    margin: 8,
  },
});
