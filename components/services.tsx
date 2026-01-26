import { getServices_ScopeLimitedBy3 } from "@/lib/supabase/server"
import { ServiceCard } from "./serviceCard";

export default async function Services() {
    const services = await getServices_ScopeLimitedBy3();
    
    return(
        <>
                {services.map((service, index) => (
                    <ServiceCard
                    key={service.id}
                    position={index}
                    service={service}/>
                ))}
        </>
    );
}