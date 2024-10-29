import localFont from "next/font/local";
const geistSans = localFont({
    src: "../fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
  });
  
  const geistMono = localFont({
    src: "../fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
  });

const experienciasArray : Array<{name: string, link: string, date: string, description: string}> = [
    {name: "Site para Designer", link: "https://clara-design.vercel.app/", date: "Agosto, 2024 - Setembro, 2024", description: "Web Site feito para uma designer, responsivo e com troca de tema. O projeto foi Finalizado em Setembro"},
    {name: "Celular", link: "https://celular-react.vercel.app/", date: "Julho, 2024 - Em andamento", description: "Projeto feito para ser usado em um jogo, onde irá simular um celular real. O projeto ainda esta em andamento"},
];
  
const Experience = () => {
    return (
        <ul className="mt-6 mx-6">
            {experienciasArray &&
                experienciasArray.map((experience, index) => {
                    return (
                        <li key={index} className="flex flex-col mb-12  max-[580px]:mb-8">
                            <header className="mb-3">
                                <div className=" group flex flex-col w-max">
                                    <a href={experience.link} className={`${geistSans.className} text-2xl max-[580px]:text-xl w-auto font-bold text-blue-400`}> ./{experience.name} </a>
                                    <div className="h-1 max-[580px]:h-[3px] w-full bg-blue-400 scale-x-0 group-hover:scale-x-100 duration-300 ease-in"></div>
                                </div>
                                <p className={`${geistMono.className} text-sm max-[580px]:text-[0.8rem] text-gray-500`}>{experience.date}</p>
                            </header>
                            <p className={`${geistSans.className} text-lg max-[580px]:text-[1rem] text-gray-300`}> {experience.description} </p>
                        </li>
                    )
                })}
        </ul>
    )
}

export default Experience;