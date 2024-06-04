import { useState } from 'react';
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import Drawer from '@mui/material/Drawer';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import TextSnippetOutlinedIcon from '@mui/icons-material/TextSnippetOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import FindInPageOutlinedIcon from '@mui/icons-material/FindInPageOutlined';
import './SideBar.css';
import Logo from '../../assets/Logo.PNG'
import { useNavigate } from 'react-router-dom';

const SideBar = () => {
  const drawerWidth = 280;
  const menuItems = [
    {path: '/JobFeed',icon:  <FindInPageOutlinedIcon sx={{ fontSize: 30 }} />, title: "Jobs Feed"},
    { path: '/MyApplication', title: "My Applications", icon: <TextSnippetOutlinedIcon sx={{ fontSize: 30 }} /> },
    { title: "My Profile", icon: <AccountCircleOutlinedIcon sx={{ fontSize: 30 }} /> }
  ];

  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0); // Initialize with the index of "Jobs Feed"

  const handleListItemClick = (index,path) => {
    navigate(path)
    setActiveIndex(index);
  };

  return (
    <div style={{width:'21vw'}}>
      <div className='logo'></div>
      <Box>
        <Drawer
          sx={{
            
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: "21vw !important" ,
              boxSizing: 'border-box',
            },
          }}
          variant="permanent"
          anchor="left"
        >
          <Box sx={{ textAlign: 'center', padding: '20px 0' }}>
            <img src={Logo} alt="Logo" style={{ width: '80%', height: 'auto' }} />
          </Box>
          <List className='list'>
            {menuItems.map((item, index) => (
              <ListItem className='listIem'
                key={item.title}
                disablePadding
                onClick={() => handleListItemClick(index,item?.path)}
                sx={{
                  backgroundColor: activeIndex === index ? '#00A19D' : '',
                  color : activeIndex === index ? '#ffffff' : ''
                }}
              >
                <ListItemButton>
                  <ListItemIcon sx={{
                    color : activeIndex === index ? '#ffffff' : ''
                }}>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.title} />
                  <KeyboardArrowRightIcon />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Drawer>
      </Box>
    </div>
  );
}

export default SideBar;
