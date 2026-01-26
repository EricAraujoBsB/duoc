import Link from "next/link";
import Image from "next/image";

type Service = {
    id: number,
    nome: string,
    descricao: string,
    urlimagem: string;
    escopo: string[];
}

type CardProps = {
    position: number,
    service: Service,
}

export async function ServiceCard({position, service}: CardProps) {
    function isPair(position: number) {
        return position%2;
    }
    return(
        <article className="mx-5">
                <div className={isPair(position)?"xl:flex xl:flex-row-reverse justify-center gap-10":"xl:flex justify-center gap-10"}>
                    <div className="xl:mt-3 relative w-full xl:w-[550px] h-[195px] xl:h-[387.5px] rounded-xl overflow-hidden">
                        <Image
                            src={service.urlimagem}
                            alt={`${service.nome} Imagem`}
                            fill
                            className="object-cover rounded-xl"
                        />
                    </div>
                        <div className="xl:max-w-[631px]">        
                            <h1 className="text-[#D8D8D8] text-[23px] xl:text-[31px] font-bold mt-5 xl:mt-0 ">{service.nome}</h1>
                            <img src="/line.svg" alt="Line Icon" height={10} width={130} loading="eager" decoding="async" fetchPriority="low" className="lg:hidden mt-5"/>
                            <img src="/line.svg" alt="Line Icon" height={10} width={100} loading="eager" decoding="async" fetchPriority="low" className="hidden lg:block mt-5"/>
                            <p className="text-[#D8D8D8]/80 mt-4 text-[13.5px] xl:text-[20px] text-justify line-clamp-6 xl:line-clamp-5">{service.descricao}</p>
                            <ul className="grid grid-cols-2 list-disc marker:text-[#DAA520] text-[#D8D8D8]/60 font-bold text-[10px]  xl:text-[15px] mx-4 gap-7 mt-2.5 xl:mt-5 gap-y-1.5">
                                {service.escopo.map((name, index)=>(
                                    <li key={index}><span className="line-clamp-1 xl:line-clamp-2">{name}</span></li>
                                ))}
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