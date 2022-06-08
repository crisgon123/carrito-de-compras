import { createStore } from "vuex";

export default createStore({
  state: {
    carrito: []
  },
  getters: {
    obtenerCarrito: state => {
      return state.carrito
    },
    // obtenerPrecioTotal: state => {

    // }
  },
  mutations: {
    agregarAlCarrito(state, producto) {
      const productoNuevo = state.carrito.find((prod) => prod.id === producto.id);

      if (productoNuevo) {
        productoNuevo.cantidad++;
      } else state.carrito.push({ ...producto, cantidad: 1 });
    },
    quitarDelCarrito(state, producto) {
      const productoNuevo = state.carrito.find((prod) => prod.id === producto.id);

      if (productoNuevo.cantidad > 1) {
        productoNuevo.cantidad--;
      } else
        state.carrito = state.carrito.filter(prod => prod.id !== producto.id)

    }

  },
  actions: {},
  modules: {},
});
