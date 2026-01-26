import { gerServiceInfosById } from "@/lib/supabase/server"

export async function ServiceInfos({params}: {params: Promise<{id: string}>}) {
    const { id } = await params;
    const serviceInfos = await gerServiceInfosById(Number(id));
    console.log(serviceInfos);
    return(
        <div className=" text-black w-full h-screen flex flex-col justify-center items-center">
            <h1>{serviceInfos.nome}</h1>
            <p>{serviceInfos.descricao}</p>
            {serviceInfos.escopo.map((item, index) => (
                <p key={index}>{item}</p>
            ))}
            {serviceInfos.diferencial.map((item, index) => (
                <p key={index}>{item}</p>
            ))}
            {serviceInfos.beneficio.map((item, index) => (
                <p key={index}>{item}</p>
            ))}
        </div>
    );
}