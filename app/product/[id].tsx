import { Stack, useLocalSearchParams } from "expo-router";
import { useState } from "react";
import {
  Alert,
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { PRODUCTS } from "../../constants/products";
import { useCart } from "../../context/CartContext";

export default function ProductDetailScreen() {
  const { id } = useLocalSearchParams();
  const product = PRODUCTS.find((p) => p.id.toString() === id);
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    addToCart(product, quantity);
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

        <View style={styles.quantityContainer}>
          <TouchableOpacity
            onPress={() => {
              if (quantity > 1) {
                setQuantity(quantity - 1);
              }
            }}
          >
            <Text>-1</Text>
          </TouchableOpacity>
          <Text style={styles.quantity}>{quantity}</Text>
          <TouchableOpacity
            onPress={() => {
              setQuantity(quantity + 1);
            }}
          >
            <Text>+1</Text>
          </TouchableOpacity>
        </View>
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
  quantityContainer: {
    margin: 10,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  quantity: {
    fontSize: 20,
    fontWeight: "bold",
    borderWidth: 1,
    paddingLeft: 20,
    paddingRight: 20,
  },
});
