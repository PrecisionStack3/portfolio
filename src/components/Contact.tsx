import { useState, type FormEvent } from 'react'
import {
  Alert,
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
  useTheme,
} from '@mui/material'
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined'
import ScheduleOutlinedIcon from '@mui/icons-material/ScheduleOutlined'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import SendOutlinedIcon from '@mui/icons-material/SendOutlined'
import CheckIcon from '@mui/icons-material/Check'
import { motion } from 'motion/react'
import { budgetOptions, profile, scopeOptions } from '../data/portfolio'
import { Section } from './Section'

const FORMSPREE_ID = import.meta.env.VITE_FORMSPREE_ID
const fieldSx = {
  '& .MuiInputLabel-root': {
    fontSize: '0.8125rem',
  },
  '& .MuiInputBase-input, & .MuiInputBase-inputMultiline': {
    fontSize: '0.8125rem',
    lineHeight: 1.5,
  },
  '& .MuiInputBase-input::placeholder': {
    fontSize: '0.8125rem',
    opacity: 0.7,
  },
}

const selectSx = (isDark: boolean) => ({
  borderRadius: 1,
  bgcolor: isDark ? 'surface.containerHigh' : 'background.paper',
  fontSize: '0.8125rem',
  '& .MuiSelect-select': {
    fontSize: '0.8125rem',
  },
})

