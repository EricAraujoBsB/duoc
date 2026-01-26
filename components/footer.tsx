import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    const socialMedia = [
        {name: "Facebook", url: "/facebook.svg", link: "https://www.facebook.com/duocengenharia", mobileWidth: 12, mobileHeight: 20, desktopWidth: 14.5, desktopHeight: 25},
        {name: "Instagram", url: "/instagram.svg", link: "https://www.instagram.com/duocengenharia/", mobileWidth: 20, mobileHeight: 20, desktopWidth: 25, desktopHeight: 25},
        {name: "Pinterest", url: "/pinterest.svg", link: "https://www.pinterest.com/duocengenharia/", mobileWidth: 16, mobileHeight: 20, desktopWidth: 21, desktopHeight: 25},
    ]
    return(
        <footer className="flex flex-col lg:flex-row justify-between items-center bg-[#202020] py-5 px-7 lg:px-10">
            <Image src="/LOGO.svg" alt="Logo" width={150} height={50} className="hidden lg:block"/> 
            <p className="text-[#FFFFFF]/60 text-center text-[10px]">© 2026 DUOC Arquitetura e Engenharia.<br/>Todos os direitos reservados.</p>
            <ul className="flex mt-2.5 gap-5">
                {socialMedia.map((item, index) => (
                    <li key={index}>
                        <Link href={item.link}>
                            <Image src={item.url} alt={`${item.name} Icon`} width={item.mobileWidth} height={item.mobileHeight} className="lg:hidden"/>
                            <Image src={item.url} alt={`${item.name} Icon`} width={item.desktopWidth} height={item.desktopHeight} className="hidden lg:block cursor-pointer hover:scale-115 transition"/>
                        </Link>
                    </li>
                ))}
            </ul>
        </footer>
    );
}