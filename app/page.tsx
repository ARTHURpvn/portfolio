'use client';
import localFont from "next/font/local";
import { MdLocationPin  } from "react-icons/md";
import { IoLogoGithub, IoLogoInstagram,IoLogoLinkedin  } from "react-icons/io";

import Header from "./components/header";
import Ability from "./components/abilty";
import Experience from "./components/experience";
import Footer from "./components/footer";
import Projects from "./components/projects";
import { translateArray } from "./components/translate";
import {  useLangContext } from "./context/LangContext";
import Link from "next/link";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const Home = () => {
  const {lang} = useLangContext();
  const translate = translateArray.find((item) => item.lang === lang)?.translate.home;


  return (
    <main className={`h-screen w-5/6 mx-auto`}>
      <Header page="home"/>
      
      <section className="flex flex-col mx-auto mt-16 border rounded-lg border-gray-600 w-1/2 max-lg:w-5/6 max-lg:p-3 p-6">
        <div className="flex items-center justify-between w-full">
          <h1 className={`${geistSans.className} text-4xl font-bold max-lg:text-2xl`}> Arthur Pavan </h1>

          <nav className="flex gap-5 max-lg:gap-2">
            <Link href="https://www.linkedin.com/in/arthurpvn/" role="linkedin button" aria-label="linkedin button" className="flex items-center rounded-lg border border-gray-600 p-3"> <IoLogoLinkedin className="scale-150 max-lg:scale-125"/> </Link>
            <Link href="https://github.com/ARTHURpvn" role="github button" aria-label="github button" className="flex items-center rounded-lg border border-gray-600 p-3"> <IoLogoGithub className="scale-150 max-lg:scale-125"/> </Link>
            <Link href="https://www.instagram.com/arthur.pvn/" role="instagram button" aria-label="instagram button" className="flex items-center rounded-lg border border-gray-600 p-3"> <IoLogoInstagram className="scale-150 max-lg:scale-125"/> </Link>
          </nav>
        </div>

        <div className={`${geistMono.className} flex gap-2 items-center text-gray-900 dark:text-gray-500 mb-6 max-lg:mb-3 max-lg:text-[.9rem]`}>
            <MdLocationPin />
            <p> São Paulo, Brasil </p>
        </div>

        <p className={`${geistSans.className} text-lg  max-lg:text-[1rem]`}> {translate?.main.desc} </p>
      </section>

      <section className="flex flex-col mx-auto mt-20 w-1/2 max-lg:w-5/6">
        <h1 className={`${geistSans.className} text-4xl font-bold`}> {translate?.titles.ability} </h1>
        <Ability />
      </section>

      <section className="flex flex-col mx-auto mt-20 w-1/2 max-lg:w-5/6">
        <h1 className={`${geistSans.className} text-4xl font-bold`}> {translate?.titles.experience} </h1>
          <div>
            <Experience />
          </div>
      </section>

      <section className="flex flex-col mx-auto mt-8 w-1/2 max-lg:w-5/6">
        <h1 className={`${geistSans.className} text-4xl font-bold`}> {translate?.titles.projects} </h1>

        <Projects indexValue={0}/>

        <div className="flex">
          
          <Link href="/project" className={`${geistSans.className} text-blue-600 dark:text-blue-400 text-lg mt-3 max-lg:text-[.9rem]`} > {translate?.main.more} </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}

export default Home;