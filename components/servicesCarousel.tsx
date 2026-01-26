import dynamic from "next/dynamic"
import { Suspense } from "react";
import { getServices_ScopeLimitedBy3 } from "@/lib/supabase/server";

const MobileCarousel = dynamic(()=>import('./mobileServicesCarousel'), {loading: ()=>null});
const DesktopCarousel = dynamic(()=>import('./desktopServicesCarousel'), {loading: ()=>null});


export default function ServicesCarousel() {
    const services = getServices_ScopeLimitedBy3();

    return(
        <>
            <div className="xl:hidden mt-5">
                <Suspense fallback={<div className="relative w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 xl:w-20 xl:h-20 animate-spin rounded-full">
                                        <div
                                            className="absolute inset-0 rounded-full"
                                            style={{
                                            background: 'conic-gradient(#DAA520, #000000)',
                                            WebkitMask:
                                                'radial-gradient(farthest-side, transparent calc(100% - 8px), black calc(100% - 8px))',
                                            mask:
                                                'radial-gradient(farthest-side, transparent calc(100% - 8px), black calc(100% - 8px))',
                                            }}
                                        />
                                    </div>}>
                    <MobileCarousel services={services}/>
                </Suspense>
            </div>
            <div className="hidden xl:block mt-5 w-full">
                <Suspense fallback={<div className="relative w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 xl:w-20 xl:h-20 animate-spin rounded-full">
                                        <div
                                            className="absolute inset-0 rounded-full"
                                            style={{
                                            background: 'conic-gradient(#DAA520, #000000)',
                                            WebkitMask:
                                                'radial-gradient(farthest-side, transparent calc(100% - 8px), black calc(100% - 8px))',
                                            mask:
                                                'radial-gradient(farthest-side, transparent calc(100% - 8px), black calc(100% - 8px))',
                                            }}
                                        />
                                    </div>}>
                    <DesktopCarousel services={services}/>
                </Suspense>
            </div>
        </>
    );
}