import React from 'react';
import {fade, useTheme, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import AccountBoxSharpIcon from '@material-ui/icons/AccountBoxSharp';
import {Link} from 'react-router-dom'
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DescriptionIcon from '@material-ui/icons/Description';


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    flexGrow: 1,
    [theme.breakpoints.up('sm')]: {
      display: 'block',

    },
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
     
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
   position:'fixed'
   
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  
  },
  drawerPaper: {
    width: drawerWidth,
    background:"rgb(141, 16, 16)",
    color:"white"
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
    height:2,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
   
    marginTop:-115,
  
   
    
  },
  
  contentShift: {
    
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
     
    }),
    
   background:"black",
   opacity:"1"
   
      

   
  },
}));

export default function PrimarySearchAppBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  /* LOGEGD IN information
  var user_data = localStorage.getItem('user');
  user_data = JSON.parse(user_data);
  var username = user_data.username;*/
  
  
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };


  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
     <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
     <MenuItem onClick={handleMenuClose}>My account</MenuItem>
      
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
     <MenuItem>
        <IconButton  color="inherit">
          <Badge color="secondary">
        <AccountBoxSharpIcon/>
          </Badge>
        </IconButton>
       <Link style={{listStyle:"none",color:"black",fontSize:"16px"}} to="/Register">Join Now</Link>
     </MenuItem>
     <MenuItem>
        <IconButton  color="inherit">
          <Badge color="secondary">
        <AccountBoxSharpIcon/>
          </Badge>
        </IconButton>
       <Link style={{listStyle:"none",color:"black",fontSize:"16px"}} to="Login">Login</Link>
     </MenuItem>
     <MenuItem>
        <IconButton  color="inherit">
          <Badge color="secondary">
            <DescriptionIcon/>
       </Badge>
        </IconButton>
       <Link style={{listStyle:"none",color:"black",fontSize:"16px"}} to="/">UploadTest</Link>
     </MenuItem>
     

     
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <div style={{marginLeft:"-20px",marginTop:"-10px",width:"102.8%"}} className={classes.grow} >
      <AppBar  position="static" style={{ background: '#000000' }}
       className={clsx(classes.appBar, {
        [classes.appBarShift]: open,
      })}>
        <Toolbar>
         
        <IconButton position="static" style={{marginLeft:"10px",marginTop:"6px", width:"30px", height:"30px",backgroundColor:"rgb(141, 16, 16)"}}
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
         
         
         
        
          <div className={classes.grow} />
          <div style={{marginTop:"20px"}} className={classes.sectionDesktop}>
          
          <IconButton  color="inherit">
              <Badge  color="secondary">
            
              <Link style={{display:"flex",alignItems:"center",justifyContent:"center",height:"36px",lineHeight:"0",
               paddingTop:"0",paddingLeft:"1.0em",paddingRight:"1.0em", textDecoration:"none",background:"rgb(141, 16, 16)",color:"white",fontSize:"18px",fontWeight:"bold"}} to ="/Register">Join Now</Link>
              </Badge>
            </IconButton>
            <IconButton  color="inherit">
              <Badge  color="secondary">
              <Link style={{ textDecoration:"none",color:"white",fontSize:"18px",fontWeight:"bold"}} to ="/Login">Login</Link>
              </Badge>
            </IconButton>
            <IconButton  color="inherit">
              <Badge  color="secondary">
              <Link style={{ textDecoration:"none",color:"white",fontSize:"18px",fontWeight:"bold"}} to ="/uploadTest">UploadTest</Link>
              </Badge>
            </IconButton>
          
          <IconButton  color="inherit">
              <Badge  color="secondary">
              <Link style={{ textDecoration:"none",color:"white",fontSize:"18px",fontWeight:"bold"}} to ="/">Home</Link>
              </Badge>
            </IconButton>
            <IconButton  color="inherit">
              <Badge  color="secondary">
              <Link style={{ textDecoration:"none",color:"white",fontSize:"18px",fontWeight:"bold"}} to ="/">ContactUs</Link>
              </Badge>
            </IconButton>
            
            <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
           
          
           
          
           
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
      <Drawer
        className={classes.drawer}
        style={{}}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div  className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <main 
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div  className={classes.drawerHeader} />
      
         
      
      </main>
    </div>
  );
}
