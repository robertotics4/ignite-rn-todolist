import { FlatList, Text, View } from "react-native";
import { randomUUID } from 'expo-crypto';
import { Form } from "../Form";
import { styles } from "./styles";
import { TaskInfo } from "../TaskInfo";
import { useState } from "react";
import { EmptyList } from "../EmptyList";
import { TaskView } from "../TaskView";

export type Task = {
  id: string
  description: string
  done?: boolean
}

export function Main() {
  const [tasks, setTasks] = useState<Task[]>([])

  function handleAddTask(description: string) {
    if (description) {
      setTasks(oldState => [...oldState, {
        id: randomUUID(),
        description,
        done: false
      }])
    }
  }

  return (
    <View style={styles.container}>
      <Form handleAddTask={handleAddTask} />

      <View style={styles.infoContainer}>
        <TaskInfo title="Criadas" value={tasks.length} />
        <TaskInfo title="Concluídas" value={tasks.filter(t => t.done === true).length} />
      </View>

      <FlatList
        style={styles.taskListContainer}
        data={tasks}
        keyExtractor={item => item.id}
        ListEmptyComponent={<EmptyList />}
        ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
        renderItem={({ item }) => (<TaskView task={item} />)}
      />
    </View>
  );
}