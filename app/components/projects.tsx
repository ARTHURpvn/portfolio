import { SiNextdotjs, SiReact, SiTailwindcss, SiTypescript } from "react-icons/si";
import { GrLinkNext } from "react-icons/gr";

import localFont from "next/font/local";
const geistSans = localFont({
    src: "../fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});

const arrayProjects : Array<{name: string, link: string, tecnologies: Array<{name: string, icon: JSX.Element}>, description: string, image: string, pos: string}> = [

    {name: "Site para Designer", link: "https://clara-design.vercel.app/", tecnologies: [
        {name: "React.js", icon: <SiReact className="scale-125" />}, {name: "Next.js", icon: <SiNextdotjs className="scale-125" />}, {name: "Tailwind", icon: <SiTailwindcss className="scale-125" />}, {name: "TypeScript", icon: <SiTypescript className="scale-125" />},
    ], description: "Um Portfólio Feito Para Uma Designer", image: "siteDesign.png", pos: "bg-center"},

    {name: "Celular", link: "https://celular-react.vercel.app/", tecnologies: [
        {name: "React.js", icon: <SiReact className="scale-125" />}, {name: "Next.js", icon: <SiNextdotjs className="scale-125" />}, {name: "Tailwind", icon: <SiTailwindcss className="scale-125" />}, {name: "TypeScript", icon: <SiTypescript className="scale-125" />},
    ], description: "Um Projeto Feito Fara Ser Usado Em Um Jogo", image: "celularReact.png", pos: "bg-right"},
]

interface ProjectsProps {
    indexValue: number
}

const Projects = ({indexValue}: ProjectsProps)  => {
    return (
        <div className={`group flex flex-col mx-auto relative mt-6 overflow-hidden w-full h-[55vh] max-[580px]:h-[50vh] cursor-pointer rounded-lg border border-gray-600 bg-cover ${arrayProjects[indexValue].pos} bg-no-repeat`}
        style={{backgroundImage: `url(/${arrayProjects[indexValue].image})`}}>
            <span className="bg-gradient-to-t absolute from-[#0e0e0e] from-50% to-transparent w-full h-full translate-y-[65%] group-hover:translate-y-[55%] max-[580px]:translate-y-[50%] max-[580px]:group-hover:translate-y-[45%] duration-500"></span>
            <span className="bg-gradient-to-r absolute from-[#494a68] to-transparent w-full h-full -translate-x-[75%] group-hover:-translate-x-[70%] duration-500"></span>
            <span className="bg-gradient-to-l absolute from-[#494a68] to-transparent w-full h-full translate-x-[75%] group-hover:translate-x-[70%] duration-500"></span>

            <ul className="absolute -bottom-12 left-6 group-hover:bottom-3 z-10 duration-500">
                <h3 className={`${geistSans.className} text-2xl font-bold max-[580px]:text-xl`}> { arrayProjects[indexValue].name } </h3>
                <div>
                    <ul className="flex gap-4  my-3 w-5/6 max-[580px]:gap-1 max-[580px]:my-1 flex-wrap">
                        { arrayProjects[indexValue].tecnologies.map((item, index) => {
                            return (
                                <li key={index} className={`${geistSans.className} flex gap-2 text-lg max-[580px]:text-[.8rem] items-center px-3 py-1 max-[580px]:px-2 max-[580px]:py-0 rounded-lg border border-gray-600`}>
                                    {item.icon}
                                    <p> {item.name} </p>
                                </li>
                            )
                        })}
                    </ul>

                    <div className="w-3/4">
                        <p className={`${geistSans.className} text-neutral-300 text-lg font-semibold max-[580px]:text-[.8rem] max-[580px]:leading-normal`}> { arrayProjects[indexValue].description } </p>
                    </div>

                    <div className="flex">
                        <a href={ arrayProjects[indexValue].link } className={`${geistSans.className} flex text-sm items-center gap-3 px-3 py-1 rounded-lg my-3 text-white bg-blue-500 hover:bg-blue-600 `}> Ver projeto <GrLinkNext /></a>
                    </div>
                </div>
            </ul>
        </div>
    )
}

export default Projects