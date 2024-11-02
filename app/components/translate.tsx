import { SiNextdotjs, SiReact, SiTailwindcss, SiTypescript } from "react-icons/si";

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
type Titles = {
    about?: string;
    ability?: string;
    experience: string;
    projects?: string;
}
type Main = {
    country: string;
    desc: string;
    more: string;
};
type Resume = {
    name: string;
}
type Translate = {
    header: {
        about: string;
        projects: string;
        contact: string;
    };
    home: {
        titles: Titles;
        main: Main;
    };
    experience: Experience[];
    about: {
        titles: Titles;
        resume: Resume[];
    };
    projects: Project[];
    contact: {
        title: string;
        content: string;
    };
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
            home: {
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
            about: {
                titles: {
                    about: "Sobre Mim",
                    experience: "Experiência"
                },
                resume: [
                    {
                        name: "Desde pequeno, sou fascinado pelo mundo da tecnologia. Quando criança, eu não sabia programar ou consertar o computador, mas sempre observava atentamente o técnico quando ele era chamado, aprendendo um pouco sobre como as coisas funcionavam."
                    },
                    {
                        name: "Comecei a me identificar como desenvolvedor front-end durante o ensino médio técnico. Em 2021, iniciei meus estudos em lógica de programação e aprendi HTML e CSS. No ano seguinte, em 2022, aprofundei-me em JavaScript, buscando melhorar cada vez mais minhas habilidades no desenvolvimento de sites."
                    },
                    {
                        name: "Em 2024, comecei a estudar Next.js e React, e foi aí que me apaixonei ainda mais pelo mundo da programação. Identifiquei-me com essas tecnologias 'modernas' e passei a desenvolver projetos pessoais, explorando novas possibilidades no desenvolvimento web."
                    },
                ],
            },
            contact: {
                title: "Entre em contato",
                content: "Se caso estiver com alguma duvida, por favor nao exite e entre em contato."
            },
            projects: [
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
            home: {
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
            about: {
                titles: {
                    about: "About me",
                    experience: "Experience",
                },
                resume: [
                    {
                        name: "Since I was young, I have been fascinated by the world of technology. As a child, I didn’t know how to program or fix a computer, but whenever a technician was called, I would watch carefully and learn a bit about how things worked."
                    },
                    {
                        name: "I began to identify as a front-end developer during technical high school. In 2021, I started studying programming logic and learning HTML and CSS. The following year, in 2022, I delved into JavaScript, striving to continuously improve my web development skills."
                    },
                    {
                        name: "n 2024, I began studying Next.js and React, and that’s when I fell even more in love with the programming world. I connected with these “modern” technologies and started developing personal projects, exploring new possibilities in web development."
                    },
                ],
            },
            contact: {
                title: "Contact Me",
                content: "If you have any questions, please don't hesitate to contact me.",
            },
            footer: {
                copy: "Made in Sao Paulo, Brazil",
                desc: "Builded with",
                next: "using",
                projects: "See my projects on",
            },
        },
    },
];