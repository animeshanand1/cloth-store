import {createSlice } from '@reduxjs/toolkit'

const initialState=[]

const cartSlice=createSlice({

    name:'cart',
    initialState,

    reducers:{
        add(state,action){
            state.push(action.payload)

        }    ,             //add to the cart

        remove(state,action){
            return state.filter((item)=>item.id !==action.payload)              //remove from the cart

        }
    }
})

export const {add,remove}=cartSlice.actions
export default cartSlice.reducer