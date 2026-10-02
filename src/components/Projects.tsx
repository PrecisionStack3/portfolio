import { useMemo, useState } from 'react'
import {
  Box,
  Button,
  Chip,
  Dialog,
  DialogContent,
  IconButton,
  Stack,
  Typography,
  useTheme,
} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined'
import { AnimatePresence, motion } from 'motion/react'
import { filters, projects, type Project } from '../data/portfolio'
import { Section } from './Section'

export function Projects() {
  const theme = useTheme()
  const isDark = theme.palette.mode === 'dark'
  const [filter, setFilter] = useState<(typeof filters)[number]['id']>('all')
  const [selected, setSelected] = useState<Project | null>(null)

  const visible = useMemo(
    () => (filter === 'all' ? projects : projects.filter((p) => p.category === filter)),
    [filter],
  )

  return (
    <>
      <Section id="projects">
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
                Curated Archive
              </Typography>
              <Typography variant="h2" color="text.primary">
                Selected Case Studies
              </Typography>
            </Stack>

            <Stack
              direction="row"
              flexWrap="wrap"
              spacing={0.5}
              useFlexGap
              sx={{
                p: 0.5,
                borderRadius: 2,
                bgcolor: isDark ? 'surface.containerLow' : 'surface.containerLow',
                border: isDark ? 'none' : '1px solid',
                borderColor: 'divider',
              }}
            >
              {filters.map((item) => {
                const active = filter === item.id
                return (
                  <Button
                    key={item.id}
                    onClick={() => setFilter(item.id)}
                    sx={{
                      minWidth: 0,
                      px: 2,
                      py: 0.75,
                      borderRadius: 1,
                      bgcolor: active ? 'primary.main' : 'transparent',
                      color: active ? 'primary.contrastText' : 'text.secondary',
                      fontFamily: '"JetBrains Mono", monospace',
                      fontSize: '0.75rem',
                      letterSpacing: '0.04em',
                      boxShadow: active && !isDark ? 1 : 0,
                      '&:hover': {
                        bgcolor: active ? 'primary.main' : 'transparent',
                        color: 'text.primary',
                      },
                    }}
                  >
                    {item.label}
                  </Button>
                )
              })}
            </Stack>
          </Stack>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
              gap: 3,
            }}
          >
            <AnimatePresence mode="popLayout">
              {visible.map((project) => (
                <Box
                  key={project.id}
                  component={motion.div}
                  layout
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.35 }}
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2,
                    p: 2,
                    borderRadius: 3,
                    bgcolor: isDark ? 'surface.container' : 'background.paper',
                    border: isDark ? 'none' : '1px solid',
                    borderColor: 'divider',
                    transition: 'all 300ms ease',
                    '&:hover': {
                      bgcolor: isDark ? 'surface.containerHigh' : 'background.paper',
                      borderColor: isDark ? undefined : 'rgba(15,23,42,0.18)',
                      boxShadow: isDark ? undefined : 4,
                      '& .project-overlay': { opacity: 1 },
                      '& .project-image': { transform: 'scale(1.05)' },
                      '& .project-title': {
                        color: isDark ? 'tertiary.main' : 'secondary.main',
                      },
                    },
                  }}
                >
                  <Box
                    sx={{
                      position: 'relative',
                      width: '100%',
                      height: { xs: 288, sm: 320, lg: 384 },
                      borderRadius: 2,
                      overflow: 'hidden',
                      bgcolor: isDark ? 'surface.containerLowest' : 'surface.containerLow',
                      border: isDark ? 'none' : '1px solid',
                      borderColor: 'divider',
                    }}
                  >
                    <Box
                      className="project-image"
                      component="img"
                      src={project.image}
                      alt={project.title}
                      width={1200}
                      height={675}
                      loading="lazy"
                      decoding="async"
                      sx={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 500ms ease-out',
                      }}
                    />
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 8,
                        right: 8,
                        px: 1,
                        py: 0.5,
                        borderRadius: 1,
                        bgcolor: isDark ? 'rgba(13,14,15,0.8)' : 'rgba(255,255,255,0.9)',
                        backdropFilter: 'blur(12px)',
                        border: isDark ? 'none' : '1px solid',
                        borderColor: 'divider',
                      }}
                    >
                      <Typography variant="labelMono" color="text.primary">
                        {project.tag}
                      </Typography>
                    </Box>
                    <Box
                      className="project-overlay"
                      component="button"
                      onClick={() => setSelected(project)}
                      sx={{
                        position: 'absolute',
                        inset: 0,
                        width: '100%',
                        height: '100%',
                        border: 'none',
                        cursor: 'pointer',
                        opacity: 0,
                        transition: 'opacity 200ms ease',
                        bgcolor: isDark ? 'rgba(18,19,20,0.4)' : 'rgba(15,23,42,0.3)',
                        backdropFilter: 'blur(4px)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: isDark ? 'primary.main' : '#fff',
                      }}
                    >
                      <Stack
                        direction="row"
                        alignItems="center"
                        spacing={1}
                        sx={{
                          px: 2,
                          py: 1,
                          borderRadius: 1,
                          bgcolor: isDark ? 'transparent' : 'rgba(15,23,42,0.85)',
                        }}
                      >
                        <Typography variant="button">{project.cta}</Typography>
                        <VisibilityOutlinedIcon sx={{ fontSize: 18 }} />
                      </Stack>
                    </Box>
                  </Box>

                  <Stack spacing={0.5}>
                    <Stack direction="row" justifyContent="space-between" alignItems="center">
                      <Typography
                        variant="labelMono"
                        sx={{ color: isDark ? 'tertiary.main' : 'tertiary.dark', fontWeight: 500 }}
                      >
                        {project.client} · {project.year}
                      </Typography>
                      <Typography variant="labelMono" color="text.secondary">
                        {project.status}
                      </Typography>
                    </Stack>
                    <Typography
                      className="project-title"
                      variant="h4"
                      color="text.primary"
                      sx={{ transition: 'color 200ms ease' }}
                    >
                      {project.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                      }}
                    >
                      {project.summary}
                    </Typography>
                  </Stack>
                </Box>
              ))}
            </AnimatePresence>
          </Box>
        </Stack>
      </Section>

      <Dialog
        open={Boolean(selected)}
        onClose={() => setSelected(null)}
        maxWidth="md"
        fullWidth
        scroll="body"
      >
        {selected && (
          <DialogContent sx={{ p: 3, position: 'relative' }}>
            <IconButton
              onClick={() => setSelected(null)}
              sx={{
                position: 'absolute',
                top: 16,
                right: 16,
                zIndex: 1,
                bgcolor: isDark ? 'surface.containerHighest' : 'surface.containerLow',
              }}
            >
              <CloseIcon fontSize="small" />
            </IconButton>

            <Stack spacing={3} pt={1}>
              <Box
                sx={{
                  width: '100%',
                  height: { xs: 280, sm: 360 },
                  borderRadius: 2,
                  overflow: 'hidden',
                  bgcolor: isDark ? 'surface.containerLowest' : 'surface.containerLow',
                }}
              >
                <Box
                  component="img"
                  src={selected.image}
                  alt={selected.title}
                  width={1200}
                  height={675}
                  loading="lazy"
                  decoding="async"
                  sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </Box>

              <Stack spacing={1}>
                <Typography
                  variant="labelMono"
                  sx={{
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    color: isDark ? 'tertiary.main' : 'tertiary.dark',
                    fontWeight: 600,
                  }}
                >
                  {selected.modal.category}
                </Typography>
                <Typography variant="h3" color="text.primary" sx={{ fontWeight: 700 }}>
                  {selected.title}
                </Typography>
                <Box
                  sx={{
                    py: 0.5,
                    px: 1,
                    borderRadius: 1,
                    bgcolor: isDark ? 'surface.container' : 'surface.containerLow',
                    border: isDark ? 'none' : '1px solid',
                    borderColor: 'divider',
                    width: 'fit-content',
                  }}
                >
                  <Typography variant="labelMono" color="text.primary">
                    {selected.modal.metrics}
                  </Typography>
                </Box>
              </Stack>

              <Typography variant="body1" color="text.secondary">
                {selected.modal.description}
              </Typography>

              <Stack direction="row" flexWrap="wrap" gap={0.5}>
                {selected.modal.tags.map((tag) => (
                  <Chip
                    key={tag}
                    label={tag}
                    sx={{
                      bgcolor: isDark ? 'surface.container' : 'surface.containerLow',
                      color: 'text.primary',
                      border: isDark ? 'none' : '1px solid',
                      borderColor: 'divider',
                      height: 28,
                      px: 0.5,
                    }}
                  />
                ))}
              </Stack>
            </Stack>
          </DialogContent>
        )}
      </Dialog>
    </>
  )
}
