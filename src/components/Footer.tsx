import { Box, Stack, Typography, useTheme } from '@mui/material'
import TerminalIcon from '@mui/icons-material/Terminal'
import WorkOutlineIcon from '@mui/icons-material/WorkOutline'
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail'
import PaletteOutlinedIcon from '@mui/icons-material/PaletteOutlined'
import { contentMaxWidth } from '../theme'

const links = [
  { label: 'GitHub', href: 'https://github.com', icon: TerminalIcon },
  { label: 'LinkedIn', href: 'https://linkedin.com', icon: WorkOutlineIcon },
  { label: 'X/Twitter', href: 'https://x.com', icon: AlternateEmailIcon },
  { label: 'Dribbble', href: 'https://dribbble.com', icon: PaletteOutlinedIcon },
]

export function Footer() {
  const theme = useTheme()
  const isDark = theme.palette.mode === 'dark'

  return (
    <Box
      component="footer"
      sx={{
        width: '100%',
        py: 6,
        bgcolor: isDark ? 'surface.containerLowest' : 'background.paper',
        borderTop: isDark ? 'none' : '1px solid',
        borderColor: 'divider',
      }}
    >
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        alignItems="center"
        justifyContent="space-between"
        spacing={3}
        sx={{
          maxWidth: contentMaxWidth,
          mx: 'auto',
          px: { xs: 2.5, md: 4, lg: 8 },
        }}
      >
        <Stack spacing={0.5} alignItems={{ xs: 'center', md: 'flex-start' }}>
          <Typography variant="h4" color="text.primary" sx={{ fontWeight: 600 }}>
            Creative Technologist
          </Typography>
          <Typography variant="labelMono" color="text.secondary">
            © 2024 All rights reserved. Architected with digital craft.
          </Typography>
        </Stack>

        <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap justifyContent="center">
          {links.map((link) => {
            const Icon = link.icon
            return (
              <Box
                key={link.label}
                component="a"
                href={link.href}
                target="_blank"
                rel="noreferrer"
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 0.5,
                  color: 'text.secondary',
                  textDecoration: 'none',
                  fontFamily: '"JetBrains Mono", monospace',
                  fontSize: '0.75rem',
                  letterSpacing: '0.04em',
                  transition: 'color 200ms ease',
                  '&:hover': { color: 'text.primary' },
                }}
              >
                <Icon sx={{ fontSize: 16 }} />
                {link.label}
              </Box>
            )
          })}
        </Stack>
      </Stack>
    </Box>
  )
}
