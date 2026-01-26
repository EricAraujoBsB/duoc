import { Suspense } from 'react'
import { ServiceInfos } from './service'

export default async function Service({params}: {params: Promise<{id: string}>}) {
    return (
        <main>
                <Suspense fallback={<></>}>
                    <ServiceInfos params={params}/>
                </Suspense>
        </main>
    );

}    