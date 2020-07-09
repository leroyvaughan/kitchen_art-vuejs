<template>
  <div>

    <div class="modal" :class="{'is-active': isOpen}">
      <div class="modal-content">
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
      isOpen: false
    }
  },
  methods: {
    closeModal(){
      this.isOpen = false;
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
    min-width: 43%;
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


</style>