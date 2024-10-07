import { Avatar, Button, CardHeader, IconButton } from '@mui/material'
import React from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { red } from '@mui/material/colors';

export const PopularUserCard = () => {
  return (
    <div>
        <CardHeader
            avatar={
            <Avatar src="https://cdn.pixabay.com/photo/2016/11/21/14/30/man-1845715_1280.jpg" sx={{ bgcolor: red[500] }} aria-label="recipe">
                R
            </Avatar>
            }
            action={
            <Button size="small">
                Follow
            </Button>
            }

            title="Adyyl"
            subheader="@notAdyyl"
        />
    </div>
  )
}

export default PopularUserCard