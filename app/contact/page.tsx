'use client';
import Footer from "@/app/components/footer";
import Header from "@/app/components/header";
import localFont from "next/font/local";
import { translateArray } from "@/app/components/translate";

import Head from "next/head";

import { IoLogoWhatsapp, IoLogoLinkedin  } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";
import { useLangContext } from "../context/LangContext";

const geistSans = localFont({
    src: "../fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});

const Contact = () => {
    const {lang} = useLangContext();
    const translate = translateArray.find((item) => item.lang === lang)?.translate.contact;

    return (
        <main className={`h-screen w-5/6 mx-auto`}>
            <Head> <title> ARTHURpvn | Contact </title></Head>
            <Header page="contact"/>

            <section className="flex flex-col mx-auto mt-20 w-1/2 max-[580px]:w-5/6 border rounded-lg border-gray-600 p-4 py-5">
                <h1 className={`${geistSans.className} text-4xl max-[580px]:text-2xl font-bold`}> {translate?.title} </h1>
                <p className={`${geistSans.className} text-xl max-[580px]:text-[1rem] text-justify text-gray-400 mt-2`}>  {translate?.content} </p>

                <div className="flex items-center justify-around mt-12 max-[580px]:mt-6 mb-6 max-[580px]:mb-3 ">
                    <a className="text-blue-800 hover:text-blue-600 dark:text-blue-800 dark:hover:text-blue-600 duration-300" href="https://wa.me/5516994611405?text=Ol%C3%A1%20Arthur%2C%20Gostei%20do%20seu%20Portf%C3%B3lio%20e%20conversar%20sobre%20uma%20ideia%20de%20projeto%20que%20tive!"> <IoLogoWhatsapp className="text-4xl scale-150 max-[580px]:scale-100"/> </a>
                    <a className="text-blue-800 hover:text-blue-600 dark:text-blue-800 dark:hover:text-blue-600 duration-300" href="https://www.instagram.com/direct/t/116347366416759/"> <RiInstagramFill className="text-4xl scale-150 max-[580px]:scale-100"/> </a>
                    <a className="text-blue-800 hover:text-blue-600 dark:text-blue-800 dark:hover:text-blue-600 duration-300" href="https://www.linkedin.com/in/arthur-dos-santos-pavan-b39386243/"> <IoLogoLinkedin className="text-4xl scale-150 max-[580px]:scale-100"/> </a>
                </div>
            </section>

            <Footer />
        </main>
    )
}

export default Contact;