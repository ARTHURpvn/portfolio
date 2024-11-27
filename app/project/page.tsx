"use client";
import localFont from "next/font/local";

import { useLangContext } from "../context/LangContext";
import Footer from "../components/footer";
import Header from "../components/header";
import { translateArray } from "../components/translate";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const Project = () => {
  const { lang, project } = useLangContext();

  if (project === 0) {
    redirect("/projects");
  }

  const translate = translateArray.find((item) => item.lang === lang)?.translate
    .projects;

  const translateProject = translate?.find((item) => item.id === project);

  console.log(translateProject);

  return (
    <main className={`h-screen w-5/6 mx-auto`}>
      <Header page="project" />

      <section className="flex flex-col mx-auto p-6 border rounded-lg border-gray-600 mt-20 w-1/2 max-sm:w-5/6">
        <h1
          className={`${geistSans.className} text-4xl font-bold max-sm:text-center`}
        >
          {translateProject?.name}
        </h1>

        {/* mapeando as linguagens utilizadas no projeto selecionado */}
        <ul className="flex gap-4 mt-6 w-full max-sm:gap-1 max-sm:mt-3 flex-wrap">
          {translateProject?.tecnologies.map((item, index) => {
            return (
              <li
                key={index}
                className="flex items-center gap-3 py-2 px-3 rounded-lg border border-gray-600 max-sm:gap-2 "
              >
                <i className="max-sm:text-sm">{item.icon}</i>
                <p
                  className={`${geistSans.className} text-lg max-sm:text-[1rem]`}
                >
                  {item.name}
                </p>
              </li>
            );
          })}
        </ul>

        <p
          className={`${geistSans.className} text-lg mt-6 text-gray-400 max-sm:text-[1rem]`}
        >
          {translateProject?.description}
        </p>
      </section>

      <section className="flex flex-col mx-auto mt-10 w-1/2 max-sm:w-5/6">
        <p className={`${geistSans.className} text-lg text-justify`}>
          {translateProject?.longDescription}
        </p>
      </section>

      {/* mapeando as imagens informadas no projeto */}
      <section className="relative flex mx-auto mt-6 w-1/2 max-sm:w-5/6 max-lg:h-[40vh] h-[80vh]">
        <div className="space-y-6 w-full h-[40vh] max-lg:h-[20vh]">
          {translateProject?.images.map((item, index) => {
            return (
              <div key={index} className="relative w-full h-full rounded-lg overflow-hidden">
                <Image
                  key={index}
                  src={"/" + item.url}
                  fill={true}
                  alt={translateProject.name}
                  className="object-contain"
                />
              </div>
            );
          })}
        </div>
      </section>

      <section className=" flex flex-col mx-auto mt-6 w-1/2 max-sm:w-5/6">
        <div className="group flex flex-col w-max mt-3">
          <Link
            href={translateProject?.link as string}
            className={`${geistSans.className} text-2xl max-sm:text-xl w-auto font-bold text-blue-600 dark:text-blue-400`}
          >
            ./{translateProject?.name}
          </Link>
          <div className="h-1 max-sm:h-[3px] w-full bg-blue-400 scale-x-0 group-hover:scale-x-100 duration-300 ease-in"></div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Project;
