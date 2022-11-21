import React, { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'

  
const Screen = () => {

  const expr = useAppSelector(state => state.screen.expr)
  const outcome = useAppSelector(state => state.screen.ans)
  const theme = useAppSelector(state => state.header.theme) % 3
  
  let resultArr:string[] = []

  const ans = outcome.length > 15 ? Number(outcome).toExponential() : outcome
  
  if(ans.split("").includes('e')) resultArr = ans.slice().split('e')
  
  const result = ans.split("").includes('e') ? resultArr[0].slice(0,12) + 'e' + resultArr[1] : ans

  return (
    <div className={`${theme === 0 ? 'bg-[#181f32]' : ''}${theme === 1 ? 'bg-white' : ''}${theme === 2 ? 'bg-[#1e0836]' : ''} h-[10rem] w-[35rem]  sm:w-[40rem] mx-auto px-8 sm:px-10 rounded-2xl flex flex-col justify-center gap-2 pb-6`}>
      <p className={`text-3xl ${theme === 0 ? 'text-white' : ''} ${theme === 1 ? 'text-gray-700' : ''} ${theme === 2 ? 'text-[#fdee45]' : ''} font-[400] flex justify-end items-center text-ellipsis overflow-hidden`}>{expr}_</p>
      <p className={`text-6xl ${theme === 0 ? 'text-white' : ''} ${theme === 1 ? 'text-gray-700' : ''} ${theme === 2 ? 'text-[#fdee45]' : ''} font-bold flex justify-end items-center text-ellipsis overflow-hidden`}>{result}</p>
    </div>
  )
}

export default Screen
