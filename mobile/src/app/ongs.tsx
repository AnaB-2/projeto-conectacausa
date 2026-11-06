import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Pressable,
} from "react-native";
 
import { useRouter } from "expo-router";
 
export default function ONGs() {
 
  const router = useRouter();
 
  return (
    <View style={styles.container}>
 
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scroll}
      >
 
        {/* CABEÇALHO */}
 
        <View style={styles.header}>
 
          <Text style={styles.titulo}>
            ONGs parceiras
          </Text>
 
          <Text style={styles.subtitulo}>
            Conheça organizações que fazem a diferença 💜
          </Text>
 
        </View>
 
 
        {/* BUSCA */}
 
        <View style={styles.busca}>
 
          <Text style={styles.lupa}>
            ⌕
          </Text>
 
          <TextInput
            placeholder="Buscar ONG..."
            placeholderTextColor="#888"
            style={styles.input}
          />
 
        </View>
 
 
        {/* BOTÃO CADASTRAR ONG */}
 
        <Pressable
          style={styles.botaoCadastrar}
          onPress={() => router.push("/cadastroOng")}
        >
 
          <View style={styles.maisContainer}>
 
            <Text style={styles.mais}>
              +
            </Text>
 
          </View>
 
          <View style={styles.textoCadastrar}>
 
            <Text style={styles.botaoCadastrarTitulo}>
              Cadastrar minha ONG
            </Text>
 
            <Text style={styles.botaoCadastrarSubtitulo}>
              Faça parte da rede ConectaCausa
            </Text>
 
          </View>
 
          <Text style={styles.seta}>
            →
          </Text>
 
        </Pressable>
 
 
        {/* TÍTULO */}
 
        <Text style={styles.tituloSecao}>
          Organizações cadastradas
        </Text>
 
 
        {/* ONG 1 */}
 
        <View style={styles.cardONG}>
 
          <View style={styles.logoONG}>
            <Text style={styles.logoTexto}>
              🐾
            </Text>
          </View>
 
          <View style={styles.infoONG}>
 
            <Text style={styles.nomeONG}>
              Instituto Patinhas
            </Text>
 
            <Text style={styles.causaONG}>
              🐾 Proteção animal
            </Text>
 
            <Text style={styles.localONG}>
              📍 São Paulo - SP
            </Text>
 
          </View>
 
          <Pressable
            style={styles.botaoVer}
          >
 
            <Text style={styles.textoVer}>
              Ver
            </Text>
 
          </Pressable>
 
        </View>
 
 
        {/* ONG 2 */}
 
        <View style={styles.cardONG}>
 
          <View style={styles.logoONG}>
            <Text style={styles.logoTexto}>
              💜
            </Text>
          </View>
 
          <View style={styles.infoONG}>
 
            <Text style={styles.nomeONG}>
              ONG Esperança
            </Text>
 
            <Text style={styles.causaONG}>
              👥 Apoio social
            </Text>
 
            <Text style={styles.localONG}>
              📍 São José do Rio Preto - SP
            </Text>
 
          </View>
 
          <Pressable
            style={styles.botaoVer}
          >
 
            <Text style={styles.textoVer}>
              Ver
            </Text>
 
          </Pressable>
 
        </View>
 
 
        {/* ONG 3 */}
 
        <View style={styles.cardONG}>
 
          <View style={styles.logoONG}>
            <Text style={styles.logoTexto}>
              🎓
            </Text>
          </View>
 
          <View style={styles.infoONG}>
 
            <Text style={styles.nomeONG}>
              Projeto Sementes
            </Text>
 
            <Text style={styles.causaONG}>
              🎓 Educação
            </Text>
 
            <Text style={styles.localONG}>
              📍 São Paulo - SP
            </Text>
 
          </View>
 
          <Pressable
            style={styles.botaoVer}
          >
 
            <Text style={styles.textoVer}>
              Ver
            </Text>
 
          </Pressable>
 
        </View>
 
 
        {/* ONG 4 */}
 
        <View style={styles.cardONG}>
 
          <View style={styles.logoONG}>
            <Text style={styles.logoTexto}>
              🍎
            </Text>
          </View>
 
          <View style={styles.infoONG}>
 
            <Text style={styles.nomeONG}>
              Instituto Alimento
            </Text>
 
            <Text style={styles.causaONG}>
              🍎 Combate a fome
            </Text>
 
            <Text style={styles.localONG}>
              📍 São Paulo - SP
            </Text>
 
          </View>
 
          <Pressable
            style={styles.botaoVer}
          >
 
            <Text style={styles.textoVer}>
              Ver
            </Text>
 
          </Pressable>
 
        </View>
 
 
        <View style={{ height: 30 }} />
 
      </ScrollView>
 
 
      {/* MENU INFERIOR */}
 
      <View style={styles.menu}>
 
        {/* INÍCIO */}
 
        <Pressable
          style={styles.menuItem}
          onPress={() => router.push("/dashboard")}
        >
 
          <Text style={styles.menuIcon}>
            ⌂
          </Text>
 
          <Text style={styles.menuTexto}>
            Início
          </Text>
 
        </Pressable>
 
 
        {/* CAMPANHAS */}
 
        <Pressable
          style={styles.menuItem}
          onPress={() => router.push("/campaigns")}
        >
 
          <Text style={styles.menuIcon}>
            ♡
          </Text>
 
          <Text style={styles.menuTexto}>
            Campanhas
          </Text>
 
        </Pressable>
 
 
        {/* DOAR */}
 
        <Pressable
          style={styles.botaoDoar}
          onPress={() => router.push("/donation")}
        >
 
          <Text style={styles.maisDoar}>
            +
          </Text>
 
          <Text style={styles.textoDoar}>
            Doar
          </Text>
 
        </Pressable>
 
 
        {/* ONGS */}
 
        <Pressable
          style={styles.menuItem}
        >
 
          <Text style={styles.menuIconAtivo}>
            ♧
          </Text>
 
          <Text style={styles.menuTextoAtivo}>
            ONGs
          </Text>
 
        </Pressable>
 
 
        {/* PERFIL */}
 
        <Pressable
          style={styles.menuItem}
          onPress={() => router.push("/profile")}
        >
 
          <Text style={styles.menuIcon}>
            ♙
          </Text>
 
          <Text style={styles.menuTexto}>
            Perfil
          </Text>
 
        </Pressable>
 
      </View>
 
    </View>
  );
}
 
 
const styles = StyleSheet.create({
 
  container: {
    flex: 1,
    backgroundColor: "#F8F5FC",
  },
 
 
  scroll: {
    paddingBottom: 100,
  },
 
 
  /* HEADER */
 
  header: {
    backgroundColor: "#743BB5",
 
    paddingTop: 55,
    paddingHorizontal: 20,
    paddingBottom: 30,
 
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
 
  titulo: {
    color: "#FFFFFF",
 
    fontSize: 27,
 
    fontWeight: "800",
  },
 
  subtitulo: {
    color: "#E9DDF5",
 
    fontSize: 14,
 
    marginTop: 6,
  },
 
 
  /* BUSCA */
 
  busca: {
    height: 52,
 
    backgroundColor: "#FFFFFF",
 
    marginHorizontal: 20,
 
    marginTop: -25,
 
    borderRadius: 15,
 
    flexDirection: "row",
 
    alignItems: "center",
 
    paddingHorizontal: 15,
 
    elevation: 4,
  },
 
  lupa: {
    color: "#777",
 
    fontSize: 26,
 
    marginRight: 8,
  },
 
  input: {
    flex: 1,
 
    fontSize: 14,
 
    color: "#333",
  },
 
 
  /* BOTÃO CADASTRAR */
 
  botaoCadastrar: {
    backgroundColor: "#743BB5",
 
    marginHorizontal: 20,
 
    marginTop: 20,
 
    borderRadius: 16,
 
    padding: 15,
 
    flexDirection: "row",
 
    alignItems: "center",
 
    elevation: 3,
  },
 
  maisContainer: {
    width: 48,
    height: 48,
 
    borderRadius: 25,
 
    backgroundColor: "#FFFFFF",
 
    alignItems: "center",
    justifyContent: "center",
  },
 
  mais: {
    color: "#743BB5",
 
    fontSize: 28,
 
    fontWeight: "400",
  },
 
  textoCadastrar: {
    flex: 1,
 
    marginLeft: 13,
  },
 
  botaoCadastrarTitulo: {
    color: "#FFFFFF",
 
    fontSize: 15,
 
    fontWeight: "800",
  },
 
  botaoCadastrarSubtitulo: {
    color: "#E8DDF3",
 
    fontSize: 11,
 
    marginTop: 3,
  },
 
  seta: {
    color: "#FFFFFF",
 
    fontSize: 25,
  },
 
 
  /* TÍTULO DA LISTA */
 
  tituloSecao: {
    color: "#302039",
 
    fontSize: 19,
 
    fontWeight: "800",
 
    marginHorizontal: 20,
 
    marginTop: 28,
 
    marginBottom: 12,
  },
 
 
  /* CARDS DAS ONGS */
 
  cardONG: {
    backgroundColor: "#FFFFFF",
 
    marginHorizontal: 20,
 
    marginBottom: 12,
 
    borderRadius: 16,
 
    padding: 14,
 
    flexDirection: "row",
 
    alignItems: "center",
 
    elevation: 2,
  },
 
  logoONG: {
    width: 58,
    height: 58,
 
    borderRadius: 30,
 
    backgroundColor: "#EEE2F8",
 
    alignItems: "center",
    justifyContent: "center",
  },
 
  logoTexto: {
    fontSize: 27,
  },
 
  infoONG: {
    flex: 1,
 
    marginLeft: 12,
  },
 
  nomeONG: {
    color: "#302039",
 
    fontSize: 15,
 
    fontWeight: "800",
  },
 
  causaONG: {
    color: "#743BB5",
 
    fontSize: 12,
 
    marginTop: 4,
  },
 
  localONG: {
    color: "#888",
 
    fontSize: 11,
 
    marginTop: 4,
  },
 
  botaoVer: {
    borderWidth: 1,
 
    borderColor: "#743BB5",
 
    borderRadius: 9,
 
    paddingHorizontal: 11,
 
    paddingVertical: 8,
  },
 
  textoVer: {
    color: "#743BB5",
 
    fontSize: 11,
 
    fontWeight: "800",
  },
 
 
  /* MENU */
 
  menu: {
    position: "absolute",
 
    bottom: 0,
 
    left: 0,
 
    right: 0,
 
    height: 75,
 
    backgroundColor: "#FFFFFF",
 
    borderTopWidth: 1,
 
    borderTopColor: "#E5DDED",
 
    flexDirection: "row",
 
    justifyContent: "space-around",
 
    alignItems: "center",
  },
 
  menuItem: {
    alignItems: "center",
 
    justifyContent: "center",
  },
 
  menuIcon: {
    color: "#999",
 
    fontSize: 23,
  },
 
  menuIconAtivo: {
    color: "#743BB5",
 
    fontSize: 23,
  },
 
  menuTexto: {
    color: "#888",
 
    fontSize: 10,
 
    marginTop: 3,
  },
 
  menuTextoAtivo: {
    color: "#743BB5",
 
    fontSize: 10,
 
    fontWeight: "800",
 
    marginTop: 3,
  },
 
 
  /* BOTÃO DOAR */
 
  botaoDoar: {
    width: 58,
    height: 58,
 
    borderRadius: 30,
 
    backgroundColor: "#743BB5",
 
    alignItems: "center",
    justifyContent: "center",
 
    marginTop: -28,
 
    elevation: 6,
  },
 
  maisDoar: {
    color: "#FFFFFF",
 
    fontSize: 26,
 
    lineHeight: 27,
  },
 
  textoDoar: {
    color: "#FFFFFF",
 
    fontSize: 9,
 
    fontWeight: "800",
  },
 
});
 