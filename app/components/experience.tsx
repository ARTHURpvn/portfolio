import localFont from "next/font/local";
import { translateArray } from "./translate";
import { useEffect, useState } from "react";

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
  
const Experience = () => {  
    const [translate, setTranslate] = useState(translateArray.find((item) => item.lang === 'pt-br')?.translate.experience);
    const useLocalStorageChecker = () => {
      useEffect(() => {
          const checkLocalStorage = () => {
              const value = localStorage.getItem('lang');
              setTranslate(translateArray.find((item) => item.lang === value)?.translate.experience)
          };
          const intervalId = setInterval(checkLocalStorage, 1000);
          return () => clearInterval(intervalId);
      }, []);
    };
    useLocalStorageChecker();
    return (
        <ul className="mt-6 mx-6">
            {translate &&
                translate.map((experience: { link: string ; name: string ; date: string ; description: string  }, index: number) => {
                    return (
                        <li key={index} className="flex flex-col mb-12  max-[580px]:mb-8">
                            <header className="mb-3">
                                <div className=" group flex flex-col w-max">
                                    <a href={experience.link} className={`${geistSans.className} text-2xl max-[580px]:text-xl w-auto font-bold text-blue-600 dark:text-blue-400`}> ./{experience.name} </a>
                                    <div className="h-1 max-[580px]:h-[3px] w-full bg-blue-400 scale-x-0 group-hover:scale-x-100 duration-300 ease-in"></div>
                                </div>
                                <p className={`${geistMono.className} text-sm max-[580px]:text-[0.8rem] text-gray-900 dark:text-gray-500`}>{experience.date}</p>
                            </header>
                            <p className={`${geistSans.className} text-lg max-[580px]:text-[1rem] text-gray-500 dark:text-gray-300`}> {experience.description} </p>
                        </li>
                    )
                })}
        </ul>
    )
}

export default Experience;