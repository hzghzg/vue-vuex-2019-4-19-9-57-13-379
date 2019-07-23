<template>
  <div id="Body">
      <InputBar id="input"></InputBar>
      <ol><ListContainer  v-for="item in this.$store.state.List" :key="item.value" :childData="item" ></ListContainer></ol>
  </div>
</template>

<script>
import InputBar from "../components/InputBar.vue";
import ListContainer from "../components/ListContainer.vue";
export default {
  name: 'Body',
  components: {
      InputBar,
      ListContainer
  }
}
</script>

<style>
#input{
    margin-bottom:40px;
}
ol{
    padding-left:10px;
}
#app { 
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>