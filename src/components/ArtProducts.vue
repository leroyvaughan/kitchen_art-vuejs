<template>
  <div id="product-listing">
    <art-item v-for="item in products"
      :key="item.key"
      :product="item"
      @showLrgImg="showArtItem"
    ></art-item>
  </div>
</template>



<script>
import ArtItem from '@/components/ArtItem';

export default {
  name: "ArtProductsListing",
  components: { ArtItem },
  props: {
    products: {
      type: Array,
      required: true
    }
  },
  methods: {
    showArtItem(artItem) {
      //bubble up click event to App.vue
      this.$emit("showLrgImg", artItem);
    }
  }

}
</script>


<style lang="scss">
  #product-listing {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    padding-top: 120px;

  }


</style>