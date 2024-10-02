import { View } from "react-native";
import { Form } from "../Form";
import { styles } from "./styles";
import { TaskInfo } from "../TaskInfo";

export function Main() {
  return (
    <View style={styles.container}>
      <Form />

      <View style={styles.infoContainer}>
        <TaskInfo title="Criadas" value={0} />
        <TaskInfo title="Concluídas" value={0} />
      </View>
    </View>
  );
}