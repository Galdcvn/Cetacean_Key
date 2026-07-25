import type { AnimalComCaracteristicas } from '../types/cetacean'
import { AnimalCard } from './AnimalCard'
import styles from './AnimalCards.module.css'

interface AnimalCardsProps {
  animais: AnimalComCaracteristicas[]
  loading: boolean
}

export function AnimalCards({ animais, loading }: AnimalCardsProps) {
  return (
    <section className={styles.section}>
      <h1 className={styles.heading}>
        ANIMAIS ENCONTRADOS: <span className={styles.count}>{animais.length}</span>
      </h1>

      {loading ? (
        <div className={styles.loading}>Carregando...</div>
      ) : animais.length === 0 ? (
        <div className={styles.empty}>Nenhum animal encontrado com esses filtros.</div>
      ) : (
        <div className={styles.list}>
          {animais.map((animal) => (
            <AnimalCard key={animal.id_animal} animal={animal} />
          ))}
        </div>
      )}
    </section>
  )
}
