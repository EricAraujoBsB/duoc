import Image from "next/image";

type CardWhoProps = {
    title: string,
    text: string,
    srcImage: string,
    altImage: string,
    heightImageMobile: number,
    widthImageMobile: number,
    heightImageDesktop?: number,
    widthImageDesktop?: number,
}

export default function CardWho({ title, text, srcImage, altImage, heightImageMobile, widthImageMobile, heightImageDesktop, widthImageDesktop }: CardWhoProps) {
    return(
        <article className="bg-[#0E1011] border border-[#1F1F1F] rounded-xl text-[#D8D8D8] p-5 w-[180px] lg:w-[250px] h-[120px] lg:h-auto">
            <div className="flex gap-2.5 lg:gap-0 lg:flex-col">
                <div className="relative bg-[#DAA520] h-7 w-7 lg:h-10 lg:w-10 rounded flex justify-center items-center">
                    <img src={srcImage} height={heightImageMobile} width={widthImageMobile} loading="eager" decoding="async" fetchPriority="low" alt={altImage} className="lg:hidden"/>
                    <img src={srcImage} height={heightImageDesktop} width={widthImageDesktop} loading="eager" decoding="async" fetchPriority="low" alt={altImage} className="hidden lg:block"/>
                </div>
                <h1 className="font-bold text-[14px] lg:text-[17px] lg:mt-3">{title}</h1>
            </div>
            <h2 className="text-[10px] lg:text-[12px] mt-3">{text}</h2>
        </article>
    )
}