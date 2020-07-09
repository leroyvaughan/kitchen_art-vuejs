<template>
  <div>

    <div class="item-img">
      <img :src="getImgUrl(product.filename)" alt="" :title="product.description" />
    </div>

  </div>
</template>


<script>
export default {
  props: {
    product:  {
      type: Object,
      required: true
    }
  },
  methods: {
    getImgUrl(fileName) {
      return "/images/" + fileName;
    }
  }
}
</script>


<style lang="scss" scoped>

  img {
    max-height: 79vh;
    width: 89%;
  }

</style>