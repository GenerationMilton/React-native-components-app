
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { createContext, PropsWithChildren, useContext } from "react";
import { useColorScheme } from 'nativewind';

interface ThemeChangerContextType {
    currentTheme: 'light' | 'dark'
    isSystemTheme: boolean;
    toggleTheme: () => void;
    setSystemTheme: () => void;
}

const ThemeChangerContext = createContext({} as ThemeChangerContextType);

// Custom Hook para acceder al ThemeChangerContext

export const useThemeChangerContext = () => {
    const themeChanger = useContext(ThemeChangerContext);
    return themeChanger;
}



// Provider
export const ThemeChangerProvider = ({ children }: PropsWithChildren) => {

    const { colorScheme } = useColorScheme();

    return (

        <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>

            <ThemeChangerContext.Provider
                value={{
                    currentTheme: 'light',
                    isSystemTheme: false,

                    toggleTheme: async () => {

                    },
                    setSystemTheme: async () => {

                    }
                }}

            >
                {children}

            </ThemeChangerContext.Provider>
        </ThemeProvider>

    )

}
