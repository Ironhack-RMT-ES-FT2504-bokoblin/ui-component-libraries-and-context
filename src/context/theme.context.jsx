import { createContext, useState } from "react";

// Componente Contexto (se encarga de compartir esos valores)
const ThemeContext = createContext()

// Componente Envoltorio (envuelve a la app, y se encarga de almacener los valores a transmitir)
function ThemeWrapper(props) {

  // aqui definir todos los estados, funciones, variables a compartir
  const [ isDarkTheme, setIsDarkTheme ] = useState(true)

  // ... aqui más estados, funciones, variables...
  const handleToggleTheme = () => {
    setIsDarkTheme(!isDarkTheme)
  }

  const passedContext = {
    isDarkTheme,
    handleToggleTheme
  }

  return (
    <ThemeContext.Provider value={passedContext}>
      {props.children}
    </ThemeContext.Provider>
  )

}

export {
  ThemeContext,
  ThemeWrapper
}