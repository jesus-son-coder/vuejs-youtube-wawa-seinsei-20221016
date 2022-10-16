<template>
  <h1>Les Produits</h1>
  <p class="product-container">{{ productName }}</p>
</template>

<script>
export default {
  name: 'ProductPage',
  props: ['productName'], // <- c'est ce qu'on va récupérer du paramètre du lien du Routeur.
}
</script>

<style>
  p.product-container {
    padding: 10px;
    border-radius: 5px;
    border: 1px solid cadetblue;
    background: beige;
    font-size: 16px;
    max-width: 400px;
    margin: 0 auto;
  }
</style>