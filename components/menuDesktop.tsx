"use client";

import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";

type MenuProps = {
    links: { name: string, href: string }[];
};

export default function MenuDesktop({links}: MenuProps) { 
    const pathname = usePathname();
    return(
        <menu className="hidden lg:flex gap-10 items-center">
            {links.map( 
                (link) => 
                    <Link key={link.name} href={`${link.href}`} className={clsx({"font-bold": pathname === link.href})}>{link.name}</Link>
            )}
            <Link href="/" className="transition hover:scale-105">
                <button className="px-2.5 py-1.5 bg-[#DAA520] text-black font-bold text-[14px]">
                    SOLICITAR ORÇAMENTO
                </button>
            </Link>
        </menu>
    );
}