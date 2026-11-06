import { useRouter } from "expo-router";
import {
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function Profile() {
  const router = useRouter();

  return (
    <View style={s.c}>
      <View style={s.top}>
        <Text style={s.back} onPress={() => router.back()}>
          ‹
        </Text>

        <Text style={s.topTitle}>Meu perfil</Text>
      </View>

      <View style={s.body}>
        <View style={s.avatar}>
          <Text>👤</Text>
        </View>

        <Text style={s.name}>Meu perfil</Text>

        <View style={s.card}>
          <Text style={s.label}>Nome</Text>
          <Text style={s.value}>Usuário ConectaCausa</Text>

          <Text style={s.label}>CPF</Text>
          <Text style={s.value}>000.000.000-00</Text>

          <Text style={s.label}>E-mail</Text>
          <Text style={s.value}>usuario@email.com</Text>
        </View>

        <Pressable style={s.button} onPress={() => router.push("/edit-profile")}>
          <Text style={s.buttonText}>Editar perfil</Text>
        </Pressable>

        <Pressable
          style={s.settings}
          onPress={() => router.push("/settings")}
        >
          <Text style={s.settingsText}>
            ⚙ Configurações
          </Text>
        </Pressable>

        <Pressable onPress={() => router.replace("/")}>
          <Text style={s.logout}>Sair da conta</Text>
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
    padding: 22,
    alignItems: "center",
  },

  avatar: {
    width: 92,
    height: 92,
    borderRadius: 46,
    backgroundColor: "#EDE2F7",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 15,
  },

  name: {
    fontSize: 24,
    fontWeight: "800",
    color: "#30243A",
    marginTop: 12,
  },

  card: {
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 14,
    padding: 18,
    marginTop: 22,
  },

  label: {
    fontSize: 12,
    color: "#888",
    marginTop: 10,
  },

  value: {
    fontSize: 15,
    color: "#30243A",
    fontWeight: "600",
    marginTop: 3,
  },

  button: {
    width: "100%",
    height: 50,
    borderRadius: 10,
    backgroundColor: "#743BB5",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 18,
  },

  buttonText: {
    color: "#fff",
    fontWeight: "800",
  },

  settings: {
    width: "100%",
    height: 50,
    borderRadius: 10,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },

  settingsText: {
    color: "#743BB5",
    fontWeight: "700",
  },

  logout: {
    color: "#C24A55",
    fontWeight: "700",
    marginTop: 25,
  },
});
