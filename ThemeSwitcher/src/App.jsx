import { useState,useEffect } from 'react'
import './App.css'
import { ThemeContextProvider } from './context/Theme'
import ThemeButton from './components/ThemeButton'
import Card from './components/Card'

function App() {
    const [themeMode,setThemeMode] = useState("light")

    function DarkTheme(){
        setThemeMode("dark")
    }
    function LightTheme() {
        setThemeMode("light")
    }
    
    useEffect(() => {
        document.querySelector("html").classList.remove("light","dark")
        document.querySelector("html").classList.add(themeMode)
    }, [themeMode])
    
  return (
    <ThemeContextProvider value={{themeMode,DarkTheme,LightTheme}}>
   
<div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        {/* Theme switcher button will go here */}
                <ThemeButton />

                    </div>

                    <div className="w-full max-w-sm mx-auto">
                       {/* Card */}
                      <Card />

                    </div>
                </div>
            </div>
            </ThemeContextProvider>

  )
}

export default App
