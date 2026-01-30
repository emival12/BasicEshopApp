import { Button, FlatList, StyleSheet, Text, View } from "react-native";
import { useCart } from "../../context/CartContext";

export default function CartScreen() {
  const { items, getTotalPrice, removeFromCart } = useCart();

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.cartItem}>
            <View>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text>
                Quantità: {item.quantity} - €{item.price}
              </Text>
            </View>

            <Button
              title="Rimuovi"
              color="red"
              onPress={() => removeFromCart(item.id)}
            />
          </View>
        )}
        ListEmptyComponent={
          <Text style={styles.empty}>Il carrello è vuoto</Text>
        }
      />

      <View style={styles.footer}>
        <Text style={styles.totalText}>Totale: €{getTotalPrice()}</Text>
        <Button
          title="Procedi al Checkout"
          onPress={() => alert("Acquisto simulato!")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "white" },
  cartItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  itemName: { fontSize: 16, fontWeight: "bold" },
  empty: { textAlign: "center", marginTop: 50, fontSize: 18, color: "#888" },
  footer: {
    marginTop: 20,
    padding: 20,
    borderTopWidth: 2,
    borderTopColor: "#eee",
  },
  totalText: { fontSize: 22, fontWeight: "bold", marginBottom: 10 },
});
