"use client";
import Link from "next/link";
import localFont from "next/font/local";
import Footer from "@/app/components/footer";
import Header from "@/app/components/header";
import { translateArray } from "@/app/components/translate";
import { useLangContext } from "../context/LangContext";
import ContactEmail from "../components/contact";
import { IoLogoGithub, IoLogoInstagram, IoLogoLinkedin } from "react-icons/io";

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const Contact = () => {
  const { lang } = useLangContext();
  const translate = translateArray.find((item) => item.lang === lang)?.translate
    .contact;

  return (
    <main className={`h-screen w-5/6 mx-auto`}>
      <Header page="contact" />

      <section className="flex flex-col mx-auto mt-20 w-1/2 max-lg:w-5/6 border rounded-lg border-gray-600 p-4 py-5">
        <div className="flex items-center justify-between">
          <h1
            className={`${geistSans.className} text-4xl max-lg:text-2xl font-bold`}
          >
            {translate?.title}
          </h1>
          <nav className="flex gap-5 max-lg:gap-2">
            <Link
              href="https://www.linkedin.com/in/arthurpvn/"
              role="linkedin button"
              aria-label="linkedin button"
              className="flex items-center rounded-lg border border-gray-600 p-3"
            >
              <IoLogoLinkedin className="scale-150 max-lg:scale-125" />
            </Link>
            <Link
              href="https://github.com/ARTHURpvn"
              role="github button"
              aria-label="github button"
              className="flex items-center rounded-lg border border-gray-600 p-3"
            >
              <IoLogoGithub className="scale-150 max-lg:scale-125" />
            </Link>
            <Link
              href="https://www.instagram.com/arthur.pvn/"
              role="instagram button"
              aria-label="instagram button"
              className="flex items-center rounded-lg border border-gray-600 p-3"
            >
              <IoLogoInstagram className="scale-150 max-lg:scale-125" />
            </Link>
          </nav>
        </div>
        <p
          className={`${geistSans.className} text-xl max-lg:text-[1rem] text-justify text-gray-400 mt-2`}
        >
          {translate?.content}
        </p>

        <hr className="border-gray-600 my-10" />
        <div className="flex flex-col">
          <ContactEmail />
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Contact;
