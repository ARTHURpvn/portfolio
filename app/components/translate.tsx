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

type Image = {
  url: string;
};
type Experience = {
  name: string;
  link: string;
  date: string;
  description: string;
};
type Project = {
  id: number;
  name: string;
  link: string;
  tecnologies: Tecnology[];
  description: string;
  longDescription: string;
  image: string;
  images: Image[];
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
          id: 1,
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
          longDescription: "Neste projeto, eu recrio um celular usando o react e next. O projeto conta com uma calculadora totalmente funcional, quase igual a do dispositivo. Uma página de configuração onde pode escolher o fundo do celular, o tamanho, trocar entre modo claro ou escuro e trocar o modelo do celular (ainda não implementei o outro modelo). Além de um banco fictício . Esse projeto foi feito para usa-lo em um jogo, onde emitira sons de notificação e o banco mostrará o valor que o usuário tem. PROJETO AINDA EM DESENVOLVIMENTO",
          image: "celularReact.png",
          images: [
            {
              url: "celularReact1.png",
            },
            {
              url: "celularReact2.png",
            },
          ],
          pos: "bg-right",
        },
        {
          id: 2,
          name: "Livro de receitas",
          link: "",
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
          longDescription: "Este projeto visa desenvolver uma plataforma web moderna e responsiva para um livro de receitas abrangente, utilizando tecnologias avançadas como React, Next.js e Prisma. A plataforma proporcionará uma experiência de usuário otimizada, permitindo que os usuários naveguem, armazenem e criem receitas. Uma funcionalidade de marcação de favoritos permitirá aos usuários acessar rapidamente suas receitas preferidas. Considerando as diversas preferências de privacidade, os criadores de conteúdo terão a opção de manter suas receitas privadas ou compartilhá-las publicamente com a comunidade.",
          image: "siteRecipe.png",
          images: [
            {
              url: "siteRecipe.png",
            },
            {
              url: "siteRecipe2.png",
            },
          ],
          pos: "",
        },
        {
          id: 3,
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
          longDescription: "Nesse projeto criei uma landing page para uma designer, onde o site é totalmente responsivo e possui uma opção de troca de cor, para que o usuário escolha entre o tema escuro ou claro. O site tem um design moderno criado pela própria designer e conta com duas paginas, a pagina inicial onde tem os links para o whatsapp e o instagram, e outro link mostrando alguns dos projetos ja feito por ela.",
          image: "siteDesign.png",
          images: [
            {
              url: "siteDesign.png",
            },
            {
              url: "siteDesign2.png",
            },
          ],
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
          id: 1,
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
          longDescription: "In this project, I recreate a cell phone using react and next. The project has a fully functional calculator, almost the same as the device. A configuration page where you can choose the background of the phone, the size, switch between light or dark mode and change the model of the phone (not yet implemented the other model). In addition to a fictitious bank . This project was made to use it in a game, where it will emit notification sounds and the bank will show the value that the user has. PROJECT STILL IN DEVELOPMENT",
          image: "celularReact.png",
          images: [
            {
              url: "celularReact1.png",
            },
            {
              url: "celularReact2.png",
            },
          ],
          pos: "bg-right",
        },
        {
          id: 2,
          name: "Recipe Book",
          link: "",
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
          longDescription: "This project aims to develop a modern and responsive web platform for a comprehensive cookbook using advanced technologies such as React, Next.js and Prisma. The platform will provide an optimized user experience, allowing users to browse, store and create recipes. A bookmarking feature will allow users to quickly access their preferred recipes. Considering the various privacy preferences, content creators will have the option to keep their revenues private or share them publicly with the community.",
          image: "siteRecipe.png",
          images: [
            {
              url: "siteRecipe.png",
            },
            {
              url: "siteRecipe2.png",
            },
          ],
          pos: "",
        },
        {
          id: 3,
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
          longDescription: "In this project I created a landing page for a designer, where the site is fully responsive and has a color change option, so that the user chooses between the dark or light theme. The site has a modern design created by the designer herself and has two pages, the home page where she has links to whatsapp and instagram, and another link showing some of the projects already done by her.",
          image: "siteDesign.png",
          images: [
            {
              url: "siteDesign.png",
            },
            {
              url: "siteDesign2.png",
            },
          ],
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
            name: "Email",
            placeholder: "Enter your email...",
          },
          {
            name: "Number",
            placeholder: "Enter your number...",
          },
          {
            name: "Subject",
            placeholder: "Enter your o subject...",
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
