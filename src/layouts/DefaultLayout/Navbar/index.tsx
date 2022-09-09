import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import GroupIcon from '@mui/icons-material/Group';
import AnnouncementIcon from '@mui/icons-material/Announcement';
import CustomModalDialog from '../../../components/Default/Main/customComponents/CustomModalDialog';
import { Link, useNavigate } from 'react-router-dom';
import { typedSelector } from '../../../redux/services/useTypedSelector';
import GroupsIcon from '@mui/icons-material/Groups';
import { useCookies } from 'react-cookie';
import { Logout } from '../../../actions/auth/LogoutAction';
import { useDispatch } from 'react-redux';
import { MESSAGE_TYPES } from '../../../redux/reducers/types/messageTypes';
import { IUserTypes } from '../../../redux/reducers/types/userTypes';
import { GROUP_TYPES } from '../../../redux/reducers/types/groupsTypes';
import { POST_TYPES } from '../../../redux/reducers/types/postTypes';
import LoginIcon from '@mui/icons-material/Login';
import HowToRegIcon from '@mui/icons-material/HowToReg';


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
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
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

const Navbar: React.FC = () => {
  const user = typedSelector(user => user.user);
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    React.useState<null | HTMLElement>(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const [cookies, setCookie, removeCookie] = useCookies(['token']);
  var dispatch = useDispatch();


  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      {user.id == 0 &&
        <Link to="/auth/login" target="_top" style={{
          color: '#000'
        }}>
          <MenuItem onClick={handleMenuClose}>
            Вхід
          </MenuItem>
        </Link>}
      {user.id == 0 &&
        <Link to="/auth/register" target="_top" style={{
          color: '#000'
        }}>
          <MenuItem onClick={handleMenuClose}>
            Реєстрація
          </MenuItem>
        </Link>
      }
      {user.id != 0 &&
        <Link to="/profile" target="_top" style={{
          color: '#000'
        }}>
          <MenuItem onClick={handleMenuClose}>
            Профіль
          </MenuItem>
        </Link>
      }
      {user.id != 0 &&
        <MenuItem onClick={() => {
          handleMenuClose();

          dispatch({
            type: MESSAGE_TYPES.CLEAR_MESSAGES
          });

          dispatch({
            type: IUserTypes.CLEAR_USER
          });

          dispatch({
            type: GROUP_TYPES.CLEAR_GROUPS
          });

          dispatch({
            type: POST_TYPES.CLEAR_POSTS
          })

          Logout(removeCookie, cookies.token != null);
        }}>Вийти</MenuItem>}
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      {user.id != 0 &&
        <Link to="/groups" target="_top" style={{
          color: '#000'
        }}>
          <MenuItem>
            <IconButton size="large" color="inherit">
              <GroupIcon />
            </IconButton>
            <p>Групи</p>
          </MenuItem>
        </Link>}
      {user.id != 0 &&
        <Link to="/news" target="_top" style={{
          color: '#000'
        }}>
          <MenuItem>

            <IconButton
              size="large"
              color="inherit"
            >
              <AnnouncementIcon />
            </IconButton>
            <p>Новини</p>
          </MenuItem>
        </Link>
      }
      {user.id != 0 &&

        <Link to="/profile" target="_top"
          style={{
            color: '#000'
          }}>
          <MenuItem>
            <IconButton
              size="large"
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <p>Профіль</p>
          </MenuItem>
        </Link>
      }
      {user.id == 0 &&
        <Link to="/auth/login" target="_top"
          style={{
            color: '#000'
          }}>
          <MenuItem>
            <IconButton
              size="large"
              color="inherit"
            >
              <LoginIcon />
            </IconButton>
            <p>Авторизуватися</p>
          </MenuItem>
        </Link>
      }
      {user.id == 0 &&

        <Link to="/auth/register" target="_top"
          style={{
            color: '#000'
          }}>
          <MenuItem >
            <IconButton
              size="large"
              color="inherit"
            >
              <HowToRegIcon />
            </IconButton>
            <p>Зареєструватися</p>
          </MenuItem>
        </Link>
      }
    </Menu>
  );

  const [modalOpen, setModalOpen] = React.useState(false);

  const onSearchClickHandler = () => {
    setModalOpen(true);
  }


  return (<> <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar>
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{ display: { xs: 'none', sm: 'block' } }}
        >
          VOLONTER.IO
        </Typography>
        <Search onFocus={onSearchClickHandler}>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Пошук групи..."
            inputProps={{ 'aria-label': 'search' }}
          />
        </Search>
        <Box sx={{ flexGrow: 1 }} />
        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          <IconButton
            onClick={() => {
              let newLink = document.getElementById("toNewsLink") as HTMLAnchorElement;
              newLink.click(); }}
            size="large" aria-label="show 4 new mails" color="inherit">
            <MailIcon />
          </IconButton>
          <IconButton
            onClick={() => {
              let newLink = document.getElementById("toGroupsLink") as HTMLAnchorElement;
              newLink.click(); }}
            size="large"
            aria-label="show 17 new notifications"
            color="inherit"
          >
            <GroupsIcon />
          </IconButton>
          <IconButton
            size="large"
            edge="end"
            aria-label="account of current user"
            aria-controls={menuId}
            aria-haspopup="true"
            onClick={handleProfileMenuOpen}
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
        </Box>
        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
          <IconButton
            size="large"
            aria-label="show more"
            aria-controls={mobileMenuId}
            aria-haspopup="true"
            onClick={handleMobileMenuOpen}
            color="inherit"
          >
            <MoreIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
    {renderMobileMenu}
    {renderMenu}
  </Box>
    {modalOpen && <CustomModalDialog visibleFunc={setModalOpen} isVisible={modalOpen} />}

    <Link style={{
      display: 'none'
    }} to="/groups" target="_top" id='toGroupsLink'/>
    <Link style={{
      display: 'none'
    }}  to="/news" target="_top" id='toNewsLink'/>

  </>);
}

export default Navbar;