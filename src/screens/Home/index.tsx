import { View } from "react-native";
import { Header } from "../../components/Header";
import { Main } from "../../components/Main";
import { styles } from "./styles";

export function Home() {
  return (
    <View style={styles.container}>
      <Header />
      <Main />
    </View>
  );
}