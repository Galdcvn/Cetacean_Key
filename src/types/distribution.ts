export interface DistributionZone {
  type: 'confirmed' | 'possible'
  label?: string
}

export interface DistributionMeta {
  id_animal: number
  nome_comum: string
  nome_cientifico: string
  file: string
  bbox: [number, number, number, number]
}
