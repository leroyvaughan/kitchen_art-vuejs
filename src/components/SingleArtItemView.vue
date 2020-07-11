<template>
  <div>

    <div :class="outerFrameCss">
      <img
        :class="innerFrameCss"
        :src="getImgUrl(product.filename)" alt="" :title="product.description"
      />
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
  data() {
    return {
      outerFrameClass: "",
      innerFrameClass: "img"
    }
  },
  computed: {
    outerFrameCss() {
      return this.outerFrameClass;
    },
    innerFrameCss() {
      return this.innerFrameClass;
    }
  },
  methods: {
    getImgUrl(fileName) {
      return "/images/art/" + fileName;
    },
    setFrameClass(style) {
      if(style != "") {
        this.outerFrameClass = "img-frame outer-" + style;
        this.innerFrameClass = "img inner-" + style;
      }
      else if(style == "img"){
        this.outerFrameClass = "";
        this.innerFrameClass = "img";
      }
    }
  },
}
</script>


<style lang="scss" scoped>

  @import '../scss/frames.scss';

</style>