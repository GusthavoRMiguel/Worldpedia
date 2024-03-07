import React, { createContext, useContext, useEffect, useState } from "react";
import { DefaultTheme, ThemeProvider } from "styled-components";

import usePersistedState from "./persistedState";
import light from "../styles/themes/light";
import dark from "../styles/themes/dark";
import LoadingPage from "../components/loadingPage";

interface ThemeContextType {
  theme: DefaultTheme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

interface AppProviderProps {
  children: React.ReactNode;
}

const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  // Estado persistido para o tema usando o hook customizado usePersistedState
  const [theme, setTheme] = usePersistedState<DefaultTheme>("theme", light);

  // Efeito para carregar o tema persistido do localStorage
  useEffect(() => {
    const fetchTheme = async () => {
      try {
        const storedTheme = localStorage.getItem("theme");
        if (storedTheme) {
          // Faz o parsing do tema persistido e atualiza o estado do tema
          const parsedTheme = JSON.parse(storedTheme) as DefaultTheme;
          setTheme(parsedTheme);
        } else {
          // Define o tema padrão se não houver nenhum tema persistido
          setTheme(light);
        }
      } catch (error) {
        // Em caso de erro, exibe uma mensagem de erro no console e define o tema padrão
        console.error("Erro ao recuperar o tema:", error);
        setTheme(light);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTheme();
  }, []);

  const toggleTheme = () => {
    setTheme(theme.title === "light" ? dark : light);
  };

  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default AppProvider;
