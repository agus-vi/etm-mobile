import "./global.css";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open uedddd!</Text>
      <StatusBar style="auto" />
      <Text className="text-3xl text-red-900">Heqwello world!</Text>
      <View className="bg-blue-500 w-12 h-10"></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
