
import { useRouter } from "expo-router";

import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

// Integrantes da equipe
const team = [
  {
    name: "Rafael Malfára",
    role: "Desenvolvimento",
    photo: require("@/assets/images/team-rafael.jpeg"),
  },
  {
    name: "Ana Beatriz",
    role: "Desenvolvimento e testes",
    photo: require("@/assets/images/team-ana.jpeg"),
  },
  {
    name: "Caio Marteloni",
    role: "Desenvolvimento e testes",
    photo: require("@/assets/images/team-caio.webp"),
  },
];

// Tela Quem Somos
export default function About() {
  const router = useRouter();

  return (
    <View style={s.screen}>
      {/* Cabeçalho */}
      <View style={s.top}>
        <Text
          onPress={() => router.back()}
          style={s.back}
        >
          ‹
        </Text>

        <Text style={s.title}>
          Quem somos
        </Text>
      </View>

      {/* Conteúdo da página */}
      <ScrollView contentContainerStyle={s.body}>
        <Text style={s.heading}>
          Somos o Projeto ConectaCausa
        </Text>

        <Text style={s.paragraph}>
          O ConectaCausa é uma plataforma que conecta pessoas a ONGs
          de diferentes áreas, como combate à fome, proteção animal
          e educação. Nosso objetivo é facilitar o apoio a causas
          sociais, aproximando quem quer ajudar de organizações que
          precisam de doações, voluntários e visibilidade.
        </Text>

        {/* Destaque de solidariedade */}
        <View style={s.highlight}>
          <Text style={s.highlightTitle}>
            Obrigado pela sua solidariedade!
          </Text>

          <Text style={s.highlightText}>
            Cada doação é um passo em direção a uma sociedade mais
            solidária. A sua generosidade ajuda organizações a
            continuar esse trabalho tão importante.
          </Text>
        </View>

        {/* Integrantes do projeto */}
        <Text style={s.heading}>
          Conheça os integrantes do projeto
        </Text>

        {team.map((person) => (
          <View
            key={person.name}
            style={s.person}
          >
            <Image
              source={person.photo}
              style={s.photo}
            />

            <View style={{ flex: 1 }}>
              <Text style={s.personName}>
                {person.name}
              </Text>

              <Text style={s.role}>
                {person.role} do Projeto ConectaCausa
              </Text>
            </View>
          </View>
        ))}

        {/* Contato */}
        <Text style={s.contact}>
          Contato: contato@conectacausa.org
        </Text>
      </ScrollView>
    </View>
  );
}

// Estilização da tela
const s = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#F7F4FB",
  },

  // Cabeçalho
  top: {
    backgroundColor: "#743BB5",
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
    padding: 21,
    paddingBottom: 40,
  },

  heading: {
    fontSize: 22,
    fontWeight: "900",
    color: "#6C2FA9",
    marginBottom: 12,
  },

  paragraph: {
    fontSize: 15,
    lineHeight: 24,
    color: "#4F4558",
  },

  // Caixa de destaque
  highlight: {
    backgroundColor: "#EEE3F8",
    padding: 18,
    borderRadius: 16,
    marginVertical: 20,
  },

  highlightTitle: {
    fontSize: 18,
    fontWeight: "900",
    color: "#6C2FA9",
    marginBottom: 8,
  },

  highlightText: {
    fontSize: 14,
    lineHeight: 22,
    color: "#51445D",
  },

  // Integrantes
  person: {
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 15,
    flexDirection: "row",
    alignItems: "center",
    gap: 13,
    marginBottom: 10,
  },

  photo: {
    width: 66,
    height: 66,
    borderRadius: 33,
  },

  personName: {
    fontSize: 15,
    fontWeight: "800",
    color: "#35233F",
  },

  role: {
    fontSize: 12,
    color: "#756B7D",
    marginTop: 4,
  },

  // Contato
  contact: {
    marginTop: 12,
    color: "#6C2FA9",
    fontWeight: "700",
  },
});
