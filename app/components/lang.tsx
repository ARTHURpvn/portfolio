import { useEffect, useState } from "react"
import localFont from "next/font/local";
import { useLangContext } from "../context/LangContext";

const geistMono = localFont({
    src: "../fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

const Translate = () => {
    const { lang, dispatch } = useLangContext();
    const [language, setLanguage] = useState<string >(lang);

    const toggleLanguage = () => {
        dispatch({ type: "setLang", payload: language == "pt-br" ? "en" : "pt-br" });
        setLanguage(language == "pt-br" ? "en" : "pt-br");
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