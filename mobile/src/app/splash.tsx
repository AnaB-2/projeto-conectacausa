import { useEffect } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { useRouter } from "expo-router";

export default function Splash() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => router.replace("/welcome"), 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Image source={require("@/assets/images/logo-conectacausa.png")} style={styles.logo} />
      <Text style={styles.brand}>ConectaCausa</Text>
      <Text style={styles.subtitle}>Conectando boas ações{`\n`}a quem precisa.</Text>
      <Text style={styles.hearts}>♡  ♥  ♡</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#743BB5", alignItems: "center", justifyContent: "center" },
  logo: { width: 105, height: 105, marginBottom: 18 },
  brand: { color: "#fff", fontSize: 34, fontWeight: "800" },
  subtitle: { color: "#EDE2F8", fontSize: 17, textAlign: "center", lineHeight: 25, marginTop: 10 },
  hearts: { position: "absolute", bottom: 65, color: "#DCC7F0", fontSize: 24, letterSpacing: 10 },
});
