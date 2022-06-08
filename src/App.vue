<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/productos">Productos</router-link> |
    <router-link to="/carrito">Carrito</router-link>
  </div>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.button {
  background-color: cadetblue;
  border: 0px;
  border-radius: 5px;
  padding: 0.6em;
  margin: 0.4em;
  color: antiquewhite;
  font-weight: 700;
}
.button:hover {
  cursor: pointer;
  background-color: forestgreen;
}
.button:active {
  cursor: pointer;
  background-color: brown;
}
</style>
