import React from "react";
import { View, Text, StyleSheet } from "react-native";

function Homescreen(props) {
  return (
    <View style={styles.container}>
      <Text>this is homescreen</Text>
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
});
