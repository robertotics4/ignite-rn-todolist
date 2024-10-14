import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    marginTop: 36,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8
  },
  primaryTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#4EA8DE'
  },
  secondaryTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#8284FA'
  },
  valueContainer: {
    backgroundColor: '#333333',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 10
  },
  value: {
    fontSize: 12,
    color: '#D9D9D9',
  }
});