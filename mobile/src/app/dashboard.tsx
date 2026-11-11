
import { Href, Link, useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import {
  Image,
  Linking,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function Dashboard() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <LinearGradient
          colors={["#8B5BCB", "#5E2D98"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.header}
        >
          <View>
            <Text style={styles.ola}>Olá!</Text>
            <Text style={styles.bem}>Que bom ter você aqui.</Text>
          </View>

          <Pressable
            style={styles.avatar}
            onPress={() => router.push("/profile")}
          >
            <Text
              style={{
                color: "#743BB5",
                fontSize: 22,
                fontWeight: "800",
              }}
            >
              A
            </Text>
          </Pressable>
        </LinearGradient>

        <View style={styles.search}>
          <Text>⌕</Text>
          <TextInput
            placeholder="Buscar campanhas, ONGs..."
            placeholderTextColor="#888"
            style={styles.searchInput}
          />
        </View>

        <Section
          title="Campanhas em destaque"
          link="Ver todas"
          href="/campaigns"
        />

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.row}
        >
          <Pressable
            style={styles.campaign}
            onPress={() => router.push("/campaign-details")}
          >
            <Text style={styles.tag}>COMBATE A FOME</Text>
            <Text style={styles.campaignTitle}>
              Doe alimentos e transforme vidas
            </Text>
            <Text style={styles.campaignText}>
              Ajude famílias que precisam.
            </Text>
            <Text style={styles.smallButton}>Quero ajudar</Text>
          </Pressable>

          <Pressable
            style={styles.campaign}
            onPress={() => router.push("/campaign-details(animals)")}
          >
            <Text style={styles.tag}>PROTEÇÃO ANIMAL</Text>
            <Text style={styles.campaignTitle}>Ajude os animais</Text>
            <Text style={styles.campaignText}>
              Apoie uma causa animal.
            </Text>
            <Text style={styles.smallButton}>Quero ajudar</Text>
          </Pressable>
        </ScrollView>

        <Section
          title="Categorias"
          link="Ver todas"
          href="/categories"
        />

        <Pressable
          onPress={() => router.push("/categories")}
          style={styles.categoryLink}
        >
          <Text style={styles.categoryLinkText}>
            Ver todas as categorias  ›
          </Text>
        </Pressable>

        <View style={styles.categories}>
          {[
            [require("@/assets/images/icon-paw.png"), "Proteção Animal"],
            [require("@/assets/images/icon-utensils.png"), "Combate à fome"],
            [require("@/assets/images/icon-people.png"), "Apoio a famílias"],
            [require("@/assets/images/icon-book.png"), "Educação"],
          ].map(([icon, name]: any) => (
            <Pressable
              style={styles.category}
              key={name}
              onPress={() => router.push("/categories")}
            >
              <Image source={icon} style={styles.categoryIcon} />
              <Text style={styles.categoryText}>{name}</Text>
            </Pressable>
          ))}
        </View>

        <Section
          title="ONGs parceiras"
          link="Ver todas"
          href="/ongs"
        />

        <Pressable
          style={styles.ong}
          onPress={() =>
            router.push({
              pathname: "/ong-profile",
              params: {
                name: "Alimento Solidário",
                category: "Combate à fome",
                description:
                  "Distribuição de alimentos para famílias carentes.",
                image: "alimento",
              },
            })
          }
        >
          <Image
            source={require("@/assets/images/ongs/alimento-solidario.jpg")}
            style={styles.ongImage}
          />

          <View style={styles.ongInfo}>
            <Text style={styles.ongName}>Alimento Solidário</Text>
            <Text style={styles.ongDesc}>
              Distribuição de alimentos para famílias carentes.
            </Text>
          </View>

          <Text style={styles.outline}>Ver perfil</Text>
        </Pressable>

        <Section
          title="Encontre causas perto de você"
          link="Abrir mapa"
          href="/ongs"
        />

        <Pressable
          style={styles.mapCard}
          onPress={() =>
            Linking.openURL(
              "https://www.google.com/maps/search/?api=1&query=ONGs+Taquaritinga+SP"
            )
          }
        >
          <Image
            source={{
              uri: "https://staticmap.openstreetmap.de/staticmap.php?center=-21.4064,-48.5047&zoom=12&size=900x360&maptype=mapnik&markers=-21.4064,-48.5047,red-pushpin",
            }}
            style={styles.mapImage}
          />

          <View style={styles.mapCaption}>
            <View style={{ flex: 1 }}>
              <Text style={styles.mapTitle}>
                ONGs e projetos na região
              </Text>
              <Text style={styles.mapText}>
                Explore organizações e encontre uma causa para apoiar.
              </Text>
            </View>

            <Text style={styles.mapArrow}>↗</Text>
          </View>
        </Pressable>

        <Section
          title="Conheça o projeto"
          link="Quem somos"
          href="/about"
        />

        <View style={styles.infoLinks}>
          <Pressable
            style={styles.infoLink}
            onPress={() => router.push("/about")}
          >
            <Text style={styles.infoLinkText}>
              Sobre o ConectaCausa  ›
            </Text>
          </Pressable>

          <Pressable
            style={styles.infoLink}
            onPress={() => router.push("/cadastroOng")}
          >
            <Text style={styles.infoLinkText}>
              Cadastrar uma ONG  ›
            </Text>
          </Pressable>
        </View>

        <View style={styles.bottomSpace} />
      </ScrollView>

      <View style={styles.menu}>
        <Pressable style={styles.menuItem}>
          <Text style={styles.activeIcon}>⌂</Text>
          <Text style={styles.active}>Início</Text>
        </Pressable>

        <Pressable
          style={styles.menuItem}
          onPress={() => router.push("/campaigns")}
        >
          <Text style={styles.icon}>♡</Text>
          <Text style={styles.menuText}>Campanhas</Text>
        </Pressable>

        <Pressable
          style={styles.donate}
          onPress={() => router.push("/donation")}
        >
          <Text style={styles.plus}>+</Text>
        </Pressable>

        <Pressable
          style={styles.menuItem}
          onPress={() => router.push("/ongs")}
        >
          <Text style={styles.icon}>♧</Text>
          <Text style={styles.menuText}>ONGs</Text>
        </Pressable>

        <Pressable
          style={styles.menuItem}
          onPress={() => router.push("/profile")}
        >
          <Text style={styles.icon}>♙</Text>
          <Text style={styles.menuText}>Perfil</Text>
        </Pressable>
      </View>
    </View>
  );
}

