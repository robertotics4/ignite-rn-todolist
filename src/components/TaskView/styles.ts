import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 18,
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: '#262626',
    borderColor: '#333333',
  },
  emptyCircle: {
    height: 17,
    width: 17,
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#4EA8DE',
    borderRadius: 17
  },
  doneCircle: {
    borderWidth: 0,
    backgroundColor: '#5E60CE',
    justifyContent: 'center',
    alignItems: 'center'
  },
  description: {
    fontSize: 14,
    color: '#F2F2F2'
  },
  descriptionIfDone: {
    textDecorationLine: "line-through",
    color: '#808080'
  }
});