<template>
  <div id="app">

    <div v-if="hasProducts">
      <Products :products="productsView" />
    </div>

    <div v-else>
      <h3>Get Product List Failure!  Refresh page to try again.</h3>
    </div>

  </div>
</template>



<script>
/* eslint-disable no-debugger */
import Products from '@/components/ArtProducts'

export default {
  name: 'App',
  components: {
    Products
  },
  data() {
    return {
      category: "fruit",
      productsView: [],
      hasProducts: false
    }
  },
  computed: {
    categories: function() {
      return this.$store.state.ProductTypes;
    }
  },
  created() {
    this.$store.dispatch("initStore")
      .then((init) => {
        if(init) {
          this.setProductFilter();
        }
      })
  },
  methods: {
    setProductFilter(textIn) {
      if(!textIn) {
        textIn = this.category;
      }
      else{
        this.category = textIn;
      }

      this.$store.dispatch("filterProducts", textIn)
        .then((response) => {
          this.productsView = response;
          this.hasProducts = true;
        })
        .catch(() => {
          this.hasProducts = false;

          //how to handle?  *refresh page msg?
        });
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
</style>
