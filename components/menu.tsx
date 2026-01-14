"use client";

import dynamic from "next/dynamic";

const links = [
    { name: "SOBRE", href: "/" },
    { name: "SERVIÇOS", href: "/servicos" },
    { name: "PROJETOS", href: "/projetos" },
    { name: "PARCEIROS", href: "/parceiros" },
    { name: "CONTATO", href: "/contato" },
]

const MenuMobile = dynamic(() => import('./menuMobile'));
const MenuDesktop = dynamic(() => import('./menuDesktop'));

export default function Menu() {
    return (
    <>
            <div className="lg:hidden">
                <MenuMobile links={links}/>
            </div> 
            <div className="hidden lg:block">   
                <MenuDesktop links={links}/>   
            </div>     
    </>);
}