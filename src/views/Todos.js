import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

function ProfilesScreen(props) {
  const [todos, setTodos] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch("https://api.mocki.io/v1/13f44462")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setTodos(data);
      })
      .catch((error) => console.log(error));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>TODOS</Text>
      <FlatList
        data={todos}
        renderItem={({ item }) => (
          <Text style={styles.list}>
            title: {item.title} {"\n"}description:{item.description}
          </Text>
        )}
        keyExtractor={(item, index) => index.toString()}
      />

      {console.log(todos)}
    </View>
  );
}

export default ProfilesScreen;

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "600"
  },
  list: {
    margin: 20,
    padding: 8,
    fontSize: 20,
    borderColor: "black",
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 10,
  }
});
