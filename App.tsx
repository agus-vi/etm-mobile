import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import {
  Button,
  SegmentedControl,
  Text,
  TextField,
  View,
} from "react-native-ui-lib";

export default function App() {
  return (
    <View flex center>
      <Text blue50 text20 marginB-s5>
        Welcome
      </Text>
      <SegmentedControl
        segments={[{ label: "Register" }, { label: "Login" }]}
      />

      <View marginT-s5>
        <TextField preset="outline" placeholder="username" />
        <TextField
          preset="outline"
          placeholder="password"
          secureTextEntry
          grey10
        />
      </View>

      <View row marginT-s5 centerV>
        <Button link text70 orange30 label="Sign Up" marginR-s5 />
        <Button text70 white background-orange30 label="Login" />
      </View>
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
