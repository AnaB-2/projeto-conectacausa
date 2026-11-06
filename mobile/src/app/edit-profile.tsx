import { useState } from "react";
import { Alert, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { useRouter } from "expo-router";

export default function EditProfile() {
  const router = useRouter();
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const [telefone, setTelefone] = useState("");

  function salvar() {
    Alert.alert(
      "Edição de perfil",
      "A tela de edição abriu corretamente. Para salvar as alterações na conta, ainda precisamos conectar este formulário a uma rota de atualização de usuário da API."
    );
  }

  return (
    <View style={s.container}>
      <View style={s.header}>
        <Pressable onPress={() => router.back()}><Text style={s.back}>‹</Text></Pressable>
        <Text style={s.title}>Editar perfil</Text>
      </View>
      <ScrollView contentContainerStyle={s.body} keyboardShouldPersistTaps="handled">
        <Text style={s.intro}>Atualize suas informações pessoais.</Text>
        <Text style={s.label}>Nome completo</Text>
        <TextInput value={nome} onChangeText={setNome} placeholder="Digite seu nome" style={s.input} />
        <Text style={s.label}>E-mail</Text>
        <TextInput value={email} onChangeText={setEmail} placeholder="Digite seu e-mail" keyboardType="email-address" autoCapitalize="none" style={s.input} />
        <Text style={s.label}>CPF</Text>
        <TextInput value={cpf} onChangeText={setCpf} placeholder="000.000.000-00" keyboardType="numeric" style={s.input} />
        <Text style={s.label}>Telefone</Text>
        <TextInput value={telefone} onChangeText={setTelefone} placeholder="(00) 00000-0000" keyboardType="phone-pad" style={s.input} />
        <Pressable style={s.button} onPress={salvar}><Text style={s.buttonText}>Salvar alterações</Text></Pressable>
      </ScrollView>
    </View>
  );
}

const s = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F7F4FB" },
  header: { backgroundColor: "#743BB5", paddingTop: 52, paddingBottom: 20, paddingHorizontal: 20, flexDirection: "row", alignItems: "center" },
  back: { fontSize: 35, color: "#fff", marginRight: 15 },
  title: { fontSize: 22, color: "#fff", fontWeight: "800" },
  body: { padding: 22, paddingBottom: 40 },
  intro: { color: "#62576B", fontSize: 15, marginBottom: 18 },
  label: { color: "#30243A", fontWeight: "700", marginBottom: 7, marginTop: 14 },
  input: { backgroundColor: "#fff", borderWidth: 1, borderColor: "#DDD4E6", borderRadius: 11, height: 50, paddingHorizontal: 14, color: "#30243A" },
  button: { backgroundColor: "#743BB5", height: 52, borderRadius: 11, alignItems: "center", justifyContent: "center", marginTop: 28 },
  buttonText: { color: "#fff", fontWeight: "800", fontSize: 16 },
});
