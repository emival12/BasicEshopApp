import { useRouter } from "expo-router";
import { useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { PRODUCTS } from "../../constants/products";

const PAGE_SIZE = 10;

export default function HomeScreen() {
  const router = useRouter();
  const [visibleProducts, setVisibleProducts] = useState(
    PRODUCTS.slice(0, PAGE_SIZE),
  );
  const [isLoading, setIsLoading] = useState(false);

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

  const loadMore = () => {
    if (isLoading || visibleProducts.length >= PRODUCTS.length) return;

    setIsLoading(true);
    setTimeout(() => {
      const nextProducts = PRODUCTS.slice(
        visibleProducts.length,
        visibleProducts.length + PAGE_SIZE,
      );
      setVisibleProducts([...visibleProducts, ...nextProducts]);
      setIsLoading(false);
    }, 1500);
  };

  const renderFooter = () => {
    if (!isLoading) return null;
    return (
      <View style={{ paddingVertical: 20 }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={visibleProducts}
        renderItem={renderProduct}
        keyExtractor={(item) => item.id.toString()}
        onEndReached={loadMore}
        onEndReachedThreshold={0.5}
        ListFooterComponent={renderFooter}
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
