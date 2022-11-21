import React from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { changeTheme } from './headerSlice'


const HeaderView = () => {

  const dispatch = useAppDispatch()
  const theme = useAppSelector(state => state.header.theme) % 3

  return (
    <div className={`flex flex-col w-[35rem]  sm:w-[40rem] mx-auto mb-2 ${theme === 0 ? 'text-white' : ''}${theme === 1 ? 'text-gray-700' : ''}${theme === 2 ? 'text-[#fdee45]' : ''}`}>
      <div className={`font-bold text-xl flex w-[6rem] px-2 justify-between self-end`}>
        <p className='text-inherit'>1</p>
        <p className='text-inherit'>2</p>
        <p className='text-inherit'>3</p>
      </div>
      <div className='flex justify-between'>
        <p className='text-3xl font-extrabold'>calc</p>
        <div className='flex gap-10 items-center'>
          <p className='uppercase align-bottom font-bold'>Theme</p>
            <div className={`flex justify-between p-1 w-[6rem] rounded-full ${theme === 0 ? 'bg-[#232e40]' : ''}${theme === 1 ? 'bg-[#d3ccca]' : ''}${theme === 2 ? 'bg-[#1d0833]' : ''} items-center`}
            onClick={() => dispatch(changeTheme())} 
            >
              <div className={`h-5 w-5 ${theme === 0 ? 'bg-[#d13f30]' : 'bg-transparent'} rounded-full`}></div>
              <div className={`h-5 w-5 ${theme === 1 ? 'bg-[#d13f30]' : 'bg-transparent'} rounded-full`}></div>
              <div className={`h-5 w-5 ${theme === 2 ? 'bg-[#00decf]' : 'bg-transparent'} rounded-full`}></div>
            </div>
        </div>
      </div>

    </div>
    
  )
}

export default HeaderView
