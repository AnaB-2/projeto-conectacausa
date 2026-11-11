
import { useState } from "react";
import {
  Alert,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";

export default function Donation() {
  const router = useRouter();
  const [value, setValue] = useState(25);

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

        <Text style={s.topTitle}>Fazer uma doação</Text>
      </LinearGradient>

      <View style={s.body}>
        <Text style={s.title}>Escolha o valor</Text>

        <View style={s.values}>
          {[10, 25, 50, 100].map((v) => (
            <Pressable
              key={v}
              style={[s.value, value === v && s.selected]}
              onPress={() => setValue(v)}
            >
              <Text
                style={[
                  s.valueText,
                  value === v && s.selectedText,
                ]}
              >
                R$ {v}
              </Text>
            </Pressable>
          ))}
        </View>

        <Text style={s.title}>Outro valor</Text>

        <TextInput
          style={s.input}
          keyboardType="numeric"
          placeholder="Digite o valor"
        />

        <Text style={s.title}>Forma de pagamento</Text>

        <View style={s.pay}>
          <Text>○ Pix</Text>
          <Text>○ Cartão</Text>
        </View>

        <Pressable
          style={s.button}
          onPress={() =>
            Alert.alert(
              "Doação",
              `Doação de R$ ${value} simulada com sucesso!`
            )
          }
        >
          <Text style={s.buttonText}>Doar</Text>
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
  },

  title: {
    fontSize: 18,
    fontWeight: "800",
    color: "#30243A",
    marginTop: 18,
    marginBottom: 12,
  },

  values: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },

  value: {
    width: "47%",
    height: 50,
    borderRadius: 10,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#DDD4E6",
    alignItems: "center",
    justifyContent: "center",
  },

  selected: {
    backgroundColor: "#743BB5",
    borderColor: "#743BB5",
  },

  valueText: {
    color: "#743BB5",
    fontWeight: "700",
  },

  selectedText: {
    color: "#fff",
  },

  input: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#DDD4E6",
    borderRadius: 10,
    height: 50,
    paddingHorizontal: 14,
  },

  pay: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 17,
    gap: 15,
  },

  button: {
    backgroundColor: "#743BB5",
    height: 52,
    borderRadius: 11,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },

  buttonText: {
    color: "#fff",
    fontWeight: "800",
    fontSize: 16,
  },
});