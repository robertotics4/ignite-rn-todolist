import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingHorizontal: 24,
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  taskListContainer: {
    borderTopColor: '#333333',
    borderTopWidth: 1,
    marginTop: 16
  }
})