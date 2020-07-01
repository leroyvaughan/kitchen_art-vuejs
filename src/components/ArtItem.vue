<template>
  <div class="art-item">

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
      let wIsInches = false;
      let w = Math.floor(this.product.width / 305);

      if(w <= 0) {
        w = Math.floor(this.product.width / 25.4);
        wIsInches = true;
      }


      let hIsInches = false;
      let h = Math.floor(this.product.height / 305);

      if(h <= 0) {
        h = Math.floor(this.product.height / 25.4);
        hIsInches = true;
      }

      // debugger
      w = (wIsInches)? w + "in." : w + "ft.";
      h = (hIsInches)? h + "in." : h + "ft.";

      return `${w} x ${h}`;
    },
    dimension2() {
      let wIsInches = false;
      let width = this.product.width * 2;
      let w = Math.floor(width / 305);

      if(w <= 0) {
        w = Math.floor(width / 25.4);
        wIsInches = true;
      }


      let hIsInches = false;
      let height = this.product.height * 2;
      let h = Math.floor(height / 305);

      if(h <= 0) {
        h = Math.floor(height / 25.4);
        hIsInches = true;
      }

      // debugger
      w = (wIsInches)? w + "in." : w + "ft.";
      h = (hIsInches)? h + "in." : h + "ft.";

      return `${w} x ${h}`;
    },
    pricing1() {
      return this.product.price;
    },
    pricing2() {
      return this.product.price * 2;
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
  .art-item {
    background-color: #f9f9f9;
    border: 1px solid #3949AB;
    border-radius: 4px;
    box-shadow: 1px 1px 3px #673AB7;
    padding: 0 7px 12px;
    margin: 21px 0;
    width: 200px;

    &:hover{
      background-color: #fff;
      box-shadow: 3px 3px 2px #607D8B;

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
    width: 150px;
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