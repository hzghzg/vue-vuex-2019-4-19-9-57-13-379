<template>
  <div id="Body">
      <InputBar id="input"></InputBar>
      <ol><ListContainer  v-for="item in this.$store.state.List" :key="item.value" :childData="item" :listToChild="List" ></ListContainer></ol>
  </div>
</template>

<script>
import InputBar from "../components/InputBar.vue";
import ListContainer from "../components/ListContainer.vue";
export default {
  name: 'Body',
  data(){
      return{
          List:[{status:"Notchosed",value:"123"},{status:"Notchosed",value:"456"},{status:"Notchosed",value:"789"},{status:"Notchosed",value:"1011"}],
          reservedList:[{status:"Notchosed",value:"123"},{status:"Notchosed",value:"456"},{status:"Notchosed",value:"789"},{status:"Notchosed",value:"1011"}]
      }
  },
  methods:{
    displayList(completeStatus){
        this.List=this.reservedList;
        if(completeStatus=="active")
        this.List=this.List.filter(item=>item.status=="Notchosed")
        else if(completeStatus=="complete")
        this.List=this.List.filter(item=>item.status=="BeChosed")
        else
        this.List=this.List;
    }
  }
  ,
  components: {
      InputBar,
      ListContainer
  },
  props:['']
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