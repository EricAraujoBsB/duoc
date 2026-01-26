"use client";

import { useState } from "react";   
import Image from "next/image";

type MenuProps = {
    children: React.ReactNode;
}

export default function MenuMobile({children}: MenuProps) {
    const [active, setActive] = useState(false);

    function openMenu() {
        setActive(true);
        document.body.classList.add("overflow-hidden");
    }

    function closeMenu() {
        setActive(false);
        document.body.classList.remove("overflow-hidden");
    }

    return(
        <div className="lg:hidden">
                <button className="cursor-pointer text-[0px] mb-5">
                    Abrir Menu
                    <img
                    src="/menu-hamburger.svg"
                    width={25}
                    height={25}
                    alt="Open Menu"
                    loading="eager"
                    decoding="async"
                    fetchPriority="low"
                    className={active?"hidden":""}
                    onClick={openMenu}
                    />            
                </button>
                <nav 
                    className={active?"absolute h-screen w-full top-0 left-0 justify-center items-center bg-transparent/80 lg:backdrop-blur-md flex flex-col":"hidden"}
                    onClick={(e)=>{
                            if ((e.target as HTMLElement).closest("a")) {
                                closeMenu();
                            }}}>
                    <div className="py-5 px-7 absolute top-0 left-0 flex justify-between w-full">
                        <Image src="/LOGO.svg" alt="Logo" width={150} height={75} className="lg:hidden"/>  
                        
                        <button className="cursor-pointer text-[0px]" onClick={closeMenu} >
                            Fechar Menu
                            <img src="/close.svg" width={20} height={20} alt="Close Menu" loading="eager" decoding="async" fetchPriority="low"/>
                        </button>
                    </div>
                    {children}
                </nav>
        </div>
    )   
}