<template>
  <div class="card-container">
    <TarjetaProducto
      v-for="producto in productos"
      :key="producto.id"
      :producto="producto"
      @agregarAlCarrito="agregarAlCarrito"
    />
  </div>
</template>


<script>
import productos from "@/productos.json";
import TarjetaProducto from "@/components/productos/TarjetaProducto.vue";
export default {
  data() {
    return {
      carrito: [],
      productos,
      unaVariable: 5,
    };
  },
  components: {
    TarjetaProducto,
  },
  methods: {
    agregarAlCarrito(producto) {
      const productoNuevo = this.carrito.find((prod) => prod.id == producto.id);

      if (productoNuevo) {
        productoNuevo.cantidad++;
      } else this.carrito.push({ ...producto, cantidad: 1 });

      //console.log(this.carrito);
    },
  },
};
</script>

<style scoped>
.card-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.card {
  float: left;
  padding: 1rem;
  margin: 1rem;
  /* Add shadows to create the "card" effect */
  width: 300px;
  height: 450px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
}
</style>