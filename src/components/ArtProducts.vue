<template>
  <div id="product-listing">
    <art-item v-for="item in products"
      :key="item.key"
      :product="item"
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
  }

}
</script>


<style lang="scss">
  #product-listing {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;

  }


</style>