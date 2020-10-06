import React from "react";
import { StyleSheet } from "react-native";

import Screen from "../components/Screen";
import Text from "../components/Text";

const HomeScreen = () => {
  return (
    <Screen style={styles.container}>
      <Text style={[{ fontSize: 30 }, styles.text]}>Group 10</Text>
      <Text style={styles.text}>Ballarta, Jonas Andrei</Text>
      <Text style={styles.text}>Caunar, John Joseph</Text>
      <Text style={styles.text}>De Guzman, Lester</Text>
      <Text style={styles.text}>Pilapil, Kim Kenneth</Text>
      <Text style={styles.text}>Vinzon, Julianne Rose</Text>
    </Screen>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
    justifyContent: "center",
  },
  text: {
    textAlign: "center",
  },
});
