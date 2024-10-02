import { Text, View, } from "react-native";
import { Feather } from "@expo/vector-icons";
import { Task } from "../Main";
import { styles } from "./styles";

export type TaskProps = {
  task: Task
}

export function TaskView({ task }: TaskProps) {
  return (
    <View style={styles.container}>
      <View style={styles.done}></View>
      <Text style={styles.description}>{task.description}</Text>
      <Feather name="trash-2" size={16} color="#808080" />
    </View>
  );
}