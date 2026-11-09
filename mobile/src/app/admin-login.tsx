
import { useState } from "react";
import { useRouter } from "expo-router";

import {
  Alert,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

import { loginUsuario } from "@/api/apiusers";

// Tela de login administrativo
export default function AdminLogin() {
  const router = useRouter();

  // Estados dos campos
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  // Função de autenticação
  async function entrar() {
    if (!email || !senha) {
      Alert.alert(
        "Atenção",
        "Informe e-mail e senha."
      );

      return;
    }

    try {
      const result = await loginUsuario(email, senha);

      // Verifica o tipo de usuário
      const role = String(
        result.data?.tipo_usuario || ""
      ).toLowerCase();

      // Restringe o acesso a administradores
      if (!role.includes("admin")) {
        Alert.alert(
          "Acesso restrito",
          "Esta área é permitida somente para administradores."
        );

        return;
      }

      // Redireciona para o painel administrativo
      router.replace("/statistics");

    } catch (error) {
      Alert.alert(
        "Não foi possível entrar",
        error instanceof Error
          ? error.message
          : "Verifique a conexão com a API."
      );
    }
  }

  return (
    <View style={s.screen}>
      {/* Identidade visual */}
      <Text style={s.brand}>
        ConectaCausa
      </Text>

      {/* Título e descrição */}
      <Text style={s.title}>
        Acesso administrativo
      </Text>

      <Text style={s.desc}>
        Entre com uma conta que tenha permissão de administrador.
      </Text>

      {/* Campo de e-mail */}
      <Text style={s.label}>
        E-mail
      </Text>

      <TextInput
        style={s.input}
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
        placeholder="Digite o e-mail"
      />

      {/* Campo de senha */}
      <Text style={s.label}>
        Senha
      </Text>

      <TextInput
        style={s.input}
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
        placeholder="Digite a senha"
      />

      {/* Botão de acesso */}
      <Pressable
        style={s.button}
        onPress={entrar}
      >
        <Text style={s.buttonText}>
          Acessar painel
        </Text>
      </Pressable>

      {/* Voltar */}
      <Text
        onPress={() => router.back()}
        style={s.back}
      >
        Voltar
      </Text>
    </View>
  );
}

// Estilização da tela
const s = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#F7F4FB",
    justifyContent: "center",
    padding: 25,
  },

  // Identidade visual
  brand: {
    fontSize: 27,
    fontWeight: "900",
    color: "#743BB5",
    textAlign: "center",
    marginBottom: 28,
  },

  // Títulos
  title: {
    fontSize: 24,
    fontWeight: "900",
    color: "#35233F",
  },

  desc: {
    fontSize: 14,
    color: "#766B7D",
    lineHeight: 21,
    marginTop: 7,
    marginBottom: 25,
  },

  // Campos de formulário
  label: {
    fontWeight: "800",
    color: "#403448",
    marginBottom: 7,
  },

  input: {
    height: 50,
    borderWidth: 1,
    borderColor: "#DDD4E6",
    borderRadius: 11,
    paddingHorizontal: 14,
    backgroundColor: "#fff",
    marginBottom: 17,
  },

  // Botão de acesso
  button: {
    backgroundColor: "#743BB5",
    padding: 15,
    borderRadius: 11,
    alignItems: "center",
    marginTop: 5,
  },

  buttonText: {
    color: "#fff",
    fontWeight: "900",
  },

  // Navegação
  back: {
    textAlign: "center",
    color: "#743BB5",
    fontWeight: "800",
    marginTop: 20,
  },
});
