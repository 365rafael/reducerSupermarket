import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    backgroundColor: "#00BFFF",
  },
  inputContainer: {
    flexDirection: "row",
    margin: 10,
  },
  input: {
    flex: 1,
    width: "80%",
    fontSize: 30,
    color: "white",
  },
  addButton: {
    marginHorizontal: 5,

    width: "20%",
    marginLeft: 2,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
  addButtonText: {
    color: "white",
    fontSize: 60,
  },
  itemsContainer: {
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: 8,
    marginBottom: 10,
  },
  itemCheckButton: {
    flex: 1,
  },
  listItem: {
    fontSize: 22,
    marginVertical: 3,
    marginHorizontal: 7,
    padding: 10,
  },
  listItemChecked: {
    textDecorationLine: "line-through",
  },
  removerItem: {
    alignItems: "center",
    alignSelf: "center",
    marginHorizontal: 10,
  },
  removerItemText: {
    fontSize: 12,
    color: "red",
  },
});
