import Link from "next/link";

type MenuProps = {
    children: React.ReactNode
};

export default function MenuDesktop({children}: MenuProps) { 



    return(
        <div className="flex gap-10 justify-center items-center">
            <nav className="hidden lg:flex gap-10 items-center">
                {children}
            </nav>
        </div>
    );
}