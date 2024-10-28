'use client';

import localFont from "next/font/local";
import { MdOutlineEmail, MdLocationPin  } from "react-icons/md";
import { IoLogoGithub, IoLogoInstagram } from "react-icons/io";

import Header from "./components/header";
import Ability from "./components/abilty";
import Experience from "./components/experience";
import Footer from "./components/footer";
import Projects from "./components/projects";


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
  return (
    <main className={`h-screen w-5/6 mx-auto`}>
      <Header />

      <section className="flex flex-col mx-auto mt-16 border rounded-lg border-gray-600 w-1/2 p-6">
        <div className="flex items-center justify-between w-full">
          <h1 className={`${geistSans.className} text-4xl font-bold`}>Arthur Pavan</h1>

          <nav className="flex gap-5">
            <a href="" className="flex items-center rounded-lg border border-gray-600 p-3"> <MdOutlineEmail className="scale-150"/> </a>
            <a href="https://github.com/ARTHURpvn" className="flex items-center rounded-lg border border-gray-600 p-3"> <IoLogoGithub className="scale-150"/> </a>
            <a href="" className="flex items-center rounded-lg border border-gray-600 p-3"> <IoLogoInstagram className="scale-150"/> </a>
          </nav>
        </div>

        <div className={`${geistMono.className} flex gap-2 items-center text-gray-500 mb-6`}>
            <MdLocationPin />
            <p> São Paulo, Brasil </p>
        </div>

        <p className={`${geistSans.className} text-lg`}> Olá! Tenho 18 anos, sou programador front-end à 3 anos, consigo transformar suas ideias em projetos ágeis e modernos. </p>
      </section>

      <section className="flex flex-col mx-auto mt-20 w-1/2">
        <h1 className={`${geistSans.className} text-4xl font-bold`}> Habilidades </h1>
        <Ability />
      </section>

      <section className="flex flex-col mx-auto mt-20 w-1/2">
        <h1 className={`${geistSans.className} text-4xl font-bold`}> Experiência </h1>
          <div>
            <Experience />
          </div>
      </section>

      <section className="flex flex-col mx-auto mt-8 w-1/2">
        <h1 className={`${geistSans.className} text-4xl font-bold`}> Meus Projetos </h1>

        <Projects indexValue={0}/>
        <Projects indexValue={1}/>

        <div className="flex">
          
          <a href="" className={`${geistSans.className} text-blue-400 text-lg mt-3`} >Mais...</a>
        </div>
      </section>

      <Footer />
    </main>
  );
}

export default Home;