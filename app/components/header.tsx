'use client';
import localFont from "next/font/local";

import { translateArray } from "./translate";
import Translate from "./lang";

import Theme from "./theme";
import Link from "next/link";
import Head from "next/head";
import { useLangContext } from "../context/LangContext";

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

export let pageLoc : string

const Header = ({page}: {page: string}) => {
    const {lang} = useLangContext();
    const translate = translateArray.find((item) => item.lang === lang)?.translate;

    const name : string = "<ARTHURpvn />";
    return (
        <>
            <Head>
                <title></title>
            </Head>
            <header className="flex justify-around items-center h-[8%] relative">
                <Link href="/" className={`font-bold text-xl duration-300 hover:text-orange-400 ${geistMono.className}  ${page === "home" && "text-orange-600 dark:text-orange-400"} max-[580px]:text-md font-semibold`}> {name} </Link>

                <nav className={`gap-6 flex ${geistSans.className} tracking-widest max-[580px]:absolute max-[580px]:-bottom-6`}>
                        <a href="/about" className={`hover:text-orange-400 ${page === "about" && "text-orange-600 font-semibold dark:text-orange-400"} dark:hover:text-orange-200 duration-300`}> {translate?.header.about} </a>
                        <a href="/project" className={`hover:text-orange-400 ${page === "project" && "text-orange-600 font-semibold dark:text-orange-400"} dark:hover:text-orange-200 duration-300`}> {translate?.header.projects}</a>
                        <a href="/contact" className={`hover:text-orange-400 ${page === "contact" && "text-orange-600 font-semibold dark:text-orange-400"} dark:hover:text-orange-200 duration-300`}> {translate?.header.contact}</a>
                </nav>

                <div className="flex items-center gap-8 max-[580px]:gap-4">
                    <Translate />
                    <Theme />
                </div>
            </header>
        </>
    );
}


export default Header;