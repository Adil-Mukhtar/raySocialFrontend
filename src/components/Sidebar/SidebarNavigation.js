import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import CreateIcon from '@mui/icons-material/Create';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import GroupsIcon from '@mui/icons-material/Groups';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export const navigationMenu=[
    {
        title:"Home",
        icon:<HomeIcon/>,
        path:"/"
    },
    {
        title:"Reels",
        icon:<ExploreIcon/>,
        path:"/reels"
    },
    {
        title:"Create Reels",
        icon:<CreateIcon/>,
        path:"/create-reels"
    },
    {
        title:"Notifications",
        icon:<NotificationsNoneIcon/>,
        path:"/"
    },
    {
        title:"Message",
        icon:<ChatBubbleOutlineIcon/>,
        path:"/message"
    },
    {
        title:"Lists",
        icon:<FormatListBulletedIcon/>,
        path:"/"
    },
    {
        title:"Community",
        icon:<GroupsIcon/>,
        path:"/"
    },
    {
        title:"Profile",
        icon:<AccountCircleIcon/>,
        path:"/profile"
    },
]