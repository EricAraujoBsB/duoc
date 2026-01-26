import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";

const Menu = dynamic(() => import('./menu'), {loading: ()=>null});

export default function Header() {
    const links = [
        { name: "SOBRE", id: "about"},
        { name: "SERVIÇOS", id: "services"},
        { name: "PROJETOS", id: "projects"},
        { name: "PARCEIROS", id: "partners"},
        { name: "CONTATO", id: "contact"},
    ]
    const ListWidth = [
        {name:"About", value:60},
        {name:"Services", value:85},
        {name:"Projects", value:90},
        {name:"Partners", value:100},
        {name:"Contat", value:85},
    ]
    return(
        <header id="header" className="absolute z-30 top-0 w-full flex justify-between lg:bg-transparent/50 lg:backdrop-blur-md text-white items-center py-5 px-7 lg:px-10">
            <Image src="/LOGO.svg" alt="Logo" width={150} height={75} className="lg:hidden"/>  
            <Image src="/LOGO.svg" alt="Logo" width={150} height={50} className="hidden lg:block"/>            
            <Menu>
                <ul className="flex flex-col lg:flex-row justify-center items-center gap-5">
                    {links.map( 
                        (link, index) => 
                            <li key={link.name}>
                                <Link href={`/#${link.id}`}className="text-white cursor-pointer lg:inline-block lg:hover:font-bold lg:transition lg:hover:scale-105 lg:min-w-[var(--min-w)]"  style={{'--min-w':`${ListWidth[index].value}px`}as CSSProperties}>
                                    {link.name}
                                </Link>
                            </li>
                    )}

                    <li>
                        <Link href="/#contact" className="px-2.5 py-1.5 bg-[#DAA520] text-black font-bold text-center cursor-pointer lg::transition lg:hover:scale-105 lg:px-2.5 lg:py-1.5 lg:text-[14px]">
                            SOLICITAR ORÇAMENTO
                        </Link>
                    </li>
                </ul>
            </Menu>
        </header>
    )
}
