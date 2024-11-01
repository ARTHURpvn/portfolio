'use client';
import Header from "../components/header";
import localFont from "next/font/local";
import { translateArray } from "../components/translate";
import { useEffect, useState } from "react";
import Experience from "../components/experience";
import Footer from "../components/footer";


const geistSans = localFont({
    src: "../fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});

const About = () => {
    const [translate, setTranslate] = useState(translateArray.find((item) => item.lang === 'pt-br')?.translate.about);
    useEffect(() => {
        const checkLocalStorage = () => {
            const value = localStorage.getItem('lang');
            setTranslate(translateArray.find((item) => item.lang === value)?.translate.about)
        };
        const intervalId = setInterval(checkLocalStorage, 1000);
        return () => clearInterval(intervalId);
    }, []);
  
    return (
        <main className={`h-screen w-5/6 mx-auto`}>

            <Header page="about"/>

            <section className="flex flex-col mx-auto mt-20 w-1/2 max-[580px]:w-5/6">
                <h1 className={`${geistSans.className} text-4xl font-bold`}> {translate?.titles.about} </h1>
                <div className={`${geistSans.className} flex flex-col mt-3 text-lg gap-3 text-justify`}>
                    <p>
                        {translate?.resume[0].name}
                    </p>

                    <p>
                    {translate?.resume[1].name}
                    </p>

                    <p>
                    {translate?.resume[2].name}
                    </p>
                </div>
            </section>

            <section className="flex flex-col mx-auto mt-20 w-1/2 max-[580px]:w-5/6">
                <h1 className={`${geistSans.className} text-4xl font-bold`}> {translate?.titles.experience} </h1>
                <div>
                    <Experience />
                </div>
            </section>

            <Footer />
        </main>
    )
}

export default About