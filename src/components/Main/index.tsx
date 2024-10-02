import { FlatList, Text, View } from "react-native";
import { Form } from "../Form";
import { styles } from "./styles";
import { TaskInfo } from "../TaskInfo";
import { useState } from "react";
import { EmptyList } from "../EmptyList";

export type Task = {
  id: number
  description: string
}

export function Main() {
  const [tasks, setTasks] = useState<Task[]>([])

  return (
    <View style={styles.container}>
      <Form />

      <View style={styles.infoContainer}>
        <TaskInfo title="Criadas" value={0} />
        <TaskInfo title="Concluídas" value={0} />
      </View>

      <FlatList
        style={styles.taskListContainer}
        data={tasks}
        ListEmptyComponent={<EmptyList />}
        renderItem={({ item }) => (<Text>{item.description}</Text>)}
      />
    </View>
  );
}