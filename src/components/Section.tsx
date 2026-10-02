import { Box, type BoxProps } from '@mui/material'
import { contentMaxWidth } from '../theme'

interface SectionProps extends BoxProps {
  id?: string
  alt?: boolean
}

export function Section({ id, alt = false, children, sx, ...props }: SectionProps) {
  return (
    <Box
      component="section"
      id={id}
      sx={{
        width: '100%',
        py: { xs: 6, lg: 8 },
        bgcolor: alt ? 'surface.containerLowest' : 'background.default',
        position: 'relative',
        overflow: 'hidden',
        ...sx,
      }}
      {...props}
    >
      <Box
        sx={{
          maxWidth: contentMaxWidth,
          mx: 'auto',
          px: { xs: 2.5, md: 4, lg: 8 },
        }}
      >
        {children}
      </Box>
    </Box>
  )
}
