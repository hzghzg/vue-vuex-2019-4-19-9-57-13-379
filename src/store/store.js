import Vue from "vue"
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        List:[{status:"Notchosed",value:"123"},{status:"Notchosed",value:"456"},{status:"Notchosed",value:"789"},{status:"Notchosed",value:"1011"}],
        reservedList:[{status:"Notchosed",value:"123"},{status:"Notchosed",value:"456"},{status:"Notchosed",value:"789"},{status:"Notchosed",value:"1011"}]
    },
    getter:{
        result:state=>{
            return state.sum
        }
    },
    mutations:{
        setFooterClickStatus(state,status){
            state.footerClickStatus=status
        },
        addDataToList(state,newItem){
            state.List.push(newItem)
            state.reservedList.push(newItem)
        },
        changeStatus(state,currentItemValue){
            let index=state.List.map(item=>item.value).indexOf(currentItemValue.value);
            if(state.List[index].status=="Notchosed"){
                state.List[index].status="BeChosed";
                state.reservedList[index].status="BeChosed";
            }
            else{
                state.List[index].status="Notchosed";
                state.reservedList[index].status="Notchosed";
            }
        },
        displayList(state,completeStatus){
            state.List=state.reservedList;
            if(completeStatus=="active")
            state.List=state.List.filter(item=>item.status=="Notchosed")
            else if(completeStatus=="complete")
            state.List=state.List.filter(item=>item.status=="BeChosed")
        }
    }
})