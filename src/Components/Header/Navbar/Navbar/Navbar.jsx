import React from 'react'
import AppBar from '@mui/material/AppBar'
import Container from '../../../Container/Container'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Tooltip from '@mui/material/Tooltip'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import MenuIcon from '@mui/icons-material/Menu'
import DarkMode from '../../../DarkMode/DarkMode'
import { useContext } from 'react'
import { AuthContext } from '../../../Authentication/Auth/AuthContext/AuthContext'
import { pages, setting } from './NavbarData/NavData'
import { NavLink, useNavigate } from 'react-router'
import useRole from '../../../Hooks/useRole'
import Logo from '../Logo/Logo'
import SmallDeviceLogo from '../Logo/SmallDeviceLogo'
const Navbar = () => {
  const navigate = useNavigate()
  const [anchorElNav, setAnchorElNav] = React.useState(null)
  const [anchorElUser, setAnchorElUser] = React.useState(null)
  const { theme, user } = useContext(AuthContext)
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget)
  }
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }
  const handelNavigate = () => {
    navigate('/signup')
  }
  const showPage = pages.filter(item => [1, 9, 3, 4].includes(item.id))
  const NewLink = user ? pages : showPage
  const [role] = useRole()
  const settingLink=setting.filter(item=> !item.role || item.role.includes(role))
  return (
    <nav>
      <Container>
        <AppBar
          // dark mode class
          sx={{
            backgroundColor: theme === 'light' ? 'white' : 'black',
            color: theme === 'light' ? 'black' : 'white',
            borderBottom: '1px solid #ddd',
          }}
          position="static"
        >
          {/* max width of navbar */}
          <Toolbar disableGutters>
            {/* large device */}
            <Logo></Logo>
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
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
                sx={{ display: { xs: 'block', md: 'none' } }}
              >
                {NewLink.map((page) => (
                  <MenuItem key={page.id} onClick={handleCloseNavMenu}>
                    <NavLink to={page.path}>
                      {' '}
                      <Typography
                        sx={{
                          textAlign: 'center',
                          display: 'inline-flex',
                          alignItems: 'center',
                        }}
                      >
                        {page.icon}
                        {page.Name}
                      </Typography>
                    </NavLink>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            {/* design for small device */}

            <SmallDeviceLogo></SmallDeviceLogo>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: 'none', md: 'flex', justifyContent: 'center' },
              }}
            >
              {NewLink.map((page) => (
                <NavLink to={page.path} key={page.id}>
                  {' '}
                  <Button
                    onClick={handleCloseNavMenu}
                    sx={{
                      my: 2,
                      color: theme === 'light' ? 'black' : 'white',
                      display: 'inline-flex',
                      alignItems: 'center',
                      fontSize: 12,
                    }}
                  >
                    {page.icon}
                    {page.Name}
                  </Button>
                </NavLink>
              ))}
            </Box>
            <Box sx={{ mr: 0.3 }}>
              <DarkMode></DarkMode>
            </Box>
            {/* if user thake then sow blew the component otherwise show login page */}
            {user ? (
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings" arrow>
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar
                      referrerPolicy="no-referrer"
                      alt={user?.photoURL}
                      src={user?.photoURL}
                    />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: '45px' }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {settingLink.map((setting) => (
                    <MenuItem key={setting.id} onClick={handleCloseUserMenu}>
                      <NavLink to={setting.path}>
                        <Typography
                          sx={{
                            textAlign: 'center',
                            display: 'inline-flex',
                            alignItems: 'center',
                          }}
                        >
                          {setting.icon}
                          {setting.Name}
                        </Typography>
                      </NavLink>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            ) : (
              <Button onClick={handelNavigate} variant="contained">
                Register
              </Button>
            )}
          </Toolbar>
        </AppBar>
      </Container>
    </nav>
  )
}

export default Navbar
