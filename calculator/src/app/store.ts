import React from 'react'
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import headerReducer from '../components/header/headerSlice'
import screenReducer from '../components/screen/screenSlice'


const customizedMiddleware = getDefaultMiddleware({
  serializableCheck: false
})

const store = configureStore({
    devTools: true,
    reducer: {
        header: headerReducer,
        screen: screenReducer,
        // navbar: navbarReducer,
    },

    // preloadedState: loadState(),

    middleware: (getDefaultMiddleware) => getDefaultMiddleware()

})

export default store
export type RootStateType = ReturnType<typeof store.getState>
export type AppDispatchType = typeof store.dispatch