<template>
  <div id="Footer">
      <a href="" @click.prevent="displayAll">ALL</a>
      <a href="" @click.prevent="displayActive">Active</a>
      <a href="" @click.prevent="displayComplete" >Complete</a>
  </div>
</template>

<script>



export default {
  name: 'Footer',
  
  methods:{
    displayAll(){
        this.$emit("childStatus","all")
    },
    displayActive(){
        this.$emit("childStatus","active")
    },
    displayComplete(){
        this.$emit("childStatus","complete")
    }
  },
  components: {
  }
}
</script>

<style>
a{
    display: inline-block;
    padding:30px;
    color: #F08080;
    text-decoration:none;

}
.buttonstyle{
    color:indianred;
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