import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import authService from '../services/auth-services/Auth.service';

import {ShoppingCartIcon, UserIcon} from '@heroicons/react/outline'

const pages = [
  {title:'Book list', link:"/books", Icon:null},
  {title:'FAQ', link:"/faq", Icon:null}, 
  {title:'Applications', link:"/applications", Icon:null}, 
  {title:'Basket', link:"/basket", Icon:ShoppingCartIcon}, 
  {title:'My Account', link:"/account", Icon:UserIcon}
];

const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [activeBtn, setActiveBtn] = React.useState("");

  const changeBtn = (event) => {
    console.log(event.currentTarget.value);
    setActiveBtn(event.currentTarget.value);
  }; 

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const condition = (text) => {
   return text === null ? null: text;
  }

  return (
    <AppBar position="static" style={{backgroundImage:"linear-gradient(to right, #00C2FF, #019CF3)", boxShadow: "none", paddingTop: "10px", borderBottom: "none"}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{justifyContent: "space-between"}}>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ ml: {xs:'none', md:12}, display: { xs: 'flex', md: 'flex' } }}
          >
            <Link to='/'>
            <svg width="173" height="45" viewBox="0 0 173 45" fill="none" xmlns="http://www.w3.org/2000/svg" >
                <rect width="49" height="45" rx="10" fill="white"/>
                <path d="M20.4022 22.264C21.3302 22.568 22.0662 23.08 22.6102 23.8C23.1542 24.504 23.4262 25.384 23.4262 26.44C23.4262 27.896 22.8662 29.024 21.7462 29.824C20.6262 30.608 18.9942 31 16.8502 31H8.49819V14.2H16.3702C18.3542 14.2 19.8822 14.592 20.9542 15.376C22.0262 16.144 22.5622 17.208 22.5622 18.568C22.5622 19.4 22.3702 20.136 21.9862 20.776C21.6022 21.416 21.0742 21.912 20.4022 22.264ZM11.6182 16.648V21.28H16.0342C17.1222 21.28 17.9542 21.088 18.5302 20.704C19.1222 20.304 19.4182 19.728 19.4182 18.976C19.4182 18.208 19.1222 17.632 18.5302 17.248C17.9542 16.848 17.1222 16.648 16.0342 16.648H11.6182ZM16.6582 28.552C19.0742 28.552 20.2822 27.744 20.2822 26.128C20.2822 24.512 19.0742 23.704 16.6582 23.704H11.6182V28.552H16.6582ZM38.66 22.264C39.588 22.568 40.324 23.08 40.868 23.8C41.412 24.504 41.684 25.384 41.684 26.44C41.684 27.896 41.124 29.024 40.004 29.824C38.884 30.608 37.252 31 35.108 31H26.756V14.2H34.628C36.612 14.2 38.14 14.592 39.212 15.376C40.284 16.144 40.82 17.208 40.82 18.568C40.82 19.4 40.628 20.136 40.244 20.776C39.86 21.416 39.332 21.912 38.66 22.264ZM29.876 16.648V21.28H34.292C35.38 21.28 36.212 21.088 36.788 20.704C37.38 20.304 37.676 19.728 37.676 18.976C37.676 18.208 37.38 17.632 36.788 17.248C36.212 16.848 35.38 16.648 34.292 16.648H29.876ZM34.916 28.552C37.332 28.552 38.54 27.744 38.54 26.128C38.54 24.512 37.332 23.704 34.916 23.704H29.876V28.552H34.916Z" fill="#464646"/>
                <path d="M68.1163 22.014C69.011 22.2633 69.715 22.718 70.2283 23.378C70.7417 24.0233 70.9983 24.8447 70.9983 25.842C70.9983 27.1767 70.4923 28.2033 69.4803 28.922C68.483 29.6407 67.0237 30 65.1023 30H57.7543V14.6H64.6623C66.4223 14.6 67.779 14.952 68.7323 15.656C69.7003 16.36 70.1843 17.3353 70.1843 18.582C70.1843 19.3887 69.9937 20.0853 69.6123 20.672C69.2457 21.2587 68.747 21.706 68.1163 22.014ZM59.9543 16.382V21.31H64.4643C65.5937 21.31 66.459 21.1047 67.0603 20.694C67.6763 20.2687 67.9843 19.6527 67.9843 18.846C67.9843 18.0393 67.6763 17.4307 67.0603 17.02C66.459 16.5947 65.5937 16.382 64.4643 16.382H59.9543ZM65.0143 28.218C66.261 28.218 67.1997 28.0127 67.8303 27.602C68.461 27.1913 68.7763 26.546 68.7763 25.666C68.7763 23.95 67.5223 23.092 65.0143 23.092H59.9543V28.218H65.0143ZM79.0907 30.132C77.9321 30.132 76.8907 29.8753 75.9667 29.362C75.0427 28.8487 74.3167 28.1447 73.7887 27.25C73.2754 26.3407 73.0187 25.314 73.0187 24.17C73.0187 23.026 73.2754 22.0067 73.7887 21.112C74.3167 20.2027 75.0427 19.4987 75.9667 19C76.8907 18.4867 77.9321 18.23 79.0907 18.23C80.2494 18.23 81.2834 18.4867 82.1927 19C83.1167 19.4987 83.8354 20.2027 84.3487 21.112C84.8767 22.0067 85.1407 23.026 85.1407 24.17C85.1407 25.314 84.8767 26.3407 84.3487 27.25C83.8354 28.1447 83.1167 28.8487 82.1927 29.362C81.2834 29.8753 80.2494 30.132 79.0907 30.132ZM79.0907 28.284C79.8387 28.284 80.5061 28.1153 81.0927 27.778C81.6941 27.426 82.1634 26.942 82.5007 26.326C82.8381 25.6953 83.0067 24.9767 83.0067 24.17C83.0067 23.3633 82.8381 22.652 82.5007 22.036C82.1634 21.4053 81.6941 20.9213 81.0927 20.584C80.5061 20.2467 79.8387 20.078 79.0907 20.078C78.3427 20.078 77.6681 20.2467 77.0667 20.584C76.4801 20.9213 76.0107 21.4053 75.6587 22.036C75.3214 22.652 75.1527 23.3633 75.1527 24.17C75.1527 24.9767 75.3214 25.6953 75.6587 26.326C76.0107 26.942 76.4801 27.426 77.0667 27.778C77.6681 28.1153 78.3427 28.284 79.0907 28.284ZM93.0556 30.132C91.8969 30.132 90.8556 29.8753 89.9316 29.362C89.0076 28.8487 88.2816 28.1447 87.7536 27.25C87.2402 26.3407 86.9836 25.314 86.9836 24.17C86.9836 23.026 87.2402 22.0067 87.7536 21.112C88.2816 20.2027 89.0076 19.4987 89.9316 19C90.8556 18.4867 91.8969 18.23 93.0556 18.23C94.2142 18.23 95.2482 18.4867 96.1576 19C97.0816 19.4987 97.8002 20.2027 98.3136 21.112C98.8416 22.0067 99.1056 23.026 99.1056 24.17C99.1056 25.314 98.8416 26.3407 98.3136 27.25C97.8002 28.1447 97.0816 28.8487 96.1576 29.362C95.2482 29.8753 94.2142 30.132 93.0556 30.132ZM93.0556 28.284C93.8036 28.284 94.4709 28.1153 95.0576 27.778C95.6589 27.426 96.1282 26.942 96.4656 26.326C96.8029 25.6953 96.9716 24.9767 96.9716 24.17C96.9716 23.3633 96.8029 22.652 96.4656 22.036C96.1282 21.4053 95.6589 20.9213 95.0576 20.584C94.4709 20.2467 93.8036 20.078 93.0556 20.078C92.3076 20.078 91.6329 20.2467 91.0316 20.584C90.4449 20.9213 89.9756 21.4053 89.6236 22.036C89.2862 22.652 89.1176 23.3633 89.1176 24.17C89.1176 24.9767 89.2862 25.6953 89.6236 26.326C89.9756 26.942 90.4449 27.426 91.0316 27.778C91.6329 28.1153 92.3076 28.284 93.0556 28.284ZM106.558 24.566L104.138 26.81V30H102.026V13.676H104.138V24.148L110.496 18.34H113.048L108.142 23.158L113.532 30H110.936L106.558 24.566ZM121.765 18.23C122.894 18.23 123.906 18.4793 124.801 18.978C125.696 19.4767 126.392 20.1733 126.891 21.068C127.404 21.9627 127.661 22.9967 127.661 24.17C127.661 25.3433 127.404 26.3847 126.891 27.294C126.392 28.1887 125.696 28.8853 124.801 29.384C123.906 29.8827 122.894 30.132 121.765 30.132C120.9 30.132 120.108 29.9633 119.389 29.626C118.67 29.2887 118.076 28.7973 117.607 28.152V30H115.583V13.676H117.695V20.1C118.164 19.484 118.751 19.022 119.455 18.714C120.159 18.3913 120.929 18.23 121.765 18.23ZM121.589 28.284C122.337 28.284 123.004 28.1153 123.591 27.778C124.192 27.426 124.662 26.942 124.999 26.326C125.351 25.6953 125.527 24.9767 125.527 24.17C125.527 23.3633 125.351 22.652 124.999 22.036C124.662 21.4053 124.192 20.9213 123.591 20.584C123.004 20.2467 122.337 20.078 121.589 20.078C120.856 20.078 120.188 20.2467 119.587 20.584C118.986 20.9213 118.516 21.4053 118.179 22.036C117.842 22.652 117.673 23.3633 117.673 24.17C117.673 24.9767 117.842 25.6953 118.179 26.326C118.516 26.942 118.986 27.426 119.587 27.778C120.188 28.1153 120.856 28.284 121.589 28.284ZM141.117 24.236C141.117 24.3973 141.102 24.61 141.073 24.874H131.613C131.745 25.9007 132.192 26.7293 132.955 27.36C133.732 27.976 134.693 28.284 135.837 28.284C137.23 28.284 138.352 27.8147 139.203 26.876L140.369 28.24C139.841 28.856 139.181 29.3253 138.389 29.648C137.612 29.9707 136.739 30.132 135.771 30.132C134.539 30.132 133.446 29.8827 132.493 29.384C131.54 28.8707 130.799 28.1593 130.271 27.25C129.758 26.3407 129.501 25.314 129.501 24.17C129.501 23.0407 129.75 22.0213 130.249 21.112C130.762 20.2027 131.459 19.4987 132.339 19C133.234 18.4867 134.238 18.23 135.353 18.23C136.468 18.23 137.458 18.4867 138.323 19C139.203 19.4987 139.885 20.2027 140.369 21.112C140.868 22.0213 141.117 23.0627 141.117 24.236ZM135.353 20.012C134.341 20.012 133.49 20.32 132.801 20.936C132.126 21.552 131.73 22.3587 131.613 23.356H139.093C138.976 22.3733 138.572 21.574 137.883 20.958C137.208 20.3273 136.365 20.012 135.353 20.012ZM146.074 20.298C146.441 19.6233 146.983 19.11 147.702 18.758C148.421 18.406 149.293 18.23 150.32 18.23V20.276C150.203 20.2613 150.041 20.254 149.836 20.254C148.692 20.254 147.79 20.5987 147.13 21.288C146.485 21.9627 146.162 22.9307 146.162 24.192V30H144.05V18.34H146.074V20.298ZM154.947 20.298C155.314 19.6233 155.856 19.11 156.575 18.758C157.294 18.406 158.166 18.23 159.193 18.23V20.276C159.076 20.2613 158.914 20.254 158.709 20.254C157.565 20.254 156.663 20.5987 156.003 21.288C155.358 21.9627 155.035 22.9307 155.035 24.192V30H152.923V18.34H154.947V20.298ZM172.587 18.34L166.933 31.166C166.434 32.354 165.847 33.19 165.173 33.674C164.513 34.158 163.713 34.4 162.775 34.4C162.203 34.4 161.645 34.3047 161.103 34.114C160.575 33.938 160.135 33.674 159.783 33.322L160.685 31.738C161.286 32.31 161.983 32.596 162.775 32.596C163.288 32.596 163.713 32.4567 164.051 32.178C164.403 31.914 164.718 31.452 164.997 30.792L165.371 29.978L160.223 18.34H162.423L166.493 27.668L170.519 18.34H172.587Z" fill="white"/>
            </svg>
            </Link>
          </Typography>
          <Box sx={{ flexGrow: 0, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
              sx={{float: "right"}}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {/* {pages.map((page) => (
                <MenuItem key={page.title} onClick={handleCloseNavMenu}>
                  <Link to={page.link} style={{ textDecoration: 'none' }}>
                    <Button
                      variant="text"
                      onClick={changeBtn}
                      sx={activeBtn === page.title ? {height:"ingerit", backgroundColor:"inherit", color:"white", outline: "none", fontSize:17, borderRadius:0, borderBottom:"1px solid", textDecoration: 'none'}: 
                      {height:"inherit", backgroundColor:"inherit", color:"white", outline: "none", fontSize:17, borderRadius:0, textDecoration: 'none'}}
                      value={page.title}
                    >
                      {
                        page.title
                      }
                  </Button>
                </Link>
                </MenuItem>
              ))} */}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' }}}>
            <Box sx={{ display: { xs: 'none', md: 'flex' }}}>
                {pages.map((page) => (
                  <Link to={page.link} style={{ textDecoration: 'none' }}>  
                    <Button
                        key={page.title}
                        onClick={changeBtn}
                        sx={activeBtn === page.title ? {height:"inherit", backgroundColor:"inherit", color:"white", outline: "none", fontSize:17, borderRadius:0, borderBottom:"1px solid", textDecoration: 'none'}: 
                        {height:"inherit", backgroundColor:"inherit", color:"white", outline: "none", fontSize:17, borderRadius:0, textDecoration: 'none'}}
                        value={page.title}  
                    >
                      {
                       page.title
                      }
                    </Button>
                  </Link>
                ))}
                <Link to='/signin' onClick={() => {
                  authService.removeCurrentUser()
                  window.window.location.href = "/signin";
                }} style={{ textDecoration: 'none' }}>  
                    <Button
                        key={'Log Out'}
                        onClick={changeBtn}
                        sx={activeBtn === 'Log Out' ? {height:"inherit", backgroundColor:"inherit", color:"white", outline: "none", fontSize:17, borderRadius:0, borderBottom:"1px solid", textDecoration: 'none'}: 
                        {height:"inherit", backgroundColor:"inherit", color:"white", outline: "none", fontSize:17, borderRadius:0, textDecoration: 'none'}}
                        value={'Log Out'}  
                    >
                      {
                       'Log Out'
                      }
                    </Button>
                  </Link>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
