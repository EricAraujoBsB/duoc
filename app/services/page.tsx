import Link from "next/link"
import { ServiceCard2 } from "@/components/serviceCard"

export default function Services() {
    const ListService = [ServiceCard2, ServiceCard2, ServiceCard2, ServiceCard2, ServiceCard2, ServiceCard2]
    return(
        <main>
            {/* HISTÓRIA */}
            <section className="w-full bg-[#07090A] pt-5 pb-10 lg:py-10 px-7 lg:px-10">
                <div className="min-h-[65px] w-full"/>
                <h1 className="text-white text-[23px] lg:text-[67px] font-bold">Nossa História</h1>
                <p className="text-left text-[12px] lg:text-[22px] lg:max-w-[870px] text-[#D8D8D8] mt-2">Soluções completas em arquitetura, engenharia e automação para transformar seus espaços com excelência técnica e cuidado personalizado.</p>
                <img src="/line.svg" alt="Line Icon" height={10} width={130} loading="eager" decoding="async" fetchPriority="low" className="lg:hidden mt-5"/>
                <img src="/line.svg" alt="Line Icon" height={10} width={250} loading="eager" decoding="async" fetchPriority="low" className="hidden lg:block mt-7"/>
            </section>

            {/* SERVIÇOS */}
            <section className="w-full bg-[#0B0E10] py-10 lg:py-10 px-7 lg:px-10 flex flex-col gap-14">
                {ListService.map((Card, index)=>(
                    <Card key={index} position={index}/>
                ))}
            </section>

            {/* CONTATO */}
            <section className="bg-[#06090B] w-full py-5 lg:pb-10 flex flex-col justify-center items-center px-7 lg:px-10">
                <h1 className="text-white text-[20px] lg:text-[33px] font-bold">Conheça Nossos Serviços</h1>
                <p className="text-center text-[12px] lg:text-[22px] max-w-[280px] lg:max-w-[870px] text-[#D8D8D8] mt-5">Entre em contato e receba uma consultoria personalizada para suas necessidades.</p>
                <div className="flex justify-between mt-6 gap-5">
                    <Link href="/#contact" className="font-bold bg-[#DAA520] text-[14px] lg:text-[19px] py-1 px-5 lg:px-4 transition hover:scale-105 cursor-pointer">
                        SOLICITAR ORÇAMENTO
                    </Link>
                </div>
            </section>
        </main>
    )
}