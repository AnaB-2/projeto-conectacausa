import { Link, useRouter } from "expo-router";
import { useState } from "react";
import { loginUsuario } from "@/api/apiusers";
import {
  Alert,
  Image,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function Index() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  async function onClickAcessar() {
    if (!email || !senha) {
      Alert.alert("Atenção", "Preencha o e-mail e a senha.");
      return;
    }

    try {
      const resposta = await loginUsuario(email, senha);
      console.log("Login realizado:", resposta.data);
      Alert.alert("Bem-vindo(a)!", `Olá, ${resposta.data?.nome || "usuário"}!`, [
        { text: "Continuar", onPress: () => router.replace("/dashboard") }
      ]);
    } catch (error) {
      Alert.alert(
        "Não foi possível entrar",
        error instanceof Error ? error.message : "Verifique a conexão com a API."
      );
    }
  }

  return (
    <KeyboardAvoidingView
      style={styles.screen}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <View style={styles.container}>
        <View style={styles.logoArea}>
          <Image
            source={require("@/assets/images/logo-conectacausa.png")}
            style={styles.logo}
          />
          <Text style={styles.brand}>Conecta<Text style={styles.brandLight}>Causa</Text></Text>
          <Text style={styles.subtitle}>Conectando pessoas a boas causas.</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.title}>Entrar</Text>
          <Text style={styles.description}>Acesse sua conta para continuar.</Text>

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

          <Pressable style={styles.button} onPress={onClickAcessar}>
            <Text style={styles.buttonText}>Entrar</Text>
          </Pressable>

          <View style={styles.registerRow}>
            <Text style={styles.registerText}>Ainda não tem uma conta? </Text>
            <Link href="/register" asChild>
              <Pressable>
                <Text style={styles.link}>Cadastre-se</Text>
              </Pressable>
            </Link>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#F7F4FB",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 24,
  },
  logoArea: {
    alignItems: "center",
    marginBottom: 28,
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
    marginBottom: 16,
    color: "#222",
    backgroundColor: "#FCFBFD",
  },
  button: {
    height: 50,
    borderRadius: 10,
    backgroundColor: "#743BB5",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 4,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
  },
  registerRow: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  registerText: {
    color: "#666",
  },
  link: {
    color: "#743BB5",
    fontWeight: "700",
  },
});
