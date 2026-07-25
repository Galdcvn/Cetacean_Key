import type { Database } from './database-generated'

// Row types from Supabase
export type Subordem = Database['public']['Tables']['subordens']['Row']
export type Animal = Database['public']['Tables']['animais']['Row']
export type Caracteristica = Database['public']['Tables']['caracteristicas']['Row']
export type OpcaoCaracteristica = Database['public']['Tables']['opcoes_caracteristica']['Row']
export type AnimalIdentificacao = Database['public']['Tables']['animal_identificacao']['Row']

// Insert types
export type AnimalInsert = Database['public']['Tables']['animais']['Insert']
export type CaracteristicaInsert = Database['public']['Tables']['caracteristicas']['Insert']
export type OpcaoCaracteristicaInsert = Database['public']['Tables']['opcoes_caracteristica']['Insert']
export type AnimalIdentificacaoInsert = Database['public']['Tables']['animal_identificacao']['Insert']

// Computed types (with JOINs)
export interface AnimalComSubordem extends Animal {
  subordens: Subordem
}

export interface CaracteristicaComOpcoes extends Caracteristica {
  opcoes_caracteristica: OpcaoCaracteristica[]
}

export interface AnimalComCaracteristicas extends AnimalComSubordem {
  animal_identificacao: {
    opcoes_caracteristica: OpcaoCaracteristica & {
      caracteristicas: Caracteristica
    }
    observacao: string | null
  }[]
}
