"use client";
import localFont from "next/font/local";
import { FaRegCopyright, FaHeart } from "react-icons/fa";
import { translateArray } from "./translate";
import { useLangContext } from "../context/LangContext";
import Link from "next/link";

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const Footer = () => {
  const { lang } = useLangContext();
  const translate = translateArray.find((item) => item.lang === lang)?.translate
    .footer;
  return (
    translate && (
      <footer
        className={`flex flex-col mx-auto mt-20 w-1/2 max-lg:w-5/6 max-lg:text-[.7rem] justify-center items-center border-t gap-2 border-gray-600 py-10 ${geistSans.className} font-light`}
      >
        <div className="flex items-center gap-1">
          <FaRegCopyright />
          <p> 2024 Arthur Pavan | {translate.copy} </p>
        </div>
        <div className="flex items-center gap-1 flex-col">
          <div className="flex items-center gap-1">
            <p> {translate.desc} </p> <FaHeart /> <p> {translate.next} </p>
            <div className="group flex flex-col relative w-max">
              <Link
                href="https://nextjs.org/"
                className="text-blue-600 dark:text-blue-400"
              >
                Next.js
              </Link>
              <div className="h-[2px] w-full absolute left-0 bottom-0 bg-blue-600 dark:bg-blue-400 scale-x-0 group-hover:scale-x-100 duration-300 ease-in"></div>
            </div>
            <div className="group flex flex-col relative w-max">
              <Link
                href="https://react.dev/"
                className="text-blue-600 dark:text-blue-400"
              >
                React
              </Link>
              <div className="h-[2px] w-full absolute left-0 bottom-0 bg-blue-600 dark:bg-blue-400 scale-x-0 group-hover:scale-x-100 duration-300 ease-in"></div>
            </div>
          </div>

          <div className="flex items-center gap-1">
            <p> {translate.projects} </p>
            <div className="group flex flex-col relative w-max">
              <Link
                href="https://github.com/ARTHURpvn"
                className="text-blue-600 dark:text-blue-400"
              >
                GitHub
              </Link>
              <div className="h-[2px] w-full absolute left-0 bottom-0 bg-blue-600 dark:bg-blue-400 scale-x-0 group-hover:scale-x-100 duration-300 ease-in"></div>
            </div>
          </div>
        </div>
      </footer>
    )
  );
};

export default Footer;
