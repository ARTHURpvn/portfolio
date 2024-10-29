import localFont from "next/font/local";
import Theme from "./theme";

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
        <header className="flex justify-around items-center h-[8%] relative">
            <a href="" className={`font-bold text-xl ${geistMono.className} dark:text-orange-400 text-orange-600 max-[580px]:text-md font-semibold`}> {name} </a>

            <nav className={`gap-6 flex ${geistSans.className} tracking-widest max-[580px]:absolute max-[580px]:-bottom-6`}>
                    <a href="" className="hover:text-orange-400 dark:hover:text-orange-200 duration-300"> Sobre</a>
                    <a href="" className="hover:text-orange-400 dark:hover:text-orange-200 duration-300"> Projetos</a>
                    <a href="" className="hover:text-orange-400 dark:hover:text-orange-200 duration-300"> Contato</a>
            </nav>

            <div className="flex items-center gap-8 max-[580px]:gap-4">
                <h2 className={`font-bold ${geistMono.className} cursor-pointer max-[580px]:font-semibold text-sm`}>English</h2>
                <Theme />
            </div>
        </header>
    );
}

export default Header;