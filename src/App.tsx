import { ThemeProvider } from 'styled-components'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { Differentials } from './components/Differentials'
import { Experience } from './components/Experience'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Projects } from './components/Projects'
import { ScrollToTop } from './components/ScrollToTop'
import { Skills } from './components/Skills'
import { GlobalStyles } from './styles/GlobalStyles'
import { theme } from './styles/theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <main>
        <Hero />
        <About />
        <Differentials />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </ThemeProvider>
  )
}

export default App
