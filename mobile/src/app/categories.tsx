
import { useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";

import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

// Categorias disponíveis
const data = [
  {
    title: "Proteção Animal",
    desc: "Cuidado e proteção de animais em situação de risco.",
    icon: require("@/assets/images/icon-paw.png"),
  },
  {
    title: "Combate à fome",
    desc: "Distribuição de alimentos para comunidades carentes.",
    icon: require("@/assets/images/icon-utensils.png"),
  },
  {
    title: "Apoio a famílias",
    desc: "Auxílio para famílias em situação de vulnerabilidade social.",
    icon: require("@/assets/images/icon-people.png"),
  },
  {
    title: "Educação",
    desc: "Projetos educacionais para crianças e jovens.",
    icon: require("@/assets/images/icon-book.png"),
  },
];

// Tela de categorias
export default function Categories() {
  const router = useRouter();

  return (
    <View style={s.screen}>
      {/* Cabeçalho */}
      <LinearGradient
        colors={["#8B5BCB", "#5E2D98"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={s.top}
      >
        <Text
          onPress={() => router.back()}
          style={s.back}
        >
          ‹
        </Text>

        <Text style={s.title}>
          Categorias
        </Text>
      </LinearGradient>

      {/* Conteúdo */}
      <ScrollView contentContainerStyle={s.body}>
        <Text style={s.intro}>
          Escolha uma causa e descubra organizações que precisam
          do seu apoio.
        </Text>

        {/* Lista de categorias */}
        {data.map((item) => (
          <Pressable
            key={item.title}
            style={s.card}
            onPress={() => router.push("/ongs")}
          >
            {/* Ícone da categoria */}
            <View style={s.iconWrap}>
              <Image
                source={item.icon}
                style={s.icon}
              />
            </View>

            {/* Informações da categoria */}
            <View style={{ flex: 1 }}>
              <Text style={s.name}>
                {item.title}
              </Text>

              <Text style={s.desc}>
                {item.desc}
              </Text>
            </View>

            {/* Indicador de navegação */}
            <Text style={s.arrow}>
              ›
            </Text>
          </Pressable>
        ))}

        {/* Botão para conhecer as ONGs */}
        <Pressable
          style={s.button}
          onPress={() => router.push("/ongs")}
        >
          <Text style={s.buttonText}>
            Conhecer ONGs cadastradas
          </Text>
        </Pressable>
      </ScrollView>
    </View>
  );
}

// Estilização da tela
const s = StyleSheet.create({
  // Estrutura principal
  screen: {
    flex: 1,
    backgroundColor: "#F7F4FB",
  },

  // Cabeçalho
  top: {
    paddingTop: 54,
    paddingBottom: 20,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
  },

  back: {
    fontSize: 34,
    color: "#fff",
    marginRight: 16,
  },

  title: {
    fontSize: 22,
    color: "#fff",
    fontWeight: "800",
  },

  // Conteúdo
  body: {
    padding: 20,
  },

  intro: {
    fontSize: 15,
    color: "#665B6D",
    lineHeight: 23,
    marginBottom: 16,
  },

  // Cartões das categorias
  card: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 15,
    marginBottom: 12,
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
    elevation: 2,
  },

  // Área dos ícones
  iconWrap: {
    width: 60,
    height: 60,
    borderRadius: 15,
    backgroundColor: "#F2EAF9",
    alignItems: "center",
    justifyContent: "center",
  },

  icon: {
    width: 38,
    height: 38,
    resizeMode: "contain",
  },

  // Textos das categorias
  name: {
    fontSize: 16,
    fontWeight: "800",
    color: "#35233F",
  },

  desc: {
    fontSize: 12,
    color: "#756B7D",
    lineHeight: 18,
    marginTop: 4,
  },

  // Indicador de navegação
  arrow: {
    fontSize: 28,
    color: "#743BB5",
  },

  // Botão de acesso às ONGs
  button: {
    backgroundColor: "#743BB5",
    padding: 15,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 10,
  },

  buttonText: {
    color: "#fff",
    fontWeight: "800",
  },
});