import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Pressable,
} from "react-native";
import { useRouter } from "expo-router";
 
export default function CadastroONG() {
  const router = useRouter();
 
  return (
    <View style={styles.container}>
 
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scroll}
      >
 
        {/* CABEÇALHO */}
 
        <View style={styles.header}>
 
          <Pressable onPress={() => router.back()}>
            <Text style={styles.voltar}>←</Text>
          </Pressable>
 
          <View>
            <Text style={styles.titulo}>
              Cadastrar ONG
            </Text>
 
            <Text style={styles.subtitulo}>
              Faça parte do ConectaCausa
            </Text>
          </View>
 
        </View>
 
 
        {/* INTRODUÇÃO */}
 
        <View style={styles.introducao}>
 
          <View style={styles.icone}>
            <Text style={styles.iconeTexto}>
              💜
            </Text>
          </View>
 
          <View style={styles.introducaoTexto}>
 
            <Text style={styles.introducaoTitulo}>
              Cadastre sua ONG
            </Text>
 
            <Text style={styles.introducaoDescricao}>
              Preencha os dados da organização para
              que ela possa fazer parte da nossa rede.
            </Text>
 
          </View>
 
        </View>
 
 
        {/* DADOS DA ONG */}
 
        <Text style={styles.tituloSecao}>
          Dados da ONG
        </Text>
 
 
        <Text style={styles.label}>
          Nome da ONG
        </Text>
 
        <TextInput
          placeholder="Digite o nome da ONG"
          placeholderTextColor="#999"
          style={styles.input}
        />
 
 
        <Text style={styles.label}>
          CNPJ
        </Text>
 
        <TextInput
          placeholder="00.000.000/0000-00"
          placeholderTextColor="#999"
          keyboardType="numeric"
          style={styles.input}
        />
 
 
        <Text style={styles.label}>
          E-mail
        </Text>
 
        <TextInput
          placeholder="Digite o e-mail da ONG"
          placeholderTextColor="#999"
          keyboardType="email-address"
          autoCapitalize="none"
          style={styles.input}
        />
 
 
        <Text style={styles.label}>
          Telefone
        </Text>
 
        <TextInput
          placeholder="(00) 00000-0000"
          placeholderTextColor="#999"
          keyboardType="phone-pad"
          style={styles.input}
        />
 
 
        {/* ENDEREÇO */}
 
        <Text style={styles.tituloSecao}>
          Endereço
        </Text>
 
 
        <Text style={styles.label}>
          CEP
        </Text>
 
        <TextInput
          placeholder="00000-000"
          placeholderTextColor="#999"
          keyboardType="numeric"
          style={styles.input}
        />
 
 
        <View style={styles.linha}>
 
          <View style={styles.campoPequeno}>
 
            <Text style={styles.label}>
              Estado
            </Text>
 
            <TextInput
              placeholder="SP"
              placeholderTextColor="#999"
              maxLength={2}
              autoCapitalize="characters"
              style={styles.input}
            />
 
          </View>
 
 
          <View style={styles.campoGrande}>
 
            <Text style={styles.label}>
              Cidade
            </Text>
 
            <TextInput
              placeholder="Digite a cidade"
              placeholderTextColor="#999"
              style={styles.input}
            />
 
          </View>
 
        </View>
 
 
        <Text style={styles.label}>
          Endereço
        </Text>
 
        <TextInput
          placeholder="Rua, número e complemento"
          placeholderTextColor="#999"
          style={styles.input}
        />
 
 
        {/* CAUSA */}
 
        <Text style={styles.tituloSecao}>
          Sobre a ONG
        </Text>
 
 
        <Text style={styles.label}>
          Área de atuação
        </Text>
 
        <View style={styles.categorias}>
 
          <Pressable style={styles.categoria}>
            <Text style={styles.categoriaEmoji}>
              🍎
            </Text>
 
            <Text style={styles.categoriaTexto}>
              Alimentação
            </Text>
          </Pressable>
 
 
          <Pressable style={styles.categoria}>
            <Text style={styles.categoriaEmoji}>
              🐾
            </Text>
 
            <Text style={styles.categoriaTexto}>
              Animais
            </Text>
          </Pressable>
 
 
          <Pressable style={styles.categoria}>
            <Text style={styles.categoriaEmoji}>
              👥
            </Text>
 
            <Text style={styles.categoriaTexto}>
              Pessoas
            </Text>
          </Pressable>
 
 
          <Pressable style={styles.categoria}>
            <Text style={styles.categoriaEmoji}>
              🎓
            </Text>
 
            <Text style={styles.categoriaTexto}>
              Educação
            </Text>
          </Pressable>
 
        </View>
 
 
        <Text style={styles.label}>
          Descrição da ONG
        </Text>
 
        <TextInput
          placeholder="Conte um pouco sobre a ONG e seu trabalho..."
          placeholderTextColor="#999"
          multiline
          numberOfLines={5}
          textAlignVertical="top"
          style={styles.textarea}
        />
 
 
        {/* BOTÃO */}
 
        <Pressable
          style={styles.botao}
          onPress={() => router.back()}
        >
 
          <Text style={styles.botaoTexto}>
            Cadastrar ONG
          </Text>
 
        </Pressable>
 
 
        <Text style={styles.aviso}>
          Ao cadastrar, você declara que as informações
          fornecidas são verdadeiras.
        </Text>
 
 
        <View style={{ height: 30 }} />
 
      </ScrollView>
 
    </View>
  );
}
 
 
const styles = StyleSheet.create({
 
  container: {
    flex: 1,
    backgroundColor: "#F8F5FC",
  },
 
 
  scroll: {
    paddingBottom: 30,
  },
 
 
  /* HEADER */
 
  header: {
    backgroundColor: "#743BB5",
 
    paddingTop: 55,
    paddingHorizontal: 20,
    paddingBottom: 25,
 
    flexDirection: "row",
    alignItems: "center",
 
    gap: 15,
  },
 
  voltar: {
    color: "#FFFFFF",
    fontSize: 32,
  },
 
  titulo: {
    color: "#FFFFFF",
    fontSize: 23,
    fontWeight: "800",
  },
 
  subtitulo: {
    color: "#E8DDF3",
    fontSize: 13,
    marginTop: 3,
  },
 
 
  /* INTRODUÇÃO */
 
  introducao: {
    backgroundColor: "#FFFFFF",
 
    margin: 20,
 
    padding: 16,
 
    borderRadius: 16,
 
    flexDirection: "row",
 
    alignItems: "center",
 
    elevation: 2,
  },
 
  icone: {
    width: 55,
    height: 55,
 
    borderRadius: 30,
 
    backgroundColor: "#EEE2F8",
 
    alignItems: "center",
    justifyContent: "center",
  },
 
  iconeTexto: {
    fontSize: 27,
  },
 
  introducaoTexto: {
    flex: 1,
    marginLeft: 13,
  },
 
  introducaoTitulo: {
    color: "#352040",
    fontSize: 16,
    fontWeight: "800",
  },
 
  introducaoDescricao: {
    color: "#777",
    fontSize: 12,
    lineHeight: 17,
    marginTop: 4,
  },
 
 
  /* SEÇÕES */
 
  tituloSecao: {
    color: "#302039",
 
    fontSize: 19,
 
    fontWeight: "800",
 
    marginHorizontal: 20,
 
    marginTop: 8,
 
    marginBottom: 12,
  },
 
 
  /* CAMPOS */
 
  label: {
    color: "#453650",
 
    fontSize: 13,
 
    fontWeight: "700",
 
    marginHorizontal: 20,
 
    marginTop: 10,
 
    marginBottom: 6,
  },
 
  input: {
    backgroundColor: "#FFFFFF",
 
    borderWidth: 1,
 
    borderColor: "#DED4E8",
 
    borderRadius: 12,
 
    height: 50,
 
    marginHorizontal: 20,
 
    paddingHorizontal: 15,
 
    fontSize: 14,
 
    color: "#333",
  },
 
 
  /* LINHA ESTADO + CIDADE */
 
  linha: {
    flexDirection: "row",
 
    gap: 10,
 
    marginHorizontal: 20,
  },
 
  campoPequeno: {
    width: 75,
  },
 
  campoGrande: {
    flex: 1,
  },
 
  /* CATEGORIAS */
 
  categorias: {
    flexDirection: "row",
 
    flexWrap: "wrap",
 
    gap: 10,
 
    marginHorizontal: 20,
 
    marginBottom: 8,
  },
 
  categoria: {
    backgroundColor: "#FFFFFF",
 
    borderWidth: 1,
 
    borderColor: "#DED4E8",
 
    borderRadius: 12,
 
    paddingVertical: 10,
 
    paddingHorizontal: 12,
 
    flexDirection: "row",
 
    alignItems: "center",
 
    gap: 6,
  },
 
  categoriaEmoji: {
    fontSize: 17,
  },
 
  categoriaTexto: {
    color: "#4A3A55",
 
    fontSize: 12,
 
    fontWeight: "600",
  },
 
 
  /* DESCRIÇÃO */
 
  textarea: {
    backgroundColor: "#FFFFFF",
 
    borderWidth: 1,
 
    borderColor: "#DED4E8",
 
    borderRadius: 12,
 
    marginHorizontal: 20,
 
    padding: 15,
 
    minHeight: 120,
 
    fontSize: 14,
 
    color: "#333",
  },
 
 
  /* BOTÃO */
 
  botao: {
    backgroundColor: "#743BB5",
 
    marginHorizontal: 20,
 
    marginTop: 25,
 
    height: 54,
 
    borderRadius: 13,
 
    alignItems: "center",
 
    justifyContent: "center",
 
    elevation: 3,
  },
 
  botaoTexto: {
    color: "#FFFFFF",
 
    fontSize: 16,
 
    fontWeight: "800",
  },
 
 
  aviso: {
    color: "#888",
 
    fontSize: 11,
 
    textAlign: "center",
 
    marginHorizontal: 40,
 
    marginTop: 12,
 
    lineHeight: 16,
  },
 
});
 