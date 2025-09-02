import { createContext, useContext, useState, type ReactNode } from "react";

type Theme = "Dark" | "Light"

interface ThemeContextType {
    theme: Theme,
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({children}: {children: ReactNode}){
    const [theme, setTheme] = useState<Theme>("Light");

    const toggleTheme = () => {
        setTheme((prev) => (prev === "Light" ? "Dark" : "Light"));
    }

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            <div className="theme">{children}</div>
        </ThemeContext.Provider>
    )
}

export function useTheme(){
    const context=  useContext(ThemeContext);
    if(!context) throw new Error("useTheme must be used inside ThemeProvider");
    return context;
}