import { useRouter } from "expo-router";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { PRODUCTS } from "../../constants/products";

export default function HomeScreen() {
  const router = useRouter();

  const renderProduct = ({ item }: { item: any }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => {
        router.push({ pathname: "/product/[id]", params: { id: item.id } });
      }}
    >
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.price}>€ {item.price}</Text>
        <Text style={item.available ? styles.inStock : styles.outOfStock}>
          {item.available ? "Disponibile" : "Esaurito"}
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={PRODUCTS}
        renderItem={renderProduct}
        keyExtractor={(item) => item.id.toString()}
        onEndReached={() => {
          console.log("Carico altri dati");
        }}
        onEndReachedThreshold={0.5}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  card: {
    flexDirection: "row",
    padding: 10,
    marginHorizontal: 10,
    marginVertical: 5,
    backgroundColor: "#fff",
    borderRadius: 8,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
  infoContainer: {
    marginLeft: 15,
    justifyContent: "center",
  },
  name: { fontSize: 16, fontWeight: "bold" },
  price: { fontSize: 14, color: "#888", marginTop: 4 },
  inStock: { color: "green", fontSize: 12, marginTop: 4 },
  outOfStock: { color: "red", fontSize: 12, marginTop: 4 },
});
