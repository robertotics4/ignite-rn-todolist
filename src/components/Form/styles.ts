import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    gap: 6,
    marginTop: -24
  },
  textInput: {
    flex: 1,
    height: 54,
    fontSize: 16,
    borderRadius: 6,
    padding: 10,
    backgroundColor: '#262626',
    color: '#F2F2F2'
  },
  addButton: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 52,
    width: 52,
    borderRadius: 6,
    backgroundColor: '#1E6F9F'
  }
})