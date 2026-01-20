import Link from "next/link";

type CardProps = {
    title: string,
    text: string,
    item1: string,
    item2: string,
    item3: string,
    imageSrc: string,
    imageAlt: string;
};

export function PrimaryServiceCard({title, text, item1, item2, item3, imageSrc, imageAlt}: CardProps) {
    return (
        <article style={{ height: `${280}px`, width: `${175}px` }} className=" bg-[#0B0E10] text-black rounded-xl border border-[#424242] relative overflow-hidden">
            <div className="relative h-[112.5px]">
                <img src={imageSrc} width={175} height={70} alt={imageAlt} loading="eager" decoding="async" fetchPriority="low" className="absolute top-[5px] scale-y-[1.10]"/>
                <h1 className="absolute bottom-0 text-white font-bold ml-2.5 text-[13px]">{title}</h1>
            </div>
            <section className="px-2.5 mt-4 p">
                <p className="text-[9px] text-gray-400">{text}</p>
                <ul className="text-[9px] text-gray-400 list-disc ml-5 mt-3 font-bold">
                    <li className="marker:text-amber-400">{item1}</li>
                    <li className="marker:text-amber-400">{item2}</li>
                    <li className="marker:text-amber-400">{item3}</li>
                </ul>
                
                <button className="text-[9px] text-amber-400 cursor-pointer ml-1 flex gap-1 absolute bottom-2.5">
                    Saiba Mais
                    <img src="/arrow.svg" alt="Arrow Icon" width={10} height={1} loading="eager" decoding="async" fetchPriority="low"/>
                </button>
            </section>
    
        </article>  
    );
}

export function SecondaryServiceCard({title, text, item1, item2, item3, imageSrc, imageAlt}: CardProps) {
    return (
        <article style={{ height: `${220}px`, width: `${150}px` }} className="relative bg-[#0B0E10] text-black rounded-xl border border-[#424242] overflow-hidden">
            <div className="relative h-[90px]">
                <img src={imageSrc} width={150} height={50} alt={imageAlt} loading="eager" decoding="async" fetchPriority="low" className="absolute"/>
                <h1 className="absolute bottom-0 text-white font-bold ml-2 text-[11px]">{title}</h1>
            </div>
            <section className="px-2 pt-3">
                <p className="text-[7.5px] text-gray-400">{text}</p>
                <ul className="text-[7.5px] text-gray-400 list-disc ml-[18px] mt-1.5 font-bold">
                    <li className="marker:text-amber-400">{item1}</li>
                    <li className="marker:text-amber-400">{item2}</li>
                    <li className="marker:text-amber-400">{item3}</li>
                </ul>

                <button className="text-[7.5px] text-amber-400 flex ml-1 gap-1 absolute bottom-2">
                    Saiba Mais
                    <img src="/arrow.svg" alt="Arrow Icon" width={9} height={1} loading="eager" decoding="async" fetchPriority="low" />
                </button>
            </section>
                
        </article>  
    );
}



export function ServiceCard({title, text, item1, item2, item3, imageSrc, imageAlt}: CardProps) {
    return (
        <article style={{ height: `${420}px`, width: `${300}px` }} className=" bg-[#0B0E10] text-black rounded-xl border border-[#424242] overflow-hidden">
            <div className="relative h-[200px]">
                <img src={imageSrc} alt={imageAlt} loading="eager" decoding="async" fetchPriority="low" className="w-[300px] h-[200px]"/>
                <h1 className="absolute bottom-0 text-white font-bold ml-5">{title}</h1>
            </div>
            <section className="px-5 mt-5">
                <p className="text-[13px] text-gray-400">{text}</p>
                <ul className="text-[13px] text-gray-400 list-disc ml-5 mt-4 font-bold">
                    <li className="marker:text-amber-400">{item1}</li>
                    <li className="marker:text-amber-400">{item2}</li>
                    <li className="marker:text-amber-400">{item3}</li>
                </ul>
                
                <button className="text-[13px] text-amber-400 cursor-pointer flex mt-4 gap-1 transition hover:scale-105">
                    Saiba Mais
                    <img src="/arrow.svg" alt="Arrow Icon" width={12.5} height={1} loading="eager" decoding="async" fetchPriority="low" className="mt-[3px]"/>
                </button>
            </section>
    
        </article>  
    );
}

type ServiceCard2Props = {
    position: number;
}

export function ServiceCard2({ position }: ServiceCard2Props) {
    function isPair(position: number) {
        return position%2;
    }
    return(
        <article className="mx-5">
                <div className={isPair(position)?"xl:flex xl:flex-row-reverse justify-center gap-10":"xl:flex justify-center gap-10"}>
                        <div className="xl:mt-3">
                            <div className="bg-gray-600 w-full xl:w-[550px] h-[195px] xl:h-[387.5px] rounded-xl"/>
                        </div>
                        <div>
                            <h1 className="text-[#D8D8D8] text-[23px] xl:text-[31px] font-bold mt-5 xl:mt-0">Lorem Ipsum</h1>
                            <img src="/line.svg" alt="Line Icon" height={10} width={130} loading="eager" decoding="async" fetchPriority="low" className="lg:hidden mt-5"/>
                            <img src="/line.svg" alt="Line Icon" height={10} width={100} loading="eager" decoding="async" fetchPriority="low" className="hidden lg:block mt-5"/>
                            <p className="text-[#D8D8D8]/80 mt-4 text-[13.5px] xl:text-[20px] text-justify xl:max-w-[420px] line-clamp-6 xl:line-clamp-[7]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque dolorum repellendus reiciendis rerum, eum suscipit at soluta eligendi, aliquid deserunt nesciunt magnam eos nihil quas atque maxime quam facere repudiandae. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            <ul className="grid grid-cols-2 list-disc marker:text-[#DAA520] text-[#D8D8D8]/60 font-bold text-[10px] xl:max-w-[405px] xl:text-[15px] mx-4 gap-7 mt-2.5 xl:mt-5 gap-y-1.5">
                                <li>Lorem Ipsum Dolor</li>
                                <li>Lorem Ipsum Dolor</li>
                                <li>Lorem Ipsum Dolor</li>
                            </ul>
                            <Link href={`/`} className="flex gap-1 text-[#DAA520] text-[13.5px] xl:text-[20px] mt-2.5">
                                Ver detalhes completo
                                <img src="/arrow.svg" alt="Arrow Icon" width={13.5} height={10} loading="eager" decoding="async" fetchPriority="low" className="mt-[2.5px]"/>
                            </Link>
                        </div>
                    </div>
                </article>
    );
}