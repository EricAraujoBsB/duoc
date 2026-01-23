import dynamic from "next/dynamic"

const MobileCarousel = dynamic(()=>import('./mobileServicesCarousel'), {loading: ()=>null});
const DesktopCarousel = dynamic(()=>import('./desktopServicesCarousel'), {loading: ()=>null});


export default function ServicesCarousel() {
    return(
    <>
        <div className="xl:hidden mt-5">
            <MobileCarousel/>
        </div>
        <div className="hidden xl:block mt-5 w-full">
            <DesktopCarousel/>
        </div>
    </>)
}