import { Text, TouchableOpacity, View, } from "react-native";
import { Feather } from "@expo/vector-icons";
import { Task } from "../Main";
import { styles } from "./styles";

export type TaskProps = {
  task: Task
  updateTask: (updatedTask: Task) => void;
  deleteTask: (deletedTask: Task) => void;
}

export function TaskView({ task, updateTask, deleteTask }: TaskProps) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.emptyCircle, task.done === true && styles.doneCircle]}
        onPress={() => {
          task.done = !task.done
          updateTask(task)
        }}
      >
        {task.done && <Feather name="check" size={10} color="#FFF" />}
      </TouchableOpacity>

      <Text style={[styles.description, task.done && styles.descriptionIfDone]}>{task.description}</Text>

      <Feather name="trash-2" size={16} color="#808080" onPress={() => deleteTask(task)} />
    </View>
  );
}