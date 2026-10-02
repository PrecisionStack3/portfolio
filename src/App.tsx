import { Box } from '@mui/material'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { Projects } from './components/Projects'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
      <Header />
      <Box component="main" sx={{ pt: 8 }}>
        <Hero />
        <Services />
        <Projects />
        <Contact />
      </Box>
      <Footer />
    </Box>
  )
}
