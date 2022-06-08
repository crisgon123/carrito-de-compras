<template>
  <tr>
    <td><img :src="producto.imagen" alt="" /></td>
    <td>{{ producto.nombre }}</td>
    <td>{{ producto.precio.usd.toFixed(2) }}</td>
    <td>{{ producto.cantidad }}</td>
    <td>{{ (producto.precio.usd * producto.cantidad).toFixed(2) }}</td>
    <td>
      <input @click="quitarDelCarrito(producto)" type="button" value="X" />
    </td>
  </tr>
</template>

<script>
export default {
  methods: {
    quitarDelCarrito(producto) {
      this.$store.commit("quitarDelCarrito", producto);
    },
  },
  props: ["producto"],
};
</script>