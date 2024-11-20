'use client';
import { GrLinkNext } from "react-icons/gr";
import { translateArray } from "./translate";
import {  useEffect, useState } from "react";

import localFont from "next/font/local";
import { useLangContext } from "../context/LangContext";
import Link from "next/link";
const geistSans = localFont({
    src: "../fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});

interface ProjectsProps {
    indexValue: number
}

const Projects = ({indexValue}: ProjectsProps)  => {
    const {lang} = useLangContext();
    const translate = translateArray.find((item) => item.lang === lang)?.translate;
    
    return (
        translate && (
            <div className={`group flex flex-col mx-auto relative text-white mt-6 overflow-hidden w-full h-[55vh] max-[580px]:h-[50vh] cursor-pointer rounded-lg border border-gray-600 bg-cover ${translate.projects[indexValue].pos} bg-no-repeat`}
            style={{backgroundImage: `url(/${translate.projects[indexValue].image})`}}>
                <span className="bg-gradient-to-t absolute from-[#0e0e0e] from-50% to-transparent w-full h-full translate-y-[65%] group-hover:translate-y-[55%] max-[580px]:translate-y-[50%] max-[580px]:group-hover:translate-y-[45%] duration-500"></span>
                <span className="bg-gradient-to-r absolute from-[#494a68] to-transparent w-full h-full -translate-x-[75%] group-hover:-translate-x-[70%] duration-500"></span>
                <span className="bg-gradient-to-l absolute from-[#494a68] to-transparent w-full h-full translate-x-[75%] group-hover:translate-x-[70%] duration-500"></span>

                <ul className="absolute -bottom-12 left-6 group-hover:bottom-3 z-10 duration-500">
                    <h1 className={`${geistSans.className} text-2xl font-bold max-[580px]:text-xl`}> { translate.projects[indexValue].name } </h1>
                    <div>
                        <ul className="flex gap-4  my-3 w-5/6 max-[580px]:gap-1 max-[580px]:my-1 flex-wrap">
                            { translate.projects[indexValue].tecnologies.map((item: { icon: JSX.Element, name: string }, index: number ) => {
                                return (
                                    <li key={index} className={`${geistSans.className} flex gap-2 text-lg max-[580px]:text-[.8rem] items-center px-3 py-1 max-[580px]:px-2 max-[580px]:py-0 rounded-lg border border-gray-600`}>
                                        {item.icon}
                                        <p> {item.name} </p>
                                    </li>
                                )
                            })}
                        </ul>

                        <div className="w-3/4">
                            <p className={`${geistSans.className} text-neutral-300 text-lg font-semibold max-[580px]:text-[.8rem] max-[580px]:leading-normal`}> { translate.projects[indexValue].description } </p>
                        </div>

                        <div className="flex">
                            <Link  href={ translate.projects[indexValue].link } className={`${geistSans.className} flex text-sm items-center gap-3 px-3 py-1 rounded-lg my-3 text-white bg-blue-500 hover:bg-blue-600 `}> { translate.seeProject } <GrLinkNext /></Link>
                        </div>
                    </div>
                </ul>
            </div>
        )
    )
}

const AllProjects = () => {
    const [translate, setTranslate] = useState(translateArray.find((item) => item.lang === 'pt-br')?.translate);
    useEffect(() => {
        const checkLocalStorage = () => {
            const value = localStorage.getItem('lang');
            setTranslate(translateArray.find((item) => item.lang === value)?.translate)
        };
        const intervalId = setInterval(checkLocalStorage, 1000);
        return () => clearInterval(intervalId);
    }, []);

    return (
        translate?.projects.map((item, index) => {
            return (
                <Projects key={index} indexValue={index} />
            )
        })
    )
}

export { AllProjects }
export default Projects