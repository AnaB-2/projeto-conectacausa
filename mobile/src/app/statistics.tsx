
import { useRouter } from "expo-router";

import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

// Tela de estatísticas administrativas
export default function Statistics() {
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
          Estatísticas
        </Text>
      </View>

      {/* Conteúdo da página */}
      <ScrollView contentContainerStyle={s.body}>
        {/* Identificação da área */}
        <Text style={s.eyebrow}>
          CONECTACAUSA / ADMINISTRAÇÃO
        </Text>

        <Text style={s.heading}>
          Painel de estatísticas
        </Text>

        <Text style={s.desc}>
          Acompanhe os resultados e o alcance da plataforma.
        </Text>

        {/* Aviso administrativo */}
        <View style={s.notice}>
          <Text style={s.noticeTitle}>
            Área administrativa
          </Text>

          <Text style={s.noticeText}>
            Esta tela é destinada a contas com permissão de
            administrador. Os indicadores devem ser preenchidos
            pelos endpoints estatísticos da API, sem utilizar
            números fictícios.
          </Text>
        </View>

        {/* Indicadores estatísticos */}
        {[
          [
            "Usuários cadastrados",
            "Total de contas na plataforma",
          ],
          [
            "ONGs cadastradas",
            "Organizações participantes",
          ],
          [
            "Doações registradas",
            "Registros no sistema",
          ],
          [
            "Quantidade doada",
            "Soma das doações",
          ],
        ].map(([title, sub]) => (
          <View
            key={title}
            style={s.metric}
          >
            <Text style={s.metricValue}>
              —
            </Text>

            <View style={{ flex: 1 }}>
              <Text style={s.metricTitle}>
                {title}
              </Text>

              <Text style={s.metricSub}>
                {sub}
              </Text>
            </View>
          </View>
        ))}

        {/* Botão para voltar ao início */}
        <Pressable
          style={s.button}
          onPress={() => router.replace("/dashboard")}
        >
          <Text style={s.buttonText}>
            Voltar ao início
          </Text>
        </Pressable>
      </ScrollView>
    </View>
  );
}

// Estilização da tela
const s = StyleSheet.create({
  // Estrutura principal
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
    padding: 20,
  },

  eyebrow: {
    fontSize: 10,
    letterSpacing: 1.5,
    color: "#8C6AA8",
    fontWeight: "900",
  },

  heading: {
    fontSize: 25,
    fontWeight: "900",
    color: "#35233F",
    marginTop: 6,
  },

  desc: {
    fontSize: 14,
    color: "#766B7D",
    marginTop: 6,
    marginBottom: 18,
  },

  // Aviso administrativo
  notice: {
    backgroundColor: "#EEE5F7",
    borderRadius: 14,
    padding: 15,
    marginBottom: 16,
  },

  noticeTitle: {
    fontWeight: "900",
    color: "#6C2FA9",
    fontSize: 16,
  },

  noticeText: {
    color: "#5F5369",
    fontSize: 13,
    lineHeight: 20,
    marginTop: 6,
  },

  // Cartões de indicadores
  metric: {
    backgroundColor: "#fff",
    borderRadius: 14,
    padding: 16,
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
    elevation: 1,
  },

  metricValue: {
    fontSize: 26,
    fontWeight: "900",
    color: "#743BB5",
    width: 50,
  },

  metricTitle: {
    fontSize: 15,
    fontWeight: "800",
    color: "#35233F",
  },

  metricSub: {
    fontSize: 12,
    color: "#817687",
    marginTop: 3,
  },

  // Botão de navegação
  button: {
    backgroundColor: "#743BB5",
    padding: 15,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 12,
  },

  buttonText: {
    color: "#fff",
    fontWeight: "800",
  },
});
