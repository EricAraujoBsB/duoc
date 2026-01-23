import Link from "next/link"
import Image from "next/image"
import { HistoryCard, ValueCard }from "@/components/aboutCards"


export default function About() {
    return(
        <main>
            {/* SOBRE */}
            <section className="bg-[#07090A] w-full py-5 lg:py-10 pb-8 px-7 lg:px-10 flex flex-col justify-center items-center">
                <div className="min-h-[100px] w-full"/>
                <h1 className="text-[#DAA520] text-[15px] lg:text-[37px] lg:text-start px-7 lg:px-10">SOBRE NÓS</h1>
                <h2 className="text-white text-[23px] lg:text-[67px] font-bold">Nossa História</h2>
                <img src="/line.svg" alt="Line Icon" height={10} width={100} loading="eager" decoding="async" fetchPriority="low" className="lg:hidden mt-2"/>
                <img src="/line.svg" alt="Line Icon" height={10} width={280} loading="eager" decoding="async" fetchPriority="low" className="hidden lg:block mt-2"/>
                <p className="text-center text-[12px] lg:text-[22px] lg:max-w-[870px] text-[#D8D8D8] mt-2 lg:mt-10">Transformamos espaços com soluções inteligentes, sustentáveis e humanas. Unimos engenharia e arquitetura com o cuidado que só uma família pode oferecer.</p>
            </section>

            {/* HISTÓRIA */}
            <section className="bg-[#07090A] w-full pt-2.5 px-7 xl:px-32 2xl:px-64 xl:max-h-[625px]">
                <h1 className="text-[#DAA520] text-[14px] lg:text-[22px] lg:text-start">NOSSA HISTÓRIA</h1>
                <div className="xl:flex xl:justify-between">
                    <div className="xl:max-w-[527.5px]">
                        <h2 className="text-white text-[20px] xl:text-[48px] font-bold">Do Lar Para o Mundo</h2>
                        <img src="/line.svg" alt="Line Icon" height={10} width={90} loading="eager" decoding="async" fetchPriority="low" className="xl:hidden"/>
                        <img src="/line.svg" alt="Line Icon" height={10} width={220} loading="eager" decoding="async" fetchPriority="low" className="hidden xl:block"/>
                        <p className="xl:hidden text-[#D8D8D8] text-[12px] text-justify mt-5">
                            Lorem ipsum dolor sit amet. Cum libero obcaecati sit maxime architecto rem dolor magnam est dolores maxime non rerum molestiae. Sit dolores quaerat ut enim tempore sit accusamus repellendus.
                            <br />
                            Sed reprehenderit galisum aut assumenda omnis ut vero quia ut tempore deserunt ut enim enim. Et consequuntur repellat sed quisquam itaque et galisum sunt eos sunt quae 33 autem optio.
                        </p>
                        <p className="hidden xl:block text-[#D8D8D8] text-[15px] text-justify mt-5">
                            Lorem ipsum dolor sit amet. Cum libero obcaecati sit maxime architecto rem dolor magnam est dolores maxime non rerum molestiae. Sit dolores quaerat ut enim tempore sit accusamus repellendus.
                            <br />
                            Sed reprehenderit galisum aut assumenda omnis ut vero quia ut tempore deserunt ut enim enim. Et consequuntur repellat sed quisquam itaque et galisum sunt eos sunt quae 33 autem optio.
                            Hic sequi molestiae et corrupti repudiandae qui nostrum quibusdam eum dolorem consectetur vel quae consequatur qui aspernatur magni. Non enim minima ad inventore esse et molestiae voluptatibus ex itaque illum eum mollitia placeat ut dolorum vitae hic iusto rerum. Ad commodi ullam et dolores quibusdam nam amet sunt non explicabo minima.
                        </p>
                    </div>
                    <div className="flex flex-col justify-center items-center min-h-[250px] mt-5">
                        <Image src="/office.webp" alt="Office Image" width={220} height={220} priority fetchPriority="high" className="z-10 xl:hidden" />
                        <Image src="/office.webp" alt="Office Image" width={420} height={420} priority fetchPriority="high" className="z-10 hidden xl:block mr-10" />
                        <img src="/square.svg" alt="Square Icon" width={86} height={86} className="relative left-[85px] bottom-[70px] z-0 xl:hidden"/>
                        <img src="/square.svg" alt="Square Icon" width={160} height={160} className="relative left-[145px] bottom-[125px] z-0 hidden xl:block"/>
                    </div>
                </div>
                <div className="flex gap-5 xl:gap-[30px] justify-center items-center relative bottom-[40px] xl:justify-start xl:relative xl:bottom-[190px]  xl:max-w-[527.5px]">
                    <HistoryCard title="MISSÃO" text="Transformar espaços com soluções inteligentes, sustentáveis e humanas."/>
                    <HistoryCard title="VISÃO" text="Ser referência em arquitetura, engenharia e automação em Brasília. "/>
                </div>
            </section>

            {/* VALORES */}
            <section className="bg-[#010101] w-full lg:pb-10 pb-5 flex flex-col justify-center items-center px-7 lg:px-10">
                <h1 className="text-[#DAA520] text-[15px] lg:text-[37px] lg:text-start px-7 lg:px-10">NOSSOS VALORES</h1>
                <h2 className="text-white text-[23px] lg:text-[67px] font-bold">O Que Nos Guia</h2>
                <img src="/line.svg" alt="Line Icon" height={10} width={100} loading="eager" decoding="async" fetchPriority="low" className="lg:hidden mt-2"/>
                <img src="/line.svg" alt="Line Icon" height={10} width={280} loading="eager" decoding="async" fetchPriority="low" className="hidden lg:block mt-2"/>
                <div className="flex flex-wrap mt-5 lg:mt-10 justify-center items-center gap-5 lg:max-w-[1100px]">
                    <ValueCard title="Sustentabilidade e Consciência Energética" text="Trabalhamos com responsabilidade ambiental e soluções que visam o futuro." imgSrc="/leaf.svg" imgAlt="Leaf Icon" mobileImgWidth={15} mobileImgHeight={15} dekstopImgWidth={27.5} dekstopImgHeight={27.5}/>
                    <ValueCard title="Tecnologia e Inovação" text="Incorporamos o que há de mais moderno em automação para facilitar e transformar vidas." imgSrc="/chip.svg" imgAlt="Chip Icon" mobileImgWidth={17.5} mobileImgHeight={17.5} dekstopImgWidth={30} dekstopImgHeight={30}/>
                    <ValueCard title="Pessoalidade e Acolhimento" text="Cuidamos de cada projeto como quem cuida de casa - com escuta, empatia e proximidade." imgSrc="/heart.svg" imgAlt="Heart Icon" mobileImgWidth={15} mobileImgHeight={15} dekstopImgWidth={30} dekstopImgHeight={30}/>
                    <ValueCard title="Comprometimento e Entrega" text="Honramos cada etapa do processo com seriedade, ética e dedicação." imgSrc="/check.svg" imgAlt="Check Icon" mobileImgWidth={15} mobileImgHeight={15} dekstopImgWidth={30} dekstopImgHeight={30}/>
                    <ValueCard title="Família com Essência" text="Nosso diferencial é a raiz afetiva que orienta nossas decisões e fortalece cada relação construída." imgSrc="/people.svg" imgAlt="People Icon" mobileImgWidth={15} mobileImgHeight={15} dekstopImgWidth={30} dekstopImgHeight={30}/>
                </div>
            </section>

            {/* SERVIÇOS */}
            <section className="bg-[#06090B] w-full pb-5 lg:pb-10 flex flex-col justify-center items-center px-7 lg:px-10">
                <h1 className="text-white text-[20px] lg:text-[33px] font-bold">Conheça Nossos Serviços</h1>
                <p className="text-center text-[12px] lg:text-[22px] lg:max-w-[870px] text-[#D8D8D8] mt-5">Descubra como podemos transformar seu projeto em realidade com nossas soluções integradas.</p>
                <div className="flex justify-between mt-6 gap-5">
                    <Link href="/services" className="font-bold bg-[#DAA520] text-[15px] lg:text-[19px] py-1 px-2.5 lg:px-4 transition hover:scale-105 cursor-pointer">VER SERVIÇOS</Link>
                    <Link href="/#contact" className="text-[#DAA520] text-[17px] lg:text-[21px] flex gap-2 transition hover:scale-105 cursor-pointer">
                        Fale Conosco
                        <img src="/arrow.svg" alt="Arrow Icon" width={15} height={10} loading="eager" decoding="async" fetchPriority="low" className="mb-0.5"/>
                    </Link>
                </div>
            </section>
        </main>
    )
}