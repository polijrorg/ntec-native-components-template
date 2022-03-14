import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { DropDown } from "@ntec/native";
import { useState } from "react";

export default function App() {
  const [selectedOption, setSelectedOption] = useState("Opção 1");

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>Um componente do @ntec/native funcionando no seu app!{"\n"}</Text>
      <DropDown
        label="Selecione a opção"
        disableSelectAll
        value={selectedOption}
        onChange={setSelectedOption}
        options={["Opção 1", "Opção 2"]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 42
  },
});
