const { createApp } = Vue;

createApp({
  data() {
    return {
      items: [], 
    };
  },
  methods: {
    async fetchItems() {
      try {
        
        const response = await fetch("https://www.course-api.com/react-store-products");
        const data = await response.json();

        
        this.items = data.slice(3, 6).map((item) => ({
          id: item.id,
          name: item.name,
          price: item.price,
          category: item.category || "Sin categoría",
          stock: item.stock || "No disponible",
          image: item.image,
        }));
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      }
    },
  },
  mounted() {
    this.fetchItems(); 
  },
}).mount("#app");
