'use client';
import localFont from "next/font/local";
import { translateArray } from "@/app/components/translate";

import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
import { AllProjects } from "@/app/components/projects";
import { useLangContext } from "../context/LangContext";


const geistSans = localFont({
    src: "../fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});

const About = () => {
    const {lang} = useLangContext();
    const translate = translateArray.find((item) => item.lang === lang)?.translate
  
    return (
        <main className={`h-screen w-5/6 mx-auto`}>
            <Header page="project"/>

            <section className="flex flex-col mx-auto mt-20 w-1/2 max-lg:w-5/6">
                <h1 className={`${geistSans.className} text-4xl font-bold`}>{translate?.home.titles.projects}</h1>
                <AllProjects />
            </section>

            <Footer />
        </main>
    )
}

export default About