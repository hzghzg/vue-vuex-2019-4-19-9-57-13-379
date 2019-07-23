<template>
  <div id="app" >
    <Header></Header>
    <Body ref="body"></Body>
    <Footer @childStatus="getFooterStatus" id="footer"></Footer>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Body from "./components/Body.vue";
import Footer from "./components/Footer.vue";

export default {
  name: 'app',
  methods:{
    getFooterStatus(f){
      this.$refs.body.displayList(f);
    }
  },
  components: {
    Header,
    Body,
    Footer
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  padding-top: 30px;
  margin:auto;
  width: 500px;
  padding-left:30px;
  background-color:whitesmoke;
  border:10px solid #c0c0c0;
}
#footer{
  text-align: center;
  margin-top: 40px;
}
</style>
