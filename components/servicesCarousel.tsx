import dynamic from "next/dynamic"

const MobileCarousel = dynamic(()=>import('./mobileServicesCarousel'), {loading: ()=>null});

export default function ServicesCarousel() {
    return(
    <>
        <div className="lg:hidden mt-5">
            <MobileCarousel/>
        </div>
    </>)
}