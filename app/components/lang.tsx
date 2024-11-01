import { useEffect, useState } from "react"
import localFont from "next/font/local";

const geistMono = localFont({
    src: "../fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

const Translate = () => {
    const [language, setLanguage] = useState<string >("pt-br");
    const toggleLanguage = () => {
        setLanguage(localStorage.getItem("lang") === "pt-br" ? "en" : "pt-br");
        console.log(localStorage.getItem("lang"))
    };

    useEffect(() => {
        localStorage.setItem("lang", language);
    }, [language])

    return (
        <a className={`font-bold ${geistMono.className} cursor-pointer max-[580px]:font-semibold text-sm w-24 text-end hover:text-orange-400 dark:hover:text-orange-200 duration-300`} onClick={toggleLanguage}>
            {language == "pt-br" ? "English" : "Português"}
        </a>

    )
}
export default Translate;