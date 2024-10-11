import { Text, View } from "react-native";
import { styles } from "./styles";

interface TaskInfoProps {
  title: string,
  value: number,
}

export function TaskInfo({ title, value }: TaskInfoProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.valueContainer}>
        <Text style={styles.value}>{value}</Text>
      </View>
    </View>
  );
}