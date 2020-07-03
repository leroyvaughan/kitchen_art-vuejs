<template>
  <div id="header">

    <h1>Kitchen Art</h1>
    <p>Lovely images for decorating your kitchen area!</p>

    <nav>
      <button
        v-for="type in categories"
        :key="type.id"
        @click="selectCategory(type.id)"
      >
        {{ type.text }}
      </button>
    </nav>

  </div>
</template>



<script>
export default {
  data() {
    return {
      categories: this.$store.state.ProductTypes
    }
  },
  methods: {
    selectCategory(category) {
      this.$emit("changeCategory", category.toLowerCase());
    }
  }
}
</script>



<style lang="scss" scoped>
  #header{
    background: #FFAB91;
    padding-top: 0;
    position: fixed;
    top: 0;
    transition: top 0.3s;
    width: 100%;
  }

  h1{
    color: #fff;
    font-family: "Comic Sans MS", cursive, sans-serif;
    font-size: 2em;
    margin: 0;
  }

  p {
    color: #3f51b58c;
    font-size: .7rem;
    font-style: italic;
    margin: 0 0 3px;
  }

  nav {
    background-color: #fff;
    border: 1px solid #3F51B5;
    border-width: 1px 0;
    padding: 7px 0;
  }

  button {
    background-color: #3F51B5;
    border: 1px solid #4527A0;
    border-radius: 30px;
    color: #fff;
    font-size: .9rem;
    margin-right: 4px;
    outline: none;
    padding: 5px 11px;
    transition: all .3s;

    &:hover{
      background-color: #303F9F;
      box-shadow: 1px 2px 2px 0px #777;
    }
  }

</style>