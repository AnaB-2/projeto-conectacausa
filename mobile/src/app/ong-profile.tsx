
import { useLocalSearchParams, useRouter } from "expo-router";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function OngProfile() {
  const router = useRouter();
  const params = useLocalSearchParams<{
    name?: string;
    category?: string;
    description?: string;
    image?: string;
  }>();

  const name = params.name || "Alimento Solidário";
  const category = params.category || "Combate à fome";
  const description =
    params.description ||
    "Distribuição de alimentos para famílias carentes.";

  const image =
    params.image === "alimento"
      ? require("@/assets/images/ongs/alimento-solidario.jpg")
      : {
          uri:
            params.image ||
            "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1200&auto=format&fit=crop",
        };

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#8B5BCB", "#5E2D98"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.header}
      >
        <Text style={styles.back} onPress={() => router.back()}>
          ‹
        </Text>

        <Text style={styles.headerTitle}>Perfil da ONG</Text>
      </LinearGradient>

      <View style={styles.body}>
        <Image source={image} style={styles.logo} />

        <Text style={styles.name}>{name}</Text>
        <Text style={styles.category}>{category}</Text>

        <Text style={styles.title}>Sobre a ONG</Text>
        <Text style={styles.text}>{description}</Text>

        <Text style={styles.title}>Campanhas</Text>

        <View style={styles.campaign}>
          <Text style={styles.campaignTitle}>
            Ajude a causa da {name}
          </Text>

          <Text style={styles.text}>
            Apoie essa ONG e contribua para que esse trabalho continue.
          </Text>
        </View>

        <Pressable
          style={styles.button}
          onPress={() => router.push("/donation")}
        >
          <Text style={styles.buttonText}>Quero ajudar</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F4FB",
  },

  header: {
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

  headerTitle: {
    fontSize: 22,
    color: "#fff",
    fontWeight: "800",
  },

  body: {
    padding: 22,
    alignItems: "center",
  },

  logo: {
    width: 110,
    height: 110,
    borderRadius: 16,
    marginTop: 15,
  },

  name: {
    fontSize: 25,
    fontWeight: "800",
    color: "#30243A",
    marginTop: 12,
    textAlign: "center",
  },

  category: {
    color: "#743BB5",
    fontWeight: "700",
    marginTop: 4,
  },

  title: {
    alignSelf: "flex-start",
    fontSize: 19,
    fontWeight: "800",
    color: "#30243A",
    marginTop: 28,
    marginBottom: 8,
  },

  text: {
    alignSelf: "flex-start",
    fontSize: 14,
    color: "#666",
    lineHeight: 21,
  },

  campaign: {
    width: "100%",
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 13,
  },

  campaignTitle: {
    fontSize: 17,
    fontWeight: "800",
    color: "#743BB5",
    marginBottom: 5,
  },

  button: {
    width: "100%",
    height: 52,
    borderRadius: 11,
    backgroundColor: "#743BB5",
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