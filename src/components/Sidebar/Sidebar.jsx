import React from 'react'
import { navigationMenu } from './SidebarNavigation'
import { Avatar, Button, Card, Divider, Menu, MenuItem } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Sidebar = () => {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Card className='card h-screen flex flex-col justify-between py-5'>

      <div className='space-y-8 pl-5'>

        <div className=''>
            <span className='logo font-bold text-xl'>Ray Social</span>
        </div>

          <div className='space-y-8'>
              {navigationMenu.map((item)=> (<div className='curson-pointer flex space-x-3 items-center'>
              {item.icon}
              <p className='text-xl '>{item.title}</p>
              </div>
              ))}
          </div>

      </div>

      <div>
        <Divider/>
        <div className='pl-5 flex items-center justify-between pt-5'>
          <div className='flex items-center space-x-3'>
              <Avatar src='https://cdn.pixabay.com/photo/2021/11/12/03/04/woman-6787784_1280.png'/>
              <div>
                <p className='font-bold'>Ray Codding</p>
                <p className='opacity-70'>@raycodding</p>
              </div>
          </div>
              <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
              >
              <ExpandMoreIcon/>
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  'aria-labelledby': 'basic-button',
                }}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
              </Menu>
        </div>
      </div>
    </Card>
  );
};

export default Sidebar