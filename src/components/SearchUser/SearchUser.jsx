import { Card } from '@mui/material'
import React from 'react'

export const SearchUser = () => {
  return (
    <div>
        <div className='pt-10 pb-8'>
            <input
                className='outline-none w-[100%]  bg-slate-90 rounded-full px-5 bg-transparent border-[#3b4054] border'
                type='text'
                placeholder='search user ...'
            />
        </div>
        
    </div>
  )
}

export default SearchUser