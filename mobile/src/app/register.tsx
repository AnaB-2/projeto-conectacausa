import { Link, useRouter } from "expo-router";
import { useState } from "react";
import { cadastrarUsuario } from "@/api/apiusers";
import {
  Alert,
  Image,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function Register() {
  const router = useRouter();
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [senha2, setSenha2] = useState("");

  async function onClickCadastrar() {
    if (!nome || !email || !senha || !senha2) {
      Alert.alert("Atenção", "Preencha todos os campos.");
      return;
    }

    if (senha !== senha2) {
      Alert.alert("Atenção", "As senhas são diferentes.");
      return;
    }

    try {
      await cadastrarUsuario({ nome, email, senha });
      Alert.alert("Cadastro realizado!", "Sua conta foi criada. Agora você pode entrar.", [
        { text: "OK", onPress: () => router.replace("/") },
      ]);
    } catch (error) {
      Alert.alert(
        "Não foi possível cadastrar",
        error instanceof Error ? error.message : "Verifique a conexão com a API."
      );
    }
  }

  return (
    <KeyboardAvoidingView
      style={styles.screen}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.logoArea}>
          <Image
            source={require("@/assets/images/logo-conectacausa.png")}
            style={styles.logo}
          />
          <Text style={styles.brand}>Conecta<Text style={styles.brandLight}>Causa</Text></Text>
          <Text style={styles.subtitle}>Crie sua conta e faça parte dessa rede.</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.title}>Criar conta</Text>
          <Text style={styles.description}>Preencha seus dados para se cadastrar.</Text>

          <Text style={styles.label}>Nome completo</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite seu nome completo"
            placeholderTextColor="#888"
            value={nome}
            onChangeText={setNome}
          />

          <Text style={styles.label}>E-mail</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite seu e-mail"
            placeholderTextColor="#888"
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
          />

          <Text style={styles.label}>Senha</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite sua senha"
            placeholderTextColor="#888"
            secureTextEntry
            value={senha}
            onChangeText={setSenha}
          />

          <Text style={styles.label}>Confirmar senha</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite a senha novamente"
            placeholderTextColor="#888"
            secureTextEntry
            value={senha2}
            onChangeText={setSenha2}
          />

          <Pressable style={styles.button} onPress={onClickCadastrar}>
            <Text style={styles.buttonText}>Cadastrar</Text>
          </Pressable>

          <View style={styles.loginRow}>
            <Text style={styles.loginText}>Já possui uma conta? </Text>
            <Link href="/" asChild>
              <Pressable>
                <Text style={styles.link}>Entrar</Text>
              </Pressable>
            </Link>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#F7F4FB",
  },
  container: {
    flexGrow: 1,
    justifyContent: "center",
    padding: 24,
  },
  logoArea: {
    alignItems: "center",
    marginBottom: 24,
  },
  logo: {
    width: 58,
    height: 58,
    marginBottom: 8,
  },
  brand: {
    fontSize: 30,
    fontWeight: "800",
    color: "#6A35A8",
  },
  brandLight: {
    fontWeight: "500",
  },
  subtitle: {
    marginTop: 5,
    color: "#666",
    fontSize: 14,
    textAlign: "center",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 18,
    padding: 22,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 3,
  },
  title: {
    fontSize: 26,
    fontWeight: "700",
    color: "#29202F",
  },
  description: {
    color: "#777",
    marginTop: 5,
    marginBottom: 22,
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
    color: "#3E3446",
    marginBottom: 7,
  },
  input: {
    height: 48,
    borderWidth: 1,
    borderColor: "#DDD4E6",
    borderRadius: 10,
    paddingHorizontal: 14,
    marginBottom: 15,
    color: "#222",
    backgroundColor: "#FCFBFD",
  },
  button: {
    height: 50,
    borderRadius: 10,
    backgroundColor: "#743BB5",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
  },
  loginRow: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  loginText: {
    color: "#666",
  },
  link: {
    color: "#743BB5",
    fontWeight: "700",
  },
});
