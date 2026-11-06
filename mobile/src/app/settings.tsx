import { useRouter } from "expo-router";
import {
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function Settings() {
  const router = useRouter();

  return (
    <View style={s.c}>
      <View style={s.top}>
        <Text style={s.back} onPress={() => router.back()}>
          ‹
        </Text>

        <Text style={s.topTitle}>Configurações</Text>
      </View>

      <View style={s.body}>
        {[
          "✎  Editar perfil",
          "🔔  Notificações",
          "📄  Termos de uso",
          "🔒  Política de privacidade",
        ].map((x) => (
          <Pressable
            style={s.item}
            key={x}
            onPress={() => {
              if (x.includes("Editar perfil")) router.push("/edit-profile");
              else if (x.includes("Notificações")) router.push("/notifications");
              else if (x.includes("Termos de uso")) router.push("/about");
              else if (x.includes("Política de privacidade")) router.push("/about");
            }}
          >
            <Text style={s.itemText}>{x}</Text>

            <Text style={s.arrow}>›</Text>
          </Pressable>
        ))}

        <Pressable
          style={s.item}
          onPress={() => router.replace("/")}
        >
          <Text
            style={[
              s.itemText,
              {
                color: "#C24A55",
              },
            ]}
          >
            ↪  Sair da conta
          </Text>
        </Pressable>

        <Pressable style={s.item} onPress={() => router.push("/admin-login")}>
          <Text style={s.itemText}>Área administrativa</Text>
          <Text style={s.arrow}>›</Text>
        </Pressable>
      </View>
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

  body: {
    padding: 18,
  },

  item: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 17,
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  itemText: {
    fontSize: 15,
    color: "#30243A",
    fontWeight: "600",
  },

  arrow: {
    fontSize: 22,
    color: "#999",
  },
});
