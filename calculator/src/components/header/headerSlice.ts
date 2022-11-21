import React from 'react'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'


type InitStateType = {
    theme: number;
}
const initialState: InitStateType = {
    theme: 0
}

 
 const headerSlice = createSlice({
     name: 'header',
     initialState,
    reducers: {
        changeTheme: (state) => {
            state.theme += 1
        }
    },
    })

 export default headerSlice.reducer
 export const { changeTheme } = headerSlice.actions