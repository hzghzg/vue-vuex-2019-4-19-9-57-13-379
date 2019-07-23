<template>
  <div id="ListContainer">
    <li :style="[childData.status=='BeChosed'?styleobj:{}, this.$store.state.List.map(i=>i.value).indexOf(childData.value)%2==1?styleobj1:{} ]"><input type="checkbox" @click="changeSelectStatus" :checked="childData.status=='BeChosed'" :contenteditable="editFlag" @dblclick="changeEditStatus">{{childData.value}}</li>
  </div>
</template>

<script>
export default {
  name: 'ListContainer',
  data(){
    return{
     editFlag:false,
     styleobj:{'text-decoration':'line-through'},
     styleobj1:{'background':'#F08080'}
    }
  },
  methods:{
    changeSelectStatus(){
      this.$store.commit('changeStatus',this.childData)
    },
    changeEditStatus(){
      this.editFlag=true
    }
  },
  props:['childData']
}
</script>
<style>
li{
  margin-right: 20px;
}
#ListContainer{
  padding-top:1px;
  padding-left: 5px;
  padding-bottom: 1px; 
}
</style>
}