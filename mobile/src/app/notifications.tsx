import { useRouter } from "expo-router";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function Notifications() {
  const router = useRouter();

  return (
    <View style={s.c}>
      <View style={s.top}>
        <Text style={s.back} onPress={() => router.back()}>
          ‹
        </Text>

        <Text style={s.topTitle}>Notificações</Text>
      </View>

      <ScrollView>
        {[
          [
            "🔔",
            "Nova campanha disponível",
            "Conheça uma nova causa no ConectaCausa.",
          ],
          [
            "💜",
            "Obrigado pela sua contribuição!",
            "Sua ajuda fez a diferença.",
          ],
          [
            "📢",
            "Campanha atualizada",
            "Uma campanha que você acompanha teve novidades.",
          ],
        ].map(([i, t, d]) => (
          <View style={s.card} key={t}>
            <Text style={s.icon}>{i}</Text>

            <View style={{ flex: 1 }}>
              <Text style={s.title}>{t}</Text>

              <Text style={s.desc}>{d}</Text>
            </View>
          </View>
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
    fontSize: 22,
    color: "#fff",
    fontWeight: "800",
  },

  card: {
    margin: 15,
    marginBottom: 0,
    backgroundColor: "#fff",
    borderRadius: 14,
    padding: 16,
    flexDirection: "row",
    gap: 12,
  },

  icon: {
    fontSize: 28,
  },

  title: {
    fontSize: 15,
    fontWeight: "800",
    color: "#30243A",
  },

  desc: {
    fontSize: 13,
    color: "#666",
    marginTop: 4,
    lineHeight: 19,
  },
});
