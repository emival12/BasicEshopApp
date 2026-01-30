import { Stack, useLocalSearchParams } from "expo-router";
import { Alert, Button, Image, StyleSheet, Text, View } from "react-native";
import { PRODUCTS } from "../../constants/products";
import { useCart } from "../../context/CartContext";

export default function ProductDetailScreen() {
  const { id } = useLocalSearchParams();
  const product = PRODUCTS.find((p) => p.id.toString() === id);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
    Alert.alert("Successo", "Prodotto aggiunto al carrello!");
  };

  if (!product) {
    return (
      <View>
        <Text>Prodotto non trovato!</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: product.name }} />

      <Image source={{ uri: product.image }} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.title}>{product.name}</Text>
        <Text style={styles.price}>€ {product.price}</Text>
        <Text style={styles.description}>{product.description}</Text>

        <Button title="Aggiungi al Carrello" onPress={handleAddToCart} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "white" },
  image: { width: "100%", height: 300 },
  content: { padding: 20 },
  title: { fontSize: 24, fontWeight: "bold" },
  price: { fontSize: 20, color: "#888", marginVertical: 10 },
  description: { fontSize: 16, lineHeight: 24 },
});
