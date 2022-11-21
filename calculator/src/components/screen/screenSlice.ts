import React from 'react'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'


type InitStateType = {
    expr: string;
    ans: string;
}
const initialState: InitStateType = {
    expr: '',
    ans: '0',
}

 
 const screenSlice = createSlice({
     name: 'screen',
     initialState,
    reducers: {
        updateExpr: (state, action: PayloadAction<string>) => {
            state.expr += action.payload
            if(state.expr[0] === '0' && state.expr[1] !== '.') {
            state.expr = state.expr.slice(1)
            }
        },
        updateZeroWithDecimal: (state,action) => {
          state.expr += action.payload
        },
        popExpr: (state) => {
          state.expr = state.expr.length === 1 ? '0' : state.expr.slice(0,-1)
        },
        resetExpr: (state) =>  {
          state.expr = ''
          state.ans ='0'
        },
        returnAns: (state, action) => {
          state.ans = action.payload
        },
        ansToExpr: (state) => {
          if(state.ans !== '0') {
            state.expr = state.ans
            state.ans = '0'
          }
        }
    },
    })

 export default screenSlice.reducer
 export const { updateExpr, popExpr, resetExpr, returnAns, ansToExpr, updateZeroWithDecimal } = screenSlice.actions