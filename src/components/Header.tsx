import {
  AppBar,
  Box,
  Button,
  IconButton,
  Stack,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { profile } from '../data/portfolio'
import { useColorMode } from '../theme/ColorModeProvider'
import { contentMaxWidth } from '../theme'

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export function Header() {
  const theme = useTheme()
  const isDark = theme.palette.mode === 'dark'
  const { toggleColorMode } = useColorMode()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('About')

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        color="transparent"
        sx={{
          bgcolor: isDark ? 'rgba(18,19,20,0.8)' : 'rgba(255,255,255,0.9)',
          backdropFilter: 'blur(20px)',
          borderBottom: isDark ? 'none' : '1px solid',
          borderColor: 'divider',
          color: 'text.primary',
          boxShadow: isDark
            ? '0 1px 8px rgba(0,0,0,0.04)'
            : '0 1px 4px rgba(0,0,0,0.03)',
        }}
      >
        <Toolbar
          sx={{
            maxWidth: contentMaxWidth,
            width: '100%',
            mx: 'auto',
            px: { xs: 2.5, md: 4, lg: 8 },
            minHeight: 64,
            gap: 2,
          }}
        >
          <Stack
            component="a"
            href="#about"
            direction="row"
            alignItems="center"
            spacing={1}
            sx={{ textDecoration: 'none', color: 'inherit', mr: 'auto' }}
          >
            <Box
              sx={{
                width: 32,
                height: 32,
                borderRadius: 1,
                bgcolor: isDark ? 'surface.containerHigh' : 'primary.main',
                display: 'grid',
                placeItems: 'center',
              }}
            >
              <Typography
                variant="labelMono"
                sx={{ color: isDark ? 'primary.main' : 'primary.contrastText', fontWeight: 700 }}
              >
                {profile.initials}
              </Typography>
            </Box>
            <Typography
              variant="h4"
              sx={{ fontSize: '1.25rem', fontWeight: 600, color: 'text.primary' }}
            >
              Portfolio
            </Typography>
          </Stack>

          {!isMobile && (
            <Stack
              direction="row"
              spacing={0.5}
              sx={{
                p: 0.5,
                borderRadius: 2,
                bgcolor: isDark ? 'rgba(13,14,15,0.6)' : 'rgba(241,245,249,0.8)',
                border: isDark ? 'none' : '1px solid',
                borderColor: 'divider',
              }}
            >
              {navItems.map((item) => {
                const isActive = active === item.label
                return (
                  <Button
                    key={item.label}
                    href={item.href}
                    onClick={() => setActive(item.label)}
                    sx={{
                      minWidth: 0,
                      px: 2,
                      py: 1,
                      borderRadius: 1,
                      bgcolor: isActive
                        ? isDark
                          ? 'surface.containerHigh'
                          : 'background.paper'
                        : 'transparent',
                      color: isActive ? 'text.primary' : 'text.secondary',
                      boxShadow: isActive && !isDark ? 1 : 0,
                      fontWeight: isActive ? 600 : 500,
                      '&:hover': {
                        bgcolor: isDark ? 'surface.containerHigh' : 'rgba(255,255,255,0.6)',
                        color: 'text.primary',
                      },
                    }}
                  >
                    {item.label}
                  </Button>
                )
              })}
            </Stack>
          )}

          <Stack direction="row" alignItems="center" spacing={1.5}>
            <IconButton
              onClick={toggleColorMode}
              aria-label="Toggle color mode"
              size="small"
              sx={{
                borderRadius: 1,
                border: '1px solid',
                borderColor: 'divider',
                color: 'text.primary',
              }}
            >
              {isDark ? (
                <LightModeOutlinedIcon fontSize="small" />
              ) : (
                <DarkModeOutlinedIcon fontSize="small" />
              )}
            </IconButton>

            {!isMobile && (
              <Button
                href="#contact"
                variant="contained"
                color="primary"
                sx={{ display: { xs: 'none', sm: 'inline-flex' }, py: 1, px: 2 }}
              >
                Resume
              </Button>
            )}

            <Box
              sx={{
                width: 32,
                height: 32,
                borderRadius: '50%',
                bgcolor: isDark ? 'primary.main' : 'surface.containerLow',
                border: isDark ? 'none' : '1px solid',
                borderColor: 'divider',
                display: { xs: 'none', sm: 'grid' },
                placeItems: 'center',
                color: isDark ? 'primary.contrastText' : 'text.primary',
              }}
            >
              <PersonOutlineIcon sx={{ fontSize: 18 }} />
            </Box>

            {isMobile && (
              <IconButton
                onClick={() => setMenuOpen((v) => !v)}
                aria-label="Open menu"
                sx={{ color: 'text.primary' }}
              >
                {menuOpen ? <CloseIcon /> : <MenuIcon />}
              </IconButton>
            )}
          </Stack>
        </Toolbar>
      </AppBar>

      <AnimatePresence>
        {menuOpen && isMobile && (
          <Box
            component={motion.div}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            sx={{
              position: 'fixed',
              top: 64,
              left: 0,
              right: 0,
              zIndex: theme.zIndex.appBar - 1,
              bgcolor: isDark ? 'surface.container' : 'background.paper',
              borderBottom: '1px solid',
              borderColor: 'divider',
              p: 2,
            }}
          >
            <Stack spacing={1}>
              {navItems.map((item) => (
                <Button
                  key={item.label}
                  href={item.href}
                  onClick={() => {
                    setActive(item.label)
                    setMenuOpen(false)
                  }}
                  sx={{ justifyContent: 'flex-start', color: 'text.primary' }}
                >
                  {item.label}
                </Button>
              ))}
              <Button href="#contact" variant="contained" onClick={() => setMenuOpen(false)}>
                Resume
              </Button>
            </Stack>
          </Box>
        )}
      </AnimatePresence>
    </>
  )
}
