<template>
  <div class="card">
    <h3>{{ producto.nombre }}</h3>
    <p>{{ producto.descripcion }}</p>
    <span
      ><strong> Precio: ${{ producto.precio.usd }}</strong></span
    >
    <p>Stock: {{ producto.stock }}</p>
    <img :src="producto.imagen" alt="" />
    <input
      @click="agregarAlCarrito(producto)"
      class="button"
      type="button"
      value="Agregar al carrito"
    />
  </div>
</template>

<script>
export default {
  props: ["producto"],
  emit: ["agregarAlCarrito"],
  methods: {
    agregarAlCarrito(producto) {
      this.$store.commit("agregarAlCarrito", producto);
    },
  },
};
</script>

<style scoped>
img {
  width: 200px;
  height: auto;
}
</style>