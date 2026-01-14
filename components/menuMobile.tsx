"use client";

import { useState } from "react";   
import Link from "next/link";
//import { IoMenu, IoArrowBackSharp } from "react-icons/io5";

type LinkModel = {
    name: string,
    href: string;
}

type MenuProps = {
    links: LinkModel[];
}

export default function MenuMobile({links}: MenuProps) {
    const [iconState, setIconState] = useState('block');
    const [menuState, setMenuState] = useState('hidden');

    function toggleMenu() {
        if (menuState === 'hidden') {
            setIconState('hidden');
            setMenuState('flex flex-col');
            document.body.style.overflow = 'hidden';
            const header = document.getElementById('header');
            header.style.padding = '0px';
            const logo = document.getElementById('logo');
            logo.style.display = 'none';
        } else {
            setIconState("block");
            setMenuState('hidden');
            document.body.style.overflow = 'auto';
        }
    }

    return(
        <div className="lg:hidden">
                <img
                src="/menu-hamburger.svg"
                width={25}
                height={25}
                alt="Menu"
                loading="eager"
                decoding="async"
                fetchPriority="low"
                className={`${iconState} cursor-pointer`}
                onClick={toggleMenu}
                />            
                <menu className={`${menuState} h-screen w-screen bg-black justify-center items-center`}>
                <div  className="text-[#DAA520] cursor-pointer mb-10 transition hover:scale-105 bg-white h-[30px] w-[30px]" onClick={toggleMenu}/>
                {links.map( 
                    (link) => 
                        <Link key={link.name} href={`${link.href}`} className="text-white">{link.name}</Link>
                )}
                <Link href="/" className="transition hover:scale-105">
                    <button className="px-2.5 py-1.5 bg-[#DAA520] text-white">
                        SOLICITAR ORÇAMENTO
                    </button>
                </Link>
            </menu>
        </div>
    )   
}