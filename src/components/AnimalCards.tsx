import { AnimalComCaracteristicas } from '../types/cetacean'
import { AnimalCard } from './AnimalCard'
import styles from './AnimalCards.module.css'

interface AnimalCardsProps {
  animals: AnimalComCaracteristicas[]
  loading: boolean
  error: string | null
  totalCount: number
  filteredCount: number
  selectedOptions: number[]
  onSelectAnimal: (animal: AnimalComCaracteristicas) => void
}

function LoadingSkeleton() {
  return (
    <div className={styles.grid}>
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className={styles.skeletonCard}>
          <div className={styles.skeletonImage} />
          <div className={styles.skeletonContent}>
            <div className={styles.skeletonLine} style={{ width: '70%', height: 18 }} />
            <div className={styles.skeletonLine} style={{ width: '55%', height: 14 }} />
            <div className={styles.skeletonLine} style={{ width: '40%', height: 12 }} />
          </div>
        </div>
      ))}
    </div>
  )
}

export function AnimalCards({
  animals,
  loading,
  error,
  totalCount,
  filteredCount,
  selectedOptions,
  onSelectAnimal,
}: AnimalCardsProps) {
  if (loading) return <LoadingSkeleton />

  if (error) {
    return (
      <div className={styles.emptyState}>
        <div className={styles.emptyIcon}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 8v4M12 16h.01" />
          </svg>
        </div>
        <p className={styles.emptyTitle}>Erro ao carregar</p>
        <p className={styles.emptyDesc}>{error}</p>
      </div>
    )
  }

  if (animals.length === 0) {
    return (
      <div className={styles.emptyState}>
        <div className={styles.emptyIcon}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8" />
            <path d="M21 21l-4.35-4.35" />
            <path d="M8 11h6" />
          </svg>
        </div>
        <p className={styles.emptyTitle}>Nenhum animal encontrado</p>
        <p className={styles.emptyDesc}>Tente ajustar os filtros ou a busca.</p>
      </div>
    )
  }

  const hasFilters = selectedOptions.length > 0

  return (
    <>
      <div className={styles.resultsBar}>
        <span className={styles.resultsCount}>
          {hasFilters
            ? `${filteredCount} de ${totalCount} espécies`
            : `${totalCount} espécies`}
        </span>
      </div>
      <div className={styles.grid}>
        {animals.map((animal, index) => (
          <AnimalCard
            key={animal.id_animal}
            animal={animal}
            selectedOptions={selectedOptions}
            onSelect={() => onSelectAnimal(animal)}
            style={{ animationDelay: `${Math.min(index * 40, 400)}ms` }}
          />
        ))}
      </div>
    </>
  )
}
