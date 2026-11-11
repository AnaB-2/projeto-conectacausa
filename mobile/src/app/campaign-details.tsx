
import { useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";

import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function CampaignDetails() {
  const router = useRouter();

  return (
    <View style={s.c}>
      <ScrollView>
        <LinearGradient
          colors={["#8B5BCB", "#5E2D98"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={s.hero}
        >
          <Text style={s.back} onPress={() => router.back()}>
            ‹
          </Text>

          <Text style={s.heroEmoji}>🍎</Text>

          <Text style={s.heroTitle}>
            Doe alimentos e transforme vidas
          </Text>

          <Text style={s.tag}>COMBATE A FOME</Text>
        </LinearGradient>

        <View style={s.body}>
          <Text style={s.title}>Sobre a campanha</Text>

          <Text style={s.text}>
            Ajude famílias em situação de vulnerabilidade com doações de
            alimentos. Toda contribuição pode fazer diferença.
          </Text>

          <Text style={s.title}>Progresso</Text>

          <View style={s.bar}>
            <View style={s.fill} />
          </View>

          <Text style={s.progress}>76% arrecadado</Text>

          <View style={s.info}>
            <Text>Meta</Text>
            <Text style={s.bold}>R$ 5.000</Text>

            <Text>Arrecadado</Text>
            <Text style={s.bold}>R$ 3.800</Text>
          </View>

          <Pressable
            style={s.button}
            onPress={() => router.push("/donation")}
          >
            <Text style={s.buttonText}>Fazer uma doação</Text>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
}

const s = StyleSheet.create({
  c: {
    flex: 1,
    backgroundColor: "#F7F4FB",
  },

  hero: {
    padding: 20,
    paddingTop: 50,
    paddingBottom: 28,
  },

  back: {
    color: "#fff",
    fontSize: 35,
  },

  heroEmoji: {
    fontSize: 60,
    textAlign: "center",
    marginTop: 5,
  },

  heroTitle: {
    color: "#fff",
    fontSize: 27,
    fontWeight: "800",
    textAlign: "center",
    marginTop: 12,
  },

  tag: {
    color: "#E8D9F5",
    fontSize: 11,
    fontWeight: "800",
    textAlign: "center",
    marginTop: 8,
  },

  body: {
    padding: 22,
  },

  title: {
    fontSize: 19,
    fontWeight: "800",
    color: "#30243A",
    marginTop: 12,
    marginBottom: 9,
  },

  text: {
    fontSize: 15,
    color: "#666",
    lineHeight: 23,
  },

  bar: {
    height: 12,
    backgroundColor: "#E4D9EE",
    borderRadius: 10,
    overflow: "hidden",
    marginTop: 7,
  },

  fill: {
    width: "76%",
    height: "100%",
    backgroundColor: "#743BB5",
  },

  progress: {
    color: "#743BB5",
    fontWeight: "700",
    marginTop: 7,
  },

  info: {
    backgroundColor: "#fff",
    borderRadius: 14,
    padding: 16,
    marginTop: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  bold: {
    fontWeight: "800",
    color: "#743BB5",
  },

  button: {
    backgroundColor: "#743BB5",
    height: 52,
    borderRadius: 11,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 25,
  },

  buttonText: {
    color: "#fff",
    fontWeight: "800",
    fontSize: 16,
  },
});