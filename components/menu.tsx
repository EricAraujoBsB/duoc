"use client";

import dynamic from "next/dynamic";

const MenuMobile = dynamic(() => import('./menuMobile'));
const MenuDesktop = dynamic(() => import('./menuDesktop'));

export default function Menu({children}: {children: React.ReactNode}) {
    return (
    <>
            <div className="lg:hidden">
                <MenuMobile> 
                    {children}
                </MenuMobile>
            </div> 
            <div className="hidden lg:block">   
                <MenuDesktop>   
                    {children}
                </MenuDesktop>
            </div>     
    </>);
}