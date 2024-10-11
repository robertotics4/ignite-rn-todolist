import { TextInput, TouchableOpacity, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { styles } from "./styles";
import { useState } from "react";

type FormProps = {
  handleAddTask: (description: string) => void;
}

export function Form({ handleAddTask }: FormProps) {
  const [description, setDescription] = useState('')

  function handleChangeDescription(inputText: string) {
    setDescription(inputText)
  }

  function handleClickAdd() {
    handleAddTask(description)
    setDescription('')
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder="Adicione uma nova tarefa"
        placeholderTextColor="#808080"
        onChangeText={(t) => handleChangeDescription(t)}
        value={description}
      />
      <TouchableOpacity style={styles.addButton} onPress={handleClickAdd}>
        <AntDesign name="pluscircleo" size={16} color="#F2F2F2" />
      </TouchableOpacity>
    </View>
  );
}