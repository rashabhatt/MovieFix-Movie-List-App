import React, { useEffect, useState } from 'react'
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import ElevationScroll from '../feature/ElevationScroll'
import {
  DrawerBoxStyle,
  DrawerButtonStyle,
  DrawerLogoHeadingStyle,
  IconBoxStyle,
  LogoHeadingStyle,
  MenuBarStyle,
} from '../../styles/HeaderStyle'
import SearchIcon from '@mui/icons-material/Search'

interface HeaderProps {}

const pages = ['Movies', 'Series']

const Header: React.FC<HeaderProps> = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null)
  const [showBackground, setShowBackground] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      if (scrollPosition > 100) {
        setShowBackground(true)
      } else {
        setShowBackground(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  return (
    <>
      <ElevationScroll>
        <AppBar sx={{ backgroundColor: showBackground ? 'black' : 'transparent' }} elevation={0}>
          <Container maxWidth='xl'>
            <Toolbar disableGutters>
              <Typography
                variant='h4'
                noWrap
                component='a'
                sx={{ ...LogoHeadingStyle, '&:hover': { color: 'white' } }}
              >
                MOVIEFIX
              </Typography>
              <IconButton size='large' aria-label='search' color='inherit'>
                <SearchIcon />
              </IconButton>
              <Box sx={IconBoxStyle}>
                <IconButton
                  size='large'
                  aria-label='account of current user'
                  aria-controls='menu-appbar'
                  aria-haspopup='true'
                  onClick={handleOpenNavMenu}
                  color='inherit'
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id='menu-appbar'
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
                  sx={MenuBarStyle}
                >
                  {pages.map((page) => (
                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                      <Typography textAlign='center'>{page}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
              <Typography
                variant='h5'
                noWrap
                component='a'
                href='#app-bar-with-responsive-menu'
                sx={DrawerLogoHeadingStyle}
              >
                MOVIEFIX
              </Typography>
              <Box sx={DrawerBoxStyle}>
                {pages.map((page) => (
                  <Button key={page} onClick={handleCloseNavMenu} sx={DrawerButtonStyle}>
                    {page}
                  </Button>
                ))}
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </ElevationScroll>
    </>
  )
}

export default Header
