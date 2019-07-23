<template>
  <div id="ListContainer">
    <li :style="[childData.status=='BeChosed'?styleobj:{}, listToChild.map(i=>i.value).indexOf(childData.value)%2==1?styleobj1:{} ]"><input type="checkbox" @click="changeSelectStatus" :checked="childData.status=='BeChosed'" >{{childData.value}}</li>
  </div>
</template>

<script>
export default {
  name: 'ListContainer',
  data(){
    return{
     styleobj:{'text-decoration':'line-through'},
     styleobj1:{'background':'#F08080'}
    //styleobj1:{'color':'red'}
    }
  },
  components: {
  },
  methods:{
    changeSelectStatus(){
      this.$store.commit('changeStatus',this.childData)
    }
  },
  props:['childData',"listToChild"]
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