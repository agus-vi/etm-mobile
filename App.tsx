import React from "react";
import type { PropsWithChildren } from "react";
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  useColorScheme,
} from "react-native";
import {
  Button,
  SegmentedControl,
  Text,
  TextField,
  View,
} from "react-native-ui-lib";

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === "dark";

  const safePadding = "5%";

  return (
    <View>
      <StatusBar barStyle={isDarkMode ? "light-content" : "dark-content"} />
      <ScrollView>
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
      </ScrollView>
    </View>
  );
}

export default App;
