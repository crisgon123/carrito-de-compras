<template>
  <div>
    <div>
      <span><strong>Total:</strong> $0.00</span>
      <button class="button">Pagar</button>
    </div>

    <div>
      <h1>Carrito</h1>

      <div>
        <table class="cart-table">
          <thead>
            <tr>
              <th></th>
              <th>Nombre</th>
              <th>Precio</th>
              <th>Cantidad</th>
              <th>Total</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <DetalleProducto
              v-for="producto in carrito"
              :key="producto.id"
              :producto="producto"
            />
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import DetalleProducto from "@/components/carrito/DetalleProducto.vue";
export default {
  data() {
    return {};
  },
  components: {
    DetalleProducto,
  },
  computed: {
    carrito() {
      return this.$store.getters.obtenerCarrito;
    },
  },
};
</script>

<style >
img {
  width: 200px;
  height: auto;
}
.cart-table {
  margin-right: auto;
  margin-left: auto;
}
</style>