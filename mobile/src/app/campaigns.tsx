
import { useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function Campaigns() {
  const router = useRouter();

  const campaigns = [
    {
      emoji: "🍎",
      title: "Doe alimentos e transforme vidas",
      category: "Combate à fome",
      route: "/campaign-details",
    },
    {
      emoji: "🐾",
      title: "Ajude os animais",
      category: "Proteção animal",
      route: "/campaign-details(animals)",
    },
    {
      emoji: "👥",
      title: "Ajude famílias",
      category: "Apoio a famílias",
      route: "/campaign-details(families)",
    },
    {
      emoji: "🎓",
      title: "Educação para todos",
      category: "Educação",
      route: "/campaign-details(education)",
    },
  ];

  return (
    <View style={s.c}>
      <LinearGradient
        colors={["#8B5BCB", "#5E2D98"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={s.top}
      >
        <Text style={s.back} onPress={() => router.back()}>
          ‹
        </Text>

        <Text style={s.topTitle}>Campanhas</Text>
      </LinearGradient>

      <ScrollView>
        <Text style={s.intro}>
          Encontre uma causa para apoiar.
        </Text>

        {campaigns.map((campaign) => (
          <Pressable
            key={campaign.category}
            style={s.card}
            onPress={() => router.push(campaign.route)}
          >
            <Text style={s.big}>{campaign.emoji}</Text>

            <View style={{ flex: 1 }}>
              <Text style={s.tag}>{campaign.category}</Text>

              <Text style={s.title}>{campaign.title}</Text>

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