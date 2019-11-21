import {createStore} from 'redux'
import { stat } from 'fs'

let reducer=(state,action)=>{
    console.log(state,action)
    state = JSON.parse(JSON.stringify((state)))
    if(action.type === 'DATA_LIST'){
        state.list = action.list
    }
    if(action.type === 'CART_LIST'){
        let index = state.cart.findIndex(item=>item.id===action.payload.id)
        if(index === -1){
            action.payload.num = 1;
            action.payload.checked = true
            state.cart.push(action.payload)
        }else{
            state.cart[index].num++
        }
    }
    if(action.type==='CHANGE_CHECKED'){
        console.log(action)
        let index = state.cart.findIndex(item=>item.id===action.payload.id)
        state.cart[index].checked = !state.cart[index].checked
    }
    if(action.type === 'CHECKALL'){
        console.log(action)
        state.cart.forEach((item,index)=>{
            item.checked = action.payload
        })
    }
    if(action.type === 'CHANGE_CLICK'){
        console.log(action)
        let index = state.cart.findIndex(item=>item.id===action.payload.id)
        if(action.payload.type == '+'){
            state.cart[index].num++
        }else{
            state.cart[index].num--
            if(state.cart[index].num<1){
                state.cart.splice(index,1)
            }
        }
    }
    if(action.type=='DETAIL_BTN'){
            state.detail=action.payload
    }
    return state
}

let initState={
    list:[],
    cart:[],
    detail:[]
}

export default createStore(reducer,initState)