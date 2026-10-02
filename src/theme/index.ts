import type { CSSProperties } from 'react'
import { createTheme, alpha, type ThemeOptions } from '@mui/material/styles'

declare module '@mui/material/styles' {
  interface Palette {
    accent: Palette['primary']
    tertiary: Palette['primary']
    surface: {
      base: string
      dim: string
      bright: string
      containerLowest: string
      containerLow: string
      container: string
      containerHigh: string
      containerHighest: string
    }
  }
  interface PaletteOptions {
    accent?: PaletteOptions['primary']
    tertiary?: PaletteOptions['primary']
    surface?: Partial<Palette['surface']>
  }
  interface TypographyVariants {
    labelMono: CSSProperties
    labelUi: CSSProperties
  }
  interface TypographyVariantsOptions {
    labelMono?: CSSProperties
    labelUi?: CSSProperties
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    labelMono: true
    labelUi: true
  }
}

const fontDisplay = '"Plus Jakarta Sans", system-ui, sans-serif'
const fontMono = '"JetBrains Mono", ui-monospace, monospace'

const sharedTypography: ThemeOptions['typography'] = {
  fontFamily: fontDisplay,
  h1: {
    fontFamily: fontDisplay,
    fontWeight: 700,
    fontSize: '2.75rem',
    lineHeight: 1.1,
    letterSpacing: '-0.025em',
    '@media (min-width:1200px)': {
      fontSize: '4.5rem',
      lineHeight: 1.05,
      letterSpacing: '-0.035em',
    },
  },
  h2: {
    fontFamily: fontDisplay,
    fontWeight: 600,
    fontSize: '2rem',
    lineHeight: 1.2,
    letterSpacing: '-0.02em',
    '@media (min-width:900px)': {
      fontSize: '3rem',
      lineHeight: 1.15,
      letterSpacing: '-0.03em',
    },
  },
  h3: {
    fontFamily: fontDisplay,
    fontWeight: 600,
    fontSize: '2rem',
    lineHeight: 1.25,
    letterSpacing: '-0.02em',
  },
  h4: {
    fontFamily: fontDisplay,
    fontWeight: 600,
    fontSize: '1.375rem',
    lineHeight: 1.35,
    letterSpacing: '-0.015em',
  },
  body1: {
    fontFamily: fontDisplay,
    fontWeight: 400,
    fontSize: '1.125rem',
    lineHeight: 1.65,
    letterSpacing: '-0.01em',
  },
  body2: {
    fontFamily: fontDisplay,
    fontWeight: 400,
    fontSize: '0.9375rem',
    lineHeight: 1.6,
    letterSpacing: '-0.005em',
  },
  button: {
    fontFamily: fontDisplay,
    fontWeight: 500,
    fontSize: '0.8125rem',
    lineHeight: 1,
    letterSpacing: '0.01em',
    textTransform: 'none',
  },
  labelMono: {
    fontFamily: fontMono,
    fontWeight: 500,
    fontSize: '0.75rem',
    lineHeight: 1.4,
    letterSpacing: '0.04em',
  },
  labelUi: {
    fontFamily: fontDisplay,
    fontWeight: 500,
    fontSize: '0.8125rem',
    lineHeight: 1,
    letterSpacing: '0.01em',
  },
}

const darkPalette = {
  mode: 'dark' as const,
  primary: {
    main: '#ffffff',
    contrastText: '#2f3132',
  },
  secondary: {
    main: '#c0c1ff',
    contrastText: '#1000a9',
  },
  accent: {
    main: '#6366F1',
    contrastText: '#ffffff',
  },
  tertiary: {
    main: '#4edea3',
    light: '#6ffbbe',
    dark: '#00734e',
    contrastText: '#002113',
  },
  background: {
    default: '#121314',
    paper: '#1f2021',
  },
  text: {
    primary: '#e3e2e3',
    secondary: '#c5c7c9',
  },
  divider: alpha('#ffffff', 0.08),
  surface: {
    base: '#121314',
    dim: '#121314',
    bright: '#39393a',
    containerLowest: '#0d0e0f',
    containerLow: '#1b1c1d',
    container: '#1f2021',
    containerHigh: '#292a2b',
    containerHighest: '#343536',
  },
}

