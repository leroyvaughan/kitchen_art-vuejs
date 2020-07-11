<template>
  <div>

    <div class="modal" :class="{'is-active': isOpen}">
      <div class="modal-content">

        <div id="frame-btns">
          <p>Add a Frame for Artful Delight!</p>
          <span v-for="frame in frames"
            :key="frame.index"
            class="frame-tile"
            @click="setFrameColors(frame)"
          >
            <span :style="getFrameTile(`${frame}2`)" />
            <span :style="getFrameTile(`${frame}1`)" />
          </span>
        </div>
        <span id="close-btn" @click="isOpen=false">&times;</span>

        <!-- this is where the content in parent will display -->
        <slot />
      </div>
    </div>

  </div>
</template>



<script>

export default {
  data() {
    return{
      isOpen: false,
      frames: this.$store.state.Frames
    }
  },
  methods: {
    closeModal(){
      this.isOpen = false;
    },
    getFrameTile(color) {
      return "background-image: url(/images/textures/" + color + ".png)";
    },
    setFrameColors(style) {
      this.$emit("getFrame", style);
    }
  }
}
</script>



<style lang="scss" scoped>

.modal {
  background-color: rgba(0, 0, 0, 0.4);
  display: none;
  overflow: auto;
  width: 100%;

  height: 100vh;
  overflow-y: hidden;

  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  z-index: 9999;

  &-content {
    background-color: #fefefe;
    border: 1px solid #333;
    border-radius: 7px;
    display: table;
    justify-content: center;
    margin: auto;
    padding: 30px 0;
    position: relative;
    max-width: 90%;
  }

  &.is-active {
    display: flex;
  }

  #close-btn{
    border-radius: 50px;
    border: 1px solid #ccc;
    cursor: pointer;
    font-size: 17px;
    font-weight: bold;
    line-height: 7px;
    padding: 7px;

    position:absolute;
    top: 4px;
    right: 4px;

    &:hover{
      background-color: #ccc;
      color: #fff;
    }
  }
}//end modal


#frame-btns {
  // border: 1px solid red;
  margin: auto;
  padding: 0 20px 12px;
  width: 90%;

  p {
    color: #673AB7;
    margin: 0 0 7px;
  }

}
.frame-tile {
  border: 1px solid #777;
  cursor: pointer;
  display: inline-block;
  height: 30px;
  margin: 0 4px;
  width: 30px;

  &:hover{
    box-shadow: 1px 1px 1px #000;
    opacity: 0.8;
  }

  span {
    display: block;
    height: 50%;
  }
}


</style>