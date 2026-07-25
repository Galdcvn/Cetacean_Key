// Generated types from Supabase — will be replaced after running `supabase gen types typescript`
export interface Database {
  public: {
    Tables: {
      subordens: {
        Row: {
          id_subordem: number
          nome: string
        }
        Insert: {
          id_subordem?: number
          nome: string
        }
        Update: {
          id_subordem?: number
          nome?: string
        }
      }
      animais: {
        Row: {
          id_animal: number
          nome_comum: string
          nome_cientifico: string
          genero: string
          id_subordem: number
        }
        Insert: {
          id_animal?: number
          nome_comum: string
          nome_cientifico: string
          genero: string
          id_subordem: number
        }
        Update: {
          id_animal?: number
          nome_comum?: string
          nome_cientifico?: string
          genero?: string
          id_subordem?: number
        }
      }
      caracteristicas: {
        Row: {
          id_caract: number
          nome: string
          grupo_anatomico: string
        }
        Insert: {
          id_caract?: number
          nome: string
          grupo_anatomico: string
        }
        Update: {
          id_caract?: number
          nome?: string
          grupo_anatomico?: string
        }
      }
      opcoes_caracteristica: {
        Row: {
          id_opcao: number
          id_caract: number
          valor: string
        }
        Insert: {
          id_opcao?: number
          id_caract: number
          valor: string
        }
        Update: {
          id_opcao?: number
          id_caract?: number
          valor?: string
        }
      }
      animal_identificacao: {
        Row: {
          id_animal: number
          id_opcao: number
          observacao: string | null
        }
        Insert: {
          id_animal: number
          id_opcao: number
          observacao?: string | null
        }
        Update: {
          id_animal?: number
          id_opcao?: number
          observacao?: string | null
        }
      }
    }
    Views: Record<string, never>
    Functions: Record<string, never>
    Enums: Record<string, never>
  }
}
