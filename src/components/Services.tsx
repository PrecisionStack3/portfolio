import { Box, Chip, Stack, Typography, useTheme } from '@mui/material'
import LayersOutlinedIcon from '@mui/icons-material/LayersOutlined'
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined'
import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined'
import { motion } from 'motion/react'
import { services } from '../data/portfolio'
import { Section } from './Section'

const icons = {
  layers: LayersOutlinedIcon,
  code: CodeOutlinedIcon,
  auto_awesome: AutoAwesomeOutlinedIcon,
}

export function Services() {
  const theme = useTheme()
  const isDark = theme.palette.mode === 'dark'

  return (
    <Section id="services" alt>
      <Stack spacing={6}>
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          justifyContent="space-between"
          alignItems={{ md: 'flex-end' }}
          spacing={2}
        >
          <Stack spacing={0.5}>
            <Typography
              variant="labelMono"
              sx={{
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: isDark ? 'tertiary.main' : 'tertiary.dark',
                fontWeight: 500,
              }}
            >
              Methodology & Disciplines
            </Typography>
            <Typography variant="h2" color="text.primary">
              Capabilities built for modern scale.
            </Typography>
          </Stack>
          <Typography variant="body2" color="text.secondary" sx={{ maxWidth: 360 }}>
            Bridging visual precision with engineering rigor. Designing high-density experiences
            that execute smoothly across browsers.
          </Typography>
        </Stack>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
            gap: 3,
          }}
        >
          {services.map((service, index) => {
            const Icon = icons[service.icon]
            return (
              <Box
                key={service.index}
                component={motion.article}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                whileHover={{ y: -2 }}
                sx={{
                  p: 3,
                  borderRadius: 3,
                  bgcolor: isDark ? 'surface.container' : 'background.paper',
                  border: isDark ? 'none' : '1px solid',
                  borderColor: 'divider',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  minHeight: 280,
                  transition: 'background-color 300ms ease, border-color 300ms ease',
                  '&:hover': {
                    bgcolor: isDark ? 'surface.containerHigh' : 'background.paper',
                    borderColor: isDark ? undefined : 'rgba(15,23,42,0.16)',
                  },
                }}
              >
                <Stack spacing={2}>
                  <Stack direction="row" justifyContent="space-between" alignItems="center">
                    <Typography variant="labelMono" color="text.secondary">
                      {service.index}
                    </Typography>
                    <Box
                      sx={{
                        width: 40,
                        height: 40,
                        borderRadius: 1,
                        bgcolor: isDark ? 'surface.containerHigh' : 'surface.containerLow',
                        display: 'grid',
                        placeItems: 'center',
                        color: 'text.primary',
                      }}
                    >
                      <Icon sx={{ fontSize: 20 }} />
                    </Box>
                  </Stack>
                  <Typography variant="h4" color="text.primary">
                    {service.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {service.description}
                  </Typography>
                </Stack>
                <Stack direction="row" flexWrap="wrap" gap={0.5} pt={3}>
                  {service.tags.map((tag) => (
                    <Chip
                      key={tag}
                      label={tag}
                      size="small"
                      sx={{
                        bgcolor: isDark ? 'surface.containerHighest' : 'surface.containerLow',
                        color: 'text.primary',
                        border: isDark ? 'none' : '1px solid',
                        borderColor: 'divider',
                      }}
                    />
                  ))}
                </Stack>
              </Box>
            )
          })}
        </Box>
      </Stack>
    </Section>
  )
}
