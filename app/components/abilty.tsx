'use client';
import localFont from "next/font/local";
import { SiNextdotjs, SiReact, SiTailwindcss, SiJavascript, SiTypescript, SiHtml5, SiCss3, SiPhp, SiMysql, SiGithub } from "react-icons/si";

const abilityArray : Array<{name: string, icon: JSX.Element}> = [
    {name: "React.js", icon: <SiReact className="scale-150" />},
    {name: "Next.js", icon: <SiNextdotjs className="scale-150" />},
    {name: "Tailwind", icon: <SiTailwindcss className="scale-150" />},
    {name: "JavaScript", icon: <SiJavascript className="scale-150" />},
    {name: "TypeScript", icon: <SiTypescript className="scale-150" />},
    {name: "HTML", icon: <SiHtml5 className="scale-150" />},
    {name: "CSS", icon: <SiCss3 className="scale-150" />},
    {name: "Git", icon: <SiGithub className="scale-150" />},
    {name: "PHP", icon: <SiPhp className="scale-150" />},
    {name: "MySQL", icon: <SiMysql className="scale-150" />},
]

const geistSans = localFont({
    src: "../fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
  });

const AbilityList = abilityArray.map((ability, index) => {
    return (
        <li key={index} className="flex gap-[1rem]">
            <div className="flex items-center gap-3">
                {ability.icon}
                <p className={`${geistSans.className} text-xl`}>{ability.name}</p>
            </div>
        </li>
    )
})
const Ability = () => {
    return  (
        <div className="group flex overflow-hidden p-2 [--duration:30s] [--gap:1.4rem] [gap:var(--gap)] flex-row relative mt-6 cursor-default">
            <ul className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row group-hover:[animation-play-state:paused] max-w-none">
                {AbilityList}
            </ul>
            <ul className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row group-hover:[animation-play-state:paused] max-w-none">
                {AbilityList}
            </ul>
            <ul className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row group-hover:[animation-play-state:paused] max-w-none">
                {AbilityList}
            </ul>

            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/5 bg-gradient-to-r from-background to-transparent"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/5 bg-gradient-to-l from-background to-transparent"></div>
        </div>
    );
}

export default Ability;