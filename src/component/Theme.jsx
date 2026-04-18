"use client";
import ThemeContext, { Themes } from '@/state/themeContext';
import React, { useContext } from 'react';

const Theme = () => {
    let{ theme, setTheme}= useContext(Themes);
    console.log(theme);
    
    function theming(){
        setTheme(theme==="light"?"dark":"light")
        localStorage.setItem("theme",theme)
    }
    return (
        <div className=''>
            <button data-theme={theme} onClick={theming} className='btn z-40 fixed bottom-4 right-4'>
                <span className='fa fa-moon'></span>
            </button>
        </div>
    );
};

export default Theme;