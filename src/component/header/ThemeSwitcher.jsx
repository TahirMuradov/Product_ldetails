import React, { useContext } from 'react'

import ThemeContext from '../context/ThemeContext.jsx'

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useContext(ThemeContext)

  return <button onClick={toggleTheme}>{theme === 'dark' ? <span>🌞</span> : <span>🌙</span>}</button>
}

export default ThemeSwitcher