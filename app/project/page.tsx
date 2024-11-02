'use client';
import localFont from "next/font/local";
import { translateArray } from "../components/translate";
import { useEffect, useState } from "react";

import Header from "../components/header";
import { AllProjects } from "../components/projects";
import Footer from "../components/footer";


const geistSans = localFont({
    src: "../fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});

const About = () => {
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
        <main className={`h-screen w-5/6 mx-auto`}>
            <Header page="project"/>

            <section className="flex flex-col mx-auto mt-20 w-1/2 max-[580px]:w-5/6">
                <h1 className={`${geistSans.className} text-4xl font-bold`}>{translate?.home.titles.projects}</h1>
                <AllProjects />
            </section>

            <Footer />
        </main>
    )
}

export default About