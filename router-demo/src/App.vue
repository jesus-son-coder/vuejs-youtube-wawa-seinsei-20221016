<template>
  <nav>
    <router-link to="/">Accueil</router-link> |
    <router-link to="/about">A propos</router-link> |
    <router-link :to="{ name: 'ProductRoute', params : {productName: 'Computer'}}">Produit 1</router-link> |
    <router-link :to="{ name: 'ProductRoute', params : {productName: 'Smartphones'}}">Produit 2</router-link> &nbsp;&nbsp;
    <button @click="showProduct('Laptops');">Produit 3</button>
  </nav>
  <router-view />
</template>

<script>

export default {
  name: 'App',
  methods: {
    showProduct: function(name) {
      this.$router.push({name: 'ProductRoute', params: {productName: name}});
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

a {
  text-decoration: none;
  color: #999;
}

.router-link-active {
  font-weight: bold;
  color: blueviolet;
}
</style>
