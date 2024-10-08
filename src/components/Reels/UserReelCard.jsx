import React from 'react'

export const UserReelCard = () => {
  return (
    <div className='w-[15rem] px-2'>
        <video
            controls
            className='w-full h-full'
            src='https://videos.pexels.com/video-files/5198954/5198954-uhd_1440_2732_25fps.mp4'
        />
    </div>
  )
}

export default UserReelCard