export function Contact() {
  const theme = useTheme()
  const isDark = theme.palette.mode === 'dark'
  const [sending, setSending] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setError(null)

    if (!FORMSPREE_ID || FORMSPREE_ID === 'your_formspree_id_here') {
      setError(
        'Contact form is not configured yet. Add your Formspree ID to .env as VITE_FORMSPREE_ID.',
      )
      return
    }

    const form = event.currentTarget
    const data = new FormData(form)

    setSending(true)
    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })

      if (!response.ok) {
        const payload = (await response.json().catch(() => null)) as
          | { error?: string; errors?: Array<{ message?: string }> }
          | null
        const message =
          payload?.error ||
          payload?.errors?.[0]?.message ||
          'Something went wrong. Please try again or email me directly.'
        throw new Error(message)
      }

      setSuccess(true)
      form.reset()
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unable to send your message right now.')
    } finally {
      setSending(false)
    }
  }

  const infoItems = [
    {
      icon: AlternateEmailIcon,
      label: 'Direct Channel',
      value: profile.email,
      href: `mailto:${profile.email}`,
    },
    {
      icon: LocationOnOutlinedIcon,
      label: 'Location',
      value: profile.fullLocation,
    },
    {
      icon: ScheduleOutlinedIcon,
      label: 'Current Availability',
      value: profile.availabilityDetail,
    },
  ]

  return (
    <Section id="contact" alt>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', lg: '5fr 7fr' },
          gap: 3,
          alignItems: 'start',
        }}
      >
        <Stack
          component={motion.div}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          spacing={3}
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
              Start A Conversation
            </Typography>
            <Typography variant="h2" color="text.primary">
              Let&apos;s build something remarkable.
            </Typography>
          </Stack>

          <Typography variant="body1" color="text.secondary">
            Whether you are launching an early-stage venture, refining an enterprise design system,
            or crafting a standout interactive web showcase.
          </Typography>

          <Stack spacing={2} pt={0.5}>
            {infoItems.map((item) => {
              const Icon = item.icon
              return (
                <Stack key={item.label} direction="row" spacing={2} alignItems="center">
                  <Box
                    sx={{
                      width: 40,
                      height: 40,
                      borderRadius: isDark ? 1 : 2,
                      bgcolor: isDark ? 'surface.container' : 'background.paper',
                      border: isDark ? 'none' : '1px solid',
                      borderColor: 'divider',
                      display: 'grid',
                      placeItems: 'center',
                      color: isDark ? 'tertiary.main' : 'tertiary.dark',
                    }}
                  >
                    <Icon sx={{ fontSize: 20 }} />
                  </Box>
                  <Box>
                    <Typography variant="labelMono" color="text.secondary">
                      {item.label}
                    </Typography>
                    {item.href ? (
                      <Typography
                        component="a"
                        href={item.href}
                        variant="h4"
                        sx={{
                          display: 'block',
                          color: 'text.primary',
                          textDecoration: 'none',
                          fontWeight: 600,
                          '&:hover': { color: isDark ? 'tertiary.main' : 'tertiary.dark' },
                        }}
                      >
                        {item.value}
                      </Typography>
                    ) : (
                      <Typography variant="body2" color="text.primary" sx={{ fontWeight: 500 }}>
                        {item.value}
                      </Typography>
                    )}
                  </Box>
                </Stack>
              )
            })}
          </Stack>

          <Stack direction="row" flexWrap="wrap" gap={1} pt={1}>
            {profile.socials.map((social) => (
              <Box
                key={social.label}
                component="a"
                href={social.href}
                target="_blank"
                rel="noreferrer"
                sx={{
                  px: 2,
                  py: 0.75,
                  borderRadius: 1,
                  bgcolor: isDark ? 'surface.container' : 'background.paper',
                  border: isDark ? 'none' : '1px solid',
                  borderColor: 'divider',
                  color: 'text.secondary',
                  textDecoration: 'none',
                  fontFamily: '"JetBrains Mono", monospace',
                  fontSize: '0.75rem',
                  letterSpacing: '0.04em',
                  transition: 'color 200ms ease, border-color 200ms ease',
                  '&:hover': {
                    color: 'text.primary',
                    borderColor: isDark ? undefined : 'rgba(15,23,42,0.2)',
                  },
                }}
              >
                {social.label}
              </Box>
            ))}
          </Stack>
        </Stack>

        <Box
          component={motion.form}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.1 }}
          onSubmit={handleSubmit}
          sx={{
            p: 3,
            borderRadius: 3,
            bgcolor: isDark ? 'surface.container' : 'background.paper',
            border: isDark ? 'none' : '1px solid',
            borderColor: 'divider',
            boxShadow: isDark ? 6 : 2,
          }}
        >
          <Stack spacing={2}>
            <input type="hidden" name="_subject" value="New portfolio inquiry from Elena Vance site" />
            <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" style={{ display: 'none' }} />

            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
                gap: 2,
              }}
            >
              <TextField
                required
                name="name"
                id="name"
                label="Your Name"
                placeholder="Elena Rostova"
                fullWidth
                autoComplete="name"
                InputLabelProps={{ shrink: true }}
                sx={fieldSx}
              />
              <TextField
                required
                name="email"
                id="email"
                type="email"
                label="Email Address"
                placeholder="elena@company.com"
                fullWidth
                autoComplete="email"
                InputLabelProps={{ shrink: true }}
                sx={fieldSx}
              />
            </Box>

            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
                gap: 2,
              }}
            >
              <FormControl fullWidth size="small">
                <InputLabel id="scope-label" sx={{ fontSize: '0.8125rem' }}>
                  Project Scope
                </InputLabel>
                <Select
                  name="scope"
                  labelId="scope-label"
                  label="Project Scope"
                  defaultValue={scopeOptions[0]}
                  sx={selectSx(isDark)}
                >
                  {scopeOptions.map((option) => (
                    <MenuItem key={option} value={option} sx={{ fontSize: '0.8125rem' }}>
                      {option}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <FormControl fullWidth size="small">
                <InputLabel id="budget-label" sx={{ fontSize: '0.8125rem' }}>
                  Estimated Budget
                </InputLabel>
                <Select
                  name="budget"
                  labelId="budget-label"
                  label="Estimated Budget"
                  defaultValue={budgetOptions[0]}
                  sx={selectSx(isDark)}
                >
                  {budgetOptions.map((option) => (
                    <MenuItem key={option} value={option} sx={{ fontSize: '0.8125rem' }}>
                      {option}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>

            <TextField
              required
              name="message"
              id="message"
              label="Project Brief & Goals"
              placeholder="Tell me about your product timeline, tech stack, and primary vision..."
              multiline
              rows={4}
              fullWidth
              InputLabelProps={{ shrink: true }}
              sx={fieldSx}
            />

            {error && (
              <Alert severity="error" onClose={() => setError(null)}>
                {error}
              </Alert>
            )}

            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              justifyContent="space-between"
              alignItems={{ sm: 'center' }}
              spacing={2}
              pt={0.5}
            >
              <Stack direction="row" alignItems="center" spacing={0.5} color="text.secondary">
                <LockOutlinedIcon sx={{ fontSize: 16, color: 'tertiary.main' }} />
                <Typography variant="labelMono">Encrypted & direct to inbox</Typography>
              </Stack>

              {!success && (
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  disabled={sending}
                  endIcon={!sending ? <SendOutlinedIcon sx={{ fontSize: 18 }} /> : undefined}
                >
                  {sending ? 'Sending...' : 'Send Inquiry'}
                </Button>
              )}
            </Stack>

            {success && (
              <Stack
                direction="row"
                spacing={2}
                alignItems="center"
                sx={{
                  p: 2,
                  borderRadius: 2,
                  bgcolor: isDark ? 'surface.containerHigh' : 'tertiary.light',
                  border: isDark ? 'none' : '1px solid',
                  borderColor: 'rgba(167,243,208,1)',
                }}
              >
                <Box
                  sx={{
                    width: 32,
                    height: 32,
                    borderRadius: '50%',
                    bgcolor: isDark ? 'tertiary.light' : 'tertiary.main',
                    color: isDark ? 'tertiary.contrastText' : '#fff',
                    display: 'grid',
                    placeItems: 'center',
                  }}
                >
                  <CheckIcon sx={{ fontSize: 18 }} />
                </Box>
                <Box>
                  <Typography variant="h4" color="text.primary" sx={{ fontWeight: 700 }}>
                    Inquiry Dispatched
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.8125rem' }}>
                    Thank you! Elena will review your brief and respond within 24 hours.
                  </Typography>
                </Box>
              </Stack>
            )}
          </Stack>
        </Box>
      </Box>
    </Section>
  )
}