function Section({
  title,
  link,
  href,
}: {
  title: string;
  link: string;
  href: Href;
}) {
  return (
    <View style={styles.sectionLine}>
      <Text style={styles.sectionTitle}>{title}</Text>

      <Link href={href} asChild>
        <Pressable>
          <Text style={styles.link}>{link}</Text>
        </Pressable>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F4FB",
  },

  header: {
    paddingTop: 55,
    paddingBottom: 24,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  ola: {
    color: "#fff",
    fontSize: 23,
    fontWeight: "800",
  },

  bem: {
    color: "#E8DDF3",
    marginTop: 3,
  },

  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  search: {
    margin: 16,
    marginTop: -1,
    height: 50,
    borderRadius: 12,
    backgroundColor: "#fff",
    paddingHorizontal: 15,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    elevation: 2,
  },

  searchInput: {
    flex: 1,
    fontSize: 14,
  },

  sectionLine: {
    marginHorizontal: 20,
    marginTop: 16,
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "800",
    color: "#30243A",
  },

  link: {
    color: "#743BB5",
    fontWeight: "700",
  },

  row: {
    paddingHorizontal: 20,
    gap: 12,
  },

  campaign: {
    width: 245,
    borderRadius: 17,
    backgroundColor: "#743BB5",
    padding: 18,
  },

  tag: {
    color: "#E8D9F5",
    fontSize: 10,
    fontWeight: "800",
  },

  campaignTitle: {
    color: "#fff",
    fontSize: 19,
    fontWeight: "800",
    marginTop: 13,
  },

  campaignText: {
    color: "#E8DDF3",
    marginTop: 7,
  },

  smallButton: {
    backgroundColor: "#fff",
    color: "#743BB5",
    fontWeight: "800",
    textAlign: "center",
    paddingVertical: 9,
    borderRadius: 8,
    marginTop: 15,
  },

  categories: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingHorizontal: 20,
    gap: 10,
  },

  category: {
    backgroundColor: "#fff",
    width: "47%",
    height: 105,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },

  emoji: {
    fontSize: 25,
  },

  categoryText: {
    fontSize: 10,
    color: "#555",
    marginTop: 5,
    textAlign: "center",
  },

  ong: {
    marginHorizontal: 20,
    backgroundColor: "#fff",
    borderRadius: 14,
    padding: 12,
    flexDirection: "row",
    alignItems: "center",
    elevation: 2,
  },

  ongImage: {
    width: 64,
    height: 64,
    borderRadius: 10,
  },

  ongInfo: {
    flex: 1,
    marginLeft: 12,
    marginRight: 8,
  },

  ongName: {
    fontSize: 16,
    fontWeight: "800",
    color: "#30243A",
  },

  ongDesc: {
    fontSize: 12,
    color: "#666",
    marginTop: 4,
    lineHeight: 17,
  },

  outline: {
    color: "#743BB5",
    fontWeight: "800",
    fontSize: 12,
  },

  categoryIcon: {
    width: 42,
    height: 42,
    resizeMode: "contain",
    marginBottom: 8,
  },

  categoryLink: {
    alignSelf: "flex-end",
    marginHorizontal: 20,
    marginBottom: 8,
  },

  categoryLinkText: {
    color: "#743BB5",
    fontWeight: "800",
    fontSize: 13,
  },

  mapCard: {
    marginHorizontal: 20,
    backgroundColor: "#fff",
    borderRadius: 16,
    overflow: "hidden",
    elevation: 2,
  },

  mapImage: {
    width: "100%",
    height: 145,
    backgroundColor: "#E8E2ED",
  },

  mapCaption: {
    padding: 14,
    flexDirection: "row",
    alignItems: "center",
  },

  mapTitle: {
    color: "#35243E",
    fontWeight: "800",
    fontSize: 15,
  },

  mapText: {
    color: "#766B7D",
    fontSize: 12,
    marginTop: 4,
  },

  mapArrow: {
    color: "#743BB5",
    fontSize: 25,
    fontWeight: "800",
    paddingHorizontal: 5,
  },

  infoLinks: {
    marginHorizontal: 20,
    gap: 9,
  },

  infoLink: {
    backgroundColor: "#fff",
    padding: 14,
    borderRadius: 11,
  },

  infoLinkText: {
    color: "#743BB5",
    fontWeight: "700",
  },

  bottomSpace: {
    height: 95,
  },

  menu: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: 75,
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    borderTopWidth: 1,
    borderTopColor: "#E8E1EF",
  },

  menuItem: {
    alignItems: "center",
    justifyContent: "center",
  },

  icon: {
    fontSize: 23,
    color: "#777",
  },

  activeIcon: {
    fontSize: 23,
    color: "#743BB5",
  },

  active: {
    color: "#743BB5",
    fontSize: 11,
    fontWeight: "800",
  },

  menuText: {
    color: "#777",
    fontSize: 11,
    marginTop: 2,
  },

  donate: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: "#743BB5",
    alignItems: "center",
    justifyContent: "center",
    marginTop: -25,
  },

  plus: {
    color: "#fff",
    fontSize: 30,
    lineHeight: 34,
  },
});