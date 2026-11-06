import { StyleSheet, Text, TouchableOpacity } from "react-native";

export function ButtonFatec() {
  return (
    <TouchableOpacity style={estilos.container}>
      <Text style={estilos.title}> Meu Button </Text>
    </TouchableOpacity>
  );
}

const estilos = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 52,
    backgroundColor: "green",
    borderRadius: 10,
  },
  title: {
    color: "#fff",
  },
});
