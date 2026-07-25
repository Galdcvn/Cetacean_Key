// Generated types from Supabase — will be replaced after running `supabase gen types typescript`
export interface Database {
  public: {
    Tables: {
      cetaceans: {
        Row: {
          id: string
          especie: string
          popularNome: string
          genero: string
          subordem: string
          tipoAgua: string
          barbatanasDorsais: boolean
          tamMaximo: number
          conservacao: string
          imagemUrl: string | null
          created_at: string
        }
        Insert: {
          id?: string
          especie: string
          popularNome: string
          genero: string
          subordem: string
          tipoAgua: string
          barbatanasDorsais: boolean
          tamMaximo: number
          conservacao: string
          imagemUrl?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          especie?: string
          popularNome?: string
          genero?: string
          subordem?: string
          tipoAgua?: string
          barbatanasDorsais?: boolean
          tamMaximo?: number
          conservacao?: string
          imagemUrl?: string | null
          created_at?: string
        }
      }
    }
    Views: Record<string, never>
    Functions: Record<string, never>
    Enums: Record<string, never>
  }
}
