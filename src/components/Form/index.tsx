import { TextInput, TouchableOpacity, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { styles } from "./styles";

export function Form() {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder="Adicione uma nova tarefa"
        placeholderTextColor="#808080"
      />
      <TouchableOpacity style={styles.addButton}>
        <AntDesign name="pluscircleo" size={16} color="#F2F2F2" />
      </TouchableOpacity>
    </View>
  );
}