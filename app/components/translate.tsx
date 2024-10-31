import { useEffect, useState } from "react"
import localFont from "next/font/local";
import { SiNextdotjs, SiReact, SiTailwindcss, SiTypescript } from "react-icons/si";

const geistMono = localFont({
    src: "../fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

type Tecnology = {
    name: string;
    icon: JSX.Element;
};

type Experience = {
    name: string;
    link: string;
    date: string;
    description: string;
};

type Project = {
    name: string;
    link: string;
    tecnologies: Tecnology[];
    description: string;
    image: string;
    pos: string;
};

type Translate = {
    header: {
        about: string;
        projects: string;
        contact: string;
    };
    titles: {
        ability: string;
        experience: string;
        projects: string;
    };
    main: {
        country: string;
        desc: string;
        more: string;
    };
    experience: Experience[];
    projects: Project[];
    seeProject: string;
    footer: {
        copy: string;
        desc: string;
        next: string;
        projects: string;
    };
};

type LanguageTranslate = {
    lang: string;
    translate: Translate;
};

export const translateArray: LanguageTranslate[] = [
    {
        lang: "pt-br",
        translate: {
            header: {
                about: "Sobre",
                projects: "Projetos",
                contact: "Contato",
            },
            titles: {
                ability: "Habilidades",
                experience: "Experiência",
                projects: "Meus Projetos",
            },
            main: {
                country: "São Paulo, Brasil",
                desc: "Olá! Tenho 18 anos, sou programador front-end há 3 anos, consigo transformar suas ideias em projetos modernos.",
                more: "Mais...",
            },
            experience: [
                {
                    name: "Site para Designer",
                    link: "https://clara-design.vercel.app/",
                    date: "Agosto, 2024 - Setembro, 2024",
                    description: "Web Site feito para uma designer, responsivo e com troca de tema. O projeto foi Finalizado em Setembro",
                },
                {
                    name: "Celular",
                    link: "https://celular-react.vercel.app/",
                    date: "Julho, 2024 - Em andamento",
                    description: "Projeto feito para ser usado em um jogo, onde irá simular um celular real. O projeto ainda está em andamento",
                },
            ],
            projects: [
                {
                    name: "Site para Designer",
                    link: "https://clara-design.vercel.app/",
                    tecnologies: [
                        { name: "React.js", icon: <SiReact className="scale-125" /> },
                        { name: "Next.js", icon: <SiNextdotjs className="scale-125" /> },
                        { name: "Tailwind", icon: <SiTailwindcss className="scale-125" /> },
                        { name: "TypeScript", icon: <SiTypescript className="scale-125" /> },
                    ],
                    description: "Um Portfólio Feito Para Uma Designer",
                    image: "siteDesign.png",
                    pos: "bg-center",
                },
                {
                    name: "Celular",
                    link: "https://celular-react.vercel.app/",
                    tecnologies: [
                        { name: "React.js", icon: <SiReact className="scale-125" /> },
                        { name: "Next.js", icon: <SiNextdotjs className="scale-125" /> },
                        { name: "Tailwind", icon: <SiTailwindcss className="scale-125" /> },
                        { name: "TypeScript", icon: <SiTypescript className="scale-125" /> },
                    ],
                    description: "Um Projeto Feito Para Ser Usado Em Um Jogo",
                    image: "celularReact.png",
                    pos: "bg-right",
                },
            ],
            seeProject: "Ver Projeto",
            footer: {
                copy: "Criado em São Paulo, Brasil",
                desc: "Construido com",
                next: "usando",
                projects: "Olhe Meus Projetos no",
            },
        },
    },
    {
        lang: "en",
        translate: {
            header: {
                about: "About",
                projects: "Project",
                contact: "Contact",
            },
            titles: {
                ability: "Ability",
                experience: "Experience",
                projects: "My projects",
            },
            main: {
                country: "Sao Paulo, Brazil",
                desc: "Hello there! I'm 18 years old, I'm a front-end developer for 3 years, I can transform your ideas into modern projects.",
                more: "More...",
            },
            experience: [
                {
                    name: "WebSite for Designer",
                    link: "https://clara-design.vercel.app/",
                    date: "August, 2024 - September, 2024",
                    description: "Web Site made for a designer, responsive and with change of theme. The project was finalized in Setembro",
                },
                {
                    name: "CellPhone",
                    link: "https://celular-react.vercel.app/",
                    date: "July, 2024 - In Progress",
                    description: "Project made for being used in a game, where it will simulate a real cellphone. The project is still in progress",
                },
            ],
            projects: [
                {
                    name: "WebSite for Designer",
                    link: "https://clara-design.vercel.app/",
                    tecnologies: [
                        { name: "React.js", icon: <SiReact className="scale-125" /> },
                        { name: "Next.js", icon: <SiNextdotjs className="scale-125" /> },
                        { name: "Tailwind", icon: <SiTailwindcss className="scale-125" /> },
                        { name: "TypeScript", icon: <SiTypescript className="scale-125" /> },
                    ],
                    description: "Portfolio made for a designer",
                    image: "siteDesign.png",
                    pos: "bg-center",
                },
                {
                    name: "CellPhone",
                    link: "https://celular-react.vercel.app/",
                    tecnologies: [
                        { name: "React.js", icon: <SiReact className="scale-125" /> },
                        { name: "Next.js", icon: <SiNextdotjs className="scale-125" /> },
                        { name: "Tailwind", icon: <SiTailwindcss className="scale-125" /> },
                        { name: "TypeScript", icon: <SiTypescript className="scale-125" /> },
                    ],
                    description: "Project made for being used in a game",
                    image: "celularReact.png",
                    pos: "bg-right",
                },
            ],
            seeProject: "See Project",
            footer: {
                copy: "Made in Sao Paulo, Brazil",
                desc: "Builded with",
                next: "using",
                projects: "See my projects on",
            },
        },
    },
];
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