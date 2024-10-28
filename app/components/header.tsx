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
            <a href="" className={`font-bold text-xl ${geistMono.className} text-orange-400`}> {name} </a>

            <nav className={`gap-6 flex ${geistSans.className} tracking-widest font-normal`}>
                <div className="group">
                    <a href="" className="hover:text-orange-200 duration-300">Sobre</a>
                </div>

                <div className="group">
                    <a href="" className="hover:text-orange-200 duration-300">Projetos</a>
                </div>

                <div className="group">
                    <a href="" className="hover:text-orange-200 duration-300">Projetos</a>
                </div>

                <div className="group">
                    <a href="" className="hover:text-orange-200 duration-300">Contato</a>
                </div>   
            </nav>

            <div className="flex items-center gap-12">
                <h2 className={`font-bold ${geistMono.className} cursor-pointer`}>English</h2>
                <MdSunny className="cursor-pointer"/>
            </div>
        </header>
    );
}

export default Header;