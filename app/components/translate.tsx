import {
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

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
};
type Main = {
  country: string;
  desc: string;
  more: string;
};
type Resume = {
  name: string;
};

type Input = {
  name: string;
  placeholder: string;
};
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
    input: Input[];
    button: string;
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
          desc: "Olá, sou Arthur, apaixonado por transformar ideias em realidade digital. Com conhecimentos em React, TypeScript e desenvolvimento front-end, já criei diversos projetos, incluindo uma HUD para jogos e mini-games interativos. Sempre pronto para explorar novas tecnologias e aprimorar minhas habilidades.",
          more: "Mais...",
        },
      },
      experience: [
        {
          name: "Site para Designer",
          link: "https://clara-design.vercel.app/",
          date: "Agosto, 2024 - Setembro, 2024",
          description:
            "Web Site feito para uma designer, responsivo e com troca de tema. O projeto foi Finalizado em Setembro",
        },
        {
          name: "Celular",
          link: "https://celular-react.vercel.app/",
          date: "Julho, 2024 - Em andamento",
          description:
            "Projeto feito para ser usado em um jogo, onde irá simular um celular real. O projeto ainda está em andamento",
        },
      ],
      about: {
        titles: {
          about: "Sobre Mim",
          experience: "Experiência",
        },
        resume: [
          {
            name: "Estou concluindo um curso técnico em Informática para Internet na Etec, onde desenvolvo habilidades com foco em tecnologias modernas como React e TypeScript. Mesmo sem estar oficialmente no mercado, mantenho-me ativo em projetos relevantes, como a criação de uma HUD e mini-games para um projeto GTA RP, onde utilizo React e Lua para construir interfaces interativas e dinâmicas.",
          },
          {
            name: "No meu tempo livre, procuro novos conhecimentos e oportunidades de aplicar o que aprendo. Tenho um forte interesse em transformar ideias em realidade digital e estou sempre em busca do próximo desafio.",
          },
          {
            name: "Estou entusiasmado para contribuir com minha criatividade e conhecimentos técnicos em projetos que façam a diferença. Vamos conectar e explorar o que posso agregar ao seu time!",
          },
        ],
      },
      contact: {
        title: "Entre em Contato",
        content:
          "Se caso estiver com alguma dúvida, não exite e entre em contato comigo.",
        input: [
          {
            name: "Nome",
            placeholder: "Informe seu nome...",
          },
          {
            name: "Email",
            placeholder: "Informe seu email...",
          },
          {
            name: "Telefone",
            placeholder: "Informe seu telefone...",
          },
          {
            name: "Assunto",
            placeholder: "Informe o assunto...",
          },
          {
            name: "Mensagem",
            placeholder: "Informe sua mensagem...",
          },
        ],
        button: "Enviar",
      },
      projects: [
        {
          name: "Celular",
          link: "https://celular-react.vercel.app/",
          tecnologies: [
            { name: "React.js", icon: <SiReact className="scale-125" /> },
            { name: "Next.js", icon: <SiNextdotjs className="scale-125" /> },
            { name: "Tailwind", icon: <SiTailwindcss className="scale-125" /> },
            {
              name: "TypeScript",
              icon: <SiTypescript className="scale-125" />,
            },
          ],
          description: "Um Projeto Feito Para Ser Usado Em Um Jogo",
          image: "celularReact.png",
          pos: "bg-right",
        },
        {
          name: "Livro de receitas",
          link: "https://clara-design.vercel.app/",
          tecnologies: [
            { name: "React.js", icon: <SiReact className="scale-125" /> },
            { name: "Next.js", icon: <SiNextdotjs className="scale-125" /> },
            { name: "Tailwind", icon: <SiTailwindcss className="scale-125" /> },
            {
              name: "TypeScript",
              icon: <SiTypescript className="scale-125" />,
            },
          ],
          description: "Um WebSite com receitas adicionadas pelos usuários",
          image: "siteRecipe.png",
          pos: "",
        },
        {
          name: "Site para Designer",
          link: "https://clara-design.vercel.app/",
          tecnologies: [
            { name: "React.js", icon: <SiReact className="scale-125" /> },
            { name: "Next.js", icon: <SiNextdotjs className="scale-125" /> },
            { name: "Tailwind", icon: <SiTailwindcss className="scale-125" /> },
            {
              name: "TypeScript",
              icon: <SiTypescript className="scale-125" />,
            },
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
          desc: "Hello there, I’m Arthur, passionate about transforming ideas into digital reality. Skilled in React, TypeScript, and front-end development, I've created a range of projects, including a game HUD and interactive mini-games. Always ready to explore new technologies and enhance my abilities.",
          more: "More...",
        },
      },
      experience: [
        {
          name: "WebSite for Designer",
          link: "https://clara-design.vercel.app/",
          date: "August, 2024 - September, 2024",
          description:
            "Web Site made for a designer, responsive and with change of theme. The project was finalized in Setembro",
        },
        {
          name: "CellPhone",
          link: "https://celular-react.vercel.app/",
          date: "July, 2024 - In Progress",
          description:
            "Project made for being used in a game, where it will simulate a real cellphone. The project is still in progress",
        },
      ],
      projects: [
        {
          name: "CellPhone",
          link: "https://celular-react.vercel.app/",
          tecnologies: [
            { name: "React.js", icon: <SiReact className="scale-125" /> },
            { name: "Next.js", icon: <SiNextdotjs className="scale-125" /> },
            { name: "Tailwind", icon: <SiTailwindcss className="scale-125" /> },
            {
              name: "TypeScript",
              icon: <SiTypescript className="scale-125" />,
            },
          ],
          description: "Project made for being used in a game",
          image: "celularReact.png",
          pos: "bg-right",
        },
        {
          name: "Recipe Book",
          link: "https://clara-design.vercel.app/",
          tecnologies: [
            { name: "React.js", icon: <SiReact className="scale-125" /> },
            { name: "Next.js", icon: <SiNextdotjs className="scale-125" /> },
            { name: "Tailwind", icon: <SiTailwindcss className="scale-125" /> },
            {
              name: "TypeScript",
              icon: <SiTypescript className="scale-125" />,
            },
          ],
          description: "WebSite with recipes added by users",
          image: "siteRecipe.png",
          pos: "",
        },
        {
          name: "WebSite for Designer",
          link: "https://clara-design.vercel.app/",
          tecnologies: [
            { name: "React.js", icon: <SiReact className="scale-125" /> },
            { name: "Next.js", icon: <SiNextdotjs className="scale-125" /> },
            { name: "Tailwind", icon: <SiTailwindcss className="scale-125" /> },
            {
              name: "TypeScript",
              icon: <SiTypescript className="scale-125" />,
            },
          ],
          description: "Portfolio made for a designer",
          image: "siteDesign.png",
          pos: "bg-center",
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
            name: "Since I was young, I have been fascinated by the world of technology. As a child, I didn’t know how to program or fix a computer, but whenever a technician was called, I would watch carefully and learn a bit about how things worked.",
          },
          {
            name: "I began to identify as a front-end developer during technical high school. In 2021, I started studying programming logic and learning HTML and CSS. The following year, in 2022, I delved into JavaScript, striving to continuously improve my web development skills.",
          },
          {
            name: "n 2024, I began studying Next.js and React, and that’s when I fell even more in love with the programming world. I connected with these “modern” technologies and started developing personal projects, exploring new possibilities in web development.",
          },
        ],
      },
      contact: {
        title: "Contact Me",
        content:
          "If you have any questions, please don't hesitate to contact me.",
        input: [
          {
            name: "Name",
            placeholder: "Enter your name...",
          },
          {
            name: "Phone",
            placeholder: "Enter your phone...",
          },
          {
            name: "Subject",
            placeholder: "Enter the subject...",
          },
          {
            name: "Email",
            placeholder: "Enter your email...",
          },
          {
            name: "Message",
            placeholder: "Enter your message...",
          },
        ],
        button: "Send",
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
