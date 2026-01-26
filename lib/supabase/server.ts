import { createServerClient } from "@supabase/ssr";
import { SupabaseClient } from "@supabase/supabase-js";

import { cookies } from "next/headers";

/**
 * Especially important if using Fluid compute: Don't put this client in a
 * global variable. Always create a new client within each function when using
 * it.
 */
export async function createClient() {
  const cookieStore = await cookies();

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options),
            );
          } catch {
            // The `setAll` method was called from a Server Component.
            // This can be ignored if you have proxy refreshing
            // user sessions.
          }
        },
      },
    },
  );
}

type Service = {
    id: number,
    nome: string,
    descricao: string,
    urlimagem: string;
    escopo: string[];
}

export async function getServices_ScopeLimitedBy3(): Promise<Service[]> {
  try {
    const supabase = await createClient();
    const {data, error} = await supabase.rpc("getservices_scopelimitedby3");
    return data;
  } catch(error) {
    throw error;
  }
}

type ServiceInfos = {
    nome: string,
    descricao: string,
    escopo: string[],
    diferencial: string[],
    beneficio: string[];
}

export async function getServiceInfosById(id: number): Promise<ServiceInfos> {
  try {
    const supabase = await createClient();
    const {data, error} = await supabase.rpc("getserviceinfosbyid", {serviceid: id}).single();
    return data as ServiceInfos;
  } catch(error) {
    throw error;
  }
}

export async function getOtherServices_LimitedBy2(id: number): Promise<Service[]> {
  try {
    const supabase = await createClient();
    const {data: services, error} = await supabase.from("servico").select("id").neq("id", id).limit(2);
    if(services == null) return [];
    const allServices = await getServices_ScopeLimitedBy3();
    const filteredServices = [];

    for(const service of allServices) {
        if(service.id === services[0]?.id || service.id === services[1]?.id){
          filteredServices.push(service);
        }
      }

    return filteredServices as Service[];
  } catch(error) {
    throw error;
  }
}