import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import { Container, IconButton, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import img from "../../images/myntralogo.PNG"
 
 
 
 
const Header = () => {
 
    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: 'rgb(245,245,246)',
        // marginLeft:"12px",
       
        // marginRight:'10%',
         minWidth: '25vw',

        color: 'grey',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(7),

            width: 'auto',
        },
    }));
 
    const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor:'grey'
    }));
 
    const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        width: '100%',
        '& .MuiInputBase-input': {
            padding: theme.spacing(1, 1, 1, 1),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(3)})`,
            transition: theme.transitions.create('width'),
        },
    }));
 
    const LogoBox = styled(Box)(({ theme }) => ({
        marginRight:'1rem',
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        },
    }))
 
    const InsteadLogo = styled(Box)(({ theme }) => ({
        [theme.breakpoints.up('sm')]: {
            display: 'none'
        },
    }))
 
    const Rightbox = styled(Box)(({theme})=>({
        display:'flex',position:'absolute',right:'30px',
        [theme.breakpoints.down('sm')]: {
            position:'absolute',
            right:'5px'
        },
    }))
 
    return (
        <>
            <Box sx={{ flexGrow: 1, position: 'fixed', top: '0px', zIndex: '7', width: '100vw' }}>
                <AppBar sx={{
                    width: '100%',
                    backgroundColor: 'white', color: 'black', height: '80px', justifyContent: 'center', boxShadow: '0px 2px 8px rgb(222, 222, 222)',
                    display: { xs: 'flex', md: 'flex' }
                }} position="static">
                    <Toolbar>
                        <IconButton
 
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 1, display: { xs: 'flex', md: 'none' }, }}
                        >
                            <ArrowBackIcon />
                        </IconButton>
                        <LogoBox >
 
                            <img className='myntralogo' src={img} alt="" />
                        </LogoBox>
                        <InsteadLogo>
                            <Typography variant='h6' sx={{fontSize:'14px',minWidth:'100px'}}>
                                Men T-Shirt
                            </Typography>
                            <Typography component="p" sx={{fontSize:'8px',color:'grey'}}>
                                140148 items
                            </Typography>
                        </InsteadLogo>
 
                        <Typography
                            variant="h6" component="div"
                            sx={{
                                mr: 3,
                                display: { xs: 'none', md: 'flex' },
                                fontWeight: 600,
                                fontSize: '12px',
                                letterSpacing: '.1rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            MEN
                        </Typography>
                        <Typography
                            variant="h6"
 
                            // noWrap
                            component="a"
                            href="#app-bar-with-responsive-menu"
                            sx={{
                                mr: 3,
                                display: { xs: 'none', md: 'flex' },
                         
                                fontWeight: 600,
                                fontSize: '12px',
                                letterSpacing: '.1rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            WOMEN
                        </Typography>
                        <Typography
                            variant="h6"
                            // noWrap
                            component="a"
                            href="#app-bar-with-responsive-menu"
                            sx={{
                                mr: 3,
                                display: { xs: 'none', md: 'flex' },
                           
                                fontWeight: 600,
                                fontSize: '12px',
                                letterSpacing: '.1rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            KIDS
                        </Typography>
                        <Typography
                            variant="h6"
                            // noWrap
                            component="a"
                            href="#app-bar-with-responsive-menu"
                            sx={{
                                mr: 3,
                                display: { xs: 'none', md: 'flex' },
                         
                                fontWeight: 600,
                                fontSize: '12px',
                                letterSpacing: '.1rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            HOME & LIVING
                        </Typography>
                        <Typography
                            variant="h6"
                            // noWrap
                            component="a"
                            href="#app-bar-with-responsive-menu"
                            sx={{
                                mr: 3,
                                display: { xs: 'none', md: 'flex' },
                             
                                fontWeight: 600,
                                fontSize: '12px',
                                letterSpacing: '.1rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            BEAUTY
                        </Typography>
                        <Typography
                            variant="h6"
                            component="a"
                            href="#app-bar-with-responsive-menu"
                            sx={{
                                mr: 3,
                                display: { xs: 'none', md: 'flex' },
                           
                                fontWeight: 600,
                                fontSize: '12px',
                                letterSpacing: '.1rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            STUDIO<sup className='mens'>NEW</sup>
                        </Typography>
 
                        <Search className='side' sx={{ fontSize: '12px', color: 'rgb(147,148,163)', display: { xs: 'none', md: 'flex', } }}>
                            <SearchIconWrapper>
                                <SearchIcon />
                            </SearchIconWrapper>
                            <StyledInputBase sx={{fontSize:'14px', color: 'rgb(57,56,56)'}}
 
                                placeholder="Search for products,brands and more......"
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </Search>
                        <Rightbox>
                            <MenuItem sx={{
                                flexDirection: 'column', ml: '1rem',padding:'8px'
                            }}>
                                <PermIdentityIcon sx={{paddingRight:'2px',paddingLeft:'2px',display:{xs:'none',md:'flex',color:'grey',fontSize:'28px'}}}/>
                                <SearchIcon sx={{paddingRight:'2px',paddingLeft:'2px',display:{xs:'flex',md:'none'}}}/>
                                <Typography sx={{ display: { xs: 'none', md: 'flex',fontSize:'10px',fontWeight:'bold' } }}>PROFILE</Typography>
                            </MenuItem>
                            <MenuItem sx={{
                                flexDirection: 'column',padding:'8px'
                            }}>
                                <FavoriteBorderIcon sx={{paddingRight:'2px',paddingLeft:'2px',color:'grey',fontSize:'28px'}}/>
                                <Typography sx={{ display: { xs: 'none', md: 'flex',fontSize:'10px',fontWeight:'bold' } }}>WISHLIST</Typography>
                            </MenuItem>
                            <MenuItem sx={{
                                flexDirection: 'column',padding:'8px'
                            }} >
                                <WorkOutlineIcon sx={{paddingRight:'2px',paddingLeft:'2px',marginRight:'2px',marginLeft:'2px',color:'grey',fontSize:'28px'}}/>
                                <Typography sx={{ display: { xs: 'none', md: 'flex',fontSize:'10px',fontWeight:'bold' } }}>BAG</Typography>
                            </MenuItem>
                        </Rightbox>
 
 
 
                    </Toolbar>
                </AppBar>
            </Box>
 
 
            
        </>
 
    )
}
 
export default Header;


