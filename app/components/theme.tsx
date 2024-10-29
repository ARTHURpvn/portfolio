'use client';

import { FaMoon } from "react-icons/fa";
import { MdSunny } from "react-icons/md";
import { useEffect, useState } from "react";

const Theme = () => {
    const [theme, setTheme] = useState<string>("");

    // Configura o tema inicial ao carregar a página
    useEffect(() => {
        const storedTheme = localStorage.getItem('theme');
        
        if (storedTheme) {
            setTheme(storedTheme);
        } else {
            const userPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            setTheme(userPrefersDark ? 'dark' : 'light');
        }
    }, []);

    // Aplica a classe de tema ao <html> e armazena no localStorage quando o tema mudar
    useEffect(() => {
        if (theme) {
            if (theme === 'dark') {
                document.documentElement.classList.add('dark');
                document.documentElement.classList.remove('light');
            } else {
                document.documentElement.classList.add('light');
                document.documentElement.classList.remove('dark');
            }
            localStorage.setItem('theme', theme);
        }
    }, [theme]);

    // Alterna entre claro e escuro
    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'));
    };

    return (
        <div>
            <div onClick={toggleTheme} className="cursor-pointer">
                {theme === "light" ? <FaMoon className="hover:text-sky-700 duration-300" /> : <MdSunny className="hover:text-yellow-400 duration-300" />}
            </div>
        </div>
    );
};

export default Theme;
