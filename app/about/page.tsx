"use client";

import Header from "../components/header";
import localFont from "next/font/local";
import Experience from "../components/experience";
import Footer from "../components/footer";

import { translateArray } from "../components/translate";
import { useLangContext } from "../context/LangContext";

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const About = () => {
  const { lang } = useLangContext();
  const translate = translateArray.find((item) => item.lang === lang)?.translate
    .about;

  return (
    <main className={`h-screen w-5/6 mx-auto`}>
      <Header page="about" />
      <section className="flex flex-col mx-auto mt-20 w-1/2 max-lg:w-5/6">
        <h1 className={`${geistSans.className} text-4xl font-bold`}>
          {translate?.titles.about}
        </h1>
        <div
          className={`${geistSans.className} flex flex-col mt-3 text-lg gap-3 text-justify`}
        >
          {translate?.resume.map((item, index) => {
            return <p key={index}> {item.name}</p>;
          })}
        </div>
      </section>

      <section className="flex flex-col mx-auto mt-20 w-1/2 max-lg:w-5/6">
        <h1 className={`${geistSans.className} text-4xl font-bold`}>
          {translate?.titles.experience}
        </h1>
        <div>
          <Experience />
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default About;
