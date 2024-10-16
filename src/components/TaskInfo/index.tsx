import { Text, View } from "react-native";
import { styles } from "./styles";

interface TaskInfoProps {
  title: string,
  value: number,
  color?: 'primary' | 'secondary'
}

export function TaskInfo({ title, value, color = "primary" }: TaskInfoProps) {
  return (
    <View style={styles.container}>
      <Text style={[styles.title, color === 'secondary' && styles.customTitleColor]}>{title}</Text>
      <View style={styles.valueContainer}>
        <Text style={styles.value}>{value}</Text>
      </View>
    </View>
  );
}