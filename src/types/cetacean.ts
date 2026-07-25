export type ConservationStatus =
  | 'Seguro'
  | 'Risco'
  | 'Vulnerável'
  | 'Extinto'
  | 'Desconhecido'

export type WaterType = 'Salgada' | 'Doce'

export type Suborder = 'Mysticeti' | 'Odontoceti'

export interface Cetacean {
  id: string
  especie: string
  popularNome: string
  genero: string
  subordem: Suborder
  tipoAgua: WaterType
  barbatanasDorsais: boolean
  tamMaximo: number
  conservacao: ConservationStatus
  imagemUrl: string | null
  created_at: string
}

export interface FilterState {
  subordem: Suborder[]
  tipoAgua: WaterType[]
  barbatanasDorsais: boolean | null
  tamMaximo: [number, number]
  conservacao: ConservationStatus[]
}
