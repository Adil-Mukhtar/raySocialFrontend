import { Avatar } from '@mui/material'
import React from 'react'

const StoryCircle = () => {
  return (
    <div>
        <div className='flex flex-col items-center mr-4 cursor-pointer'>
          <Avatar src="https://cdn.pixabay.com/photo/2016/11/18/19/07/happy-1836445_1280.jpg" sx={{width:"5rem", height:"5rem"}}>
          </Avatar>
          <p>rayCodding</p>
        </div>
    </div>
  )
}

export default StoryCircle