import { useRouter } from "expo-router";
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function Campaigns() {
  const router = useRouter();

  return (
    <View style={s.c}>
      <View style={s.top}>
        <Text style={s.back} onPress={() => router.back()}>
          ‹
        </Text>

        <Text style={s.topTitle}>Campanhas</Text>
      </View>

      <ScrollView>
        <Text style={s.intro}>
          Encontre uma causa para apoiar.
        </Text>

        {[
          ["🍎", "Doe alimentos e transforme vidas", "Combate a fome"],
          ["🐾", "Ajude os animais", "Proteção animal"],
          ["👥", "Ajude familias", "Apoio a familias"],
          ["🎓", "Educação para todos", "Educação"],
        ].map(([e, t, c]) => (
          <Pressable
            key={t}
            style={s.card}
            onPress={() => router.push("/campaign-details")}
          >
            <Text style={s.big}>{e}</Text>

            <View style={{ flex: 1 }}>
              <Text style={s.tag}>{c}</Text>

              <Text style={s.title}>{t}</Text>

              <Text style={s.desc}>
                Faça parte dessa campanha e ajude a transformar vidas.
              </Text>
            </View>

            <Text style={s.arrow}>›</Text>
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
}

const s = StyleSheet.create({
  c: {
    flex: 1,
    backgroundColor: "#F7F4FB",
  },

  top: {
    backgroundColor: "#743BB5",
    paddingTop: 52,
    paddingBottom: 20,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
  },

  back: {
    fontSize: 35,
    color: "#fff",
    marginRight: 15,
  },

  topTitle: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "800",
  },

  intro: {
    margin: 20,
    color: "#666",
  },

  card: {
    marginHorizontal: 20,
    marginBottom: 14,
    padding: 16,
    backgroundColor: "#fff",
    borderRadius: 16,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    elevation: 2,
  },

  big: {
    fontSize: 38,
  },

  tag: {
    fontSize: 10,
    color: "#743BB5",
    fontWeight: "800",
  },

  title: {
    fontSize: 17,
    fontWeight: "800",
    color: "#30243A",
    marginTop: 4,
  },

  desc: {
    fontSize: 12,
    color: "#777",
    marginTop: 5,
    lineHeight: 17,
  },

  arrow: {
    fontSize: 30,
    color: "#743BB5",
  },
});
