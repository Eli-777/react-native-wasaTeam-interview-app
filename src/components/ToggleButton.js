import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

function ToggleButton({ ...props }) {
  return (
    <TouchableOpacity style={styles.border} {...props}>
      <Text style={styles.buttonText}>button</Text>
    </TouchableOpacity>
  );
}

export default ToggleButton;

const styles = StyleSheet.create({
  border: {
    borderColor: "#007AFF",
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 20,
    width: 80,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#007AFF",
  },
});
