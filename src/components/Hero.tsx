import { Box, Button, Stack, Typography, useTheme } from '@mui/material'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'
import NorthEastIcon from '@mui/icons-material/NorthEast'
import VerifiedIcon from '@mui/icons-material/Verified'
import { motion } from 'motion/react'
import { profile } from '../data/portfolio'
import { Section } from './Section'

export function Hero() {
  const theme = useTheme()
  const isDark = theme.palette.mode === 'dark'

  return (
    <Section id="about" sx={{ pt: { xs: 3, lg: 4 }, pb: { xs: 6, lg: 10 } }}>
      <Box
        sx={{
          position: 'absolute',
          top: -96,
          left: '50%',
          transform: 'translateX(-50%)',
          width: 720,
          height: 360,
          borderRadius: '50%',
          bgcolor: isDark ? 'rgba(49,49,192,0.2)' : 'rgba(191,219,254,0.4)',
          filter: 'blur(120px)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          top: '33%',
          right: -80,
          width: 420,
          height: 320,
          borderRadius: '50%',
          bgcolor: isDark ? 'rgba(111,251,190,0.1)' : 'rgba(167,243,208,0.3)',
          filter: 'blur(100px)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', lg: '8fr 4fr' },
          gap: 3,
          alignItems: 'center',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <Stack
          component={motion.div}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          spacing={3}
          alignItems="flex-start"
        >
          <Stack
            direction="row"
            alignItems="center"
            spacing={1}
            sx={{
              px: 2,
              py: 0.75,
              borderRadius: 999,
              bgcolor: isDark ? 'rgba(41,42,43,0.8)' : 'tertiary.light',
              border: isDark ? 'none' : '1px solid',
              borderColor: isDark ? 'transparent' : 'rgba(167,243,208,1)',
              backdropFilter: 'blur(12px)',
            }}
          >
            <Box
              sx={{
                width: 8,
                height: 8,
                borderRadius: '50%',
                bgcolor: isDark ? 'tertiary.main' : 'tertiary.main',
                animation: 'pulse 2s ease-in-out infinite',
                '@keyframes pulse': {
                  '0%, 100%': { opacity: 1 },
                  '50%': { opacity: 0.45 },
                },
              }}
            />
            <Typography
              variant="labelMono"
              sx={{
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: isDark ? 'text.secondary' : 'tertiary.dark',
                fontWeight: 500,
              }}
            >
              {profile.availability}
            </Typography>
          </Stack>

          <Typography variant="h1" color="text.primary" sx={{ maxWidth: 900 }}>
            {profile.headline}
          </Typography>

          <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 640 }}>
            I am{' '}
            <Box component="span" sx={{ color: 'text.primary', fontWeight: 600 }}>
              {profile.name}
            </Box>
            , a {profile.title} with 8+ years building resilient design systems, immersive 3D web
            spaces, and production-grade architectures.
          </Typography>

          <Stack direction="row" flexWrap="wrap" gap={2} pt={0.5}>
            <Button
              href="#projects"
              variant="contained"
              color="primary"
              endIcon={<ArrowDownwardIcon sx={{ fontSize: 16 }} />}
            >
              View Projects
            </Button>
            <Button
              href="#contact"
              variant="contained"
              endIcon={<NorthEastIcon sx={{ fontSize: 16 }} />}
              sx={{
                bgcolor: isDark ? 'surface.containerHigh' : 'background.paper',
                color: 'text.primary',
                border: isDark ? 'none' : '1px solid',
                borderColor: 'divider',
                '&:hover': {
                  bgcolor: isDark ? 'surface.containerHighest' : 'surface.containerLow',
                },
              }}
            >
              Get in Touch
            </Button>
          </Stack>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: { xs: 2, md: 4 },
              pt: 2,
              width: '100%',
              maxWidth: 560,
              borderTop: isDark ? 'none' : '1px solid',
              borderColor: 'divider',
            }}
          >
            {profile.metrics.map((metric) => (
              <Stack key={metric.label} spacing={0.5} pt={isDark ? 0 : 1}>
                <Typography variant="h3" color="text.primary" sx={{ fontWeight: 700 }}>
                  {metric.value}
                </Typography>
                <Typography
                  variant="labelMono"
                  color="text.secondary"
                  sx={{ textTransform: 'uppercase', letterSpacing: '0.08em' }}
                >
                  {metric.label}
                </Typography>
              </Stack>
            ))}
          </Box>
        </Stack>

        <Box
          component={motion.div}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
          sx={{
            display: 'flex',
            justifyContent: { xs: 'center', lg: 'flex-end' },
            mt: { xs: 2, lg: 0 },
          }}
        >
          <Box
            sx={{
              position: 'relative',
              width: { xs: 288, sm: 320, lg: 384 },
              height: { xs: 288, sm: 320, lg: 384 },
            }}
          >
            <Box
              sx={{
                position: 'absolute',
                inset: -4,
                borderRadius: 3,
                background: isDark
                  ? 'linear-gradient(135deg, rgba(49,49,192,0.4), rgba(111,251,190,0.2), rgba(57,57,58,0.2))'
                  : 'linear-gradient(135deg, rgba(191,219,254,0.5), rgba(167,243,208,0.3))',
                filter: 'blur(24px)',
                opacity: 0.6,
              }}
            />
            <Box
              sx={{
                position: 'relative',
                width: '100%',
                height: '100%',
                borderRadius: 3,
                overflow: 'hidden',
                bgcolor: 'surface.container',
                boxShadow: 6,
                '&:hover img': {
                  filter: 'grayscale(0)',
                },
              }}
            >
              <Box
                component="img"
                src="/images/headshot.webp"
                alt={`${profile.name} - ${profile.title}`}
                width={384}
                height={384}
                fetchPriority="high"
                decoding="async"
                sx={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  filter: 'grayscale(1) contrast(1.05)',
                  transition: 'filter 700ms ease-out',
                }}
              />
              <Box
                sx={{
                  position: 'absolute',
                  bottom: 0,
                  insetInline: 0,
                  p: 2,
                  background: isDark
                    ? 'linear-gradient(to top, #0d0e0f, rgba(13,14,15,0.8), transparent)'
                    : 'linear-gradient(to top, rgba(15,23,42,0.85), rgba(15,23,42,0.4), transparent)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <Box>
                  <Typography
                    variant="h4"
                    sx={{ color: '#fff', display: 'block', lineHeight: 1, fontWeight: 600 }}
                  >
                    {profile.name}
                  </Typography>
                  <Typography
                    variant="labelMono"
                    sx={{ color: isDark ? 'tertiary.main' : 'rgba(167,243,208,1)' }}
                  >
                    {profile.location}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    width: 32,
                    height: 32,
                    borderRadius: '50%',
                    bgcolor: isDark ? 'surface.containerHighest' : 'rgba(255,255,255,0.2)',
                    display: 'grid',
                    placeItems: 'center',
                  }}
                >
                  <VerifiedIcon sx={{ fontSize: 16, color: isDark ? 'tertiary.main' : '#6ee7b7' }} />
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Section>
  )
}
