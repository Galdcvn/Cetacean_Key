import type { AnimalComCaracteristicas } from '../types/cetacean'

function normalize(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .trim()
}

interface ScoredAnimal {
  animal: AnimalComCaracteristicas
  score: number
}

export function smartSearchAnimals(
  animals: AnimalComCaracteristicas[],
  query: string
): AnimalComCaracteristicas[] {
  if (!query.trim()) return animals

  const terms = normalize(query).split(/\s+/).filter(Boolean)

  const scored: ScoredAnimal[] = animals.map((a) => {
    const fields = [
      { text: normalize(a.nome_comum), weight: 4 },
      { text: normalize(a.nome_cientifico), weight: 3 },
      { text: normalize(a.genero), weight: 2 },
    ]

    let score = 0
    for (const term of terms) {
      for (const field of fields) {
        if (field.text === term) {
          score += field.weight * 10
        } else if (field.text.includes(term)) {
          score += field.weight * 5
        } else if (field.text.split(/\s+/).some((word) => word.startsWith(term))) {
          score += field.weight * 3
        }
      }
    }

    return { animal: a, score }
  })

  return scored
    .filter((s) => s.score > 0)
    .sort((a, b) => b.score - a.score)
    .map((s) => s.animal)
}
