"use client";
import React,{ createContext, useState } from "react";

export const Themes = createContext('');

const ThemeContext = ({children}) => {
    let [theme, setTheme] = useState('light')
    let themeItem={
        theme,
        setTheme
    }
    return (
        <Themes.Provider value={themeItem}>
            {children}
        </Themes.Provider>
    );
};

export default ThemeContext;