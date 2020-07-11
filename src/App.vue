<template>
  <div id="app">

    <header-template @changeCategory="setProductFilter" />

    <div v-if="hasProducts">
      <products
        :products="productsView"
        @showLrgImg="viewSingleArtItem"
      />
    </div>

    <div v-else>
      <img src="/images/database-error.jpg" title="database error" />
    </div>

    <modal ref="modal" @getFrame="setFrameClass">
      <item-view ref="imgArt" :product="singleItemView" />
    </modal>

  </div>
</template>



<script>
import HeaderTemplate from '@/components/Header';
import Products from '@/components/ArtProducts';
import Modal from '@/components/Modal';
import ItemView from '@/components/SingleArtItemView';


export default {
  name: 'App',
  components: {
    HeaderTemplate, Products, Modal, ItemView
  },
  data() {
    return {
      category: "fruit",
      productsView: [],
      singleItemView: {},
      hasProducts: true

    }
  },
  computed: {
    categories: function() {
      return this.$store.state.ProductTypes;
    },
    modal() {
      return this.$refs.modal;
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
    },
    viewSingleArtItem(artItem) {
      this.singleItemView = artItem;
      this.modal.isOpen = true;
    },
    setFrameClass(style) {
      this.$refs.imgArt.setFrameClass(style);
    }
  }
}
</script>

<style>
#app {
  /* background: url(/images/potholders-faded.jpg); */
  background: url(/images/textures/main-background.png);
  color: #2c3e50;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

</style>
