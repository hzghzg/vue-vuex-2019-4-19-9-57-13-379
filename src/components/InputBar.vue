<template>
  <div id="InputBar">
      <label><input type="text" class="inputstyle" v-model="text"></label>
      <input type="button" value="Add" class="buttonclass" @click="addNewItemToList">
  </div>
</template>

<script>
export default {
  name: 'InputBar',
  data(){
      return{
          text:""
      }
  },
  methods:{
      addNewItemToList(){
           let obj={status:"Notchosed",value:this.text}
           this.$store.commit("addDataToList",obj)
      }
  },
  components: {
  }
}
</script>
<style>
.inputstyle{
    width:360px;
    margin-right:10px;

}
.buttonclass{
    background-color: #F08080;
    color:ghostwhite;
    border-radius: 5px;
    border:0px;
}
</style>