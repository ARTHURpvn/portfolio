import localFont from "next/font/local";
import Theme from "./theme";
import { useState, useEffect } from "react";
import Translate, { translateArray } from "./translate";

const geistSans = localFont({
    src: "../fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});

const geistMono = localFont({
    src: "../fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});
  
const Header = () => {
    const [translate, setTranslate] = useState(translateArray.find((item) => item.lang === 'pt-br')?.translate);
    const useLocalStorageChecker = () => {
      useEffect(() => {
          const checkLocalStorage = () => {
              const value = localStorage.getItem('lang');
              setTranslate(translateArray.find((item) => item.lang === value)?.translate)
          };
          const intervalId = setInterval(checkLocalStorage, 1000);
          return () => clearInterval(intervalId);
      }, []);
    };
    useLocalStorageChecker();
  
    useLocalStorageChecker();
    const name : string = "<ARTHURpvn />";
    return (
        <header className="flex justify-around items-center h-[8%] relative">
            <a href="" className={`font-bold text-xl ${geistMono.className} dark:text-orange-400 text-orange-600 max-[580px]:text-md font-semibold`}> {name} </a>

            <nav className={`gap-6 flex ${geistSans.className} tracking-widest max-[580px]:absolute max-[580px]:-bottom-6`}>
                    <a href="" className="hover:text-orange-400 dark:hover:text-orange-200 duration-300"> {translate?.header.about} </a>
                    <a href="" className="hover:text-orange-400 dark:hover:text-orange-200 duration-300"> {translate?.header.projects}</a>
                    <a href="" className="hover:text-orange-400 dark:hover:text-orange-200 duration-300"> {translate?.header.contact}</a>
            </nav>

            <div className="flex items-center gap-8 max-[580px]:gap-4">
                <Translate />
                <Theme />
            </div>
        </header>
    );
}

export default Header;