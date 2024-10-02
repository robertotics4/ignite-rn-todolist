import { FlatList, Text, View } from "react-native";
import { Form } from "../Form";
import { styles } from "./styles";
import { TaskInfo } from "../TaskInfo";
import { useState } from "react";
import { EmptyList } from "../EmptyList";
import { TaskView } from "../TaskView";

export type Task = {
  id: number
  description: string
  done?: boolean
}

export function Main() {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, description: 'sdkjçlsadkjflçaksdjfasdk' },
    { id: 2, description: 'sdkjçlsadkjflçaksdjfasdk' },
    { id: 3, description: 'sdkjçlsadkjflçaksdjfasdk' }
  ])

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
        keyExtractor={item => item.id.toString()}
        ListEmptyComponent={<EmptyList />}
        ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
        renderItem={({ item }) => (<TaskView task={item} />)}
      />
    </View>
  );
}