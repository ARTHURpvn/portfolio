import localFont from "next/font/local";
import { MdSunny } from "react-icons/md";

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
  
const Header = () => {
    const name : string = "<ARTHURpvn />";
    return (
        <header className="flex justify-around items-center h-[8%] ">
            <a className={`font-bold text-xl ${geistMono.className} text-blue-400`}> {name} </a>

            <nav className={`gap-6 flex ${geistSans.className} tracking-widest font-normal`}>
                <a href="">Sobre</a>
                <a href="">Projetos</a>
                <a href="">Projetos</a>
                <a href="">Contato</a>
            </nav>

            <div className="flex items-center gap-12">
                <h2 className={`font-bold ${geistMono.className}`}>English</h2>
                <MdSunny />
            </div>
        </header>
    );
}

export default Header