import React from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { updateExpr, popExpr, resetExpr, returnAns, ansToExpr, updateZeroWithDecimal } from '../screen/screenSlice'

const Keyboard = () => {
  const dispatch = useAppDispatch()
  const theme = useAppSelector(state => state.header.theme) % 3
  const expr = useAppSelector(state => state.screen.expr)
  const ans = useAppSelector(state => state.screen.ans)
  
  return (
    <div className={`${theme === 0 ? 'bg-[#252d44] text-[#252d44]' : ''} ${theme === 1 ? 'bg-[#d2cccc] text-[#252d44]' : ''} ${theme === 2 ? 'bg-[#1e0836] text-[#fdee45]' : ''} mx-auto w-[35rem]  sm:w-[40rem] rounded-2xl  grid grid-cols-4 gap-4 sm:gap-8 px-8 sm:px-10 py-8 sm:py-10`}>
      <button className={`${theme === 2 ? 'bg-[#331b4d] border-[#712c88] shadow-[#712c88] hover:bg-[#6934b1]' : 'bg-[#eae3db] border-[#afa69f] shadow-[#afa69f] hover:bg-white'} h-[4.8rem] text-5xl font-bold border border-b-2  shadow-sm  active:shadow-none active:translate-y-[3%]`} 
      onClick={() => dispatch(updateExpr('7'))} >7</button>
      <button className={`${theme === 2 ? 'bg-[#331b4d] border-[#712c88] shadow-[#712c88] hover:bg-[#6934b1]' : 'bg-[#eae3db] border-[#afa69f] shadow-[#afa69f] hover:bg-white'} h-[4.8rem] text-5xl font-bold border border-b-2  shadow-sm  active:shadow-none active:translate-y-[3%]`}
      onClick={() => dispatch(updateExpr('8'))} >8</button>
      <button className={`${theme === 2 ? 'bg-[#331b4d] border-[#712c88] shadow-[#712c88] hover:bg-[#6934b1]' : 'bg-[#eae3db] border-[#afa69f] shadow-[#afa69f] hover:bg-white'} h-[4.8rem] text-5xl font-bold border border-b-2  shadow-sm  active:shadow-none active:translate-y-[3%]`}
      onClick={() => dispatch(updateExpr('9'))} >9</button>
      <button className={`${theme === 0 ? 'bg-[#637198] border-[#4b587b] shadow-[#4b587b] hover:bg-[#a2b3e1]' : ''} ${theme === 1 ? 'bg-[#388187] border-[#335e5f] shadow-[#335e5f] hover:bg-[#64b5bb]' : ''} ${theme === 2 ? 'bg-[#56077c] border-[#9d2ac5] shadow-[#9d2ac5] hover:bg-[#8632ab]': ''} h-[4.8rem] text-white text-3xl font-bold border-b-2 shadow-sm active:shadow-none active:translate-y-[3%] uppercase`}
      onClick={() => dispatch(popExpr())} >del</button>
      <button className={`${theme === 2 ? 'bg-[#331b4d] border-[#712c88] shadow-[#712c88] hover:bg-[#6934b1]' : 'bg-[#eae3db] border-[#afa69f] shadow-[#afa69f] hover:bg-white'} h-[4.8rem] text-5xl font-bold border border-b-2  shadow-sm  active:shadow-none active:translate-y-[3%]`}
      onClick={() => dispatch(updateExpr('4'))} >4</button>
      <button className={`${theme === 2 ? 'bg-[#331b4d] border-[#712c88] shadow-[#712c88] hover:bg-[#6934b1]' : 'bg-[#eae3db] border-[#afa69f] shadow-[#afa69f] hover:bg-white'} h-[4.8rem] text-5xl font-bold border border-b-2  shadow-sm  active:shadow-none active:translate-y-[3%]`}
      onClick={() => dispatch(updateExpr('5'))} >5</button>
      <button className={`${theme === 2 ? 'bg-[#331b4d] border-[#712c88] shadow-[#712c88] hover:bg-[#6934b1]' : 'bg-[#eae3db] border-[#afa69f] shadow-[#afa69f] hover:bg-white'} h-[4.8rem] text-5xl font-bold border border-b-2  shadow-sm  active:shadow-none active:translate-y-[3%]`}
      onClick={() => dispatch(updateExpr('6'))} >6</button>
      <button className={`${theme === 2 ? 'bg-[#331b4d] border-[#712c88] shadow-[#712c88] hover:bg-[#6934b1]' : 'bg-[#eae3db] border-[#afa69f] shadow-[#afa69f] hover:bg-white'} h-[4.8rem] text-5xl font-bold border border-b-2  shadow-sm  active:shadow-none active:translate-y-[3%] pb-3`}
      onClick={() => {
        dispatch(ansToExpr())
        dispatch(updateExpr('+'))
        }} >+</button>
      <button className={`${theme === 2 ? 'bg-[#331b4d] border-[#712c88] shadow-[#712c88] hover:bg-[#6934b1]' : 'bg-[#eae3db] border-[#afa69f] shadow-[#afa69f] hover:bg-white'} h-[4.8rem] text-5xl font-bold border border-b-2  shadow-sm  active:shadow-none active:translate-y-[3%]`} 
      onClick={() => dispatch(updateExpr('1'))} >1</button>
      <button className={`${theme === 2 ? 'bg-[#331b4d] border-[#712c88] shadow-[#712c88] hover:bg-[#6934b1]' : 'bg-[#eae3db] border-[#afa69f] shadow-[#afa69f] hover:bg-white'} h-[4.8rem] text-5xl font-bold border border-b-2  shadow-sm  active:shadow-none active:translate-y-[3%]`}
      onClick={() => dispatch(updateExpr('2'))} >2</button>
      <button className={`${theme === 2 ? 'bg-[#331b4d] border-[#712c88] shadow-[#712c88] hover:bg-[#6934b1]' : 'bg-[#eae3db] border-[#afa69f] shadow-[#afa69f] hover:bg-white'} h-[4.8rem] text-5xl font-bold border border-b-2  shadow-sm  active:shadow-none active:translate-y-[3%]`} 
      onClick={() => dispatch(updateExpr('3'))} >3</button>
      <button className={`${theme === 2 ? 'bg-[#331b4d] border-[#712c88] shadow-[#712c88] hover:bg-[#6934b1]' : 'bg-[#eae3db] border-[#afa69f] shadow-[#afa69f] hover:bg-white'} h-[4.8rem] text-5xl font-bold border border-b-2  shadow-sm  active:shadow-none active:translate-y-[3%] pb-3`}
      onClick={() => {
        dispatch(ansToExpr())
        dispatch(updateExpr('-'))
        }} >-</button>
      <button className={`${theme === 2 ? 'bg-[#331b4d] border-[#712c88] shadow-[#712c88] hover:bg-[#6934b1]' : 'bg-[#eae3db] border-[#afa69f] shadow-[#afa69f] hover:bg-white'} h-[4.8rem] text-5xl font-bold border border-b-2  shadow-sm  active:shadow-none active:translate-y-[3%]`}
      onClick={() => {
        dispatch(ansToExpr())
        dispatch(updateZeroWithDecimal('.'))
        }} >.</button>
      <button className={`${theme === 2 ? 'bg-[#331b4d] border-[#712c88] shadow-[#712c88] hover:bg-[#6934b1]' : 'bg-[#eae3db] border-[#afa69f] shadow-[#afa69f] hover:bg-white'} h-[4.8rem] text-5xl font-bold border border-b-2  shadow-sm  active:shadow-none active:translate-y-[3%]`} 
      onClick={() => dispatch(updateZeroWithDecimal('0'))}>0</button>
      <button className={`${theme === 2 ? 'bg-[#331b4d] border-[#712c88] shadow-[#712c88] hover:bg-[#6934b1]' : 'bg-[#eae3db] border-[#afa69f] shadow-[#afa69f] hover:bg-white'} h-[4.8rem] text-4xl font-bold border border-b-2  shadow-sm  active:shadow-none active:translate-y-[3%]`}
      onClick={() => {
        dispatch(ansToExpr())
        dispatch(updateExpr('/'))
        }}>/</button>
       <button className={`${theme === 2 ? 'bg-[#331b4d] border-[#712c88] shadow-[#712c88] hover:bg-[#6934b1]' : 'bg-[#eae3db] border-[#afa69f] shadow-[#afa69f] hover:bg-white'} h-[4.8rem] text-3xl font-bold border border-b-2  shadow-sm  active:shadow-none active:translate-y-[3%]`}
       onClick={() => {
         dispatch(ansToExpr())
         dispatch(updateExpr('x'))
         }}>X</button>
      <button className={`${theme === 2 ? 'bg-[#331b4d] border-[#712c88] shadow-[#712c88] hover:bg-[#6934b1]' : 'bg-[#eae3db] border-[#afa69f] shadow-[#afa69f] hover:bg-white'} h-[4.8rem] text-3xl font-bold border border-b-2  shadow-sm  active:shadow-none active:translate-y-[3%] italic`}
      onClick={() => {
        dispatch(ansToExpr())
        dispatch(updateExpr('^'))
        }} >x<sup>n</sup></button>
      <button className={`${theme === 2 ? 'bg-[#331b4d] border-[#712c88] shadow-[#712c88] hover:bg-[#6934b1]' : 'bg-[#eae3db] border-[#afa69f] shadow-[#afa69f] hover:bg-white'} h-[4.8rem] text-3xl font-bold border border-b-2  shadow-sm  active:shadow-none active:translate-y-[3%]`}
      onClick={() => dispatch(updateExpr('10^'))} >10<sup className='italic'>x</sup></button>
      <button className={`${theme === 2 ? 'bg-[#331b4d] border-[#712c88] shadow-[#712c88] hover:bg-[#6934b1]' : 'bg-[#eae3db] border-[#afa69f] shadow-[#afa69f] hover:bg-white'} h-[4.8rem] text-3xl font-bold border border-b-2  shadow-sm  active:shadow-none active:translate-y-[3%] italic`}
      onClick={() => dispatch(updateExpr('sqrt('))} >sqrt</button>
      <button className={`${theme === 2 ? 'bg-[#331b4d] border-[#712c88] shadow-[#712c88] hover:bg-[#6934b1]' : 'bg-[#eae3db] border-[#afa69f] shadow-[#afa69f] hover:bg-white'} h-[4.8rem] text-3xl font-bold border border-b-2  shadow-sm  active:shadow-none active:translate-y-[3%] italic flex items-center justify-center`}
      onClick={() => dispatch(updateExpr('cbrt('))} >cbrt</button>
      <button className={`${theme === 2 ? 'bg-[#331b4d] border-[#712c88] shadow-[#712c88] hover:bg-[#6934b1]' : 'bg-[#eae3db] border-[#afa69f] shadow-[#afa69f] hover:bg-white'} h-[4.8rem] text-3xl font-bold border border-b-2  shadow-sm  active:shadow-none active:translate-y-[3%] italic flex items-center justify-center`}
      onClick={() => dispatch(updateExpr('log('))} >ln(x)</button>
      <button className={`${theme === 2 ? 'bg-[#331b4d] border-[#712c88] shadow-[#712c88] hover:bg-[#6934b1]' : 'bg-[#eae3db] border-[#afa69f] shadow-[#afa69f] hover:bg-white'} h-[4.8rem] text-3xl font-bold border border-b-2  shadow-sm  active:shadow-none active:translate-y-[3%] italic`}
      onClick={() => dispatch(updateExpr('log10('))} >log(x)</button>
      <button className={`${theme === 2 ? 'bg-[#331b4d] border-[#712c88] shadow-[#712c88] hover:bg-[#6934b1]' : 'bg-[#eae3db] border-[#afa69f] shadow-[#afa69f] hover:bg-white'} h-[4.8rem] text-4xl font-bold border border-b-2  shadow-sm  active:shadow-none active:translate-y-[3%]`}
      onClick={() => {
        dispatch(ansToExpr())
        dispatch(updateExpr('('))
      }} >(</button>
      <button className={`${theme === 2 ? 'bg-[#331b4d] border-[#712c88] shadow-[#712c88] hover:bg-[#6934b1]' : 'bg-[#eae3db] border-[#afa69f] shadow-[#afa69f] hover:bg-white'} h-[4.8rem] text-4xl font-bold border border-b-2  shadow-sm  active:shadow-none active:translate-y-[3%]`}
      onClick={() => {
        dispatch(ansToExpr())
        dispatch(updateExpr(')'))
      }} >)</button>
      <button className={`${theme === 0 ? 'bg-[#637198] border-[#4b587b]  shadow-[#4b587b] hover:bg-[#a2b3e1]' : ''} ${theme === 1 ? 'bg-[#388187] border-[#335e5f] shadow-[#335e5f] hover:bg-[#64b5bb]' : ''} ${theme === 2 ? 'bg-[#56077c] border-[#9d2ac5] shadow-[#9d2ac5] hover:bg-[#8632ab]': ''} h-[4.8rem] text-white text-3xl font-bold border-b-2 shadow-sm active:shadow-none active:translate-y-[3%] uppercase`}
      onClick={() => dispatch(resetExpr())}>ac</button>
      <button className={`${theme === 2 ? 'bg-[#331b4d] border-[#712c88] shadow-[#712c88] hover:bg-[#6934b1]' : 'bg-[#eae3db] border-[#afa69f] shadow-[#afa69f] hover:bg-white'} h-[4.8rem] text-3xl font-bold border border-b-2  shadow-sm  active:shadow-none active:translate-y-[3%]`}
      onClick={() => dispatch(updateExpr('Ans'))} >Ans</button>
      <button className={`h-[4.8rem] text-5xl font-bold border border-b-2 shadow-sm ${ theme === 2 ? 'bg-[#00decf] border-[#73f5f7] shadow-[#73f5f7] text-gray-700 hover:bg-[#94fff9]' : 'bg-[#d13f30] border-[#91291b] shadow-[#91291b] text-white hover:bg-[#f96c5b]'}  active:shadow-none active:translate-y-[3%] col-span-2 pb-2`}onClick={() => dispatch(returnAns(Function('return ' + expr.replace('x','*').replace('(','*(').replace('cbrt*(','Math.cbrt(').replace('^*(', '^(').replace('^','**').replace('sqrt*(','Math.sqrt(').replace('log*(','Math.log10(').replace('ln*(','Math.log(').replace('Ans', ans))().toString()))}>=</button>
      
    </div>
  )
}

//#00decf  hover #94fff9
//#d13f30 hover #f96c5b

export default Keyboard
