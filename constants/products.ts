export const PRODUCTS = Array.from({ length: 50 }).map((_, index) => ({
  id: index + 1,
  name: `Prodotto Esempio ${index + 1}`,
  description: `Questa è una descrizione dettagliata per il prodotto ${index + 1}. Ottimo affare, alta qualità.`,
  price: (Math.random() * 100 + 10).toFixed(2),
  image: `https://picsum.photos/400/400?random=${index + 1}`,
  stock: Math.floor(Math.random() * 20),
  available: Math.random() > 0.2,
}));
