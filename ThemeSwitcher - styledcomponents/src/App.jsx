import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import Header from './components/Header/index'
import GlobalStyle from './global/styles/Global'
import { darkTheme } from './global/styles/Theme'
import { lightTheme } from './global/styles/Theme'
import ProductPage from './components/Header/ProductPage'

function App() {
  const [theme, setTheme] = useState(darkTheme)

  const handleChangeTheme = function () {
    setTheme(theme === darkTheme ? lightTheme : darkTheme)
  }

  return (
    <ThemeProvider theme={theme}>
      <Header actualTheme={theme} changeTheme={handleChangeTheme} />
      <ProductPage/>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App

