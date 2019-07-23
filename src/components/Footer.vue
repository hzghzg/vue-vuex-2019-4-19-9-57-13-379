<template>
  <div id="Footer">
      <a href="" @click.prevent="displayAll" :style="obj1">ALL</a>
      <a href="" @click.prevent="displayActive" :style="obj2">Active</a>
      <a href="" @click.prevent="displayComplete" :style="obj3">Complete</a>
  </div>
</template>

<script>



export default {
  name: 'Footer',
  data(){
    return{
      obj1:{},
      obj2:{},
      obj3:{}
      
    }
  },
  methods:{
    displayAll(){
      this.obj1={'border':'1px solid #FFB6C1','border-radius': '5px'}
      this.obj2={}
      this.obj3={}
      this.$store.commit('displayList',"all")
    },
    displayActive(){
      this.obj1={}
      this.obj2={'border':'1px solid #FFB6C1','border-radius': '5px'}
      this.obj3={}
      this.$store.commit('displayList',"active")
    },
    displayComplete(){
      this.obj1={}
      this.obj2={}
      this.obj3={'border':'1px solid #FFB6C1','border-radius': '5px'}
      this.$store.commit('displayList',"complete")
    }
  }
}
</script>

<style>
a{
    display: inline-block;
    padding:2px;
    color: #F08080;
    text-decoration:none;
    margin:0px 15px 5px 15px

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