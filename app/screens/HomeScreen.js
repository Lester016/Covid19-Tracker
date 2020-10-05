import React from "react";
import { StyleSheet, Text, View } from "react-native";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={[{ fontSize: 30 }, styles.text]}>Group 10</Text>
      <Text style={styles.text}>Ballarta, Jonas Andrei</Text>
      <Text style={styles.text}>Caunar, John Joseph</Text>
      <Text style={styles.text}>De Guzman, Lester</Text>
      <Text style={styles.text}>Pilapil, Kim Kenneth</Text>
      <Text style={styles.text}>Vinzon, Julianne Rose</Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: "center",
    justifyContent: "center",
  },
  text: {
    textAlign: "center",
  },
});
