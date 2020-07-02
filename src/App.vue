<template>
  <div id="app">

    <header-template @changeCategory="setProductFilter" />

    <div v-if="hasProducts">
      <products
        :products="productsView"
      />
    </div>

    <div v-else>
      <img src="/images/database-error.jpg" title="database error" />
    </div>

  </div>
</template>



<script>
/* eslint-disable no-debugger */
import HeaderTemplate from '@/components/Header';
import Products from '@/components/ArtProducts';


export default {
  name: 'App',
  components: {
    HeaderTemplate, Products
  },
  data() {
    return {
      category: "fruit",
      productsView: [],
      hasProducts: true
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
        else{
          this.hasProducts = false;
        }
      })
  },
  methods: {
    filterProducts(param1) {
      console.log("param1: " + param1);
    },
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
  background: url(/images/potholders-faded.jpg);
  color: #2c3e50;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

</style>
