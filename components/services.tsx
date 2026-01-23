import { getServices_ScopeLimitedBy3 } from "@/lib/supabase/server"
import { ServiceCard } from "./serviceCard";

export default async function Services() {
    const services = await getServices_ScopeLimitedBy3();
    
    return(
        <>
                {/* LCP */}
                <ServiceCard position={0} service={services[0]} />

                {/* resto */}
                {services.slice(1).map((service, index) => (
                    <ServiceCard
                    key={service.id}
                    position={index + 1}
                    service={service}/>
                ))}
        </>
    );
}