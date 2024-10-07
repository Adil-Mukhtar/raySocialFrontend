import { Card, Grid } from '@mui/material'
import React from 'react'
import Login from './Login'
import Register from './Register'
import { Route, Routes } from 'react-router-dom'

const Authentication = () => {
  return (
    <div>
        <Grid container>
            <Grid className='h-screen overflow-hidden' item xs={7}>
                <img className='h-full wfull' src='https://cdn.pixabay.com/photo/2020/05/18/16/17/social-media-5187243_1280.png' alt='' />
            </Grid>
            <Grid item xs={5}>

                <div className='px-20 flex flex-col justify-center h-full'>

                    <Card className='card p-8'>

                        <div className='flex flex-col item-center mb-5 space-y-1'>
                            <h1 className='logo text-center'> Ray Social </h1>
                            <p className='text-center text-sm w-[70&]'>Connecting People</p>
                        </div>

                       <Routes>
                            <Route path='/' element={<Login/>}/>
                            <Route path='/login' element={<Login/>}/>
                            <Route path='/register' element={<Register/>}/>
                       </Routes>
                    </Card>

                </div>

            </Grid>
        </Grid>
    </div>
  )
}

export default Authentication