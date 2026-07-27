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
        Relationships: []
      }
      animais: {
        Row: {
          id_animal: number
          nome_comum: string
          nome_cientifico: string
          genero: string
          id_subordem: number
          url_imagem: string | null
        }
        Insert: {
          id_animal?: number
          nome_comum: string
          nome_cientifico: string
          genero: string
          id_subordem: number
          url_imagem?: string | null
        }
        Update: {
          id_animal?: number
          nome_comum?: string
          nome_cientifico?: string
          genero?: string
          id_subordem?: number
          url_imagem?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "animais_id_subordem_fkey"
            columns: ["id_subordem"]
            isOneToOne: false
            referencedRelation: "subordens"
            referencedColumns: ["id_subordem"]
          }
        ]
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
        Relationships: []
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
        Relationships: [
          {
            foreignKeyName: "opcoes_caracteristica_id_caract_fkey"
            columns: ["id_caract"]
            isOneToOne: false
            referencedRelation: "caracteristicas"
            referencedColumns: ["id_caract"]
          }
        ]
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
        Relationships: [
          {
            foreignKeyName: "animal_identificacao_id_animal_fkey"
            columns: ["id_animal"]
            isOneToOne: false
            referencedRelation: "animais"
            referencedColumns: ["id_animal"]
          },
          {
            foreignKeyName: "animal_identificacao_id_opcao_fkey"
            columns: ["id_opcao"]
            isOneToOne: false
            referencedRelation: "opcoes_caracteristica"
            referencedColumns: ["id_opcao"]
          }
        ]
      }
      favoritos: {
        Row: {
          id: number
          user_id: string
          id_animal: number
          criado_em: string
        }
        Insert: {
          id?: number
          user_id: string
          id_animal: number
          criado_em?: string
        }
        Update: {
          id?: number
          user_id?: string
          id_animal?: number
          criado_em?: string
        }
        Relationships: [
          {
            foreignKeyName: "favoritos_id_animal_fkey"
            columns: ["id_animal"]
            isOneToOne: false
            referencedRelation: "animais"
            referencedColumns: ["id_animal"]
          }
        ]
      }
    }
    Views: Record<string, never>
    Functions: Record<string, never>
    Enums: Record<string, never>
  }
}
