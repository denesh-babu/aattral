import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { Button } from '@mui/material';

const navItems = [
  {
    link:'/',
    name:'Home'
  },
  {
    link:'about',
    name:'About'
  },
  {
    link:'service',
    name:'Service'
  },
  {
    link:'contact',
    name:'Contact'
  },
  
]

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
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
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function SearchAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar  sx={{backgroundColor:'transparent'}}>
        <Toolbar  sx={{backgroundColor:'transparent'}}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            Aattral
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
           
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            {navItems.map((item,index) => (
              <Button key={index} href={item.link} sx={{ color: '#bbb',textTransform:'none' }}>
                {item.name}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}





// ,'& .MuiInput-root':{color:'white'},'& label.Mui-focused':{color:'white'}, '& .MuiOutlinedInput-root':{"&:hover fieldset":{borderColor:'white'},"&.Mui-focused fieldset":{borderColor:'white'}}, '& .MuiOutlinedInput-notchedOutline': { borderColor: 'white' }, '& .MuiInputLabel-root': { color: 'white' } 
























// import * as React from 'react';
// import PropTypes from 'prop-types';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import CssBaseline from '@mui/material/CssBaseline';
// import Divider from '@mui/material/Divider';
// import Drawer from '@mui/material/Drawer';
// import IconButton from '@mui/material/IconButton';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemText from '@mui/material/ListItemText';
// import MenuIcon from '@mui/icons-material/Menu';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
// import { Outlet } from 'react-router-dom';

// const drawerWidth = 240;
// // const navItems = ['Home', 'About', 'Service','Case Study','Blog','Contact Us'];

// const navItems = [
//   {
//     link:'/',
//     name:'Home'
//   },
//   {
//     link:'about',
//     name:'About'
//   },
//   {
//     link:'service',
//     name:'Service'
//   },
//   {
//     link:'case-study',
//     name:'Case Study'
//   },
//   {
//     link:'blog',
//     name:'Blog'
//   },
//   {
//     link:'contact-us',
//     name:'Contact Us'
//   },
  
// ]

// function DrawerAppBar(props) {
//   const { window } = props;
//   const [mobileOpen, setMobileOpen] = React.useState(false);

//   const handleDrawerToggle = () => {
//     setMobileOpen((prevState) => !prevState);
//   };

//   const drawer = (
//     <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
//       {/* <Typography variant="h6" sx={{ my: 0 ,color:'#fff',fontWeight:'600',fontSize:'1.5rem'}}>
//         LOGO
//       </Typography> */}
    
//       <Divider />
//       <List>
//         {navItems.map((item,index) => (
//           <ListItem  key={index} disablePadding>
//             <ListItemButton href={item.link} sx={{ textAlign: 'center',color:'#fff' }}>
//               <ListItemText primary={item.name} />
//             </ListItemButton>
//           </ListItem>
//         ))}
//       </List>
//       <Box sx={{width:'100%',height:'5rem',display:'flex',justifyContent:'center',alignItems:'center',backgroundColor:''}}>
//       <Button  sx={{ width:['6rem'],height:'2rem',background:'linear-gradient(92.06deg, #FC00FF 1.54%, #00DBDE 98.63%)',borderRadius:'24px',color:'white',fontSize:'0.8rem',display:['flex'],gap:'0.5rem',textTransform:'none'}}><ForumOutlinedIcon sx={{color:'white',width:'0.8rem',height:'0.8rem'}}/>Lets Talk</Button>
//       </Box>
     
//     </Box>
//   );

//   const container = window !== undefined ? () => window().document.body : undefined;

//   return (
//     <Box sx={{ display: 'flex',width:'100%' }}>
//       <CssBaseline />
//       <AppBar component="nav" sx={{width:'100%',backgroundColor:"#0d0c0d"}} >
//         <Toolbar sx={{display:'flex',justifyContent:'space-between'}}>
//           {/* <IconButton
//             color="inherit"
//             aria-label="open drawer"
//             edge="start"
//             onClick={handleDrawerToggle}
//             sx={{ mr: 2, display: { md: 'none' } }}
//           >
//             <MenuIcon />
//           </IconButton> */}
//           {/* <Typography
           
//           >
//             LOGO
//           </Typography> */}
//           <Box sx={{width:['35%','25%','17%','15%','10%'],height:['2rem','2.5rem','2.5rem','2.5rem'],backgroundImage:'url(/logo.png)',backgroundPosition:'center',backgroundSize:'cover',backgroundRepeat:'no-repeat'}}>

//           </Box>
          
//           <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
//             {navItems.map((item,index) => (
//               <Button key={index} href={item.link} sx={{ color: '#bbb',textTransform:'none' }}>
//                 {item.name}
//               </Button>
//             ))}
//           </Box>
          
//             <Button  sx={{ width:['7rem','10rem'],background:'linear-gradient(92.06deg, #FC00FF 1.54%, #00DBDE 98.63%)',borderRadius:'24px',color:'white',fontSize:'0.8rem',display:['none','none','flex'],gap:'0.5rem',textTransform:'none'}}><ForumOutlinedIcon sx={{color:'white',width:'1rem',height:'1rem'}}/>Lets Talk</Button>
          
//             <IconButton
//             color="inherit"
//             aria-label="open drawer"
//             edge="start"
//             onClick={handleDrawerToggle}
//             sx={{ mr: 0, display: { md: 'none' } }}
//           >
//             <MenuIcon />
//           </IconButton>
//         </Toolbar>
//       </AppBar>
//       <Box component="nav">
//         <Drawer
//           container={container}
//           variant="temporary"
//           open={mobileOpen}
//           onClose={handleDrawerToggle}
//           ModalProps={{
//             keepMounted: true, // Better open performance on mobile.
//           }}
//           sx={{
//             display: { xs: 'block', md: 'none' },
//             '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth ,backgroundColor:'black'},
//           }}
//         >
//           {drawer}
//         </Drawer>
//       </Box>
//       <Box component="main" sx={{ p: 0, width:'100%' }}> 

//         <Toolbar/>
//        <Outlet/>
      
//       </Box>
//     </Box>
//   );
// }

// DrawerAppBar.propTypes = {
//   /**
//    * Injected by the documentation to work in an iframe.
//    * You won't need it on your project.
//    */
//   window: PropTypes.func,
// };

// export default DrawerAppBar;