const lightPalette = {
  mode: 'light' as const,
  primary: {
    main: '#0f172a',
    contrastText: '#ffffff',
  },
  secondary: {
    main: '#2563EB',
    contrastText: '#ffffff',
  },
  accent: {
    main: '#2563EB',
    contrastText: '#ffffff',
  },
  tertiary: {
    main: '#059669',
    light: '#ECFDF5',
    dark: '#047857',
    contrastText: '#ffffff',
  },
  background: {
    default: '#f8fafc',
    paper: '#ffffff',
  },
  text: {
    primary: '#0f172a',
    secondary: '#64748b',
  },
  divider: alpha('#0f172a', 0.08),
  surface: {
    base: '#ffffff',
    dim: '#f1f5f9',
    bright: '#ffffff',
    containerLowest: '#f8fafc',
    containerLow: '#f1f5f9',
    container: '#ffffff',
    containerHigh: '#f1f5f9',
    containerHighest: '#e2e8f0',
  },
}

function buildTheme(palette: typeof darkPalette | typeof lightPalette) {
  const isDark = palette.mode === 'dark'

  return createTheme({
    palette,
    typography: sharedTypography,
    shape: {
      borderRadius: 4,
    },
    spacing: 8,
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          html: {
            scrollBehavior: 'smooth',
          },
          body: {
            backgroundColor: palette.background.default,
            color: palette.text.primary,
            WebkitFontSmoothing: 'antialiased',
            MozOsxFontSmoothing: 'grayscale',
          },
          '::-webkit-scrollbar': {
            width: 0,
            height: 0,
          },
          '::selection': {
            backgroundColor: isDark ? '#343536' : '#e2e8f0',
            color: isDark ? '#ffffff' : '#0f172a',
          },
        },
      },
      MuiButton: {
        defaultProps: {
          disableElevation: true,
        },
        styleOverrides: {
          root: {
            borderRadius: 4,
            padding: '12px 24px',
            fontWeight: 500,
            transition: 'all 200ms ease-out',
          },
          containedPrimary: {
            '&:hover': {
              transform: 'scale(1.01)',
            },
          },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: {
            borderRadius: 4,
            fontFamily: fontMono,
            fontSize: '0.75rem',
            fontWeight: 500,
            letterSpacing: '0.04em',
            height: 24,
          },
        },
      },
      MuiTextField: {
        defaultProps: {
          variant: 'outlined',
          size: 'small',
        },
      },
      MuiInputLabel: {
        styleOverrides: {
          root: {
            fontSize: '0.8125rem',
          },
          sizeSmall: {
            fontSize: '0.8125rem',
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            borderRadius: 4,
            backgroundColor: isDark ? '#292a2b' : '#ffffff',
            fontSize: '0.8125rem',
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: isDark ? 'transparent' : '#cbd5e1',
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: isDark ? alpha('#ffffff', 0.18) : '#94a3b8',
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderWidth: 1,
              borderColor: isDark ? '#ffffff' : '#0f172a',
            },
          },
          input: {
            fontSize: '0.8125rem',
            '&::placeholder': {
              fontSize: '0.8125rem',
              opacity: 0.7,
            },
          },
        },
      },
      MuiDialog: {
        styleOverrides: {
          paper: {
            borderRadius: 12,
            backgroundImage: 'none',
            backgroundColor: isDark ? '#292a2b' : '#ffffff',
            border: isDark ? `1px solid ${alpha('#ffffff', 0.12)}` : '1px solid #e2e8f0',
          },
        },
      },
    },
  })
}

export const darkTheme = buildTheme(darkPalette)
export const lightTheme = buildTheme(lightPalette)

export const contentMaxWidth = 1440
