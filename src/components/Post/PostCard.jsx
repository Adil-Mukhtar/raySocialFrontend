import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography } from '@mui/material'
import { red } from '@mui/material/colors'
import React from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { ExpandMore } from '@mui/icons-material';
import SendIcon from '@mui/icons-material/Send';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import GradeIcon from '@mui/icons-material/Grade';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const PostCard = () => {
  return (
    <Card className=''>
        <CardHeader
            avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                R
            </Avatar>
            }
            action={
            <IconButton aria-label="settings">
                <MoreVertIcon />
            </IconButton>
            }
            title="Ray Codding"
            subheader="@raycoding" //can be time too
        />

        <CardMedia
            component="img"
            height="194"
            image="https://cdn.pixabay.com/photo/2024/02/23/08/27/apple-8591539_1280.jpg"
            alt="Paella dish"
        />

        <CardContent>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                This impressive paella is a perfect party dish and a fun meal to cook
                together with your guests. Add 1 cup of frozen peas along with the mussels,
                if you like.
            </Typography>
        </CardContent>

        <CardActions className='flex justify-between' disableSpacing>
            <div>
                <IconButton aria-label="add to favorites">
                    {true?<FavoriteIcon />:<FavoriteBorderIcon/>}
                </IconButton>

                <IconButton aria-label="add to favorites">
                    {<ChatBubbleIcon/>}
                </IconButton>

                <IconButton aria-label="add to favorites">
                    {<SendIcon/>}
                </IconButton>


            </div>
            
            <div>
                <IconButton aria-label="add to favorites">
                    {true?<BookmarkIcon />:<BookmarkBorderIcon/>}
                </IconButton>
            </div>
        </CardActions>

    </Card>
  )
}

export default PostCard