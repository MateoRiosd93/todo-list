import { useState } from "react"

enum DarkMode {
    theme = 'theme',
    dark = 'dark',
    light = 'light'
}

const getInitialState = () => {
    const VALIDATION_THEME = (localStorage.getItem(DarkMode.theme) === DarkMode.dark) || window.matchMedia('(prefers-color-scheme: dark)').matches

    if (VALIDATION_THEME) {
        document.documentElement.classList.add(DarkMode.dark)
        return true
    }

    document.documentElement.classList.remove(DarkMode.dark)
    return false

}

const INITIAL_STATE: boolean = getInitialState()

export function useDarkMode() {
    const [darkMode, setDarkMode] = useState(INITIAL_STATE)

    const handleMode = () => {
        setDarkMode(!darkMode)
        if (darkMode) {
            localStorage.setItem(DarkMode.theme, DarkMode.light)
            document.documentElement.classList.remove(DarkMode.dark)
            return
        }

        localStorage.setItem(DarkMode.theme, DarkMode.dark)
        document.documentElement.classList.add(DarkMode.dark)
    }

    return {
        darkMode,
        handleMode
    }
}