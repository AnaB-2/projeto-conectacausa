
import { useRouter } from "expo-router";

import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

// Tela inicial de apresentação
export default function Welcome() {
  const router = useRouter();

  return (
    <ScrollView
      style={s.screen}
      contentContainerStyle={s.content}
    >
      {/* Cabeçalho e apresentação */}
      <View style={s.header}>
        <Image
          source={require("@/assets/images/logo-conectacausa.png")}
          style={s.logo}
        />

        <Text style={s.brand}>
          ConectaCausa
        </Text>

        <Text style={s.kicker}>
          JUNTOS POR UM MUNDO MELHOR
        </Text>

        <Text style={s.hero}>
          Pequenas ações. Grandes transformações.
        </Text>

        <Text style={s.intro}>
          Conectamos pessoas que querem ajudar a ONGs e causas
          que fazem a diferença. Encontre uma causa, conheça
          projetos e faça parte da mudança.
        </Text>

        {/* Botão de login */}
        <Pressable
          style={s.primary}
          onPress={() => router.push("/")}
        >
          <Text style={s.primaryText}>
            Entrar na minha conta
          </Text>
        </Pressable>

        {/* Botão de cadastro */}
        <Pressable
          style={s.secondary}
          onPress={() => router.push("/register")}
        >
          <Text style={s.secondaryText}>
            Criar minha conta
          </Text>
        </Pressable>
      </View>

      {/* Seção de categorias */}
      <Text style={s.section}>
        Conheça nossas causas
      </Text>

      <View style={s.grid}>
        {[
          [
            require("@/assets/images/icon-paw.png"),
            "Proteção Animal",
          ],
          [
            require("@/assets/images/icon-utensils.png"),
            "Combate à fome",
          ],
          [
            require("@/assets/images/icon-people.png"),
            "Apoio a famílias",
          ],
          [
            require("@/assets/images/icon-book.png"),
            "Educação",
          ],
        ].map(([icon, label]: any) => (
          <Pressable
            key={label}
            style={s.category}
            onPress={() => router.push("/categories")}
          >
            <Image
              source={icon}
              style={s.categoryIcon}
            />

            <Text style={s.categoryText}>
              {label}
            </Text>
          </Pressable>
        ))}
      </View>

      {/* Links adicionais */}
      <Pressable
        style={s.linkRow}
        onPress={() => router.push("/about")}
      >
        <Text style={s.link}>
          Conheça o projeto ConectaCausa  ›
        </Text>
      </Pressable>

      <Pressable
        style={s.linkRow}
        onPress={() => router.push("/ongs")}
      >
        <Text style={s.link}>
          Ver ONGs cadastradas  ›
        </Text>
      </Pressable>
    </ScrollView>
  );
}

// Estilização da tela
const s = StyleSheet.create({
  // Estrutura principal
  screen: {
    flex: 1,
    backgroundColor: "#F7F4FB",
  },

  content: {
    paddingBottom: 35,
  },

  // Cabeçalho
  header: {
    backgroundColor: "#743BB5",
    paddingHorizontal: 25,
    paddingTop: 55,
    paddingBottom: 32,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    alignItems: "center",
  },

  logo: {
    width: 72,
    height: 72,
    marginBottom: 8,
  },

  brand: {
    fontSize: 29,
    fontWeight: "900",
    color: "#fff",
  },

  kicker: {
    fontSize: 10,
    letterSpacing: 2,
    fontWeight: "800",
    color: "#E8DDF3",
    marginTop: 23,
  },

  hero: {
    fontSize: 30,
    lineHeight: 37,
    fontWeight: "900",
    color: "#fff",
    textAlign: "center",
    marginTop: 12,
  },

  intro: {
    fontSize: 14,
    lineHeight: 22,
    color: "#F2EAF8",
    textAlign: "center",
    marginTop: 12,
    marginBottom: 22,
  },

  // Botões principais
  primary: {
    backgroundColor: "#fff",
    borderRadius: 12,
    paddingVertical: 14,
    width: "100%",
    alignItems: "center",
  },

  primaryText: {
    color: "#743BB5",
    fontWeight: "800",
    fontSize: 15,
  },

  secondary: {
    borderWidth: 1,
    borderColor: "#E7D9F5",
    borderRadius: 12,
    paddingVertical: 13,
    width: "100%",
    alignItems: "center",
    marginTop: 10,
  },

  secondaryText: {
    color: "#fff",
    fontWeight: "700",
  },

  // Seção de categorias
  section: {
    fontSize: 21,
    fontWeight: "900",
    color: "#35233F",
    marginHorizontal: 20,
    marginTop: 25,
    marginBottom: 12,
  },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingHorizontal: 14,
  },

  // Cartões das categorias
  category: {
    width: "46%",
    margin: "2%",
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 16,
    alignItems: "center",
    minHeight: 125,
    justifyContent: "center",
    elevation: 2,
  },

  categoryIcon: {
    width: 48,
    height: 48,
    resizeMode: "contain",
    marginBottom: 10,
  },

  categoryText: {
    color: "#392B43",
    fontWeight: "800",
    textAlign: "center",
  },

  // Links adicionais
  linkRow: {
    marginHorizontal: 22,
    marginTop: 17,
  },

  link: {
    color: "#743BB5",
    fontWeight: "800",
    fontSize: 14,
  },
});
