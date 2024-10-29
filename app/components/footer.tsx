import localFont from "next/font/local";
import { FaRegCopyright, FaHeart  } from "react-icons/fa";

const geistSans = localFont({
    src: "../fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
  });


const Footer = () => {
    return (
        <footer className={`flex flex-col mx-auto mt-20 w-1/2 max-[580px]:w-5/6 max-[580px]:text-[.7rem] justify-center items-center border-t gap-2 border-gray-600 py-10 ${geistSans.className} font-light`}>
            <div className="flex items-center gap-1">
                <FaRegCopyright />
                <p> 2024 Arthur Pavan | Criado em São Paulo, Brasil </p>
            </div>
            <div className="flex items-center gap-1 flex-col">
                <div className="flex items-center gap-1">
                    <p> Construido com </p> <FaHeart /> <p> usando </p>
                    <div className="group flex flex-col relative w-max">
                        <a href="https://nextjs.org/" className="text-blue-600 dark:text-blue-400"> Next.js </a>
                        <div className="h-[2px] w-full absolute left-0 bottom-0 bg-blue-600 dark:bg-blue-400 scale-x-0 group-hover:scale-x-100 duration-300 ease-in"></div>
                    </div>
                    <div className="group flex flex-col relative w-max">
                        <a href="https://react.dev/" className="text-blue-600 dark:text-blue-400"> React </a>
                        <div className="h-[2px] w-full absolute left-0 bottom-0 bg-blue-600 dark:bg-blue-400 scale-x-0 group-hover:scale-x-100 duration-300 ease-in"></div>
                    </div>
                </div>

                <div className="flex items-center gap-1">
                    <p>  Olhe Meus Projetos no </p>
                    <div className="group flex flex-col relative w-max">
                        <a href="https://github.com/ARTHURpvn" className="text-blue-600 dark:text-blue-400"> GitHub </a>
                        <div className="h-[2px] w-full absolute left-0 bottom-0 bg-blue-600 dark:bg-blue-400 scale-x-0 group-hover:scale-x-100 duration-300 ease-in"></div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer