<template>
  <div class="art-item" @click="showArtItem(product)">

    <div class="item-hdr">
      <h3>{{ product.title }}</h3>

      <div class="item-rating">
        <span v-if="product.rating == 1">&#x2605;</span>
        <span v-if="product.rating == 2">&#x2605; &#x2605;</span>
        <span v-if="product.rating == 3">&#x2605; &#x2605; &#x2605;</span>
        <span v-if="product.rating == 4">&#x2605; &#x2605; &#x2605; &#x2605;</span>
        <span v-if="product.rating == 5">&#x2605; &#x2605; &#x2605; &#x2605; &#x2605;</span>
      </div>
    </div>

    <div class="item-content">
      <div class="item-img">
        <img :src="getImgUrl(product.filename)" alt="" :title="product.description" />
      </div>

      <div class="item-description">{{ product.description }}</div>
    </div>

    <div class="item-footer">
      <b>Pricing</b>

      <div class="item-pricing">
        <p>{{ dimension1 }}  @  ${{ pricing1 }} </p>
        <p>{{ dimension2 }}  @  ${{ pricing2 }}</p>
      </div>
    </div>

  </div>
</template>






<script>
/* eslint-disable no-debugger */
export default {
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  computed: {
    dimension1() {
      var dimensions = this.getDimensions(
        this.product.width,
        this.product.height
      );

      return `${dimensions.w} x ${dimensions.h}`;
    },
    dimension2() {
      var dimensions = this.getDimensions(
        this.product.width,
        this.product.height,
        true);

      return `${dimensions.w} x ${dimensions.h}`;
    },
    pricing1() {
      return (this.product.price).toFixed(2);
    },
    pricing2() {
      return (this.product.price * 1.5).toFixed(2);
    }
  },
  methods: {
    getImgUrl(fileName) {
      return "/images/" + fileName;
    },
    getDimensions(width, height, isLargeImg = false) {
      let returnObj = {};

      if(isLargeImg) {
        width = width * 2;
        height = height * 2;
      }

      //quick and dirty conversion (as mm) to inches
      returnObj.w = Math.floor(width / 25.4) + '"';
      returnObj.h = Math.floor(height / 25.4) + '"';

      return returnObj;
    },
    showArtItem(artItem) {
      //bubble up click event to ArtProducts.vue
      this.$emit("showLrgImg", artItem);
    }
  }
}
</script>




<style lang="scss" scoped>
  .art-item {
    background-color: #f9f9f9;
    border: 1px solid #3949AB;
    border-radius: 4px;
    box-shadow: 1px 1px 3px #9E9E9E;
    padding: 0 7px 12px;
    margin: 21px 0;
    transition: all .7s;
    width: 200px;

    &:hover{
      background-color: #fff;
      border: none;
      box-shadow: 1px 2px 4px 2px #607D8B;

      .item-hdr h3 {
        color: #F44336
      }
    }
  }

  .item-hdr h3{
    color: #009688;
    margin-bottom: 0;
  }
  .item-rating {
    color: #FF9800;
  }

  .item-content{
    margin-top: .8rem;
  }

  img{
    width: 100px;
  }

  .item-description {
    color: blue;
    font-size: .8rem;
    margin: 7px 7px 12px;
  }

  .item-footer {
    b {
      color: #777;
      display: block;
      // margin-bottom: 3px;
    }

    p {
      font-size: 0.8rem;
      font-style: italic;
      margin: 3px 0 0;
    }
  }


</style>