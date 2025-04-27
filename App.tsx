import "./global.css";
import "@/global.css";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import { Login } from "./src/modules/auth/screens/Login";

export default function App() {
  return (
    <GluestackUIProvider mode="dark">
      <View style={styles.container}>
        <Login />
      </View>
    </GluestackUIProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
});
